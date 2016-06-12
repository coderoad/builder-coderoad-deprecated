import * as React from 'react';
import {Markdown} from '../../index';

const styles = {
  task: {
    margin: '5px',
    padding: '10px 10px',
  },
};

const Task: React.StatelessComponent<{
  task: CR.Task, index: number
}> = ({task, index}) => (
  <section style={styles.task}>
      <Markdown >{task.description}</Markdown>
  </section>
);
export default Task;
