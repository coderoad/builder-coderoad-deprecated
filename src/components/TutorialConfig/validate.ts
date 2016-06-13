import * as debounce from 'lodash.debounce';

interface ConfigForm {
  name?: string;
  language?: string;
  runner?: string;
}


const validate = debounce(values => {
  const errors: ConfigForm = {};
  const requiredFields = ['name', 'language', 'runner'];
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Required';
    }
  });
  if (values.name && !values.name.match(/^coderoad-[A-Za-z0-9\-]+$/)) {
    errors.name = 'Invalid "coderoad-*" name';
  }
  return errors;
}, 200);
export default validate;
