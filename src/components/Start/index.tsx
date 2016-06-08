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
  checks: state.checks,
}))
export default class Start extends React.Component<{
  checks?: Builder.Checks
}, {}> {
  render() {
    const {checks} = this.props;
    return (
      <section className='cr-start'>
        <div style={headerStyles}>
        {checks.passed
          ? <Welcome  />
          : <Checks checks={checks}/>}
        </div>
      </section>
    );
  }
}
