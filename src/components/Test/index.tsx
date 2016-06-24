import * as React from 'react';
import {connect} from 'react-redux';
import {Card} from 'material-ui/Card';
import {topElement} from '../TopPanel';

const styles = {
  height: '100%',
  width: '100%',
  overflowY: 'scroll',
};

@connect(null, {})
export default class Test extends React.Component<{}, {}> {
  componentDidMount() {
    topElement.toggle(true);
  }
  render() {
    return (
      <section style={styles} className='cr-page'>
        <h1>Test</h1>
      </section>
    );
  }
};
