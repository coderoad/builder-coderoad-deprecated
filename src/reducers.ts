import {combineReducers} from 'redux';

// module reducers
import {page, pagePosition, tasks, taskTests} from './modules/page';
import {reducer as tutorialConfig} from './modules/tutorial-config';
import {reducer as tutorialInfo} from './modules/tutorial-info';

// core reducers
import {reducer as alert} from 'core-coderoad/lib/alert';
import {reducer as editor, dir} from 'core-coderoad/lib/editor';
import {reducer as route} from 'core-coderoad/lib/route';
import {checks, packageJson} from 'core-coderoad/lib/setup';
import {reducer as tutorial} from 'core-coderoad/lib/tutorial';
import {reducer as tutorials} from 'core-coderoad/lib/tutorials';
import {reducer as windowToggle} from 'core-coderoad/lib/window';

export default combineReducers({
  alert, checks, editor, dir,
  packageJson, page, pagePosition, route, tasks,
  tutorial, tutorials, tutorialConfig, tutorialInfo,
  taskTests, windowToggle
});
