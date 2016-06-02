import {
  TUTORIAL_INIT, TUTORIAL_LOAD, TUTORIAL_BUILD, TUTORIAL_PAGE_ADD
} from './types';

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

export function tutorialPageAdd() {
  console.log('called tutorialPageAdd');
  return { type: TUTORIAL_PAGE_ADD };
}
