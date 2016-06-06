import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {List} from 'material-ui/List';
import {Card, CardHeader, CardText} from 'material-ui/Card';
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
  cardContent: {
    margin: '0px',
    padding: '0px',
  },
  tabBar: {
    backgroundColor: 'black',
  },
  addTask: {
    textAlign: 'center',
  },
  test: {
    float: 'right',
    marginRight: '30px',
  },
  title: {
    float: 'left',
    marginLeft: '10px',
  },
};

const Tasks: React.StatelessComponent<{
  tasks: CR.Task[], page: CR.Page, config: Tutorial.Config
}> = ({tasks, page, config}) => (
  <div>
    {tasks.map((task: CR.Task, index: number) => (
      <Card
        style={styles.card}
        initiallyExpanded={index === 0}
        >
        <CardHeader
          actAsExpander={true}
          showExpandableButton={true}
        >
        <span style={styles.title}>Task {index + 1}</span>
        <Tests
          style={styles.test}
          tests={task.tests}
          config={config}
        />
        </CardHeader>
        <CardText expandable={true} style={styles.cardContent}>
        <Tabs tabItemContainerStyle={styles.tabBar}>

          <Tab label='Description'>
            <Task
              key={index.toString()}
              index={index}
              task={task}
            />
          </Tab>

          <Tab label='Actions'>
            <TaskActions
              actions={task.actions}
              taskPosition={index}
            />
          </Tab>

          <Tab label='Hints'>
            <Hints
            hints={task.hints}
            taskPosition={index}
            />
          </Tab>

      </Tabs>
      </CardText>
    </Card>)
  )}

    <AddButton />

    <TasksComplete
      page={page}
    />

  </div>
);
export default Tasks;
