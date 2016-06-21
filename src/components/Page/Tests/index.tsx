import * as React from 'react';
import {connect} from 'react-redux';
import {join} from 'path';
import {editorOpen} from '../../../actions';
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
    const {tests, style, open} = this.props;

    return (
      <div style={style}>
        {tests.map((file, index) => (
          <button>{file}</button>
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
