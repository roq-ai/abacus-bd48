import * as yup from 'yup';

export const staffValidationSchema = yup.object().shape({
  first_name: yup.string().required(),
  last_name: yup.string().required(),
  role: yup.string().required(),
  start_date: yup.date().nullable(),
  end_date: yup.date().nullable(),
  user_id: yup.string().nullable().required(),
  school_id: yup.string().nullable().required(),
});
