import {PJ_SAVE, PJ_LOAD} from './types';
import readFile from '../utils/readFile';
import writeFile from '../utils/writeFile';
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

    case PJ_LOAD:
      const loadedPj = readFile(action.payload.dir, 'package.json');
      return !!loadedPj ? loadedPj : p;

    case PJ_SAVE:
      const {pj, dir} = action.payload;
      // if package.json exists, augment it
      const pjExists = readFile(dir, 'package.json');
      const nextPj: Tutorial.PJ = !!pjExists
        ? Object.assign({}, pjExists, pj)
        : pj;
      // sort package.json fields
      const content = sortPackageJson(JSON.stringify(nextPj, null, 2));
      writeFile(dir, 'package.json', content);
      return nextPj;

    default:
      return p;
  }
}
