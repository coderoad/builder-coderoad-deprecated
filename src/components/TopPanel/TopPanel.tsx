import {join} from 'path';
import * as React from 'react';
import {connect} from 'react-redux';

import {editorMarkdownOpen, pageSet, tutorialPageAdd} from '../../actions';
import {Tab, Tabs} from 'material-ui/Tabs';
import Add from 'material-ui/svg-icons/content/add';

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
}), {pageSet, editorMarkdownOpen, tutorialPageAdd})
export default class TopPanel extends React.Component<{
  tutorial?: CR.Tutorial,
  pageSet?: (index: number) => Redux.ActionCreator,
  editorMarkdownOpen?: (title: string, index: number) => Redux.ActionCreator,
  tutorialPageAdd?: () => Redux.ActionCreator,
}, {}> {
  public render() {
    const {tutorial} = this.props;

    // no tutorial or pages? no need for a tab bar
    if (!tutorial || !tutorial.pages) { return null; }

    return (
      <Tabs tabItemContainerStyle={styles.tabs} style={styles.all}>
         {tutorial.pages.map((page: CR.Page, index) => (
          <Tab
            style={styles.tab}
            key={index}
            label={page.title.substring(0, 10)}
            onClick={this.selectPage.bind(this, page.title, index)}
          />
         ))}
       {/*}<Tab
        style={Object.assign({}, styles.tab, styles.add)}
        label='+'
        onActive={tutorialPageAdd}
      />*/}
     </Tabs>
   );
  }
  private selectPage(title: string, index: number) {
    this.props.pageSet(index);
    this.props.editorMarkdownOpen(title, index);
  }
  private componentWillMount() {
    this.startErrorLog();
  }
  private startErrorLog() {
    window.onerror = (message, file, line, column, errorObject) => {
      column = column || (window.event && window.event.errorCharacter);
      const stack = errorObject ? errorObject.stack : null;

      const data = {
          message,
          file,
          line,
          column,
          errorStack: stack,
      };

      // call to server
      return false;
    };
  }
}
