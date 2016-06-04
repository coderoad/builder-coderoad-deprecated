import * as React from 'react';
import {Markdown} from '../../index';
import taskCheckbox from './taskCheckbox';
import {ListItem} from 'material-ui/List';
import {lightGreen200, orange200} from 'material-ui/styles/colors';

const styles = {
  margin: '5px',
  padding: '10px 10px',
};

function getStatus(
  index: number, taskPosition: number, testRun: boolean
): string {
  return index < taskPosition ? lightGreen200 : 'inherit';
}

const Task: React.StatelessComponent<{
  task: CR.Task, index: number
}> = ({task, index}) => (
  <section style={styles}>
      <Markdown >{task.description}</Markdown>
  </section>
);
export default Task;
