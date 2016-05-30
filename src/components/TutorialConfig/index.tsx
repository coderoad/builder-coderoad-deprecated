import * as React from 'react';
import {connect} from 'react-redux';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import {Card, CardHeader} from 'material-ui/Card'
import RaisedButton from 'material-ui/RaisedButton';
import {tutorialConfigSave, routeSet} from '../../actions';

const styles = {
  margin: '10px',
  padding: '30px 20px',
  textAlign: 'center',
};

@connect(null, dispatch => {
  return {
    save: (config: Tutorial.ConfigSet) => dispatch(tutorialConfigSave(config)),
    routeToInfo: () => dispatch(routeSet('tutorialInfo'))
  };
})
export default class TutorialConfig extends React.Component <{
  tutorialConfig: Tutorial.ConfigSet,
  save?: (config: Tutorial.ConfigSet) => any,
  routeToInfo?: () => any
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
  handleText(prop, event) {
    this.handleChange(prop, event.target.value);
  }
  handleSelect(prop, event, index, value) {
    this.handleChange(prop, value);
  }
  handleChange(prop, val) {
    const obj = {};
    obj[prop] = val;
    this.setState(Object.assign({}, this.state, obj));
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
          onChange={this.handleText.bind(this, 'name')}
        />
        <br />
        <SelectField
          floatingLabelText='Language'
          value={this.state.language}
          onChange={this.handleSelect.bind(this, 'language')}
        >
          <MenuItem
            key={1}
            value={'JS'}
            primaryText='JS'
          />
          <MenuItem
            key={2}
            value={'Python'}
            primaryText='Python'
          />
        </SelectField>
        <br />
        <SelectField
          floatingLabelText='Test Runner'
          value={this.state.runner}
          onChange={this.handleSelect.bind(this, 'runner')}
        >
          <MenuItem
            key={1}
            value={'mocha-coderoad'}
            primaryText='Mocha-CodeRoad'
          />
        </SelectField>
        <br />
        <br />
        <RaisedButton
          label='Save'
          primary={true}
          onTouchTap={this.save.bind(this)}
        />
        <RaisedButton
          label='Continue'
          secondary={true}
          onTouchTap={this.props.routeToInfo.bind(this)}
        />
      </Card>
    );
  }
}
