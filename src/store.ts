import configureStore from './options/configureStore';
import reducer from './reducers';

const store = configureStore({
  reducer,
  devMode: false,
  throttle: { TUTORIAL_BUILD: 300 },
});
export default store;
