import * as React from 'react';
import {
  Step, Stepper, StepButton, StepContent, StepLabel
} from 'material-ui/Stepper';
import {DynamicStepper} from '../../index';

const TaskActions: React.StatelessComponent<{
  actions: string[]
}> = ({actions}) => {

  // TODO: sort actions with higher accuracy
  const actionsList = actions.map(a => {
    return {
      action: a.substring(0, a.indexOf('(')),
      content: a.substring(a.indexOf('(') + 2, a.length - 2)
    };
  });

  return (
    <DynamicStepper status={actions.map(action => false)}>
      {actionsList.map(a => (
        <Step>
          <StepLabel>{a.action}</StepLabel>
          <StepContent>
            <p>{a.content}</p>
          </StepContent>
        </Step>
      ))}
    </DynamicStepper>
  );
};

export default TaskActions;
