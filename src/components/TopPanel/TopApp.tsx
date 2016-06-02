import * as React from 'react';
import {connect} from 'react-redux';
import TopPanel from './TopPanel';

@connect((store: CR.State) => {
  return { store };
})
export default class TopApp extends React.Component<{
  store?: CR.State
}, {}> {
  render() {
    return <TopPanel {...this.props.store} />;
  }
}
