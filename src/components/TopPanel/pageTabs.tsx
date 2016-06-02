import * as React from 'react';
import {Tab} from 'material-ui/Tabs';

const styles = {};

export default function pageTabs(tutorial: CR.Tutorial) {
  console.log('tut', tutorial);
  if (!tutorial || !tutorial.pages) { return null; }
  return tutorial.pages.map((page: CR.Page) => {
    return (
      <Tab
        label={page.title.substring(0, 10)}
      />
    );
  });
}
