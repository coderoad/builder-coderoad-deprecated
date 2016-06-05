import * as React from 'react';
import {List, ListItem} from 'material-ui/List';
import FontIcon from 'material-ui/FontIcon';
import AddButton from '../AddButton';

const styles = {
  add: {
    textAlign: 'center',
  },
};

const Hints: React.StatelessComponent<{
  hints: string[]
}> = ({hints}) => (
  <List>
    {!hints || !hints.length
      ? []
      : hints.map((hint, index) => (
        <ListItem secondaryText={
          <p>{index + 1}. {hint}</p>
        } />
      ))
    }
    <AddButton />
  </List>
);
export default Hints;
