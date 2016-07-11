import * as React from 'react';
import {connect} from 'react-redux';

import {Checks} from '../index';
import Welcome from './Welcome';

const headerStyles = {
  display: 'block',
  height: '100%',
  textAlign: 'center',
  color: '#f8f8f8',
};

@connect(state => ({
  passed: state.checks.passed,
}))
export default class Start extends React.Component<{
  passed?: boolean
}, {}> {
  public render() {
    const {passed} = this.props;
    return (
      <section className='cr-start'>
        <div style={headerStyles}>
        {passed ? <Welcome  /> : <Checks />}
        </div>
      </section>
    );
  }
}
