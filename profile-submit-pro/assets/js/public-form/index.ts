import Swal from 'sweetalert2';
import {
  formatDate,
  getCountries,
  isErrorObjectEmpty,
  loadIntlTelInput,
} from '../utils';

export function formHandler() {
  return {
    formData: {
      name: '',
      email: '',
      username: '',
      password: '',
      phone: '',
      birthdate: '',
      address: {
        street: '',
        street_number: '',
        city: '',
        state: '',
        postal_code: '',
        country: '',
      },
      interests: [],
      cv: '',
    },
    errors: {},
    countries: window.countries || [],
    translations: window.formTranslations,
    dateFormat: window.formTranslations.placeholders.dateFormat,
    config: window.formConfig,
    loading: false,

    async init() {
      await loadIntlTelInput(
        (country_code) => {
          this.formData.address.country = country_code;
        },
        () => {
          this.formData.address.country = 'US';
        },
      );
      await this.fetchCountries();
    },
    async fetchCountries() {
      this.countries = await getCountries();
    },
    validateName() {
      this.errors.name =
        this.formData.name.length < 3 ? this.translations.errors.name : '';
    },
    validateEmail() {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      this.errors.email = !emailRegex.test(this.formData.email)
        ? this.translations.errors.email
        : '';
    },
    async validateEmailExists() {
      const data = {
        action: 'verify_email_exists',
        security: this.config.security,
        email: this.formData.email,
      };
      try {
        const response = await fetch(this.config.ajax_url, {
          method: 'POST',
          body: new URLSearchParams(data),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const responseData = await response.json();

        if (responseData.data.exists) {
          this.errors.email = this.translations.errors.emailExists;
          return false;
        }

        return true;
      } catch (error) {
        console.error('Error verifying email exists:', error);
        this.errors.email = 'Error verifying email exists';
        return false;
      }
    },
    validateUsername() {
      this.errors.username =
        this.formData.username.length < 3
          ? this.translations.errors.username
          : '';
    },
    async validateUsernameExists() {
      const data = {
        action: 'verify_username_exists',
        security: this.config.security,
        username: this.formData.username,
      };
      try {
        const response = await fetch(this.config.ajax_url, {
          method: 'POST',
          body: new URLSearchParams(data),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const responseData = await response.json();

        if (responseData.data.exists) {
          this.errors.username = this.translations.errors.usernameExists;
          return false;
        }

        return true;
      } catch (error) {
        console.error('Error verifying username exists:', error);
        this.errors.username = 'Error verifying username exists';
      }
    },
    validatePassword() {
      // Password must have at least 8 characters, including letters and numbers
      const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
      this.errors.password = !passwordRegex.test(this.formData.password)
        ? this.translations.errors.password
        : '';
    },
    validatePhone() {
      // Clean the phone number by removing spaces and dashes
      const cleanPhone = this.formData.phone.replace(/[\s-]/g, '');

      // Regex for Brazilian phone numbers:
      // - 2 digits for area code (11-99)
      // - 8-9 digits for phone number
      const phoneRegex = /^([1-9]{2})(9?\d{8})$/;

      this.errors.phone = !phoneRegex.test(cleanPhone)
        ? this.translations.errors.phone
        : '';
    },

    validateAddress() {
      this.errors.address = {};
      this.errors.address.street = this.formData.address.street
        ? ''
        : this.translations.errors.address.street;
      this.errors.address.street_number = this.formData.address.street_number
        ? ''
        : this.translations.errors.address.street_number;
      this.errors.address.city = this.formData.address.city
        ? ''
        : this.translations.errors.address.city;
      this.errors.address.state = this.formData.address.state
        ? ''
        : this.translations.errors.address.state;
      this.errors.address.postal_code = this.formData.address.postal_code
        ? ''
        : this.translations.errors.address.postal_code;
      this.errors.address.country = this.formData.address.country
        ? ''
        : this.translations.errors.address.country;
    },
    validateInterests() {
      this.errors.interests =
        this.formData.interests.length < 3
          ? this.translations.errors.interests
          : '';
    },
    validateCv() {
      this.errors.cv =
        this.formData.cv.length < 20 ? this.translations.errors.cv : '';
    },
    formatAndValidatebirthdate() {
      this.formData.birthdate = this.formData.birthdate.replace(
        /(\d{2})(\d{2})(\d{4})/,
        '$1/$2/$3',
      );
      this.validatebirthdate();
    },
    validatebirthdate() {
      if (!this.formData.birthdate) {
        this.errors.birthdate = this.translations.errors.birthdate;
        return;
      }
      const parsedDate = new Date(this.formData.birthdate);
      if (isNaN(parsedDate.getTime())) {
        this.errors.birthdate = this.translations.errors.birthdate;
      } else {
        this.errors.birthdate = '';
      }
    },

    async validateForm() {
      // Run all validations first
      this.validateName();
      this.validateEmail();
      this.validateUsername();
      this.validatePassword();
      this.validatePhone();
      this.validatebirthdate();
      this.validateAddress();
      this.validateInterests();
      this.validateCv();
      await this.validateEmailExists();
      await this.validateUsernameExists();
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

      // format date
      this.formData.birthdate = formatDate(
        this.formData.birthdate,
        this.dateFormat,
        'YYYY-MM-DD',
      );

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
          const error = await response.json();
          if (error?.data?.message) {
            throw new Error(error.data.message);
          }
          throw new Error(
            'There was a problem in the server. Please try again later.',
          );
        }

        this.formData = {};

        Swal.fire({
          icon: 'success',
          title: 'Success!',
          text: this.translations.errors.formSuccess,
          allowOutsideClick: false,
          allowEscapeKey: false,
          didClose: () => {
            window.location.href = this.config.redirect_url;
          },
        });
      } catch (error) {
        console.error('There was a problem with your fetch operation:', error);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text:
            error.message ||
            'There was a problem in the server. Please try again later.',
        });
        return false;
      }

      this.loading = false;

      return true;
    },
  };
}
