export type WordpressJsonResponse<T> = {
  success: boolean;
  data: T;
};

export type Profile = {
  id: string;
  name: string;
  email: string;
  username: string;
  phone: string;
  birthdate: string;
  street: string;
  street_number: string;
  neighborhood: string | null;
  city: string;
  state: string;
  postal_code: string;
  country: string;
  interests: string;
  cv: string;
  wordpress_user_id: string;
  submitted_at: string;
  public_key: string;
};

export type Country = {
  name: string;
  code: string;
};


export type GeneralSettings = {
  clean_uninstall: boolean;
};

export type SubmissionsSettings = {
  daily_submission_limit: number;
  email_template: string;
  notification_email: boolean;
  notification_email_from: string;
  date_format: string;
};
