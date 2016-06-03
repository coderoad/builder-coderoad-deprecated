import * as React from 'react';
import {
  Step, Stepper, StepButton, StepContent
} from 'material-ui/Stepper';
import {DynamicStepper} from '../../index';

const TaskActions: React.StatelessComponent<{
  actions: string[]
}> = ({actions}) => (
  <div>
    {actions.map(action => <p>{action}</p>)}
  </div>
);

export default TaskActions;
