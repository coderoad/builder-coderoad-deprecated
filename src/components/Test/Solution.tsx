import * as React from 'react';
import {connect} from 'react-redux';
import {Card, CardText, CardTitle} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import {TextEditor} from '../index';
import {runTestOnSolution} from '../../actions';
import {languageSuffixSelector} from 'core-coderoad';

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
}), {runTestOnSolution})
export default class Solution extends React.Component <{
  language?: string,
  runTestOnSolution?: (text: string) => Redux.ActionCreator,
}, {}> {
  refs: {
    [key: string]: Element;
    solution: any;
  };
  runTest() {
    const text = `
${this.refs.solution.get()}
${atom.workspace.getActiveTextEditor().getText()}
`;
    this.props.runTestOnSolution(text);
  }
  render() {
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
        </CardText>
      </Card>
    );
  }
}
