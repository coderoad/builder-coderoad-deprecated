import * as React from 'react';
import {Step, StepButton, StepContent} from 'material-ui/Stepper';
import ErrorIcon from 'material-ui/svg-icons/alert/error';
import WarningIcon from 'material-ui/svg-icons/alert/warning';
import {pink500, amber500} from 'material-ui/styles/colors';

const styles = {
  stepContent: {
    textAlign: 'left',
  },
};

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
      onClick={click}>
      {field.name}
    </StepButton>
    <StepContent>
      <p style={styles.stepContent}>"{field.name}" {field.msg}</p>
      <p>Example:</p>
      <pre><code>
        "{field.name}": "{field.example}"
      </code></pre>
    </StepContent>
  </Step>
  );
};
