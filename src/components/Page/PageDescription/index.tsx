import * as React from 'react';
import {Markdown} from '../../index';
import {Card, CardHeader, CardText} from 'material-ui/Card';

const styles = {
  margin: '5px'
};

const PageDescription: React.StatelessComponent<{
  title: string, content: string, open?: boolean, click: any
}> = ({title, content, open, click}) => {
  const contentArray = content.split('\n\n');
  return (
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
        {contentArray.map((c: string, index) => (
          <Markdown
            key={index.toString()}
            onClick={click.bind(this, c)}
          >
          {c}
          </Markdown>
        ))}
      </CardText>
    </Card>
  );
};
export default PageDescription;
