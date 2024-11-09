import Swal from 'sweetalert2';
import intlTelInput from 'intl-tel-input';
import { formatDate, isErrorObjectEmpty } from '../utils';
import { Profile } from '../types';
import { WordpressJsonResponse } from '../types';

export function profileFormHandler() {
  return {
    originalProfile: null,
    formData: {
      name: '',
      email: '',
      username: '',
      phone: '',
      birthDate: '',
      address: {
        street: '',
        unit: '',
        city: '',
        state: '',
        zipCode: '',
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
      const input = document.querySelector('#phone');
      if (input) {
        intlTelInput(input, {
          initialCountry: 'auto',
          containerClass: 'iti w-full',
          geoIpLookup: (callback) => {
            fetch('https://ipapi.co/json')
              .then((res) => res.json())
              .then((data) => {
                callback(data.country_code);
                this.formData.address.country = data.country;
              })
              .catch(() => {
                callback('us');
                this.formData.address.country = 'US';
              });
          },
          loadUtilsOnInit: () => import('intl-tel-input/build/js/utils.js'),
        });
      }
      fetch('/wp-content/plugins/profile-submit-pro/assets/countries.json', {
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((res) => res.json())
        .then((data) => {
          this.countries = data;
        })
        .catch((error) => {
          console.error('Error loading countries:', error);
          this.countries = [];
        });
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
        birthDate: formatDate(profileData.birthdate),
        address: {
          street: profileData.street,
          unit: profileData.street_number,
          city: profileData.city,
          state: profileData.state,
          zipCode: profileData.postal_code,
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
      this.errors.address.unit = this.formData.address.unit
        ? ''
        : this.translations.errors.address.unit;
      this.errors.address.city = this.formData.address.city
        ? ''
        : this.translations.errors.address.city;
      this.errors.address.state = this.formData.address.state
        ? ''
        : this.translations.errors.address.state;
      this.errors.address.zipCode = this.formData.address.zipCode
        ? ''
        : this.translations.errors.address.zipCode;
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
    formatAndValidateBirthdate() {
      this.formData.birthDate = formatDate(
        this.formData.birthDate,
        this.dateFormat,
      );
      this.validateBirthdate();
    },
    validateBirthdate() {
      if (!this.formData.birthDate) {
        this.errors.birthDate = this.translations.errors.birthDate;
        return;
      }
      const parsedDate = new Date(this.formData.birthDate);
      if (isNaN(parsedDate.getTime())) {
        this.errors.birthDate = this.translations.errors.birthDate;
      } else {
        this.errors.birthDate = '';
      }
    },
    validateIfFormIsChanged() {
      console.log(
        'FormIsChanged: ',
        JSON.stringify(this.formData) !== JSON.stringify(this.originalProfile),
      );
      console.log({
        unit: this.formData.address.unit,
        originalUnit: this.originalProfile.address.unit,
      });
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
      this.validateBirthdate();
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
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const responseData = await response.json();

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
