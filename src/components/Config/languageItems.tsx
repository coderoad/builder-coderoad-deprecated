import * as React from 'react';
import MenuItem from 'material-ui/MenuItem';
import {tutorialConfigOptions} from 'core-coderoad';

export default function runnerItems() {
  return Object.keys(tutorialConfigOptions).map((language, index) => {
    return (
      <MenuItem
        key={index}
        value={language}
        primaryText={language}
      />
    );
  });
}
