import Alpine from 'alpinejs';
import mask from '@alpinejs/mask';
import { profileFormHandler } from './profile';
import { formHandler } from './public-form';

if (module.hot) {
  module.hot.accept();
}

Alpine.plugin(mask);
Alpine.data('profileFormHandler', profileFormHandler);
Alpine.data('formHandler', formHandler);

Alpine.start();
