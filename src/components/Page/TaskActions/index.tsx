import * as React from 'react';
import {
  Step, Stepper, StepButton, StepContent, StepLabel
} from 'material-ui/Stepper';
import {Markdown} from '../../index';
import AddButton from '../AddButton';
import getTaskObject from './task-object';

export default class TaskActions extends React.Component<{
  actions: string[]
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
    const {actions} = this.props;
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
        <AddButton />
      </Stepper>
    );
  }
}
