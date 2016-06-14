import reducer from './reducers';
import {configureStore} from 'core-coderoad';

export default configureStore(
  reducer,
  true, // devMode
  ['TUTORIAL_BUILD'] // throttled actions
);
