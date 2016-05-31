import * as React from 'react';
import {connect} from 'react-redux';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import {Card, CardHeader} from 'material-ui/Card'
import RaisedButton from 'material-ui/RaisedButton';
import {tutorialInfoSave, routeSet} from '../../actions';

const styles = {
  margin: '10px',
  padding: '30px 20px',
  textAlign: 'center',
};

const buttonStyles = {
  margin: '30px 10px 20px 10px',
};

  // name: '',
  // description: '',
  // version: ''

@connect(null, dispatch => {
  return {
    save: (config: Tutorial.ConfigSet) => dispatch(tutorialConfigSave(config)),
    routeToTutorial: () => dispatch(routeSet('page'))
  };
})
export default class TutorialInfo extends React.Component<{
  tutorialInfo: Tutorial.Info, save?: any, routeToTutorial?: any
}, {
  name: string, description: string, version: string
}> {
  constructor(props) {
    super(props);
    this.state = this.props.tutorialInfo;
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
          title='Tutorial Info'
        />
        <TextField
          floatingLabelText='Title'
          defaultValue={this.state.name}
          onChange={this.handleText.bind(this, 'name')}
        />
        <br />
        <TextField
          floatingLabelText='Description'
          defaultValue={this.state.description}
          onChange={this.handleText.bind(this, 'description')}
        />
        <br />
        <TextField
          floatingLabelText='Version'
          defaultValue={this.state.version.join('.')}
          disabled={true}
          onChange={this.handleText.bind(this, 'version')}
        />
        <br />
        <TextField
          floatingLabelText='Keywords'
          defaultValue={this.state.keywords.join(', ')}
          multiLine={true}
          onChange={this.handleText.bind(this, 'keywords')}
        />
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
          onTouchTap={this.props.routeToTutorial.bind(this)}
        />
      </Card>
    );
  }
}
