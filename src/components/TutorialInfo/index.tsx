import * as React from 'react';
import {connect} from 'react-redux';
import {Field, reduxForm} from 'redux-form';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import {Card, CardHeader} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import {pjSave, routeSet} from '../../actions';
import Top from '../TopPanel/Top';

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
}), dispatch => ({
  save: (pj: Tutorial.PJ) => dispatch(pjSave(pj)),
  routeToTutorial: () => dispatch(routeSet('page'))
}))
class TutorialInfo extends React.Component<{
  packageJson?: any, save?: any, routeToTutorial?: any,
  pristine?: boolean, submitting?: boolean
}, {}> {
  componentDidMount() {
    Top.toggle(false);
  }
  handleSubmit(e) {
    console.log(e);

    // verify
    // TODO: Verify

    // save
    // this.props.save(Object.assign(
    //   {},
    //   this.props.packageJson,
    //   { description, version, keywords}
    // ));
  }
  render() {
    const {description, version, keywords} = this.props.packageJson;
    const { pristine, submitting } = this.props;
    return (
      <Card style={styles.card}>
        <CardHeader
          title='Tutorial Info'
        />
        <form onSubmit={this.handleSubmit}>
           <Field
            name='description'
            component={description => (
              <TextField
                name='description'
                className='native-key-bindings'
                hintText='Tutorial Description'
                floatingLabelText='Description'
                errorText={
                  description.touched && description.error
                }
                {...description}
              />)
            }
            />
          <br />
          <Field
           name='version'
           component={version => (
             <TextField
               name='version'
               className='native-key-bindings'
               hintText='0.1.0'
               disabled={true}
               floatingLabelText='Version'
               errorText={
                 version.touched && version.error
               }
               {...version}
             />)
           }
           />
          <br />
          {/*}<TextField
            className='native-key-bindings'
            floatingLabelText='Keywords'
            defaultValue={keywords.join(', ')}
            multiLine={true}
            onChange={this.handleText.bind(this, 'keywords')}
          />*/}
          <br />
          <RaisedButton
            type='submit'
            style={styles.button}
            label='Save'
            primary={true}
            disabled={pristine || submitting}
          />
        </form>
      </Card>
    );
  }
}

const validate = values => {
  const errors: { description?: string, version?: string} = {};
  const requiredFields = ['description', 'version'];
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Required';
    }
  });
  if (values.description && values.description.length < 3) {
    errors.description = 'Incomplete tutorial description';
  }
  if (values.version && !values.version.match(/^(\d+\.)?(\d+\.)?(\*|\d+)$/)) {
    errors.version = 'Invalid version number';
  }
  return errors;
};

export default reduxForm({
  form: 'tutorialInfo',
  validate,
})(TutorialInfo);
