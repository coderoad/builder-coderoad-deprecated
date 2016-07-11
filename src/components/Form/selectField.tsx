import * as React from 'react';

import SelectField from 'material-ui/SelectField';

// TODO: remove function from SelectField

const selectField = ({children, floatingLabelText, id}, props) => (
    <SelectField
      value={props.value}
      floatingLabelText={floatingLabelText}
      errorText={props.touched && props.error}
      {...props}
      onChange={(event, index, value) => props.onChange(value)}
    >
      {children}
    </SelectField>
  );
export default selectField;
