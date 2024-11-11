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
10. [Contributing](#contributing)
11. [License](#license)

---

### 1. Introduction

This plugin was created for the Kobkob LLC practical test. It provides a submission form for users to submit their personal information, including name, email, and other profile details. The form can be embedded on any page or post using a shortcode, and the submitted data is stored in the database. Additionally, the plugin includes a settings page for defining daily submission limits and provides an external web service for accepting data in JSON format.

---

### 2. Features

- **Custom Submission Form:** Collects name, email, username, password, phone number, birthday, address, and interests.
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
   git clone https://github.com/yourusername/yourplugin.git
   ```

2. Navigate to the project folder:

   ```bash
   cd yourplugin
   ```

3. Build and start the Docker containers:

   ```bash
   docker-compose up -d
   ```

4. Access your WordPress instance at `http://localhost` and log in to the WordPress admin.

5. Upload and activate the plugin through the WordPress dashboard.

#### 3.2 Manual Installation (Without Docker)

Alternatively, you can manually install the plugin:

1. Download the plugin code and place it in the `wp-content/plugins/` directory.
2. Log in to your WordPress admin panel.
3. Navigate to **Plugins > Add New** and activate the plugin.

---

### 4. Usage

#### 4.1 Shortcode for the Form

You can embed the submission form on any page or post using the following shortcode:

```php
[submission_form]
```

This will render the form on the front end, allowing users to submit their details.

#### 4.2 Admin Settings

The plugin includes a settings page under **Settings > Submission Form Settings**. Here, you can:

- Set daily submission limits.
- Configure email confirmation templates.

---

### 5. API Integration

The plugin exposes an API endpoint that accepts JSON-formatted data from external sources. To submit data via the API, send a `POST` request to the following endpoint:

```bash
POST http://yourwordpresssite.com/wp-json/submission/v1/submit
```

Sample JSON payload:

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "username": "johndoe",
  "password": "password123",
  "phone": "123-456-7890",
  "birthday": "1990-01-01",
  "address": {
    "street": "123 Main St",
    "city": "New York",
    "country": "USA"
  },
  "interests": ["music", "books"],
  "cv": "Short CV here..."
}
```

---

### 6. Submission Limits

You can define a daily submission limit through the WordPress admin interface. Once the limit is reached, users will be unable to submit the form for that day.

---

### 7. Development Environment

This project includes a Docker setup to standardize the environment and reduce issues caused by different server configurations. To get started, run the following:

```bash
docker-compose up -d
```

The environment consists of:

- A WordPress instance running on Apache.
- MySQL database for data storage.

You can access the local WordPress site at `http://localhost:8000`.

---

### 8. CSV Submission Script

A Python script is included in the repository that allows you to submit data to the form from a CSV file. The script reads each line of the CSV and sends a POST request to the form's API endpoint.

To use the script:

1. Ensure you have Python 3 installed.
2. Install required dependencies:

   ```bash
   pip install requests
   ```

3. Run the script:
   ```bash
   python submit_csv.py path/to/yourfile.csv
   ```

Example CSV format:

```
name,email,username,password,phone,birthday,street,city,country,interests,cv
John Doe,john@example.com,johndoe,password123,123-456-7890,1990-01-01,123 Main St,New York,USA,"music,books","Short CV here..."
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
