import * as React from 'react';
import {Markdown} from '../../index';
import taskCheckbox from './taskCheckbox';
import {ListItem} from 'material-ui/List';
import {lightGreen200, orange200} from 'material-ui/styles/colors';

const styles = {
  task: {
    margin: '5px',
    padding: '5px',
    position: 'relative'
  },
  index: {
    position: 'absolute',
    top: '20px',
    left: '45px',
  },
  description: {
    backgroundColor: 'inherit',
    paddingTop: '-10px',
    paddingLeft: '55px',
    fontSize: '14px',
    lineHeight: '1.6',
  },
};

function getStatus(
  index: number, taskPosition: number, testRun: boolean
): string {
  return index < taskPosition ? lightGreen200 : 'inherit';
}

const Task: React.StatelessComponent<{
  task: CR.Task, taskPosition: number, index: number, testRun: boolean
}> = ({task, taskPosition, index, testRun}) => {
  const backgroundColor = getStatus(index, taskPosition, testRun);
  const isCurrentTask = taskPosition === index;
  return (
    <ListItem
      key={index}
      style={Object.assign({}, styles.task, {backgroundColor})}
    >
      {taskCheckbox(isCurrentTask, testRun)}
      <span style={styles.index}>{index + 1}.</span>
      <div style={styles.description}>
        <Markdown >{task.description}</Markdown>
      </div>
    </ListItem>
  );
};
export default Task;
