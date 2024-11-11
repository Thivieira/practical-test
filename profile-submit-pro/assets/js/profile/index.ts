import Swal from 'sweetalert2';
import { formatDate, getCountries, isErrorObjectEmpty, loadIntlTelInput } from '../utils';
import { Profile, WordpressJsonResponse } from '../types';

export function profileFormHandler() {
  return {
    originalProfile: null,
    formData: {
      name: '',
      email: '',
      username: '',
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
    translations: window.profileFormTranslations,
    dateFormat: window.profileFormTranslations.placeholders.dateFormat,
    config: window.profileFormConfig,
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
      await this.fetchProfileData();
    },
    async fetchCountries() {
      this.countries = await getCountries();
    },
    async fetchProfileData() {
      const searchParams = new URLSearchParams(window.location.search);
      const profileResponse = await fetch(this.config.ajax_url, {
        method: 'POST',
        body: new URLSearchParams({
          action: 'get_profile',
          security: this.config.security,
          public_key: searchParams.get('key') || '',
        }),
      });
      const profileJson: WordpressJsonResponse<Profile> =
        await profileResponse.json();
      const profileData = profileJson.data;
      let interests = JSON.parse(profileData.interests);
      interests = interests.map((interest) => interest.toLowerCase());

      const preparedFormData = {
        name: profileData.name,
        email: profileData.email,
        username: profileData.username,
        phone: profileData.phone,
        birthdate: formatDate(profileData.birthdate),
        address: {
          street: profileData.street,
          street_number: profileData.street_number,
          city: profileData.city,
          state: profileData.state,
          postal_code: profileData.postal_code,
          country: profileData.country,
        },
        interests: interests,
        cv: profileData.cv,
      };

      this.formData = preparedFormData;
      this.config.id = profileData.id;
      // Create a deep copy of preparedFormData for originalProfile, to avoid reference issues
      this.originalProfile = JSON.parse(JSON.stringify(preparedFormData));
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
        id: this.config.id,
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
        id: this.config.id,
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
    validatebirthdate() {

    },
    validateIfFormIsChanged() {
      return (
        JSON.stringify(this.formData) !== JSON.stringify(this.originalProfile)
      );
    },

    async validateForm() {
      if (!this.validateIfFormIsChanged()) {
        return true;
      }
      this.validateName();
      this.validateEmail();
      this.validateUsername();
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
      this.formData.birthdate = formatDate(this.formData.birthdate, this.dateFormat, 'YYYY-MM-DD');

      this.loading = true;

      try {
        const data = {
          action: this.config.action,
          security: this.config.security,
          post_data: JSON.stringify(this.formData),
          id: this.config.id,
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
          throw new Error('There was a problem in the server. Please try again later.');
        }

        Swal.fire({
          icon: 'success',
          title: 'Success!',
          text: this.translations.errors.formSuccess,
          allowOutsideClick: false,
          allowEscapeKey: false,
          didClose: async () => {
            await this.fetchProfileData();
          },
        });
      } catch (error) {
        console.error('There was a problem with your fetch operation:', error);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error.message || 'There was a problem in the server. Please try again later.',
        });
        return false;
      }

      this.loading = false;

      return true;
    },
  };
}
