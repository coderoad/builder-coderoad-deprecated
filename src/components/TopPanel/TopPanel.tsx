import * as React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import Add from 'material-ui/svg-icons/content/add';
import pageTabs from './pageTabs';

const styles = {
  tabs: {
    marginRight: '400px',
  },
};

const TopPanel: React.StatelessComponent<{
  tutorial: CR.Tutorial
}> = ({tutorial}) => (
   <Tabs style={styles.tabs}>
    {pageTabs(tutorial)}
    <Tab icon={<Add />} />
  </Tabs>
);
export default TopPanel;
