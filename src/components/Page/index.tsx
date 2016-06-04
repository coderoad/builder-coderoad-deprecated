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
  tutorial: CR.Tutorial, pagePosition: number
}, {}> {
  componentDidMount() {
    Top.toggle(true);
  }
  render() {
    const {tutorial, pagePosition} = this.props;
    const page = tutorial.pages[pagePosition];

    if (!page) { return null; }

    return (
      <section style={styles} className='cr-page'>
        <ContentCard
          title={page.title}
          content={page.description}
        />
        <Tasks
          tasks={page.tasks}
          page={page}
        />
      </section>
    );
  }
};
