import * as React from 'react';
import {connect} from 'react-redux';
import {List, ListItem} from 'material-ui/List';
import FontIcon from 'material-ui/FontIcon';
import AddButton from '../AddButton';
import {tutorialHintAdd} from '../../../actions';
import TextField from 'material-ui/TextField';

const styles = {
  text: {
    margin: '10px',
  },
};

@connect(null, dispatch => {
  return {
    addHint: () => dispatch(tutorialHintAdd(this.props.taskPosition, this.state.text))
  };
})
export default class Hints extends React.Component<{
  hints: string[], taskPosition: number, addHint?: any
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
    console.log(event);
    this.setState({
      text: event.target.value,
    });
  }
  render() {
    const {hints} = this.props;
    const {text} = this.state;
    return (
      <List>
        {!hints || !hints.length
          ? []
          : hints.map((hint, index) => (
            <ListItem secondaryText={
              <p>{index + 1}. {hint}</p>
            } />
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
