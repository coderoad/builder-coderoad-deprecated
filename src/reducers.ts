import {combineReducers} from 'redux';

// module reducers
import {reducer as pagePosition} from './modules/page-position';
import {reducer as checks} from './modules/setup';
import {reducer as packageJson} from './modules/package-json';
import {reducer as tutorial} from './modules/tutorial';
import {reducer as windowToggle} from './modules/window';

// core reducers
import {reducer as alert} from 'core-coderoad/lib/alert';
import {reducer as editor, dir} from 'core-coderoad/lib/editor';
import {reducer as route} from 'core-coderoad/lib/route';

export default combineReducers({
  alert, checks, editor, dir,
  packageJson, pagePosition, route,
  tutorial, windowToggle
});
