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
export default class TutorialInfo extends React.Component<{
  packageJson?: any, save?: any, routeToTutorial?: any
}, {
  description: string, version: string, keywords: string[]
}> {
  constructor(props) {
    super(props);
    const {description, version, keywords} = this.props.packageJson;
    this.state = {
      description: description || '',
      version: version || '0.1.0',
      keywords: keywords || [],
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
  submit() {
    const {description, version, keywords} = this.state;

    // verify
    // TODO: Verify

    // save
    this.props.save(Object.assign(
      {},
      this.props.packageJson,
      { description, version, keywords}
    ));
  }
  render() {
    const {description, version, keywords} = this.state;
    return (
      <Card style={styles.card}>
        <CardHeader
          title='Tutorial Info'
        />
        <TextField
          className='native-key-bindings'
          floatingLabelText='Description'
          defaultValue={description}
          onChange={this.handleText.bind(this, 'description')}
        />
        <br />
        <TextField
          className='native-key-bindings'
          floatingLabelText='Version'
          defaultValue={version}
          disabled={true}
          onChange={this.handleText.bind(this, 'version')}
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
          onTouchTap={this.submit.bind(this)}
        />
        <RaisedButton
          style={styles.button}
          label='Continue'
          secondary={true}
          onTouchTap={this.props.routeToTutorial.bind(this)}
        />
      </Card>
    );
  }
}
