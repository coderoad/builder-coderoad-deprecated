import * as React from 'react';
import {
  Step, Stepper, StepButton, StepContent, StepLabel
} from 'material-ui/Stepper';
import {Markdown} from '../../index';

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
    const actionList = actions.map(a => {
      const obj: Builder.ActionObject = {
        action: a.substring(0, a.indexOf('(')),
        content: a.substring(a.indexOf('(') + 2, a.length - 2)
      };
      if (obj.action === 'open') {
        obj.singleLine = true;
      }
      return obj;
    });
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
      </Stepper>
    );
  }
}
