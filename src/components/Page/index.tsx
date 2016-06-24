import * as React from 'react';
import {connect} from 'react-redux';
import Divider from 'material-ui/Divider';
import {Card} from 'material-ui/Card';
import PageDescription from './PageDescription';
import Tasks from './Tasks';
import TasksComplete from './TasksComplete';
import {topElement} from '../TopPanel';
import {editorMarkdownOpen} from '../../actions';

const styles = {
  height: '100%',
  width: '100%',
  overflowY: 'scroll',
};

@connect(null, {editorMarkdownOpen})
export default class Page extends React.Component<{
  editorMarkdownOpen?: (content?: string, index?: number) => Redux.ActionCreator
}, {}> {
  componentDidMount() {
    this.props.editorMarkdownOpen(null, null);
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
