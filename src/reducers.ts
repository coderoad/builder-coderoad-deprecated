import {combineReducers} from 'redux';
import {reducer as form} from 'redux-form';

// module reducers
import {reducer as packageJson} from './modules/package-json';
import {reducer as pagePosition} from './modules/page-position';
import {reducer as result} from './modules/result';
import {reducer as runner} from './modules/runner';
import {reducer as checks} from './modules/setup';
import {reducer as tutorial} from './modules/tutorial';
import {reducer as updated} from './modules/updated';
import {reducer as validation} from './modules/validate-tutorial';
import {reducer as windowToggle} from './modules/window';

// core reducers
import {
  alertReducer as alert,
  dirReducer as dir,
  editorReducer as editor,
  routeReducer as route
} from 'core-coderoad';

export default combineReducers({
  alert, checks, editor, dir, form,
  packageJson, pagePosition, result, route,
  tutorial, updated, validation, windowToggle,
  runner,
});
