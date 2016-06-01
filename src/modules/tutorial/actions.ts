import {TUTORIAL_INIT} from './types';

export function tutorialInit() {
  return function(dispatch, getState) {
    const name = getState().packageJson.name;
    dispatch({ type: TUTORIAL_INIT, payload: { name } });
  };
}
