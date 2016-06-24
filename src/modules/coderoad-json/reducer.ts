import {CJ_SAVE, CJ_LOAD} from './types';
import readFile from '../utils/readFile';
import writeFile from '../utils/writeFile';

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

export default function coderoadJson(
  p = _pj, action: Action
): Tutorial.PJ {
  switch (action.type) {

    case CJ_LOAD:
      const loadedCj = readFile(action.payload.dir, 'coderoad.json');
      return !!loadedCj ? loadedCj : p;

    case CJ_SAVE:
      const {pj, dir} = action.payload;
      // if package.json exists, augment it
      const cjExists = readFile(dir, 'coderoad.json');
      const nextCj: Tutorial.PJ = !!cjExists
        ? Object.assign({}, cjExists, pj)
        : pj;
      // sort package.json fields
      const content = JSON.stringify(nextCj, null, 2);
      writeFile(dir, 'coderoad.json', content);
      return nextCj;

    default:
      return p;
  }
}
