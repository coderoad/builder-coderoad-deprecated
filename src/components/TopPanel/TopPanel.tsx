import * as React from 'react';
import {connect} from 'react-redux';
import {Tabs, Tab} from 'material-ui/Tabs';
import Add from 'material-ui/svg-icons/content/add';
import pageTabs from './pageTabs';

const styles = {
  tabs: {
    marginRight: '400px',
  },
};

@connect(({tutorial}) => {
  return { tutorial };
})
export default class TopPanel extends React.Component<{
  tutorial?: CR.Tutorial
}, {}> {
  render() {
    return (
      <Tabs style={styles.tabs}>
       {pageTabs(this.props.tutorial)}
       <Tab icon={<Add />} />
     </Tabs>
   );
  }
}
