import * as yup from 'yup';

export const parentValidationSchema = yup.object().shape({
  first_name: yup.string().required(),
  last_name: yup.string().required(),
  phone_number: yup.string().nullable(),
  address: yup.string().nullable(),
  birth_date: yup.date().nullable(),
  user_id: yup.string().nullable().required(),
});
