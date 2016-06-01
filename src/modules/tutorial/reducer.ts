import {TUTORIAL_INIT} from './types';
import createTutorial from './utils/create';

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
      const {name} = action.payload;
      createTutorial(name);
      if (_tutorial.title.length < 1) {
        t = Object.assign({}, t, { title: name });
      }
      return t;
    default:
      return t;
  }
}
