import {PJ_SAVE} from './types';
import {readPackageJson, writePackageJson} from './utils/packageJson';
import {sortPackageJson} from 'sort-package-json';

const _pj: Tutorial.PJ = {
  name: 'coderoad-',
  version: '0.1.0',
  author: '',
  description: '',
  main: 'coderoad.json',
  files: ['coderoad.json', 'tutorial'],
  keywords: ['coderoad', 'tutorial'],
  config: {
    language: 'JS',
    runner: 'mocha-coderoad',
    runnerOptions: {}
  },
  engines: {
    node : '>=0.10.3'
  }
};

export default function packageJson(
  p = _pj, action: Action
): Tutorial.PJ {
  switch (action.type) {

    case PJ_SAVE:
      const {pj, dir} = action.payload;
      // if package.json exists, augment it
      const pjExists = readPackageJson(dir);
      const nextPj: Tutorial.PJ = !!pjExists
        ? Object.assign({}, pjExists, pj)
        : pj;
      // sort package.json fields
      const content = sortPackageJson(JSON.stringify(nextPj, null, 2));
      writePackageJson(dir, content);
      return nextPj;

    default:
      return p;
  }
}
