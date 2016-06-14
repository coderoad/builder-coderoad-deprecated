import * as React from 'react';
import TextField from 'material-ui/TextField';

const textField = ({
  hintText, floatingLabelText, disabled
}, props) => (
  <TextField
    className='native-key-bindings'
    hintText={hintText}
    floatingLabelText={floatingLabelText}
    disabled={disabled}
    errorText={
      props.touched && props.error
    }
    {...props}
  />
);
export default textField;
