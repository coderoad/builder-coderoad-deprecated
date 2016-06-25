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
};

@connect(state => ({
  language: languageSuffixSelector(state),
}), {runTestOnSolution})
export default class Solution extends React.Component <{
  language?: string,
}, {}> {
  refs: {
    [key: string]: Element;
    solution: any;
  };
  runTest() {
    console.log(this.refs.solution.get());
  }
  render() {
    return (
      <Card
        style={styles.card}
        initiallyExpanded={true}
      >
        <CardTitle title='Solution' />

        <CardText expandable={true}>
          <TextEditor
            name='solution'
            ref='solution'
            placeholder='test your solution against tests'
            lang={this.props.language}
          />
          <br />
          <RaisedButton
            label='Run Test'
            primary={true}
            onTouchTap={this.runTest.bind(this)}
          />
        </CardText>
      </Card>
    );
  }
}
