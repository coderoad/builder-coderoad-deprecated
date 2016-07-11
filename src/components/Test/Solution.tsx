import * as React from 'react';
import {connect} from 'react-redux';

import {runnerRun, runnerSet} from '../../actions';
import {TextEditor} from '../index';
import Result from './Result';
import {languageSuffixSelector} from 'core-coderoad';
import {Card, CardText, CardTitle} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';

// TODO: fix ref as callback

const styles = {
  card: {
    margin: '5px',
  },
  title: {
    textAlign: 'center',
  },
  buttons: {
    textAlign: 'center',
  },
};

@connect(state => ({
  language: languageSuffixSelector(state),
}), {runnerRun, runnerSet})
export default class Solution extends React.Component <{
  language?: string,
  runnerRun?: (content: string) => Redux.ActionCreator,
  runnerSet?: () => Redux.ActionCreator,
}, {}> {
  private refs: {
    [key: string]: Element;
    solution: any;
  };
  public render() {
    return (
      <Card
        style={styles.card}
        initiallyExpanded={true}
      >
        <CardTitle
          title='Solution'
          style={styles.title}
        />

        <CardText expandable={true}>
          <p>Try out a solution against your tests</p>
          <TextEditor
            name='solution'
            ref='solution'
            placeholder='var a = "example code";'
            lang={this.props.language}
          />
          <br />
          <div style={styles.buttons}>
            <RaisedButton
              label='Run Test'
              primary={true}
              onTouchTap={this.runTest.bind(this)}
            />
          </div>
          <br />
          <br />
          <p>Check the console for test results.</p>
          {/*}<Result />*/}
        </CardText>
      </Card>
    );
  }
    private componentDidMount() {
      this.props.runnerSet();
    }
    private runTest() {
      // content = solution + tests
      const content = `
  ${this.refs.solution.get()}
  ${atom.workspace.getActiveTextEditor().getText()}
  `;
      this.props.runnerRun(content);
    }
}
