import * as React from 'react';
import TextField from 'material-ui/TextField';

const textField = ({
  hintText, floatingLabelText, disabled, id, type
}, props) => (
  <TextField
    id={id}
    type={type || 'text'}
    className='native-key-bindings'
    hintText={hintText}
    floatingLabelText={floatingLabelText}
    disabled={disabled || false}
    errorText={props.touched && props.error}
    {...props}
  />
);
export default textField;
