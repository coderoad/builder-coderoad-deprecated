import * as React from 'react';

import FlatButton from 'material-ui/FlatButton';

const styles = {
  textAlign: 'center',
};

const AddButton: React.StatelessComponent<{
  callback?: any
}> = ({callback}) => (
  <div style={styles}>
    <FlatButton
      label='+'
      primary={true}
      onClick={callback}
    />
  </div>
);
export default AddButton;
