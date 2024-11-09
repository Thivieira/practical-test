import Alpine from 'alpinejs';
import Swal from 'sweetalert2';

if (module.hot) {
  module.hot.accept();
}

Alpine.data('formHandler', formHandler);

// Helper function to check if an error object is empty
const isErrorObjectEmpty = (error: any): boolean => {
  return (
    typeof error === 'object' && Object.values(error).every((e) => e === '')
  );
};

function formHandler() {
  return {
    formData: {
      daily_submission_limit: 50,
      email_template: 'default',
      notification_email: true,
      notification_email_from: '',
      clean_uninstall: false,
    },
    errors: {},
    translations: window.formTranslations,
    dateFormat: window.formTranslations.placeholders.dateFormat,
    config: window.formConfig,
    loading: false,

    async init() {
      const response = await fetch(this.config.ajax_url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          action: 'get_plugin_settings',
          security: this.config.security,
        }),
      });

      const data = await response.json();
      this.formData = data.data;
    },

    async validateForm() {
      // Run all validations first

      const valid = Object.values(this.errors).every(
        (error) => error === '' || isErrorObjectEmpty(error),
      );

      if (!valid) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: this.translations.errors.formError,
        });
        return false;
      }

      this.loading = true;

      try {
        const data = {
          action: this.config.action,
          security: this.config.security,
          post_data: JSON.stringify(this.formData),
        };
        const response = await fetch(this.config.ajax_url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: new URLSearchParams(data),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const responseData = await response.json();
        console.log(responseData);

        Swal.fire({
          icon: 'success',
          title: 'Success!',
          text: this.translations.errors.formSuccess,
        });
      } catch (error) {
        console.error('There was a problem with your fetch operation:', error);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'There was a problem in the server. Please try again later.',
        });
        return false;
      }

      this.loading = false;

      return true;
    },
  };
}

Alpine.start();
