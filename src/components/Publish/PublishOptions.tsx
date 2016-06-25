import * as React from 'react';
import {connect} from 'react-redux';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import {tutorialPublish} from '../../actions';

const styles = {
  dialog: {
    textAlign: 'center',
  },
  cancel: {
    float: 'right',
  },
  note: {
    float: 'left',
  },
};

@connect(state => ({
  version: state.packageJson.version || 'ERROR',
  updated: state.updated,
}), {tutorialPublish})
export default class PublishOptionsModal extends React.Component<{
  open: boolean, handleClose: () => any, version?: string,
  tutorialPublish?: (type: string) => Redux.ActionCreator,
  updated?: boolean,
}, {}> {
  publish(type: string) {
    this.props.tutorialPublish(type);
    this.props.handleClose();
  }
  render() {
    const {open, handleClose, version, updated} = this.props;
    return (
      <div>
        <Dialog
          style={styles.dialog}
          title='Publish Next Version'
          modal={true}
          open={open}
          onRequestClose={handleClose}
        >
          <h2>Current: v{version}</h2>
          {/* Note if tutorial has not changed */}
          {!updated
            ? <p>Cannot publish. Tutorial has not changed.</p>
            : <p>Describe the semver change:</p>
          }

          <br />
          <FlatButton
            label='Patch'
            primary={true}
            disabled={!updated}
            onTouchTap={this.publish.bind(this, 'patch')}
          />
          <FlatButton
            label='Minor'
            disabled={!updated}
            onTouchTap={this.publish.bind(this, 'minor')}
          />
          <FlatButton
            label='Major'
            disabled={!updated}
            onTouchTap={this.publish.bind(this, 'major')}
          />
          <br/><br />
          <p style={styles.note}>
            What is <a href='http://semver.org/'>semver</a>?
          </p>
          <RaisedButton
            style={styles.cancel}
            label='Cancel'
            secondary={true}
            onTouchTap={handleClose}
          />
        </Dialog>
      </div>
    );
  }
}
