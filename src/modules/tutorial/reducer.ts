import {TUTORIAL_INIT, TUTORIAL_LOAD} from './types';
import {create} from 'coderoad-cli';
import {readFileSync} from 'fs';
import {join} from 'path';

const _tutorial = {
  title: '',
  pages: [{
    file: './01/page-01.md',
    title: 'Page One',
    description: 'page one description',
    tasks: [{
      tests: ['./01/01.js'],
      description: 'first task',
      hints: ['hint 1', 'hint 2']
    }]
  }]
};

export default function tutorial(t = _tutorial, action: Action) {
  switch (action.type) {

    case TUTORIAL_INIT:
      const {dir, name} = action.payload;
      create(dir, name);
      if (_tutorial.title.length < 1) {
        t = Object.assign({}, t, { title: name });
      }
      return t;

    case TUTORIAL_LOAD:
      const {dir} = action.payload;
      const data = JSON.parse(readFileSync(join(dir, 'coderoad.json'), 'utf8'));
      // TODO: validate coderoad.json data

      return data;

    default:
      return t;
  }
}
