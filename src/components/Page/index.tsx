import * as React from 'react';
import Divider from 'material-ui/Divider';
import {Card} from 'material-ui/Card';
import PageDescription from './PageDescription';
import Tasks from './Tasks';
import TasksComplete from './TasksComplete';
import {topElement} from '../TopPanel';

const styles = {
  width: '100%',
  overflowY: 'scroll',
};

export default class Page extends React.Component<{}, {}> {
  componentDidMount() {
    topElement.toggle(true);
  }
  componentWillUnmount() {
    topElement.toggle(false);
  }
  render() {
    return (
      <section style={styles} className='cr-page'>
        <PageDescription />
        <Tasks />
        <TasksComplete />
      </section>
    );
  }
};
