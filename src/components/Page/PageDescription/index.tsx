import * as React from 'react';
import {connect} from 'react-redux';
import {Markdown} from '../../index';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import {editorMarkdownOpen} from '../../../actions';
import {pageSelector} from 'core-coderoad/lib/selectors';

const styles = {
  card: {
    margin: '5px',
  },
};

@connect(state => ({
    page: pageSelector(state),
}), dispatch => ({
    markdownOpen(content: string) {
      dispatch(editorMarkdownOpen(null, content));
    },
}))
export default class PageDescription extends React.Component<{
  page?: CR.Page, markdownOpen?: (content: string) => any
}, {}> {
  render() {
    const {page, markdownOpen} = this.props;
    const {title, description} = page;
    const contentArray = description.split('\n\n');
    return (
      <Card
        style={styles.card}
        initiallyExpanded={true}
      >
        {title
          ? <CardHeader
            title={title}
            actAsExpander={true}
            showExpandableButton={true}
          /> : null}
        <CardText expandable={true}>
          {contentArray.map((c: string, index) => (
            <Markdown
              key={index}
              onClick={markdownOpen.bind(this, c)}
            >
            {c}
            </Markdown>
          ))}
        </CardText>
      </Card>
    );
  }
}
