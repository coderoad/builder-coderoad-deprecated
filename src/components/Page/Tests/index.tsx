import * as React from 'react';
import {connect} from 'react-redux';
import {join} from 'path';
import {editorTestOpen} from '../../../actions';
// import Chip from 'material-ui/Chip';
// import Avatar from 'material-ui/Avatar';
// import CodeIcon from 'material-ui/svg-icons/action/code';
import {configSelector, tutorialConfigOptions} from 'core-coderoad';

const styles = {
  test: {
    bottom: '8px',
  },
};

@connect(state => ({
  config: configSelector(state),
}), {editorTestOpen})
export default class Tests extends React.Component<{
  tests: string[], config?: Tutorial.Config, style?: Object,
  editorTestOpen?: (file: string) => any
}, {}> {
  render() {
    const {tests, style, editorTestOpen} = this.props;

    return (
      <div style={style}>
        {tests.map((file, index) => (
          <button
            onClick={editorTestOpen.bind(this, file)}>{file}</button>
        ))}
      </div>
    );
  }
}

/*
  <Chip
   key={index}
   style={styles.test}
   onClick={open.bind(this, file)}
   >
    <Avatar icon={<CodeIcon />} />
    {file}
  </Chip>
  */
