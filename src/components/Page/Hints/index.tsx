import * as React from 'react';
import {List, ListItem} from 'material-ui/List';

const Hints: React.StatelessComponent<{
  hints: string[]
}> = ({hints}) => (
  <List>
    {hints.map(hint => <ListItem secondaryText={<p>{hint}</p>} />)}
  </List>
);
export default Hints;
