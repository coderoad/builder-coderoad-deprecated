import * as React from 'react';
import {connect} from 'react-redux';
import {resolve} from 'path';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import {Card, CardHeader} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import {pjSave, tutorialInit, routeSet} from '../../actions';
import languageItems from './languageItems';
import runnerItems from './runnerItems';

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

@connect(null, dispatch => {
  return {
    save: (pj: Tutorial.PJ) => dispatch(pjSave(pj)),
    routeToPage: () => {
      dispatch(tutorialInit());
      dispatch(routeSet('page'));
    }
  };
})
export default class TutorialConfig extends React.Component <{
  packageJson: any,
  save?: (pj: Tutorial.PJ) => any,
  routeToPage?: () => any
}, {
  pj: Tutorial.PJ
}> {
  constructor(props) {
    super(props);
    this.state = {
        pj: this.props.packageJson
    };
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
        this.setState({pj: Object.assign({}, this.state.pj, obj)});
        break;
      // config
      case 'language':
      case 'runner':
        const config = Object.assign({}, this.state.pj.config, obj);
        const pj = Object.assign({}, this.state.pj, { config });
        this.setState({pj});
        return;
      case 'repo':
        const repo = {
          repository: {
            type: 'git',
            url: prop
          },
          bugs: {
            url: resolve(prop, 'issues')
          }
        };
        this.setState({pj: Object.assign({}, this.state.pj, repo)});
        return;
    }
  }
  save() {
    this.props.save(this.state.pj);
  }
  render() {
    const {pj} = this.state;
    return (
      <Card style={styles.card}>
        <CardHeader
          title='Tutorial Configuration'
        />
        <TextField
          floatingLabelText='Tutorial Package Name'
          defaultValue={pj.name}
          onChange={this.handleText.bind(this, 'name')}
        />
        <br />
        <SelectField
          floatingLabelText='Language'
          value={pj.config.language}
          onChange={this.handleSelect.bind(this, 'language')}
        >
          {languageItems()}
        </SelectField>
        <br />
        <SelectField
          floatingLabelText='Test Runner'
          value={pj.config.runner}
          onChange={this.handleSelect.bind(this, 'runner')}
        >
          {runnerItems(pj.config.language)}
        </SelectField>
        <br />
        <RaisedButton
          style={styles.button}
          label='Save'
          primary={true}
          onTouchTap={this.save.bind(this)}
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
