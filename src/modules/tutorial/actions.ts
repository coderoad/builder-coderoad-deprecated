import {TUTORIAL_INIT, TUTORIAL_LOAD} from './types';

export function tutorialInit() {
  return function(dispatch, getState) {
    const {dir, packageJson} = getState();
    dispatch({ type: TUTORIAL_INIT, payload: { dir, name: packageJson.name } });
    dispatch(tutorialLoad());
  };
}

export function tutorialLoad() {
  return (dispatch, getState) => {
    const {dir} = getState();
    dispatch({ type: TUTORIAL_LOAD, payload: { dir } });
  };
}
