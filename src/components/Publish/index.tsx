import * as React from 'react';
import {connect} from 'react-redux';
import {Field, reduxForm} from 'redux-form';
import MenuItem from 'material-ui/MenuItem';
import {Card, CardHeader} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import {pjSave, pjLoad, routeSet} from '../../actions';
import {topElement} from '../TopPanel';
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
  pjLoad() { dispatch(pjLoad()); },
  save(pj: Tutorial.PJ) { dispatch(pjSave(pj)); },
  routeToTutorial() { dispatch(routeSet('page')); }
}))
class TutorialPublish extends React.Component<{
  packageJson?: any, save?: any, routeToTutorial?: any,
  pristine?: boolean, submitting?: boolean, handleSubmit?: any,
  invalid?: boolean, initialize?: (values: Object) => any,
  pjLoad?: () => any
}, {}> {
  componentWillMount() {
    this.props.pjLoad();
  }
  componentDidMount() {
    topElement.toggle(false);
    setTimeout(() => {
      const {description, version, keywords} = this.props.packageJson;
      this.props.initialize({
        description,
        version,
        keywords,
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
    const {description, version, keywords} = values;
    // save
    this.props.save(Object.assign(
      {},
      this.props.packageJson,
      {
        description, version,
        keywords: (keywords.length ? ', ' + keywords : '').split(', ')
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
            tabIndex='1'
            />

          <Field
           name='version'
            component={textField.bind(null, {
              hintText: '0.1.0',
              floatingLabelText: 'Version',
              disabled: true,
            })}
            tabIndex='2'
           />

          <Field
           name='keywords'
           component={textField.bind(null, {
             hintText: 'coderoad, react, js, etc',
             floatingLabelText: 'Keywords',
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
            label='Publish'
            secondary={true}
            disabled={invalid}
            onTouchTap={() => alert('Publish not yet implemented')}
          />
        </form>
      </Card>
    );
  }
}

export default reduxForm({
  form: 'tutorialPublish',
  validate,
})(TutorialPublish);
