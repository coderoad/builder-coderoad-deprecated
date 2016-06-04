import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {List} from 'material-ui/List';
import {Card, CardTitle} from 'material-ui/Card';
import {Tabs, Tab} from 'material-ui/Tabs';
import Subheader from 'material-ui/Subheader';
import Task from '../Task';
import {lightGreen200} from 'material-ui/styles/colors';
import TasksComplete from '../TasksComplete';
import Tests from '../Tests';
import TaskActions from '../TaskActions';
import Hints from '../Hints';

const styles = {
  card: {
    margin: '5px',
  },
  tabBar: {
    backgroundColor: 'black',
  }
};

const Tasks: React.StatelessComponent<{
  tasks: CR.Task[], page: CR.Page
}> = ({tasks, page}) => (
  <div>
    {tasks.map((task: CR.Task, index: number) => (
      <Card style={styles.card}>
        <CardTitle subtitle={'Task ' + index} />
        <Tabs tabItemContainerStyle={styles.tabBar}>

          <Tab label='Description'>
            <Task
              key={index.toString()}
              index={index}
              task={task}
            />
            <Tests tests={task.tests} />
          </Tab>

          <Tab label='Actions'>
            <TaskActions actions={task.actions}/>
          </Tab>

          <Tab label='Hints'>
            <Hints hints={task.hints} />
          </Tab>

      </Tabs>
    </Card>)
  )}

    <TasksComplete
      page={page}
    />

  </div>
);
export default Tasks;
