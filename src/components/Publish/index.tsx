import * as React from 'react';
import {connect} from 'react-redux';
import {Card, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import {validateTutorial, pjSave, pjLoad, tutorialLoad, routeSet, editorPjOpen} from '../../actions';
import {topElement} from '../TopPanel';
import {Stepper} from 'material-ui/Stepper';
import publishStep from './publishStep';
import PublishOptionsModal from './PublishOptions';

const styles = {
  card: {
    margin: '10px',
    padding: '30px 20px',
  },
  buttons: {
    textAlign: 'center',
  },
  button: {
    margin: '30px 10px 20px 10px',
  },
  comment: {
    marginTop: '30px',
  },
};

@connect(state => ({
  validation: state.validation,
}), {pjLoad, tutorialLoad, editorPjOpen, validateTutorial})
export default class TutorialPublish extends React.Component<{
  validation?: Validation.Object,
  pjLoad?: () => Redux.ActionCreator,
  tutorialLoad?: () => Redux.ActionCreator,
  validateTutorial?: () => Redux.ActionCreator,
  editorPjOpen?: () => Redux.ActionCreator,
}, {
  stepIndex: number,
  modalOpen: boolean,
}> {
  constructor(props) {
    super(props);
    this.state = {
      stepIndex: 0,
      modalOpen: false,
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
    this.props.tutorialLoad();
    this.props.validateTutorial();
  }
  selectStep(index) {
    this.setState({
      stepIndex: index,
      modalOpen: false,
    });
  }
  handleDialog(open: boolean) {
    console.log('onClose', open);
    this.setState({
      stepIndex: this.state.stepIndex,
      modalOpen: open,
    });
  }
  render() {
    const {validation} = this.props;
    return (
    <section className='cr-page'>
      <Card style={styles.card}>
        <CardTitle
          title='Publish'
        />
        <CardText>
          <p>Ensure your tutorial is in order before publishing.</p>
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

          {/* no errors, some warnings */}
          {validation.errors.length === 0 && validation.warnings.length > 0
            ? <div style={styles.comment}>
                <p>Your tutorial is ready, but you might still want to clean up a few warnings first.</p>
              </div>
            : null}

          {/* no errors, no warnings */}
          {validation.errors.length === 0 && validation.warnings.length === 0
            ? <div style={styles.comment}>
                <p>No issues.</p>
              </div>
            : null}

          <div style={styles.buttons}>
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
              onTouchTap={this.handleDialog.bind(this, true)}
            />
          </div>

          <PublishOptionsModal
            open={this.state.modalOpen}
            handleClose={this.handleDialog.bind(this, false)}
          />

        </CardText>
      </Card>
    </section>
    );
  }
}
