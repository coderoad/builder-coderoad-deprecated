import * as React from 'react';
import {connect} from 'react-redux';
import {join} from 'path';
import {editorOpen} from '../../../actions';
import tutorialConfigOptions from 'core-coderoad/lib/options';
import FlatButton from 'material-ui/FlatButton';
import {configSelector} from '../../../selectors';

const styles = {
  button: {
    bottom: '8px',
  },
};

@connect(state => ({
  config: configSelector(state),
}), dispatch => ({
  open: (file: string) => {
    dispatch(editorOpen(join('tutorial', file)));
  },
}))
export default class Tests extends React.Component<{
  tests: string[], config?: Tutorial.Config, style?: Object,
  open?: (file: string) => any
}, {}> {
  render() {
    const {tests, config, style, open} = this.props;
    const suffix = tutorialConfigOptions[config.language].language.suffix;
    return (
      <div style={style}>
        {tests.map((test, index) => (
          <FlatButton
            key={index}
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
