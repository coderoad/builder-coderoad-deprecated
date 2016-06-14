import * as React from 'react';
import {connect} from 'react-redux';
import {join} from 'path';
import {editorOpen} from '../../../actions';
import FlatButton from 'material-ui/FlatButton';
import {configSelector, tutorialConfigOptions} from 'core-coderoad';

const styles = {
  button: {
    bottom: '8px',
  },
};

@connect(state => ({
  config: configSelector(state),
}), (dispatch, props) => ({
  open(file: string) {
    const suffix = tutorialConfigOptions[props.config.language].language.suffix;
    file = file.concat('.' + suffix);
    dispatch(editorOpen(join('tutorial', file)));
  },
}))
export default class Tests extends React.Component<{
  tests: string[], config?: Tutorial.Config, style?: Object,
  open?: (file: string) => any
}, {}> {
  render() {
    const {tests, config, style, open} = this.props;

    return (
      <div style={style}>
        {tests.map((file, index) => (
          <FlatButton
            key={index}
            style={styles.button}
            onClick={open.bind(this, file)}
            label={'Test'}
            secondary={true}
          />
        ))}
      </div>
    );
  }
}
