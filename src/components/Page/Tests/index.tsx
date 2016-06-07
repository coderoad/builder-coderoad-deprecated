import * as React from 'react';
import {connect} from 'react-redux';
import {join} from 'path';
import {editorOpen} from '../../../actions';
import tutorialConfigOptions from '../../../config-options';
import FlatButton from 'material-ui/FlatButton';

const styles = {
  button: {
    bottom: '8px',
  },
};

@connect(null, dispatch => {
  return {
    open: (file: string) => {
      dispatch(editorOpen(join('tutorial', file)));
    }
  };
})
export default class Tests extends React.Component<{
  tests: string[], config: Tutorial.Config, style?: Object, open?: (file: string) => any
}, {}> {
  render() {
    const {tests, config, style, open} = this.props;
    const suffix = tutorialConfigOptions[config.language].suffix;
    return (
      <div style={style}>
        {tests.map((test, index) => (
          <FlatButton
            key={index.toString()}
            style={styles.button}
            onClick={open.bind(this, test.concat('.' + suffix))}
            label={'Test'}
            secondary={true}
          />
        ))}
      </div>
    );
  }
}
