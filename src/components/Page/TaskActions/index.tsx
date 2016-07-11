import * as React from 'react';
import {connect} from 'react-redux';

import {editorMarkdownOpen, tutorialActionAdd} from '../../../actions';
import {Markdown} from '../../index';
import AddButton from '../AddButton';
import getTaskObject from './task-object';
import MenuItem from 'material-ui/MenuItem';
import SelectField from 'material-ui/SelectField';
import {
  Step,  StepButton, StepContent, StepLabel, Stepper
} from 'material-ui/Stepper';
import TextField from 'material-ui/TextField';

const styles = {
  stepper: {
    paddingBottom: '20px',
  },
  form: {
    margin: '10px 15px',
    display: 'inline-block',
  },
  select: {
    width: 150,
  },
};

@connect(null, {tutorialActionAdd, editorMarkdownOpen})
export default class TaskActions extends React.Component<{
  actions: string[], taskPosition: number,
  tutorialActionAdd?: (taskPosition: number, actionString: string) => Redux.ActionCreator,
  editorMarkdownOpen?: (content: string, index?: number) => Redux.ActionCreator
}, {
  stepIndex: number, as: {action: string, content: string}
}> {
  constructor(props) {
    super(props);
    this.state = {
      stepIndex: 0,
      as: {
        action: null,
        content: '',
      }
    };
  }
  public render() {
    const {actions, tutorialActionAdd, editorMarkdownOpen} = this.props;
    const {stepIndex} = this.state;
    // TODO: sort actions with higher accuracy
    const actionList: Builder.ActionObject[] = actions.map(a => getTaskObject(a));
    return (
    <section>
      <Stepper
        activeStep={stepIndex}
        linear={false}
        orientation='vertical'
        style={styles.stepper}
      >
        {actionList.map((a, index) => (
          <Step key={index}>
            <StepButton onClick={this.setStepIndex.bind(this)}>
            {a.action + (a.singleLine ? ' ' + a.content : '')}
            </StepButton>
            <StepContent>
              {a.singleLine ? ''
                : <div onClick={editorMarkdownOpen.bind(this, a.content, null)}>
                  <Markdown>{'```js\n' + a.content + '\n```'}</Markdown>
                </div>
              }
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {/*<span style={styles.form}>
        <SelectField
          value={this.state.as.action}
          onChange={this.handleSelect.bind(this)}
          style={styles.select}
        >
          <MenuItem key='open' value='open' primaryText='open' />
          <MenuItem key='set' value='set' primaryText='set' />
          <MenuItem key='insert' value='insert' primaryText='insert' />
        </SelectField>
        <TextField
          hintText='Content'
          value={this.state.as.content}
          onChange={this.handleText.bind(this)}
        />
      </span>*/}
      </section>
    );
  }
  private setStepIndex() {
    this.setState({
      stepIndex: index, as: this.state.as}
    );
  }
  private handleSelect(event, index, value) {
    this.setState({
      stepIndex: this.state.stepIndex,
      as: {
        action: value,
        content: this.state.as.content
      }
    });
  }
  private handleText(event) {
    this.setState({
      stepIndex: this.state.stepIndex,
      as: {
        action: this.state.as.action,
        content: event.target.value,
      }
    });
  }
}
