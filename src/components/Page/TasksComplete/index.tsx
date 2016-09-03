import * as React from 'react';
import {connect} from 'react-redux';

import {editorMarkdownOpen} from '../../../actions';
import {pageSelector} from '../../../selectors';
import {Markdown} from '../../index';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import {cyan500, grey100} from 'material-ui/styles/colors';

const styles = {
  card: {
    backgroundColor: cyan500,
    margin: '5px',
  },
  text: {
    color: grey100,
    fontSize: '1.1em'
  },
};

@connect(state => ({
  page: pageSelector(state),
}), {editorMarkdownOpen})
export default class TasksComplete extends React.Component<{
  page?: CR.Page,
  editorMarkdownOpen?: (content: string, index?: number) => Redux.ActionCreator
}, {}> {
  public render() {
    const {page, editorMarkdownOpen} = this.props;
    return (
      <Card style={styles.card}>
        <CardHeader
          actAsExpander={true}
          showExpandableButton={true}
        />
        <CardText expandable={true}>
          <div onClick={editorMarkdownOpen.bind(this, '@onPageComplete', null)}>
            <Markdown style={styles.text}>
              {page.onPageComplete || 'add on page complete message'}
            </Markdown>
          </div>
        </CardText>
      </Card>
    );
  }
}
