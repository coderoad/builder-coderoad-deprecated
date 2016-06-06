import * as React from 'react';
import {connect} from 'react-redux';
import {
  Step, Stepper, StepButton, StepContent, StepLabel
} from 'material-ui/Stepper';
import {Markdown} from '../../index';
import AddButton from '../AddButton';
import getTaskObject from './task-object';
import {tutorialActionAdd} from '../../../actions';

@connect(null, dispatch => {
  return {
    addAction: (actionString: string) => dispatch(tutorialActionAdd(this.props.taskPosition, actionString))
  };
})
export default class TaskActions extends React.Component<{
  actions: string[], taskPosition: number, addAction?: any
}, {
  stepIndex: number
}> {
  constructor(props) {
    super(props);
    this.state = {
      stepIndex: 0,
    };
  }
  render() {
    const {actions, addAction} = this.props;
    const {stepIndex} = this.state;
    // TODO: sort actions with higher accuracy
    const actionList: Builder.ActionObject[] = actions.map(a => getTaskObject(a));
    return (
      <Stepper
        activeStep={stepIndex}
        linear={false}
        orientation='vertical'
      >
        {actionList.map((a, index) => (
          <Step>
            <StepButton onClick={() => this.setState({stepIndex: index})}>
            {a.action + (a.singleLine ? ' ' + a.content : '')}
            </StepButton>
            <StepContent>
              {a.singleLine ? ''
                : <Markdown>{'```js\n' + a.content + '\n```'}</Markdown>
              }
            </StepContent>
          </Step>
        ))}
        <AddButton callback={addAction.bind(this, 'test(`test`)')}/>
      </Stepper>
    );
  }
}
