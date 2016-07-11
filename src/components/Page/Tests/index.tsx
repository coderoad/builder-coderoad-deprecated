import {join} from 'path';
import * as React from 'react';
import {connect} from 'react-redux';

import {editorTestOpen} from '../../../actions';
import {configSelector, routeSet, tutorialConfigOptions} from 'core-coderoad';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';
import CodeIcon from 'material-ui/svg-icons/action/code';

const styles = {
  test: {
    bottom: '8px',
  },
};

@connect(state => ({
  config: configSelector(state),
}), {editorTestOpen, routeSet})
export default class Tests extends React.Component<{
  tests: string[], config?: Tutorial.Config, style?: Object,
  editorTestOpen?: (file: string) => Redux.ActionCreator,
  routeSet?: (path: string) => Redux.ActionCreator,
}, {}> {
  public render() {
    const {tests, style} = this.props;

    return (
      <div style={style}>
        {tests.map((file, index) => (
          <Chip
           key={index}
           style={styles.test}
           onTouchTap={this.selectTest.bind(this, file)}
          >
            <Avatar icon={<CodeIcon />} />
            {file}
          </Chip>
        ))}
      </div>
    );
  }
  private selectTest(file: string) {
    this.props.editorTestOpen(file);
    this.props.routeSet('test');
  }
}
