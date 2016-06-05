import * as React from 'react';
import {connect} from 'react-redux';
import {join} from 'path';
import {Tabs, Tab} from 'material-ui/Tabs';
import Add from 'material-ui/svg-icons/content/add';
import {pageSet, tutorialPageAdd, editorOpenPage} from '../../actions';

const styles = {
  all: {
    marginRight: '400px',
    height: '33px',
    top: '-15px',
    position: 'relative',
  },
  tabs: {
    height: '33px',
    backgroundColor: 'black',
  },
  tab: {
    fontSize: '12px',
  },
};

@connect(null, dispatch => {
  return {
    pageSet: (index: number) => {
      dispatch(pageSet(index));
      dispatch(editorOpenPage(index));
    },
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
      <Tabs tabItemContainerStyle={styles.tabs} style={styles.all}>
         {tutorial.pages.map((page: CR.Page, index) => {
           return (
              <Tab
                style={styles.tab}
                key={index.toString()}
                label={page.title.substring(0, 10)}
                onClick={pageSet.bind(this, index)}
              />
           );
         })}
       <Tab
        style={styles.tab}
        label='+'
      />
     </Tabs>
   );
  }
}
