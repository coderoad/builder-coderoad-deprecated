import * as React from 'react';
import {connect} from 'react-redux';
import {Field, reduxForm, formValueSelector} from 'redux-form';
import {resolve} from 'path';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import {Card, CardHeader} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import {pjSave, tutorialInit, routeSet} from '../../actions';
import languageItems from './languageItems';
import runnerItems from './runnerItems';
import Top from '../TopPanel/Top';
import {validateName} from 'coderoad-cli';
import TextField from 'material-ui/TextField';

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
  language: formSelector(state, 'language'),
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
  language?: string
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
    const {pristine, submitting, handleSubmit} = this.props;
    return (
      <Card style={styles.card}>
        <CardHeader
          title='Tutorial Configuration'
        />
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <Field
           name='name'
           component={name => (
             <TextField
               className='native-key-bindings'
               hintText='coderoad-tutorial-name'
               errorText={
                 name.touched && name.error
               }
               {...name}
             />)
           }
           />
           <br />
          <Field name='language' component={props =>
              <div>
                <SelectField
                  value={props.value}
                  floatingLabelText='Language'
                  errorText = {props.touched && props.error}
                  {...props}
                  onChange = {(event, index, value) => props.onChange(value)}
                >
                  {languageItems()}
                </SelectField>
              </div>
          }/>
          <Field name='runner' component={props =>
              <div>
                <SelectField
                  value={props.value}
                  floatingLabelText='Test Runner'
                  errorText = {props.touched && props.error}
                  {...props}
                  onChange = {(event, index, value) => props.onChange(value)}
                >
                  {runnerItems(this.props.language || 'JS')}
                </SelectField>
              </div>
          }/>
        <br />
        <RaisedButton
          type='submit'
          style={styles.button}
          label='Save'
          primary={true}
          disabled={pristine || submitting}
        />
        <RaisedButton
          style={styles.button}
          label='Continue'
          secondary={true}
          onTouchTap={this.props.routeToPage.bind(this)}
        />
        </form>
      </Card>
    );
  }
}

const validate = values => {
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
  return errors;
};

export default reduxForm({
  form: 'tutorialConfig',
  validate,
})(TutorialConfig);
