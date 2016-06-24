import * as React from 'react';
import {connect} from 'react-redux';
import {Card, CardText, CardTitle} from 'material-ui/Card';
import {topElement} from '../TopPanel';

const styles = {
  page: {
    height: '100%',
    width: '100%',
    overflowY: 'scroll',
  },
  card: {
    margin: '5px',
  },
};

@connect(null, {})
export default class Test extends React.Component<{}, {}> {
  componentDidMount() {
    topElement.toggle(true);
  }
  render() {
    return (
      <section style={styles.page} className='cr-page'>
          <Card
            style={styles.card}
            initiallyExpanded={true}
          >
            <CardTitle>Test</CardTitle>

            <CardText expandable={true}>
              test test
            </CardText>
          </Card>
      </section>
    );
  }
};
