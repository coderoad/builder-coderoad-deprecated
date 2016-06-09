import * as React from 'react';
import {connect} from 'react-redux';
import Divider from 'material-ui/Divider';
import {Card} from 'material-ui/Card';
import PageDescription from './PageDescription';
import Tasks from './Tasks';
import TasksComplete from './TasksComplete';
import Top from '../TopPanel/Top';
import {editorMarkdownOpen} from '../../actions';
import {pageSelector} from '../../selectors';

const styles = {
  width: '100%',
  overflowY: 'scroll',
};

@connect(state => ({
    page: pageSelector(state),
}), dispatch => ({
    markdownOpen: (content: string) => dispatch(editorMarkdownOpen(null, content)),
}))
export default class Page extends React.Component<{
  markdownOpen?: (content: string) => any, page?: CR.Page
}, {}> {
  componentDidMount() {
    Top.toggle(true);
  }
  componentWillUnmount() {
    Top.toggle(false);
  }
  render() {
    const {page, markdownOpen} = this.props;
    if (!page) { return null; }

    return (
      <section style={styles} className='cr-page'>
        <PageDescription
          title={page.title}
          content={page.description}
          open={true}
          click={markdownOpen.bind(this)}
        />
        <Tasks />
        <TasksComplete page={page} />
      </section>
    );
  }
};
