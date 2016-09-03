import * as React from 'react';

import {CodeBlock} from '../index';
import {Step, StepButton, StepContent} from 'material-ui/Stepper';
import {amber500, pink500} from 'material-ui/styles/colors';
import ErrorIcon from 'material-ui/svg-icons/alert/error';
import WarningIcon from 'material-ui/svg-icons/alert/warning';

export default function publishStep(
  index: number, type: string, field: Validation.Error, click: () => any
) {
  let icon;
  if (type === 'error') {
    icon = <ErrorIcon color={pink500} />;
  } else if (type === 'warning') {
    icon = <WarningIcon color={amber500}/>;
  } else {
    throw 'Invalid PublishError icon';
  }

  return (
  <Step
    key={index}
    completed={false}
  >
    <StepButton
      icon={icon}
      onClick={click}
    >
      {field.name}
    </StepButton>
    <StepContent>
      <p>"{field.name}" {field.msg}</p>
      <p>Example:</p>
      <CodeBlock lang='js'>
        {`{"${field.name}": ${field.example}}`}
      </CodeBlock>
    </StepContent>
  </Step>
  );
};
