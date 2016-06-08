import * as React from 'react';
import {connect} from 'react-redux';
import {Card, CardText, CardHeader} from 'material-ui/Card';
import {Markdown} from '../../index';
import {cyan500, grey100} from 'material-ui/styles/colors';
import {editorMarkdownOpen} from '../../../actions';

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

@connect(null, dispatch => ({
  markdownOpen: () => dispatch(editorMarkdownOpen(null, '@onPageComplete')),
}))
export default class TasksComplete extends React.Component<{
  page: CR.Page, markdownOpen?: any
}, {}> {
  render() {
    const {page, markdownOpen} = this.props;
    return (
      <Card style={styles.card}>
        <CardHeader
          actAsExpander={true}
          showExpandableButton={true}
        />
        <CardText expandable={true}>
          <div onClick={markdownOpen}>
            <Markdown style={styles.text}>
              {page.onPageComplete || 'add on page complete message'}
            </Markdown>
          </div>
        </CardText>
      </Card>
    );
  }
}
