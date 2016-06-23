import * as React from 'react';
import {connect} from 'react-redux';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import MenuItem from 'material-ui/MenuItem';
import {Card, CardHeader} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import {validatePj, pjSave, pjLoad, routeSet, editorPjOpen} from '../../actions';
import {topElement} from '../TopPanel';
import textField from '../Form/textField';
import ErrorIcon from 'material-ui/svg-icons/alert/error';
import WarningIcon from 'material-ui/svg-icons/alert/warning';
import {pink500, amber500} from 'material-ui/styles/colors';
import {Stepper, Step, StepButton, StepContent} from 'material-ui/Stepper';
import {Markdown} from '../index';

const styles = {
  card: {
    margin: '10px',
    padding: '30px 20px',
    textAlign: 'center',
  },
  button: {
    margin: '30px 10px 20px 10px',
  },
};

@connect(state => ({
  validation: state.validation,
}), {pjLoad, editorPjOpen, validatePj})
export default class TutorialPublish extends React.Component<{
  validation?: Validation.Object,
  pjLoad?: () => Redux.ActionCreator,
  validatePj?: () => Redux.ActionCreator,
  editorPjOpen?: () => Redux.ActionCreator,
}, {
  stepIndex: number
}> {
  constructor(props) {
    super(props);
    this.state = {
      stepIndex: 0,
    };
  }
  componentWillMount() {
    this.props.pjLoad();
    this.props.editorPjOpen();
  }
  componentDidMount() {
    topElement.toggle(false);
    this.validate();
  }
  validate() {
    this.props.pjLoad();
    this.props.validatePj();
  }
  render() {
    const {validation} = this.props;
    return (
      <Card style={styles.card}>
        <CardHeader
          title='Tutorial Info'
        />
        <Stepper
          activeStep={this.state.stepIndex}
          linear={false}
          orientation='vertical'
        >
          {validation.errors.map((field, index) => (
            <Step
              key={index}
              completed={false}
            >
              <StepButton
                icon={<ErrorIcon color={pink500} />}
                onClick={() => this.setState({
                stepIndex: index
              })}>
                {field.name}
              </StepButton>
              <StepContent>
              <p>Example:</p>
                <pre><code>
                  "{field.name}": "{field.example}"
                </code></pre>
              </StepContent>
            </Step>
          ))}
          {validation.warnings.map((field, index) => (
            <Step
              key={index}
              completed={false}
            >
              <StepButton
                icon={<WarningIcon color={amber500}/>}
                onClick={() => this.setState({
                  stepIndex: index + validation.errors.length
                })}>
                {field.name}
              </StepButton>
              <StepContent>
                <p>Example:</p>
                  <pre><code>
                    "{field.name}": "{field.example}"
                  </code></pre>
              </StepContent>
            </Step>
          ))}
        </Stepper>
        <RaisedButton
          style={styles.button}
          label='Validate'
          primary={true}
          onTouchTap={this.validate.bind(this)}
        />
        <RaisedButton
          style={styles.button}
          label='Publish'
          secondary={true}
          disabled={validation.errors.length > 0}
          onTouchTap={() => alert('Publish not yet implemented')}
        />
      </Card>
    );
  }
}
