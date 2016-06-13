import * as React from 'react';
import TextField from 'material-ui/TextField';

const textField = ({
  hintText, floatingLabelText, disabled
}, field) => (
  <TextField
    className='native-key-bindings'
    hintText={hintText}
    floatingLabelText={floatingLabelText}
    disabled={disabled}
    errorText={
      field.touched && field.error
    }
    {...field}
  />
);
export default textField;
