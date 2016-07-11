import * as React from 'react';
import {connect} from 'react-redux';

import {editorMarkdownOpen} from '../../actions';
import {topElement} from '../TopPanel';
import PageDescription from './PageDescription';
import Tasks from './Tasks';
import TasksComplete from './TasksComplete';
import {Card} from 'material-ui/Card';
import Divider from 'material-ui/Divider';

const styles = {
  page: {
    height: '100%',
    width: '100%',
    overflowY: 'scroll',
  },
};

@connect(null, {editorMarkdownOpen})
export default class Page extends React.Component<{
  editorMarkdownOpen?: (content?: string, index?: number) => Redux.ActionCreator
}, {}> {
  public render() {
    return (
      <section style={styles.page} className='cr-page'>
        <PageDescription />
        <Tasks />
        <TasksComplete />
      </section>
    );
  }
  private componentDidMount() {
    this.props.editorMarkdownOpen(null, null);
    topElement.toggle(true);
  }
  private componentWillUnmount() {
    topElement.toggle(false);
  }
};
