import * as React from 'react';
import {connect} from 'react-redux';
import {Card, CardHeader} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import {validatePj, pjSave, pjLoad, routeSet, editorPjOpen} from '../../actions';
import {topElement} from '../TopPanel';
import {Stepper} from 'material-ui/Stepper';
import publishStep from './publishStep';

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
  selectStep(index) {
    this.setState({
      stepIndex: index
    });
  }
  render() {
    const {validation} = this.props;
    return (
    <section className='cr-page'>
      <Card style={styles.card}>
        <CardHeader
          title='Tutorial Errors & Warnings'
        />
        <Stepper
          activeStep={this.state.stepIndex}
          linear={false}
          orientation='vertical'
        >
          {/* Errors */}
          {validation.errors.map((field, index) => publishStep(
            index, 'error', field, this.selectStep.bind(this, index))
          )}

          {/* Warnings */}
          {validation.warnings.map((field, index) => publishStep(
            index + validation.errors.length, 'warning', field,
            this.selectStep.bind(this, index + validation.errors.length))
          )}

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
    </section>
    );
  }
}
