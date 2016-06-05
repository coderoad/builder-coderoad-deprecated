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
import AddButton from '../AddButton';

const styles = {
  card: {
    margin: '5px',
  },
  tabBar: {
    backgroundColor: 'black',
  },
  addTask: {
    textAlign: 'center',
  },
};

const Tasks: React.StatelessComponent<{
  tasks: CR.Task[], page: CR.Page, config: Tutorial.Config
}> = ({tasks, page, config}) => (
  <div>
    {tasks.map((task: CR.Task, index: number) => (
      <Card style={styles.card}>
        <CardTitle>
        Task {index + 1}
        <Tests
          style={{float: 'right'}}
          tests={task.tests}
          config={config}
        />
        </CardTitle>
        <Tabs tabItemContainerStyle={styles.tabBar}>

          <Tab label='Description'>
            <Task
              key={index.toString()}
              index={index}
              task={task}
            />
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

    <AddButton />

    <TasksComplete
      page={page}
    />

  </div>
);
export default Tasks;
