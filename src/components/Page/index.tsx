import * as React from 'react';
import Divider from 'material-ui/Divider';
import {Card} from 'material-ui/Card';
import {ContentCard} from '../index';
import Tasks from './Tasks';
import Top from '../TopPanel/Top';

const styles = {
  width: '100%',
  overflowY: 'scroll',
};

export default class Page extends React.Component<{
  tutorial: CR.Tutorial, pagePosition: number, packageJson: PackageJson
}, {}> {
  componentDidMount() {
    Top.toggle(true);
  }
  componentDidUnmount() {
    Top.toggle(false);
  }
  render() {
    const {tutorial, pagePosition, packageJson} = this.props;
    const page = tutorial.pages[pagePosition];

    if (!page) { return null; }

    return (
      <section style={styles} className='cr-page'>
        <ContentCard
          title={page.title}
          content={page.description}
          open={true}
        />
        <Tasks
          tasks={page.tasks}
          page={page}
          config={packageJson.config}
        />
      </section>
    );
  }
};
