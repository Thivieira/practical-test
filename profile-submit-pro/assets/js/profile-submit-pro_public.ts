import Alpine from 'alpinejs';
import Swal from 'sweetalert2'
import intlTelInput from 'intl-tel-input';

if (module.hot) {
	module.hot.accept();
}

Alpine.data('formHandler', formHandler);

// Helper function to check if an error object is empty
const isErrorObjectEmpty = (error: any): boolean => {
	return typeof error === 'object' &&
		Object.values(error).every(e => e === '');
};


function formHandler() {
	return {
		formData: {
			name: 'Thiago',
			email: 'thiago.a.vieira@hotmail.com',
			username: 'Thivieira',
			password: 's1n2d3r4',
			phone: '48991541005',
			birthDate: '06/06/1997',
			address: {
				street: 'St Chroma',
				unit: '12',
				city: 'Blumenau',
				state: 'SC',
				zipCode: '89010000',
				country: 'BR'
			},
			interests: ['Music', 'Sports', 'Science'],
			cv: 'ewter53w45t4345345534354',
		},
		errors: {},
		countries: window.countries || [],
		translations: window.formTranslations,
		dateFormat: window.formTranslations.placeholders.dateFormat,
		config: window.formConfig,
		loading: false,

		init() {
			const input = document.querySelector("#phone");
			if (input) {
				intlTelInput(input, {
					initialCountry: "auto",
					containerClass: "iti w-full",
					geoIpLookup: callback => {
						fetch("https://ipapi.co/json")
							.then(res => res.json())
							.then(data => {
								callback(data.country_code);
								this.formData.address.country = data.country;
							})
							.catch(() => {
								callback("us");
								this.formData.address.country = 'US';
							});
					},
					loadUtilsOnInit: () => import("intl-tel-input/build/js/utils.js"),
				});
			}
			fetch('/wp-content/plugins/profile-submit-pro/assets/countries.json', {
				headers: {
					'Content-Type': 'application/json',
				},
			})
				.then(res => res.json())
				.then(data => {
					this.countries = data;
				})
				.catch(error => {
					console.error('Error loading countries:', error);
					this.countries = [];
				});
		},
		validateName() {
			this.errors.name = this.formData.name.length < 3 ? this.translations.errors.name : '';
		},
		validateEmail() {
			const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
			this.errors.email = !emailRegex.test(this.formData.email) ? this.translations.errors.email : '';
		},
		validateUsername() {
			this.errors.username = this.formData.username.length < 3 ? this.translations.errors.username : '';
		},
		validatePassword() {
			// Password must have at least 8 characters, including letters and numbers
			const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
			this.errors.password = !passwordRegex.test(this.formData.password) ? this.translations.errors.password : '';
		},
		validatePhone() {
			// Clean the phone number by removing spaces and dashes
			const cleanPhone = this.formData.phone.replace(/[\s-]/g, '');

			// Regex for Brazilian phone numbers:
			// - 2 digits for area code (11-99)
			// - 8-9 digits for phone number
			const phoneRegex = /^([1-9]{2})(9?\d{8})$/;

			this.errors.phone = !phoneRegex.test(cleanPhone) ? this.translations.errors.phone : '';
		},

		validateAddress() {
			this.errors.address = {};
			this.errors.address.street = this.formData.address.street ? '' : this.translations.errors.address.street;
			this.errors.address.unit = this.formData.address.unit ? '' : this.translations.errors.address.unit;
			this.errors.address.city = this.formData.address.city ? '' : this.translations.errors.address.city;
			this.errors.address.state = this.formData.address.state ? '' : this.translations.errors.address.state;
			this.errors.address.zipCode = this.formData.address.zipCode ? '' : this.translations.errors.address.zipCode;
			this.errors.address.country = this.formData.address.country ? '' : this.translations.errors.address.country;
		},
		validateInterests() {
			this.errors.interests = this.formData.interests.length < 3
				? this.translations.errors.interests
				: '';
		},
		validateCv() {
			this.errors.cv = this.formData.cv.length < 20 ? this.translations.errors.cv : '';
		},
		formatAndValidateBirthdate() {
			this.formData.birthDate = this.formData.birthDate.replace(/(\d{2})(\d{2})(\d{4})/, '$1/$2/$3');
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

		async validateForm() {
			// Run all validations first
			this.validateName();
			this.validateEmail();
			this.validateUsername();
			this.validatePassword();
			this.validatePhone();
			this.validateBirthdate();
			this.validateAddress();
			this.validateInterests();
			this.validateCv();

			const valid = Object.values(this.errors).every(error =>
				error === '' || isErrorObjectEmpty(error)
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
					post_data: JSON.stringify(this.formData)
				};
				const response = await fetch(this.config.ajax_url, {
					method: 'POST',
					headers: {
						"Content-Type": "application/x-www-form-urlencoded",
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

		}
	};
}

Alpine.start();