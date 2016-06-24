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

@connect(null, {tutorialPublish})
export default class PublishOptionsModal extends React.Component<{
  open: boolean, handleClose: () => any,
  tutorialPublish: (type: string) => Redux.ActionCreator,
}, {}> {
  publish(type: string) {
    this.props.tutorialPublish(type);
  }
  render() {
    return (
      <div>
        <Dialog
          title='Dialog With Actions'
          modal={true}
          open={this.props.open}
          onRequestClose={this.props.handleClose}
        >
          Select version change:
          <FlatButton
            label='Patch'
            primary={true}
            disabled={false}
            onTouchTap={this.publish.bind(this, 'patch')}
          />
          <FlatButton
            label='Minor'
            disabled={false}
            onTouchTap={this.publish.bind(this, 'minor')}
          />
          <FlatButton
            label='Major'
            disabled={false}
            onTouchTap={this.publish.bind(this, 'major')}
          />
          <br/>
          <RaisedButton
            style={styles.cancel}
            label='Cancel'
            secondary={true}
            onTouchTap={this.props.handleClose}
          />
        </Dialog>
      </div>
    );
  }
}
