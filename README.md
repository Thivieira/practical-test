## WordPress Plugin - Submission Form for Kobkob LLC

This WordPress plugin implements a user submission form with multiple fields, such as Name, Email, Username, and more. The form data is stored in the database, and users receive email confirmation with profile links upon submission. The plugin includes features like user profile editing, submission limits, and a web service endpoint for receiving data via JSON.

### Table of Contents

1. [Introduction](#introduction)
2. [Features](#features)
3. [Installation](#installation)
4. [Usage](#usage)
5. [API Integration](#api-integration)
6. [Submission Limits](#submission-limits)
7. [Development Environment](#development-environment)
8. [CSV Submission Script](#csv-submission-script)
9. [WordPress Best Practices](#wordpress-best-practices)

---

### 1. Introduction

This plugin was created for the Kobkob LLC practical test. It provides a submission form for users to submit their personal information, including name, email, and other profile details. The form can be embedded on any page or post using a shortcode, and the submitted data is stored in the database. Additionally, the plugin includes a settings page for defining daily submission limits and provides an external web service for accepting data in JSON format. Furthermore, the plugin offers a Python command-line interface (CLI) tool to facilitate bulk data submission from CSV files.

---

### 2. Features

- **Custom Submission Form:** Collects name, email, username, password, phone number, birthdate, address, cv, and interests.
- **User Profiles:** Allows users to edit their submitted profiles when logged in.
- **Email Confirmation:** Users receive an email with a profile link upon successful submission.
- **Submission Limits:** Define daily submission limits via the WordPress admin settings page.
- **Web Service:** Provides a REST API to receive submissions in JSON format from external sources.
- **CSV Submission Script:** A Python script is available to submit data to the form from a CSV file.

---

### 3. Installation

To install and use the plugin in your WordPress environment, follow these steps:

#### 3.1 Using Docker (Recommended)

A Docker environment has been set up to simplify installation and ensure there are no environment-related issues. This allows you to focus entirely on the plugin code. Follow these steps:

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/Thivieira/practical-test
   ```

2. Navigate to the project folder:

   ```bash
   cd practical-test
   ```

3. Create the `.env` file for the project by referencing the constants defined in the `.env.example` file.

4. Build and start the Docker containers:

   ```bash
   docker-compose up -d
   ```

5. Access your WordPress instance at `http://localhost:8000` and log in to the WordPress admin.

6. Activate the plugin through the WordPress dashboard.

#### 3.2 Manual Installation (Without Docker)

Alternatively, you can manually install the plugin:

1. Download the plugin code, located in the `profile-submit-pro` folder, compress it into a zip file, and place it in the `wp-content/plugins/` directory.
2. Log in to your WordPress admin panel.
3. Navigate to **Plugins > Add New** and activate the plugin.

---

### 4. Usage

#### 4.1 Shortcode for the Form

You can embed the submission form on any page or post using the following shortcode:

```php
[profile_submit_pro]
```

This will render the form on the front end, allowing users to submit their details.

#### 4.2 Shortcode for the profile form (optional)

You can embed the profile form on any page or post using the following shortcode:

```php
[profile_submit_pro page="profile"]
```

This will render the profile form on the front end, allowing users to edit their details.

If this shortcode is not manually placed by the WordPress admin user, the plugin will automatically create it on a page titled `profile`.

#### 4.3 Admin Settings

The plugin features a dedicated settings page accessible via **Settings > Profile Submit Pro > Settings**. Within this section, users have the ability to:

- Establish daily submission limits.
- Configure the email address used for confirmation notifications.
- Specify the subject line for email confirmation messages.
- Define the date format utilized throughout the plugin.

#### 4.4 Submissions Table

The plugin features a paginated interface for viewing current submissions, accessible under **Settings > Profile Submit Pro > Submissions**. Within this section, users can:

- Review submitted entries.
- Remove submissions as necessary.

---

### 5. API Integration

#### 5.1 Endpoint to Submit

The plugin provides a dedicated API endpoint designed to accept JSON-formatted data from external sources. To submit data via this API, you must send a `POST` request to the specified endpoint. This functionality enables seamless integration with external applications and services.

```bash
POST http://yourwordpresssite.com/wp-json/profile-submit-pro/v1/submit
```

Sample JSON payload:

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "username": "johndoe",
  "password": "password123",
  "phone": "123-456-7890",
  "birthdate": "1990-01-01",
  "address": {
    "street": "Main St",
    "street_number": "123",
    "city": "New York",
    "state": "NY",
    "postal_code": "90210",
    "country": "USA"
  },
  "interests": ["music", "books"],
  "cv": "Short CV here..."
}
```

#### 5.1 Endpoint for Email Existence Verification

The "5.1 Endpoint for Email Existence Verification" section details an API endpoint that allows users to check if an email address is already registered, ensuring unique user registrations and preventing duplicates.

```bash
POST http://yourwordpresssite.com/wp-json/profile-submit-pro/v1/verify_email_exists
```

Sample JSON payload:

```json
{
  "email": "john@example.com"
}
```

#### 5.2 Endpoint to Verify Username Existence

This endpoint allows users to check if a specified username is already registered in the system. By sending a `POST` request with the username, the API ensures unique registrations and prevents duplicates. This functionality enhances user experience by providing immediate feedback during the registration process.

```bash
POST http://yourwordpresssite.com/wp-json/profile-submit-pro/v1/verify_username_exists
```

Sample JSON payload:

```json
{
  "username": "johndoe"
}
```

---

### 6. Submission Limits

You can define a daily submission limit through the WordPress admin interface. Once the limit is reached, users will be unable to submit the form for that day.

---

### 7. CSV Submission Script

A Python script is included in the repository that allows you to submit data to the form from a CSV file. The script reads each line of the CSV and sends a POST request to the form's API endpoint.

To use the script:

1. Ensure you have Python 3 installed.
2. Install required dependencies:

   ```bash
   pip install -r requirements.txt
   ```

   2.1 Recommended Usage of Virtual Environments (Optional)

   It is recommended to use virtual environments to manage dependencies and avoid conflicts with other projects. Here’s how to set up a virtual environment:

   ```bash
   # For Windows
   python -m venv myenv

   # For macOS/Linux
   python3 -m venv myenv
   ```

3. Run the script:
   ```bash
   python main.py path/to/yourfile.csv
   ```

Example CSV format:

```
name,email,username,password,phone,birthdate,street,street_number,city,state,postal_code,country,interests,cv
John Doe,john@example.com,johndoe,password123,123-456-7890,1990-01-01,Main St,123,New York,90210,USA,"music,books,arts","Short CV here..."
```

---

### 9. WordPress Best Practices

This plugin adheres to WordPress best practices by:

- Using WordPress hooks and filters appropriately.
- Enqueueing scripts and styles properly to avoid conflicts.
- Following the WordPress Coding Standards (PHP, JS, CSS).
- Implementing nonces for form security.
- Using prepared statements for database queries to prevent SQL injection.

For more details, refer to the [WordPress Developers' Documentation](https://developer.wordpress.org/).
