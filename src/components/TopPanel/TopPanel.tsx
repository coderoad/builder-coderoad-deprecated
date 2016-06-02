import * as React from 'react';
import {connect} from 'react-redux';
import {Tabs, Tab} from 'material-ui/Tabs';
import Add from 'material-ui/svg-icons/content/add';
import {pageSet, tutorialPageAdd} from '../../actions';

const styles = {
  tabs: {
    marginRight: '400px',
  },
};

@connect(null, dispatch => {
  return {
    pageSet: (index: number) => dispatch(pageSet(index)),
    pageAdd: () => dispatch(tutorialPageAdd())
  };
})
export default class TopPanel extends React.Component<{
  tutorial: CR.Tutorial, pagePosition: number,
  pageSet?: (index: number) => any, pageAdd?: () => any
}, {}> {
  render() {
    const {tutorial, pagePosition, pageSet, pageAdd} = this.props;

    // no tutorial or pages? no need for a tab bar
    if (!tutorial || !tutorial.pages) { return null; }

    return (
      <Tabs style={styles.tabs}>
         {tutorial.pages.map((page: CR.Page, index) => {
           return (
              <Tab
                key={index.toString()}
                label={page.title.substring(0, 10)}
                onClick={pageSet.bind(this, index)}
              />
           );
         })}
       <Tab icon={<Add onClick={pageAdd}/>} />
     </Tabs>
   );
  }
}
