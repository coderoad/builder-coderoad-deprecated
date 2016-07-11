import * as React from 'react';
// import {connect} from 'react-redux';

import {Card, CardText, CardTitle} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';

const styles = {
  card: {
    margin: '5px',
  },
};

// @connect(state => ({
//   result: state.result,
// }))
export default class Result extends React.Component <{
  result?: Object
}, {}> {
  public render() {
    const {result} = this.props;
    return (
      <Card
        style={styles.card}
        initiallyExpanded={true}
      >
        <CardText expandable={true}>
          <p>Check the console.</p>
        </CardText>
      </Card>
    );
  }
}
