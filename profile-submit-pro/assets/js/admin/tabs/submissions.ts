import Swal from 'sweetalert2';
import { SubmissionsSettings, WordpressJsonResponse } from '../../types';
import { isErrorObjectEmpty } from '../../utils';

export function submissionsTabHandler() {
  return {
    formData: {
      daily_submission_limit: 50,
      email_template: 'default',
      notification_email: true,
      notification_email_from: '',
      notification_email_subject: 'Form submission',
      date_format: 'MM/DD/YYYY',
    },
    dateFormatOptions: ['DD/MM/YYYY', 'MM/DD/YYYY'],
    config: window.submissionsConfig,
    translations: window.submissionsTranslations,
    errors: {
      formError: '',
      formSuccess: '',
    },
    loading: false,
    async init() {
      this.formData = window.defaultOptions;
      await this.getSubmissionsSettings();
    },
    async getSubmissionsSettings() {
      const submissionsSettingsResponse = await fetch(this.config.ajax_url, {
        method: 'POST',
        body: new URLSearchParams({
          action: this.config.get_action,
          security: this.config.security,
        }),
      });
      const submissionsSettingsJson: WordpressJsonResponse<SubmissionsSettings> =
        await submissionsSettingsResponse.json();
      const submissionsSettingsData = submissionsSettingsJson.data;

      const preparedFormData = {
        daily_submission_limit: submissionsSettingsData.daily_submission_limit,
        email_template: submissionsSettingsData.email_template,
        notification_email: submissionsSettingsData.notification_email,
        notification_email_from:
          submissionsSettingsData.notification_email_from,
        notification_email_subject:
          submissionsSettingsData.notification_email_subject,
        date_format: submissionsSettingsData.date_format,
      };

      this.formData = preparedFormData;
      this.originalSubmissionsSettings = JSON.parse(
        JSON.stringify(preparedFormData),
      );
    },
    validateIfFormIsChanged() {
      return (
        JSON.stringify(this.formData) !==
        JSON.stringify(this.originalSubmissionsSettings)
      );
    },
    async saveSubmissionsSettings() {
      if (!this.validateIfFormIsChanged()) {
        return true;
      }
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
          action: this.config.save_action,
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

        Swal.fire({
          icon: 'success',
          title: 'Success!',
          text: this.translations.errors.formSuccess,
          allowOutsideClick: false,
          allowEscapeKey: false,
          didClose: async () => {
            await this.getSubmissionsSettings();
          },
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
