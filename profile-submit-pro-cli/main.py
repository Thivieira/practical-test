import pandas as pd
import requests
import click
from tqdm import tqdm


def send_data_to_api(data, api_endpoint, verbose=False):
    try:
        response = requests.post(f"{api_endpoint}/wp-json/profile-submit-pro/v1/submit", json=data)
        response.raise_for_status()
        if verbose:
            click.echo(f"Response: {response.json()}")
        return response.json()
    except requests.exceptions.RequestException as e:
        return {"error": str(e)}


def has_already_sent_data(email, api_endpoint, id=None):
    try:
        payload = {"email": email}
        if id:
            payload["id"] = id
        response = requests.post(f"{api_endpoint}/wp-json/profile-submit-pro/v1/verify_email_exists", json=payload)
        exists = response.json().get("data", {}).get("exists", False)
        return exists
    except requests.exceptions.RequestException as e:
        click.echo(click.style(f"Error checking email: {e}", fg="red"))
        return False


@click.command()
@click.argument('csv_file', type=click.Path(exists=True))
@click.option('--api-endpoint', default="http://localhost:8000", help="URL of the API endpoint")
@click.option('--verbose', is_flag=True, help="Enables verbose output")
def main(csv_file, api_endpoint, verbose):
    df = pd.read_csv(csv_file, skipinitialspace=True, dtype={'phone': str, 'birthdate': str, 'postal_code': str, 'cv': str, 'interests': str, 'country': str})

    with tqdm(total=len(df), desc="Submitting data", unit="record") as pbar:
        for index, row in df.iterrows():
            id = row['id'] if 'id' in row else None
            
            if not has_already_sent_data(row['email'], api_endpoint, id):
                click.echo(click.style(f"Data for {row['email']} has already been sent, skipping.", fg="yellow"))
                pbar.update(1)
                continue
            
            if pd.isnull(row['name']) or pd.isnull(row['email']):
                click.echo(click.style(f"Missing required fields for row {index + 1}", fg="red"))
                pbar.update(1)
                continue
            
            payload = {
                "name": row['name'].strip(),
                "email": row['email'].strip(),
                "username": row['username'].strip(),
                "password": row['password'].strip(),
                "phone": row['phone'].strip(),
                "birthdate": row['birthdate'].strip(),
                "address": {
                    "street": row['street'].strip(),
                    "street_number": row['street_number'].strip(),
                    "city": row['city'].strip(),
                    "state": row['state'].strip(),
                    "postal_code": row['postal_code'].strip(),
                    "country": row['country'].strip()
                },
                "interests": [interest.strip() for interest in row['interests'].split(',')] if isinstance(row['interests'], str) else [],
                "cv": row['cv'].strip()
            }

            if not is_valid_payload(payload):
                click.echo(click.style(f"Invalid data for {row['username']}", fg="red"))
                pbar.update(1)
                continue

            response = send_data_to_api(payload, api_endpoint, verbose)

            if "error" in response:
                click.echo(click.style(f"Error for {row['username']}: {response['error']}", fg="red"))
            else:
                click.echo(click.style(f"Successfully submitted data for {row['username']}", fg="green"))

            pbar.update(1)

def is_valid_payload(payload):
    required_fields = ['name', 'email', 'username', 'password', 'phone', 'birthdate', 'address', 'interests', 'cv']
    for field in required_fields:
        if field not in payload or not payload[field]:
            return False
    return True

if __name__ == "__main__":
    main()
