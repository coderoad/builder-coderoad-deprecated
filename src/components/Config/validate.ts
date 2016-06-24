import * as debounce from 'lodash.debounce';
import {tutorialConfigOptions} from 'core-coderoad';

interface ConfigForm {
  name?: string;
  language?: string;
  runner?: string;
  repo?: string;
}

const validate = values => {
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
  if (values.language &&
    !values.runner && !tutorialConfigOptions[values.language].runners.includes(values.runner)) {
    errors.runner = `${values.runner} runner does not match language ${values.language}`;
  }
  if (values.repo) {
    if (!values.repo.match(/^https?:\/\/[a-zA-Z\.\/]+$/)) {
      errors.repo = 'Invalid http(s)://github.com/user/repo';
    }
  }
  return errors;
};
export default validate;
