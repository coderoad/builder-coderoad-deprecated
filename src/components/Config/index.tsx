import * as React from 'react';
import {connect} from 'react-redux';
import {Field, reduxForm, formValueSelector} from 'redux-form';
import MenuItem from 'material-ui/MenuItem';
import {Card, CardHeader} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import {pjSave, pjLoad, tutorialInit, routeSet, editorPjOpen} from '../../actions';
import languageItems from './languageItems';
import runnerItems from './runnerItems';
import {topElement} from '../TopPanel';
import textField from '../Form/textField';
import selectField from '../Form/selectField';
import validate from './validate';

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
  packageJson: state.packageJson,
}), {pjSave, pjLoad, tutorialInit, routeSet, editorPjOpen })
class TutorialConfig extends React.Component <{
  packageJson?: PackageJson,
  pjSave?: (pj: Tutorial.PJ) => Redux.ActionCreator,
  pjLoad?: () => Redux.ActionCreator,
  tutorialInit?: () => Redux.ActionCreator,
  routeSet?: (route: string) => Redux.ActionCreator,
  pristine?: boolean, submitting?: boolean, handleSubmit?: any,
  language?: string, invalid?: boolean, initialize?: any,
  editorPjOpen?: () => Redux.ActionCreator,
}, {}> {
  refs: {
    [key: string]: (Element);
    name: HTMLInputElement;
  };
  componentWillMount() {
    this.props.pjLoad();
    this.props.editorPjOpen();
  }
  componentDidMount() {
    topElement.toggle(false);
    // get props after pjLoad completes
    setTimeout(() => {
      const {name, config} = this.props.packageJson;
      this.props.initialize({
        name,
        language: config.language,
        runner: config.runner,
      });
    });
    // focus first element
    document.getElementsByTagName('input')[0].focus();
  }
  shouldComponentUpdate() {
    // hack to prevent lost focus on component update
    if (document.activeElement &&
      typeof document.activeElement.value === 'string') {
      return false;
    }
  }
  onSubmit(values) {
    const {name, language, runner} = values;
    this.props.pjSave(Object.assign(
      {},
      this.props.packageJson,
      {
        name,
        config: {
          language, runner
        }
      })
    );
  }
  routeToPage() {
    this.props.tutorialInit();
    this.props.routeSet('page');
  }
  render() {
    const {pristine, submitting, handleSubmit, invalid} = this.props;
    return (
      <Card style={styles.card}>
        <CardHeader
          title='Tutorial Configuration'
        />
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>

          <Field
            id='name'
            name='name'
            component={textField.bind(null, {
              hintText: 'coderoad-tutorial-name',
            })}
            tabIndex='1'
           />

          <Field
            name='language'
            component={selectField.bind(null, {
              children: languageItems(),
              floatingLabelText: 'language',
              id: 'language',
            })}
            tabIndex='2'
          />

          <Field
            name='runner'
            component={selectField.bind(null, {
              children: runnerItems('JS'),
              floatingLabelText: 'Test Runner',
              id: 'runner',
            })}
            tabIndex='3'
          />

          <RaisedButton
            type='submit'
            style={styles.button}
            label='Save'
            primary={true}
            disabled={invalid}
          />
          <RaisedButton
            style={styles.button}
            label='Continue'
            secondary={true}
            disabled={invalid}
            onTouchTap={this.routeToPage.bind(this)}
          />

        </form>
      </Card>
    );
  }
}

export default reduxForm({
  form: 'tutorialConfig',
   validate,
})(TutorialConfig);
