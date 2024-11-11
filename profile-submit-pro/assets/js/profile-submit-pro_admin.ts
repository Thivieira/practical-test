import Alpine from 'alpinejs';
import mask from '@alpinejs/mask'
import { submissionsPageHandler } from './admin/submissions-page';
import { settingsPageHandler } from './admin/settings-page';

if (module.hot) {
  module.hot.accept();
}

Alpine.plugin(mask);
Alpine.data('submissionsPageHandler', submissionsPageHandler);
Alpine.data('settingsPageHandler', settingsPageHandler);
Alpine.start();
