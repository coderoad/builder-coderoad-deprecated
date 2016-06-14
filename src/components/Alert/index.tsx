import * as React from 'react';
import {connect} from 'react-redux';
import Snackbar from 'material-ui/Snackbar';
import {alertClose} from '../../actions';

const defaultAlert = {
  message: '',
  open: false,
};

const styles = {
  snackbar: {
    display: 'inline-block',
    margin: '0px 10px',
  },
};

@connect(state => ({
  alert: state.alert,
}), {alertClose})
export default class Alert extends React.Component<{
  alert?: CR.Alert, alertClose?: () => Redux.ActionCreator
}, {}> {
  render() {
    const {alert, alertClose} = this.props;
    const {action, message, open, duration, color} = alert;
    return (
      <Snackbar
          style={styles.snackbar}
          bodyStyle={{color}}
          open={open}
          message={message || ''}
          action={action || ''}
          autoHideDuration={duration || 2000}
          onActionTouchTap={alertClose}
          onRequestClose={alertClose}
      />
    );
  }
}
