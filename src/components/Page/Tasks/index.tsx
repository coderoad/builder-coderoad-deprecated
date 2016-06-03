import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {List} from 'material-ui/List';
import {Card} from 'material-ui/Card';
import Subheader from 'material-ui/Subheader';
import Task from '../Task';
import {lightGreen200} from 'material-ui/styles/colors';
import TasksComplete from '../TasksComplete';

function visibleTasks(tasks: CR.Task[], taskPosition: number): CR.Task[] {
  return tasks.slice(0, taskPosition + 1);
}

const styles = {
  margin: '10px 5px'
};

export default class Tasks extends React.Component<{
    tasks: CR.Task[], page: CR.Page
}, {}> {
  render() {
    const {tasks, page} = this.props;
    return (
    <div>
      <Card style={styles}>
        <List>
          <Subheader>Tasks</Subheader>
          {tasks.map((task: CR.Task, index: number) => (
            <Task
              key={index}
              index={index}
              task={task}
            />)
          )}
        </List>
      </Card>

        <TasksComplete
          page={page}
        />

        <div ref='listEnd' />
    </div>
    );
  }
}
