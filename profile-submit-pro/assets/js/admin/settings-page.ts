import { generalSettingsTabHandler } from './tabs/general-settings';
import { submissionsTabHandler } from './tabs/submissions';

export function settingsPageHandler() {
  return {
    generalSettingsTabHandler,
    submissionsTabHandler,
  };
}