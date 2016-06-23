import * as React from 'react';
import {connect} from 'react-redux';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import MenuItem from 'material-ui/MenuItem';
import {Card, CardHeader} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import {validatePj, pjSave, pjLoad, routeSet, editorPjOpen} from '../../actions';
import {topElement} from '../TopPanel';
import textField from '../Form/textField';
import ErrorIcon from 'material-ui/svg-icons/alert/error';
import WarningIcon from 'material-ui/svg-icons/alert/warning';
import {pink500, amber500} from 'material-ui/styles/colors';

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
  validation: state.validation,
}), {pjLoad, editorPjOpen, validatePj})
export default class TutorialPublish extends React.Component<{
  validation?: Validation.Object,
  pjLoad?: () => Redux.ActionCreator,
  validatePj?: () => Redux.ActionCreator,
  editorPjOpen?: () => Redux.ActionCreator,
}, {}> {
  componentWillMount() {
    this.props.pjLoad();
    this.props.editorPjOpen();
  }
  componentDidMount() {
    topElement.toggle(false);
    this.validate();
  }
  validate() {
    this.props.pjLoad();
    this.props.validatePj();
  }
  render() {
    const {validation} = this.props;
    return (
      <Card style={styles.card}>
        <CardHeader
          title='Tutorial Info'
        />
         <Table
            fixedHeader={true}
            selectable={false}
          >
          <TableHeader
            displaySelectAll={false}
            adjustForCheckbox={false}
          >
            <TableRow>
              <TableHeaderColumn>Status</TableHeaderColumn>
              <TableHeaderColumn>Field</TableHeaderColumn>
              <TableHeaderColumn>Description</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody
             displayRowCheckbox={false}
          >
            {validation.errors.map((field, index) => (
              <TableRow key={index}>
                <TableRowColumn>
                  <ErrorIcon color={pink500}/>
                </TableRowColumn>
                <TableRowColumn>{field.name}</TableRowColumn>
                <TableRowColumn>{field.example}</TableRowColumn>
              </TableRow>
            ))}
            {validation.warnings.map((field, index) => (
              <TableRow key={index}>
                <TableRowColumn>
                  <WarningIcon color={amber500}/>
                </TableRowColumn>
                <TableRowColumn>{field.name}</TableRowColumn>
                <TableRowColumn>{field.example}</TableRowColumn>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <RaisedButton
          style={styles.button}
          label='Validate'
          primary={true}
          onTouchTap={this.validate.bind(this)}
        />
        <RaisedButton
          style={styles.button}
          label='Publish'
          secondary={true}
          disabled={validation.errors.length === 0}
          onTouchTap={() => alert('Publish not yet implemented')}
        />
      </Card>
    );
  }
}
