import * as React from 'react';
import Divider from 'material-ui/Divider';
import {Card} from 'material-ui/Card';
import {ContentCard} from '../index';
// import Tasks from './Tasks';

const styles = {
  width: '100%',
  overflowY: 'scroll',
};

const Page: React.StatelessComponent<{
  tutorial: CR.Tutorial, pagePosition: number
}> = ({tutorial, pagePosition}) => {
  // const completed = progress.pages[pagePosition];
  const page = tutorial.pages[pagePosition];

  if (!page) { return null; }

  return (
    <section style={styles} className='cr-page'>
      <ContentCard
        title={page.title}
        content={page.description}
      />

      {/*}<Tasks
        tasks={tasks}
        taskPosition={taskPosition}
        testRun={testRun}
        completed={completed}
        page={page}
      />*/}

    </section>
  );
};
export default Page;
