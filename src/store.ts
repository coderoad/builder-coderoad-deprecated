import reducer from './reducers';
import {configureStore} from 'core-coderoad';

const store = configureStore({
  reducer,
  devMode: false,
  throttle: { TUTORIAL_BUILD: 300 },
});
export default store;
