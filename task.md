# Practical Test for Kobkob LLC Hiring

Create a WordPress plugin that implements a submission form with the fields below:

- Name
- Email
- Username
- Password
- Phone
- Birthday date
- Address (separated fields for street, city, country)
- Interests (checkbox with fields: music, movies, sports, books, science, arts)
- Small CV (text area with 20 lines)

The submission form must be available as a shortcode to be applied on any page or post. When submitted, the data must be saved in the database, and the sender must receive an email confirmation with a link to their profile. The user profile must have editing capabilities if logged in. The plugin must have limited daily submissions, as defined in the settings admin page. The submission form must have a web service implementation to receive data in JSON format via an external script. Write a Python command line script that submits the data to that form from a CSV file.

The codes and design must follow the WordPress best practices as in the [WordPress Developers' Documentation](https://developer.wordpress.org/). The codes must be in a git repository.

You have 2 weeks to complete the task. Good luck!
