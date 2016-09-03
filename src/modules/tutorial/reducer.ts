import {readFileSync} from 'fs';
import {join} from 'path';

import readFile from '../utils/readFile';
import writeFile from '../utils/writeFile';
import {
  TUTORIAL_ACTION_ADD, TUTORIAL_BUILD, TUTORIAL_HINT_ADD, TUTORIAL_INIT,
  TUTORIAL_LOAD, TUTORIAL_PAGE_ADD, TUTORIAL_PUBLISH, TUTORIAL_TASK_ADD
} from './types';
import pageGet from './utils/pageGet';
import taskGet from './utils/taskGet';
import taskUpdate from './utils/taskUpdate';
import {build, create} from 'coderoad-cli';

const _tutorial: Tutorial.Output = {
  info: {
    title: '',
    description: '',
  },
  pages: [].concat(pageGet(0))
};

export default function tutorial(t = _tutorial, action: Action): Tutorial.Output {
  switch (action.type) {

    case TUTORIAL_INIT:
      create(action.payload);
      if (t.info.title.length < 1) {
        // no title? save packageJson name as title
        const info = Object.assign({}, t.info, { title: name });
        t = Object.assign({}, t, {info});
      }
      return t;

    case TUTORIAL_BUILD:
      // run CLI build to create a new coderoad.json file
      build({
        dir: action.payload.dir,
        filePath: join('tutorial', 'tutorial.md'),
      });
      return t;

    case TUTORIAL_LOAD:
      const loadedCj = readFile(action.payload.dir, 'coderoad.json');
      return !!loadedCj ? loadedCj : t;
      // TODO: validate coderoad.json data

    case TUTORIAL_PAGE_ADD:
      // add a new page template
      const pages = t.pages.concat(pageGet(t.pages.length));
      return Object.assign({}, t, {pages});

    case TUTORIAL_TASK_ADD:
      const {pagePosition} = action.payload;
      // add task
      const tasks = t.pages[pagePosition].tasks;
      tasks.push(taskGet(pagePosition, tasks.length));
      // TODO: remove mutation, use merge`
      // update page tasks
      const updatedPage = Object.assign({}, t.pages[pagePosition], {tasks});
      t.pages[pagePosition] = updatedPage;
      // update pages
      return Object.assign({}, t);

    case TUTORIAL_ACTION_ADD:
      return taskUpdate(t, action.payload.pagePosition, action.payload.taskPosition, 'actions', action.payload.tutorialAction);

    case TUTORIAL_HINT_ADD:
      return taskUpdate(t, action.payload.pagePosition, action.payload.taskPosition, 'hints', action.payload.hint);

    case TUTORIAL_PUBLISH:
      const {type} = action.payload;
      alert(`Currently not implemented.
In a terminal, run '>apm publish ${type}'.`);
      return t;

    default:
      return t;
  }
}
