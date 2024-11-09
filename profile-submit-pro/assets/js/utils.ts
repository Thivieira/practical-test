import dayjs from './dayjs';

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
