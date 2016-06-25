import * as React from 'react';
import MenuItem from 'material-ui/MenuItem';
import {tutorialConfigOptions} from 'core-coderoad';

export default function runnerItems() {
  // map over languages (JS, Python, etc.)
  return Object.keys(tutorialConfigOptions).map((lang, lIndex) => {
    // map over runners
    return tutorialConfigOptions[lang].runners.map((runner, rIndex) => {
      const val = `${lang}: ${runner}`;
      return (
        <MenuItem
          key={`${lIndex}.${rIndex}`}
          value={val}
          primaryText={val}
        />
      );
    });
  });
}
