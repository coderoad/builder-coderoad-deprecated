import {VALIDATE_PJ} from './types';

export function validatePj() {
  return (dispatch, getState) => {
    const {packageJson} = getState();
    dispatch({ type: VALIDATE_PJ, payload: {packageJson} });
  };
}
