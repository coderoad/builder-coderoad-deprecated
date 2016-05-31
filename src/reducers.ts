import {combineReducers} from 'redux';

// module reducers
import {page, pagePosition, tasks, taskTests} from './modules/page';
import {checks, packageJson} from './modules/setup';
import {reducer as tutorialConfig} from './modules/tutorial-config';
import {reducer as tutorialInfo} from './modules/tutorial-info';

// core reducers
import {reducer as alert} from 'core-coderoad/lib/alert';
import {reducer as editor, dir} from 'core-coderoad/lib/editor';
import {reducer as route} from 'core-coderoad/lib/route';
import {reducer as tutorial} from 'core-coderoad/lib/tutorial';
import {reducer as windowToggle} from 'core-coderoad/lib/window';

export default combineReducers({
  alert, checks, editor, dir,
  packageJson, page, pagePosition, route, tasks,
  tutorial, tutorialConfig, tutorialInfo,
  taskTests, windowToggle
});
