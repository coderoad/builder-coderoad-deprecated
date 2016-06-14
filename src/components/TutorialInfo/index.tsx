import * as React from 'react';
import {connect} from 'react-redux';
import {Field, reduxForm} from 'redux-form';
import MenuItem from 'material-ui/MenuItem';
import {Card, CardHeader} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import {pjSave, routeSet} from '../../actions';
import Top from '../TopPanel/Top';
import textField from '../Form/textField';
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
}), dispatch => ({
  save(pj: Tutorial.PJ) { dispatch(pjSave(pj)); },
  routeToTutorial() { dispatch(routeSet('page')); }
}))
class TutorialInfo extends React.Component<{
  packageJson?: any, save?: any, routeToTutorial?: any,
  pristine?: boolean, submitting?: boolean, handleSubmit?: any,
  invalid?: boolean, initialize?: (values: Object) => any
}, {}> {
  componentWillMount() {
    this.props.initialize({
      description: '',
      version: '0.1.0',
      keywords: 'coderoad, tutorial'
    });
  }
  componentDidMount() {
    Top.toggle(false);
  }
  onSubmit(values) {
    const {description, version, keywords} = values;
    // save
    this.props.save(Object.assign(
      {},
      this.props.packageJson,
      {
        description, version,
        keywords: keywords.split(',')
      }
    ));
  }
  render() {
    const {pristine, submitting, handleSubmit, invalid} = this.props;
    return (
      <Card style={styles.card}>
        <CardHeader
          title='Tutorial Info'
        />
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>

           <Field
            name='description'
            component={textField.bind(null, {
              hintText: 'Tutorial description',
              floatingLabelText: 'Description',
            })}
            />

          <Field
           name='version'
            component={textField.bind(null, {
              hintText: '0.1.0',
              floatingLabelText: 'Version',
              disabled: true,
            })}
           />

          <Field
           name='keywords'
           component={textField.bind(null, {
             hintText: 'coderoad, react, js, etc',
             floatingLabelText: 'Keywords',
           })}
           />

          <RaisedButton
            type='submit'
            style={styles.button}
            label='Save'
            primary={true}
            disabled={pristine || submitting || invalid}
          />
        </form>
      </Card>
    );
  }
}

export default reduxForm({
  form: 'tutorialInfo',
  validate,
})(TutorialInfo);
