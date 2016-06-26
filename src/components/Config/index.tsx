import * as React from 'react';
import {connect} from 'react-redux';
import {Field, reduxForm, formValueSelector} from 'redux-form';
import MenuItem from 'material-ui/MenuItem';
import {Card, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import {pjSave, pjLoad, tutorialInit, routeSet, editorPjOpen} from '../../actions';
import runnerItems from './runnerItems';
import {topElement} from '../TopPanel';
import textField from '../Form/textField';
import selectField from '../Form/selectField';
import validate from './validate';
import handleDeps from './handleDeps';

const styles = {
  card: {
    margin: '10px',
    padding: '30px 20px',
  },
  title: {
    textAlign: 'center',
  },
  form: {
    margin: '0 auto',
    width: '80%',
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
    // get props after pjLoad completes
    setTimeout(() => {
      const {name, config, repository} = this.props.packageJson;
      this.props.initialize({
        name,
        runnerItem: config.language && config.runner ? `${config.language}: ${config.runner}` : null,
        repo: repository ? repository : '',
      });
    });
  }
  componentDidMount() {
    topElement.toggle(false);
    // focus first element
    document.getElementsByTagName('input')[0].focus();
  }
  shouldComponentUpdate() {
    // hack to prevent lost focus on component update
    const textInputIsActive = (
      document.activeElement &&
      typeof document.activeElement.value === 'string'
    );
    return this.props.submitting || !textInputIsActive;
  }
  onSubmit(values) {
    const {packageJson} = this.props;
    const {name, runnerItem, repo} = values;
    const [language, runner] = runnerItem.split(': ');
    const dependencies = handleDeps(packageJson, runner);
    const repoObj = repo ? {
      repository: repo || '',
      bugs: {
        url: repo || '',
      },
    } : {};

    // trigger submitted updates
    this.props.submitting = true;
    setTimeout(() => this.props.submitting = false, 300);

    this.props.pjSave(Object.assign(
      {},
      packageJson,
      {
        name,
        dependencies,
        config: {
          language, runner,
        }
      },
      repoObj)
    );
  }
  routeToPage() {
    this.props.tutorialInit();
    this.props.routeSet('page');
  }
  render() {
    const {submitting, handleSubmit, invalid, packageJson} = this.props;

    // select runner items
    return (
    <section className='cr-page'>
      <Card style={styles.card}>
        <CardTitle
          style={styles.title}
          title='Tutorial Configuration'
        />
        <CardText>
          <form
            style={styles.form}
            onSubmit={handleSubmit(this.onSubmit.bind(this))}
          >
            <Field
              id='name'
              name='name'
              component={textField.bind(null, {
                floatingLabelText: 'Tutorial Name',
                hintText: 'coderoad-tutorial-name',
              })}
              tabIndex='1'
             />

            <Field
              name='runnerItem'
              component={selectField.bind(null, {
                children: runnerItems(),
                floatingLabelText: 'runner',
                id: 'runner',
              })}
              tabIndex='2'
            />

            <Field
              id='repo'
              name='repo'
              component={textField.bind(null, {
                floatingLabelText: 'Path to Repo (optional)',
                hintText: 'http://github.com/path/to/repo',
                type: 'url',
              })}
              tabIndex='3'
            />

            <RaisedButton
              type='submit'
              style={styles.button}
              label='Save'
              primary={true}
              disabled={submitting}
            />
            <RaisedButton
              style={styles.button}
              label='Continue'
              secondary={true}
              disabled={invalid}
              onTouchTap={this.routeToPage.bind(this)}
            />

          </form>
        </CardText>
      </Card>
    </section>
    );
  }
}

export default reduxForm({
  form: 'tutorialConfig',
  validate,
})(TutorialConfig);
