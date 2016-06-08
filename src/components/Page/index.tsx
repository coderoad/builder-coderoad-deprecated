import * as React from 'react';
import {connect} from 'react-redux';
import Divider from 'material-ui/Divider';
import {Card} from 'material-ui/Card';
import PageDescription from './PageDescription';
import Tasks from './Tasks';
import Top from '../TopPanel/Top';
import {editorMarkdownOpen} from '../../actions';

const styles = {
  width: '100%',
  overflowY: 'scroll',
};

@connect(state => ({
    tutorial: state.tutorial,
    pagePosition: state.pagePosition,
    packageJson: state.packageJson,
    page: state.tutorial.pages[state.pagePosition]
}), dispatch => ({
    markdownOpen: (content: string) => dispatch(editorMarkdownOpen(null, content)),
}))
export default class Page extends React.Component<{
  tutorial?: CR.Tutorial, pagePosition?: number, packageJson?: PackageJson,
  markdownOpen?: (content: string) => any, page?: CR.Page
}, {}> {
  componentDidMount() {
    Top.toggle(true);
  }
  componentWillUnmount() {
    Top.toggle(false);
  }
  render() {
    const {tutorial, pagePosition, packageJson, page, markdownOpen} = this.props;
    if (!page) { return null; }

    return (
      <section style={styles} className='cr-page'>
        <PageDescription
          title={page.title}
          content={page.description}
          open={true}
          click={markdownOpen.bind(this)}
        />
        <Tasks
          tasks={page.tasks}
          page={page}
          config={packageJson.config}
          pagePosition={pagePosition}
        />
      </section>
    );
  }
};
