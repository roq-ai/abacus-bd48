import * as yup from 'yup';

export const schoolValidationSchema = yup.object().shape({
  description: yup.string().nullable(),
  address: yup.string().nullable(),
  established_year: yup.number().integer().nullable(),
  school_type: yup.string().nullable(),
  name: yup.string().required(),
  user_id: yup.string().nullable().required(),
});
