import {VALIDATE_TUTORIAL, RUN_TEST_ON_SOLUTION} from './types';

export function validateTutorial() {
  return (dispatch, getState) => {
    const {packageJson} = getState();
    dispatch({ type: VALIDATE_TUTORIAL, payload: {packageJson} });
  };
}

export function runTestOnSolution() {
  return (dispatch, getState) => {
    dispatch({ type: RUN_TEST_ON_SOLUTION });
  };
}
