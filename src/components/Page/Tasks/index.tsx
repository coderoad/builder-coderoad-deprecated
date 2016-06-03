import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {List} from 'material-ui/List';
import {Card} from 'material-ui/Card';
import Subheader from 'material-ui/Subheader';
import Task from '../Task';
import {lightGreen200} from 'material-ui/styles/colors';
import TasksComplete from '../TasksComplete';

const styles = {
  margin: '10px 5px'
};

const Tasks: React.StatelessComponent<{
  tasks: CR.Task[], page: CR.Page
}> = ({tasks, page}) => (
  <div>
    <Card style={styles}>
      <List>
        <Subheader>Tasks</Subheader>
        {tasks.map((task: CR.Task, index: number) => (
          <Task
            key={index.toString()}
            index={index}
            task={task}
          />)
        )}
      </List>
    </Card>

    <TasksComplete
      page={page}
    />

  </div>
);
export default Tasks;
