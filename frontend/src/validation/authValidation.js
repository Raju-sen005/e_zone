import * as yup from 'yup';
import { emailAndPasswordValidation } from './commonValidation';

export const signupValidation = yup.object().shape({
    firstName: yup.string().required('First name is required'),
    lastName: yup.string().required('Last name is required'),
    ...emailAndPasswordValidation,
});

export const loginValidation = yup.object().shape({
    ...emailAndPasswordValidation,
});
