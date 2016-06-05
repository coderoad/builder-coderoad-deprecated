import { applyMiddleware, createStore } from 'redux';
import reducer from './reducers';
import * as createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import throttleActions from 'redux-throttle-actions';

const middlewares = [thunk];

const devMode = false;
if (devMode) {
  const logger = createLogger();
  middlewares.push(logger);
}

const throttleTestRun = throttleActions(['TUTORIAL_BUILD'], 800);
middlewares.push(throttleTestRun);

const store: Redux.Store = createStore(
  reducer,
  applyMiddleware(...middlewares)
);

export default store;
