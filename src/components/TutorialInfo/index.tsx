import * as React from 'react';
import {connect} from 'react-redux';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import {Card, CardHeader} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import {pjSave, routeSet} from '../../actions';
import Top from '../TopPanel/Top';

const styles = {
  margin: '10px',
  padding: '30px 20px',
  textAlign: 'center',
};

const buttonStyles = {
  margin: '30px 10px 20px 10px',
};

@connect(state => ({
  packageJson: state.packageJson,
}), dispatch => ({
  save: (pj: Tutorial.PJ) => dispatch(pjSave(pj)),
  routeToTutorial: () => dispatch(routeSet('page'))
}))
export default class TutorialInfo extends React.Component<{
  packageJson?: any, save?: any, routeToTutorial?: any
}, {
  pj: Tutorial.PJ
}> {
  constructor(props) {
    super(props);
    this.state = {
      pj: this.props.packageJson
    };
  }
  componentDidMount() {
    Top.toggle(false);
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
    this.setState({pj: Object.assign({}, this.state, obj)});
  }
  save() {
    this.props.save(this.state.pj);
  }
  render() {
    return (
      <Card style={styles}>
        <CardHeader
          title='Tutorial Info'
        />
        <TextField
          floatingLabelText='Title'
          defaultValue={this.state.pj.name}
          onChange={this.handleText.bind(this, 'name')}
        />
        <br />
        <TextField
          floatingLabelText='Description'
          defaultValue={this.state.pj.description}
          onChange={this.handleText.bind(this, 'description')}
        />
        <br />
        <TextField
          floatingLabelText='Version'
          defaultValue={this.state.pj.version}
          disabled={true}
          onChange={this.handleText.bind(this, 'version')}
        />
        <br />
        <TextField
          floatingLabelText='Keywords'
          defaultValue={this.state.pj.keywords.join(', ')}
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
