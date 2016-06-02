import {TUTORIAL_INIT, TUTORIAL_LOAD, TUTORIAL_BUILD} from './types';

export function tutorialInit() {
  return function(dispatch, getState) {
    const {dir, packageJson} = getState();
    dispatch({ type: TUTORIAL_INIT, payload: { dir, name: packageJson.name } });
    dispatch(tutorialBuild());
    dispatch(tutorialLoad());
  };
}

export function tutorialLoad() {
  return (dispatch, getState) => {
    const {dir} = getState();
    dispatch({ type: TUTORIAL_LOAD, payload: { dir } });
  };
}

export function tutorialBuild() {
  return (dispatch, getState) => {
    const {dir} = getState();
    dispatch({ type: TUTORIAL_BUILD, payload: { dir } });
  };
}
