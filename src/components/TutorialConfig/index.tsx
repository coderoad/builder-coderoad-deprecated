import * as React from 'react';
import {connect} from 'react-redux';
import {resolve} from 'path';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import {Card, CardHeader} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import {pjSave, tutorialInit, routeSet} from '../../actions';
import languageItems from './languageItems';
import runnerItems from './runnerItems';
import Top from '../TopPanel/Top';
import {reduxForm} from 'redux-form';
import {validateName} from 'coderoad-cli';
import TextField from 'material-ui/TextField';

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

const fields = ['name', 'language', 'runner'];

const validate = values => {
  const errors: ConfigForm = {};
  if (!name) {
    errors.name = 'Required';
  } else if (!validateName(name)) {
    errors.name = 'Invalid "coderoad-*" name';
  }
  if (!values.language) {
    errors.language = 'Required';
  }
  if (!values.runner) {
    errors.runner = 'Required';
  }
  return errors;
};

@connect(state => ({
  packageJson: state.packageJson,
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
  routeToPage?: () => any
}, {
  name: string, language: string, runner: string
}> {
  constructor(props) {
    super(props);
    const {name, config} = this.props.packageJson;
    this.state = {
      name,
      language: config.language,
      runner: config.runner,
    };
  }
  componentDidMount() {
    Top.toggle(false);
  }
  handleText(prop, event, value) {
    const next = {};
    next[prop] = value;
    this.setState(Object.assign({}, this.state, next));
  }
  handleSelect(prop, event, index, value) {
    const next = {};
    next[prop] = value;
    this.setState(Object.assign({}, this.state, next));
  }
  submit() {
    const {name, language, runner} = this.state;
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
    const {name, language, runner} = this.state;
    return (
      <Card style={styles.card}>
        <CardHeader
          title='Tutorial Configuration'
        />

        <TextField
          className='native-key-bindings'
          value={name}
          onChange={this.handleText.bind(this, 'name')}
        />

        <br />

        <SelectField
          floatingLabelText='Language'
          value={language}
          {...language}
          onChange={this.handleSelect.bind(this, 'language')}
        >
          {languageItems()}
        </SelectField>
        <br />
        <SelectField
          floatingLabelText='Test Runner'
          value={runner}
          {...runner}
          onChange={this.handleSelect.bind(this, 'runner')}
        >
          {runnerItems(language)}
        </SelectField>

        <br />

        <RaisedButton
          type='submit'
          style={styles.button}
          label='Save'
          primary={true}
          onTouchTap={this.submit.bind(this)}
        />
        <RaisedButton
          style={styles.button}
          label='Continue'
          secondary={true}
          onTouchTap={this.props.routeToPage.bind(this)}
        />
      </Card>
    );
  }
}

export default reduxForm({
  form: 'config',
  fields,
})(TutorialConfig);
