import * as React from 'react';
import {connect} from 'react-redux';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import {Card, CardHeader} from 'material-ui/Card'
import RaisedButton from 'material-ui/RaisedButton';
import {tutorialConfigSave} from '../../actions';
  // name: '',
  // repo: '',
  // language: '',
  // runner: '',
  // runnerOptions: {}

const styles = {
  margin: '10px',
  padding: '30px 20px',
  textAlign: 'center',
};

@connect(null, dispatch => {
  return {
    save: (config: Tutorial.ConfigSet) => dispatch(tutorialConfigSave(config))
  };
})
export default class TutorialConfig extends React.Component <{
  tutorialConfig: Tutorial.ConfigSet,
  save?: (config: Tutorial.ConfigSet) => any;
}, {
  name: string, repo: string, language: string,
  runner: string, runnerOptions?: Object
}> {
  constructor(props) {
    super(props);
    this.state = {
      name: 'coderoad-',
      repo: '',
      language: 'JS',
      runner: 'mocha-coderoad',
      runnerOptions: {}
    };
  }
  handleChange(value, event) {
    const obj = {};
    obj[value] = event.target.value;
    this.setState(
      Object.assign({}, this.state, obj)
    );
  }
  save() {
    this.props.save(this.state);
  }
  render() {
    return (
      <Card style={styles}>
        <CardHeader
          title='Tutorial Configuration'
        />
        <TextField
          floatingLabelText='Tutorial Package Name'
          value={this.state.name}
          onChange={this.handleChange.bind(this, 'name', event)}
        />
        <br />
        <SelectField
          floatingLabelText='Language'
          value={this.state.language}
          onChange={this.handleChange.bind(this, 'language', event)}
        >
          <MenuItem value={'JS'} primaryText='JS' />
          <MenuItem value={'Python'} primaryText='Python' />
        </SelectField>
        <br />
        <SelectField
          floatingLabelText='Test Runner'
          value={this.state.runner}
          onChange={this.handleChange.bind(this, 'runner', event)}
        >
          <MenuItem value={'mocha-coderoad'} primaryText='Mocha-CodeRoad' />
        </SelectField>
        <br />
        <br />
        <RaisedButton label='Save' primary={true} onTouchTap={this.save.bind(this)}/>
      </Card>
    );
  }
}
