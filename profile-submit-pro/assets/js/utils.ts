import intlTelInput from 'intl-tel-input';
import dayjs from './dayjs';
import { Country } from './types';

// Helper function to check if an error object is empty
export const isErrorObjectEmpty = (error: any): boolean => {
  return (
    typeof error === 'object' && Object.values(error).every((e) => e === '')
  );
};

export const formatDate = (
  date: string,
  format: string = 'DD/MM/YYYY',
): string => {
  if (!date) return '';
  return dayjs(date).format(format);
};

export const getCountries = async (): Promise<Country[]> => {
  const response = await fetch('/wp-content/plugins/profile-submit-pro/assets/countries.json');
  const data = await response.json();
  return data;
};

export const getIpAddressCountryCode = async (): Promise<string> => {
  const response = await fetch('https://ipapi.co/json');
  const data = await response.json();
  return data.country_code;
};


export const loadIntlTelInput = async (
  successCallback: (country_code: string) => void,
  failureCallback: () => void,
) => {
  const input = document.querySelector('#phone');
  if (input) {
    intlTelInput(input as HTMLInputElement, {
      initialCountry: 'auto',
      containerClass: 'iti w-full',
      geoIpLookup: async (callback) => {

        try {
          const country_code = await getIpAddressCountryCode();
          callback(country_code);
          successCallback(country_code);
        } catch {
          callback('us');
          failureCallback();
        }
      },
      loadUtilsOnInit: () => import('intl-tel-input/build/js/utils.js'),
    });
  }
},