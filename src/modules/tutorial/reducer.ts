import {
  TUTORIAL_INIT, TUTORIAL_BUILD, TUTORIAL_LOAD,
  TUTORIAL_PAGE_ADD, TUTORIAL_TASK_ADD, TUTORIAL_HINT_ADD, TUTORIAL_ACTION_ADD
} from './types';
import {create, build} from 'coderoad-cli';
import {readFileSync} from 'fs';
import {join} from 'path';
import taskUpdate from './utils/taskUpdate';
import pageGet from './utils/pageGet';
import taskGet from './utils/taskGet';

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
      const {dir, name} = action.payload;
      create(dir, name);
      if (t.info.title.length < 1) {
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

    default:
      return t;
  }
}
