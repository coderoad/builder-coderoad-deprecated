import reducer from './reducers';
import {configureStore} from 'core-coderoad';

export default configureStore(
  reducer,
  false, // devMode
  { TUTORIAL_BUILD: 300 } // throttled actions
);
