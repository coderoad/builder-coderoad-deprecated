import {VALIDATE_TUTORIAL} from './types';

export function validateTutorial() {
  return (dispatch, getState) => {
    const {packageJson} = getState();
    dispatch({ type: VALIDATE_TUTORIAL, payload: {packageJson} });
  };
}
