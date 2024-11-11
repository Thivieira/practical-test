import Swal from 'sweetalert2';
import { GeneralSettings, Profile } from '../../types';
import { WordpressJsonResponse } from '../../types';

export function generalSettingsTabHandler() {
  return {
    formData: {
      clean_uninstall: false,
    },
    originalGeneralSettings: null,
    config: window.generalSettingsConfig,
    translations: window.generalSettingsTranslations,
    errors: {
      formError: '',
      formSuccess: '',
    },
    loading: false,
    async init() {
      this.formData = window.defaultOptions;
      await this.getGeneralSettings();
    },
    async getGeneralSettings() {
      const generalSettingsResponse = await fetch(this.config.ajax_url, {
        method: 'POST',
        body: new URLSearchParams({
          action: this.config.get_action,
          security: this.config.security,
        }),
      });
      const generalSettingsJson: WordpressJsonResponse<GeneralSettings> =
        await generalSettingsResponse.json();
      const generalSettingsData = generalSettingsJson.data;

      const preparedFormData = {
        clean_uninstall: generalSettingsData.clean_uninstall,
      };

      this.formData = preparedFormData;

      this.originalGeneralSettings = JSON.parse(
        JSON.stringify(preparedFormData)
      );
    },
    async saveGeneralSettings() {
      console.log(this.formData);
    },
  };
}
