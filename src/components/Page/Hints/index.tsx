import * as React from 'react';
import {List, ListItem} from 'material-ui/List';
import FontIcon from 'material-ui/FontIcon';

const Hints: React.StatelessComponent<{
  hints: string[]
}> = ({hints}) => (
  <List>
    {hints.map((hint, index) => <ListItem secondaryText={
      <p>{index + 1}. {hint}</p>
    } />)}
  </List>
);
export default Hints;
