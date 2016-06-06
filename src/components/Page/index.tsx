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


@connect(null, dispatch => {
  return {
    markdownOpen: (content: string) => dispatch(editorMarkdownOpen(null, content))
  };
})
export default class Page extends React.Component<{
  tutorial: CR.Tutorial, pagePosition: number, packageJson: PackageJson,
  markdownOpen?: (content: string) => any
}, {}> {
  componentDidMount() {
    Top.toggle(true);
  }
  componentDidUnmount() {
    Top.toggle(false);
  }
  render() {
    const {tutorial, pagePosition, packageJson, markdownOpen} = this.props;
    const page = tutorial.pages[pagePosition];

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
