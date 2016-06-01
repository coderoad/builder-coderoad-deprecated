import * as React from 'react';
import {connect} from 'react-redux';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import {Card, CardHeader} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import {tutorialConfigSave, routeSet} from '../../actions';
import languageItems from './languageItems';
import runnerItems from './runnerItems';

const styles = {
  margin: '10px',
  padding: '30px 20px',
  textAlign: 'center',
};

const buttonStyles = {
  margin: '30px 10px 20px 10px',
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
    this.state = this.props.tutorialConfig;
  }
  handleText(prop, event) {
    this.handleChange(prop, event.target.value);
  }
  handleSelect(prop, event, index, value) {
    this.handleChange(prop, value);
  }
  handleChange(prop: string, val: any) {
    const obj = {};
    obj[prop] = val;
    let target = null;
    switch (prop) {
      // base
      case 'name':
        this.setState(Object.assign({}, this.state, obj));
        break;
      // config
      case 'language':
      case 'runner':
        const config = Object.assign({}, this.state.config, obj);
        this.setState(Object.assign({}, this.state, { config }));
        return;
      case 'repo':
        const repo = {
          repository: {
            type: 'git',
            url: prop
          },
          bugs: {
            url: prop + '/issues'
          }
        };
        this.setState(Object.assign({}, this.state, repo));
        return;
    }
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
          defaultValue={this.state.name}
          onChange={this.handleText.bind(this, 'name')}
        />
        <br />
        <SelectField
          floatingLabelText='Language'
          value={this.state.config.language}
          onChange={this.handleSelect.bind(this, 'language')}
        >
          {languageItems()}
        </SelectField>
        <br />
        <SelectField
          floatingLabelText='Test Runner'
          value={this.state.config.runner}
          onChange={this.handleSelect.bind(this, 'runner')}
        >
          {runnerItems(this.state.config.language)}
        </SelectField>
        <br />
        <RaisedButton
          style={buttonStyles}
          label='Save'
          primary={true}
          onTouchTap={this.save.bind(this)}
        />
        <RaisedButton
          style={buttonStyles}
          label='Continue'
          secondary={true}
          onTouchTap={this.props.routeToInfo.bind(this)}
        />
      </Card>
    );
  }
}
