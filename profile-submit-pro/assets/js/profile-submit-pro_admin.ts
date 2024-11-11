import Alpine from 'alpinejs';
import { submissionsPageHandler } from './admin/submissions-page';
import { settingsPageHandler } from './admin/settings-page';

if (module.hot) {
  module.hot.accept();
}

Alpine.data('submissionsPageHandler', submissionsPageHandler);
Alpine.data('settingsPageHandler', settingsPageHandler);
Alpine.start();
