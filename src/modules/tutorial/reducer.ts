import {
  TUTORIAL_INIT, TUTORIAL_BUILD, TUTORIAL_LOAD,
  TUTORIAL_PAGE_ADD, TUTORIAL_TASK_ADD, TUTORIAL_HINT_ADD, TUTORIAL_ACTION_ADD
} from './types';
import {create, build} from 'coderoad-cli';
import {readFileSync} from 'fs';
import {join} from 'path';
// import taskUpdate from './utils/taskUpdate';
import pageNew from './utils/pageNew';

const _tutorial: CR.Tutorial = {
  info: {
    title: '',
    description: '',
  },
  pages: [].concat(pageNew(0))
};

export default function tutorial(t = _tutorial, action: Action): CR.Tutorial {
  switch (action.type) {

    case TUTORIAL_INIT:
      const {dir, name} = action.payload;
      create(dir, name);
      if (_tutorial.info.title.length < 1) {
        // no title? save packageJson name as title
        const info = Object.assign({}, t.info, { title: name });
        t = Object.assign({}, t, {info});
      }
      return t;

    case TUTORIAL_BUILD:
      // run CLI build to create a new coderoad.json file
      build(action.payload.dir, join('tutorial', 'tutorial.md'));
      return t;

    case TUTORIAL_LOAD:
      // load data from coderoad.json
      const data = JSON.parse(readFileSync(
        join(action.payload.dir, 'coderoad.json'), 'utf8')
      );
      // TODO: validate coderoad.json data
      return data;

    case TUTORIAL_PAGE_ADD:
      // add a new page template
      const pages = t.pages.concat(pageNew(t.pages.length));
      return Object.assign({}, t, {pages});

    // case TUTORIAL_ADD_HINT:
    //   const {pagePosition, taskPosition} = action.payload;
    //   t.pages[pagePosition].tasks[taskPosition].hints.concat('')

    default:
      return t;
  }
}
