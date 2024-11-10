# CSV to API Submission Tool

This CLI tool allows you to submit form data from a CSV file to a specified API endpoint. It reads user data from a CSV file and sends it to the API in a structured format.

## Features

- Reads user data from a CSV file.
- Sends data to a specified API endpoint.
- Provides verbose output for debugging.
- Displays a progress bar during data submission.

## Requirements

- Python 3.x
- `pandas`
- `requests`
- `click`
- `tqdm`

You can install the required packages using pip:

```bash
pip install pandas requests click tqdm
```

## Usage

To use the tool, run the following command in your terminal:

```bash
python main.py <csv_file> [options]
```

### Arguments

- `csv_file`: The path to the CSV file containing user data. The CSV should have the following columns:
  - `name`
  - `email`
  - `username`
  - `password`
  - `phone`
  - `birthDate`
  - `street`
  - `unit`
  - `city`
  - `state`
  - `zipCode`
  - `country`
  - `interests` (comma-separated)
  - `cv`

### Options

- `--api-endpoint`: (default: `http://localhost:8000/wp-json/profile-submit-pro/v1/submit`) The API endpoint for submitting data.
- `--verbose`: Enables verbose output, showing the response from the API for each submission.

## Example

```bash
python main.py data.csv --api-endpoint http://example.com/api/submit --verbose
```

## Notes

- Ensure that the API endpoint is correctly set and accessible.
- The tool will log errors in red and successful submissions in green.
- The progress of submissions will be displayed in the terminal.

## License

This project is licensed under the MIT License.
