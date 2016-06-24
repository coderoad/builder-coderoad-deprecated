import * as React from 'react';
import {connect} from 'react-redux';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import {tutorialPublish} from '../../actions';

const styles = {
  cancel: {
    float: 'right',
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
          title={`Current Version: ${version}`}
          modal={true}
          open={open}
          onRequestClose={handleClose}
        >
          {/* Note if tutorial has not changed */}
          {!updated ? <p>Tutorial has not changed.</p> : null}

          Select next version change:
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
          <br/>
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
