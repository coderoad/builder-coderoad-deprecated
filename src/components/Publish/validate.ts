import * as debounce from 'lodash.debounce';

const validate = debounce(values => {
  const errors: { description?: string, version?: string} = {};
  const requiredFields = ['description', 'version', 'author'];
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Required';
    }
  });
  // if (!values.description || values.description.length) {
  //   errors.description = 'Incomplete tutorial description';
  // }
  if (!values.version || !values.version.match(/^(\d+\.)?(\d+\.)?(\*|\d+)$/)) {
    errors.version = 'Invalid version number';
  }
  return errors;
}, 200);
export default validate;
