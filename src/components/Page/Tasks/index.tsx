import * as React from 'react';
import {connect} from 'react-redux';
import {List} from 'material-ui/List';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import {Tabs, Tab} from 'material-ui/Tabs';
import Subheader from 'material-ui/Subheader';
import Task from '../Task';
import {lightGreen200} from 'material-ui/styles/colors';
import Tests from '../Tests';
import TaskActions from '../TaskActions';
import Hints from '../Hints';
import AddButton from '../AddButton';
import {tutorialTaskAdd, editorMarkdownOpen} from '../../../actions';
import twoDigitify from '../../../services/twoDigitify';
import {join} from 'path';
import {tasksSelector} from '../../../selectors';

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

@connect(state => ({
  tasks: tasksSelector(state),
}), dispatch => ({
  taskAdd: () => dispatch(tutorialTaskAdd()),
  markdownOpen: (content: string) => {
    dispatch(editorMarkdownOpen(null, content));
  },
}))
export default class Tasks extends React.Component<{
  tasks?: CR.Task[], taskAdd?: any, markdownOpen?: any
}, {}> {
  render() {
    const {tasks, taskAdd, markdownOpen} = this.props;
    return (
      <div>
        {tasks.map((task: CR.Task, index: number) => (
          <Card
            key={index}
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
              />
            </CardHeader>
            <CardText expandable={true} style={styles.cardContent}>
              <Tabs tabItemContainerStyle={styles.tabBar}>

                <Tab label='Description'>
                  <div onClick={markdownOpen.bind(this, task.description)}>
                    <Task
                      key={index}
                      index={index}
                      task={task}
                    />
                  </div>
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

        <AddButton callback={taskAdd}/>

      </div>
    );
  }
}
