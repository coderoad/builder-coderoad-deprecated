import * as React from 'react';
import TextField from 'material-ui/TextField';

const textField = ({
  hintText, floatingLabelText, disabled, id
}, props) => (
  <TextField
    id={id}
    className='native-key-bindings'
    hintText={hintText}
    floatingLabelText={floatingLabelText}
    disabled={disabled || false}
    errorText={props.touched && props.error}
    {...props}
  />
);
export default textField;
