import * as React from 'react';
import MenuItem from 'material-ui/MenuItem';
import tutorialConfigOptions from 'core-coderoad/lib/options';

export default function runnerItems(language: string) {
  return tutorialConfigOptions[language].runners.map((runner, index) => {
    return (
      <MenuItem
        key={index}
        value={runner}
        primaryText={runner}
      />
    );
  });
}
