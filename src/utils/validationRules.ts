import {FieldValues, RegisterOptions} from 'react-hook-form';

export const usernameValidationRules: RulesType = {
  minLength: {
    value: 1,
    message: 'Please enter a username',
  },
  required: 'Username is required',
};

export const emailValidationRules: RulesType = {
  pattern: {
    value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
    message: 'Please enter a valid email',
  },
  required: 'Please enter a valid email',
};
export const passwordValidationRules: RulesType = {
  required: 'Password should be 8 or more characters with 1 special character',
  minLength: {
    value: 8,
    message: 'Password must be more than 8 characters',
  },
};

export type RulesType = Omit<
  RegisterOptions<FieldValues, string>,
  'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'
>;
