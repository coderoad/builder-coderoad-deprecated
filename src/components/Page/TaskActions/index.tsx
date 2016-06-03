import * as React from 'react';
import {
  Step, Stepper, StepButton, StepContent, StepLabel
} from 'material-ui/Stepper';
import Subheader from 'material-ui/Subheader';
import {DynamicStepper} from '../../index';

const TaskActions: React.StatelessComponent<{
  actions: string[]
}> = ({actions}) => (
  <div>
    <Subheader>Actions</Subheader>
    <DynamicStepper status={actions.map(action => false)}>
      {actions.map(action => (
        <Step>
          <StepLabel>{action}</StepLabel>
          <StepContent>
            <p>Test Test</p>
          </StepContent>
        </Step>
      ))}
    </DynamicStepper>
  </div>
);

export default TaskActions;
