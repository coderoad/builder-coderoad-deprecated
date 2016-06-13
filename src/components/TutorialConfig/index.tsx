import * as React from 'react';
import {connect} from 'react-redux';
import {Field, reduxForm, formValueSelector} from 'redux-form';
import {resolve} from 'path';
import MenuItem from 'material-ui/MenuItem';
import {Card, CardHeader} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import {pjSave, tutorialInit, routeSet} from '../../actions';
import languageItems from './languageItems';
import runnerItems from './runnerItems';
import Top from '../TopPanel/Top';
import {validateName} from 'coderoad-cli';
import * as debounce from 'lodash.debounce';
import textField from '../Form/textField';
import selectField from '../Form/selectField';

const formSelector = formValueSelector('tutorialConfig');

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

interface ConfigForm {
  name?: string;
  language?: string;
  runner?: string;
}

@connect(state => ({
  packageJson: state.packageJson,
  // name: state.packageJson.name,
  // language: formSelector(state, 'language') || state.packageJson.config.language,
}), dispatch => ({
  save: (pj: Tutorial.PJ) => dispatch(pjSave(pj)),
  routeToPage: () => {
    dispatch(tutorialInit());
    dispatch(routeSet('page'));
  }
}))
class TutorialConfig extends React.Component <{
  packageJson?: PackageJson,
  save?: (pj: Tutorial.PJ) => any,
  routeToPage?: () => any,
  pristine?: boolean, submitting?: boolean, handleSubmit?: any,
  language?: string, invalid?: boolean
}, {}> {
  componentDidMount() {
    Top.toggle(false);
  }
  onSubmit(values: ConfigForm) {
    const {name, language, runner} = values;
    this.props.save(Object.assign(
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
  render() {
    const {pristine, submitting, handleSubmit, invalid} = this.props;
    return (
      <Card style={styles.card}>
        <CardHeader
          title='Tutorial Configuration'
        />
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <Field
            name='name'
            component={textField.bind(null, {
              hintText: 'coderoad-tutorial-name',
            })}
           />
          <br />
          <Field
            name='language'
            component={selectField.bind(null, {
              children: languageItems(),
              floatingLabelText: 'language',
            })}
          />
          <br />
          <Field
            name='runner'
            component={selectField.bind(null, {
              children: runnerItems('JS'),
              floatingLabelText: 'Test Runner',
            })}
          />
          <br />
          <RaisedButton
            type='submit'
            style={styles.button}
            label='Save'
            primary={true}
            disabled={pristine || submitting || invalid}
          />
          <RaisedButton
            style={styles.button}
            label='Continue'
            secondary={true}
            disabled={invalid}
            onTouchTap={this.props.routeToPage.bind(this)}
          />
        </form>
      </Card>
    );
  }
}

const validate = debounce(values => {
  const errors: ConfigForm = {};
  const requiredFields = ['name', 'language', 'runner'];
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Required';
    }
  });
  if (values.name && !values.name.match(/^coderoad-[A-Za-z0-9\-]+$/)) {
    errors.name = 'Invalid "coderoad-*" name';
  }
  console.log(errors);
  return errors;
}, 200);

export default reduxForm({
  form: 'tutorialConfig',
  validate,
})(TutorialConfig);
