import * as React from 'react';
import {connect} from 'react-redux';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import MenuItem from 'material-ui/MenuItem';
import {Card, CardHeader} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import {pjSave, pjLoad, routeSet, editorPjOpen} from '../../actions';
import {topElement} from '../TopPanel';
import textField from '../Form/textField';

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

const fields = [{
  name: 'author(s)',
  example: 'Shawn McKay <my@email.com>',
  status: true,
}, {
  name: 'keywords',
  example: '["CodeRoad", "JS", "React"]',
  status: false,
}];

@connect(state => ({
  packageJson: state.packageJson,
}), {pjLoad, pjSave, editorPjOpen})
export default class TutorialPublish extends React.Component<{
  packageJson?: any, pjSave?: (pj: PackageJson) => any,
  pjLoad?: () => Redux.ActionCreator,
  editorPjOpen?: () => Redux.ActionCreator,
}, {}> {
  componentWillMount() {
    this.props.pjLoad();
    this.props.editorPjOpen();
  }
  componentDidMount() {
    topElement.toggle(false);
  }
  render() {
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
              <TableHeaderColumn>Field</TableHeaderColumn>
              <TableHeaderColumn>Description</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody
             displayRowCheckbox={false}
          >
            {fields.map((field, index) => (
              <TableRow key={index}>
                <TableRowColumn>{field.name}</TableRowColumn>
                <TableRowColumn>{field.example}</TableRowColumn>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <RaisedButton
          style={styles.button}
          label='Publish'
          secondary={true}
          disabled={true}
          onTouchTap={() => alert('Publish not yet implemented')}
        />
      </Card>
    );
  }
}
