import Alpine from 'alpinejs';
import { profileFormHandler } from './profile';
import { formHandler } from './public-form';

if (module.hot) {
  module.hot.accept();
}

Alpine.data('profileFormHandler', profileFormHandler);
Alpine.data('formHandler', formHandler);

Alpine.start();
