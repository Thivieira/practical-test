import Alpine from 'alpinejs';
// import { formHandler } from './admin';
import { submissionsPageHandler } from './admin/submissions-page';

if (module.hot) {
  module.hot.accept();
}

// Alpine.data('formHandler', formHandler);
Alpine.data('submissionsPageHandler', submissionsPageHandler);
Alpine.start();
