import * as React from 'react';
import {connect} from 'react-redux';
import {join} from 'path';
import {Tabs, Tab} from 'material-ui/Tabs';
import Add from 'material-ui/svg-icons/content/add';
import {pageSet, tutorialPageAdd, editorMarkdownOpen} from '../../actions';

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
  add: {
    color: 'rgb(0, 188, 212)',
  },
};

@connect(state => ({
    tutorial: state.tutorial,
}), dispatch => ({
    pageSet(title: string, index: number) {
      dispatch(pageSet(index));
      dispatch(editorMarkdownOpen(title, index));
    },
    pageAdd() { dispatch(tutorialPageAdd()); },
}))
export default class TopPanel extends React.Component<{
  tutorial?: CR.Tutorial, pageSet?: (index: number) => any, pageAdd?: () => any
}, {}> {
  render() {
    const {tutorial, pageSet, pageAdd} = this.props;

    // no tutorial or pages? no need for a tab bar
    if (!tutorial || !tutorial.pages) { return null; }

    return (
      <Tabs tabItemContainerStyle={styles.tabs} style={styles.all}>
         {tutorial.pages.map((page: CR.Page, index) => {
           return (
              <Tab
                style={styles.tab}
                key={index}
                label={page.title.substring(0, 10)}
                onClick={pageSet.bind(this, page.title, index)}
              />
           );
         })}
       <Tab
        style={Object.assign({}, styles.tab, styles.add)}
        label='+'
        onActive={pageAdd}
      />
     </Tabs>
   );
  }
}
