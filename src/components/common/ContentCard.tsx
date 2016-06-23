import * as React from 'react';
import {Markdown} from '../index';
import {Card, CardHeader, CardText} from 'material-ui/Card';

const styles = {
  margin: '5px',
};

const ContentCard: React.StatelessComponent<{
  title: string, content: string, open?: boolean
}> = ({title, content, open}) => (
  <Card
    style={styles}
    initiallyExpanded={open || false}
  >
    {title
      ? <CardHeader
        title={title}
        actAsExpander={true}
        showExpandableButton={true}
      /> : null}
    <CardText expandable={true}>
      <Markdown>{content}</Markdown>
    </CardText>
  </Card>
);
export default ContentCard;
