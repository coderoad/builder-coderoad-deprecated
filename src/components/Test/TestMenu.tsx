import * as React from 'react';
import {connect} from 'react-redux';
import {Card, CardText, CardTitle} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';

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

@connect(null, null)
export default class TestMenu extends React.Component <{}, {}> {
  render() {
    return (
      <Card
        style={styles.card}
        initiallyExpanded={true}
      >
        <CardTitle
          title='Test Menu'
          style={styles.title}
        />

        <CardText expandable={true}>
          <p>Try out a solution against your tests</p>
        </CardText>
      </Card>
    );
  }
}
