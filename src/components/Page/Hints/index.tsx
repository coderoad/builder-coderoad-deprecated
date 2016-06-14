import * as React from 'react';
import {connect} from 'react-redux';
import {List, ListItem} from 'material-ui/List';
import FontIcon from 'material-ui/FontIcon';
import AddButton from '../AddButton';
import {tutorialHintAdd, editorMarkdownOpen} from '../../../actions';
import TextField from 'material-ui/TextField';

const styles = {
  text: {
    margin: '10px 15px',
  },
};

@connect(null, {editorMarkdownOpen})
export default class Hints extends React.Component<{
  hints: string[], taskPosition: number, addHint?: any, editorMarkdownOpen?: (content: string, index?: number) => Redux.ActionCreator
}, {
  text: string;
}> {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }
  handleChange(event) {
    this.setState({
      text: event.target.value,
    });
  }
  render() {
    const {hints, editorMarkdownOpen} = this.props;
    const {text} = this.state;
    return (
      <List>
        {!hints || !hints.length
          ? []
          : hints.map((hint, index) => (
            <ListItem
              key={index}
              secondaryText={
                <p>{index + 1}. {hint}</p>
              }
              onClick={editorMarkdownOpen.bind(this, hint, null)}/>
          ))
        }
        <TextField
          style={styles.text}
          hintText='Hint text'
          multiLine={true}
          value={text}
          onChange={this.handleChange.bind(this)}
        />

      </List>
    );
  }
}
