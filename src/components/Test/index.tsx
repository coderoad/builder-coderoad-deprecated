import * as React from 'react';

import {topElement} from '../TopPanel';
import Solution from './Solution';
import TestMenu from './TestMenu';

const styles = {
  page: {
    height: '100%',
    width: '100%',
    overflowY: 'scroll',
  },
};

export default class Test extends React.Component<{}, {}> {
  public render() {
    return (
      <section
        style={styles.page}
        className='cr-page'
      >
        <TestMenu />
        <Solution />
      </section>
    );
  }
  private componentDidMount() {
    topElement.toggle(true);
  }
};
