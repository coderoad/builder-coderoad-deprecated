import {WINDOW_TOGGLE, QUIT} from './types';

export function windowToggle() {
  return (dispatch, getState) => {
    const {route} = getState();
    dispatch({ type: WINDOW_TOGGLE, payload: {route} });
  };
}

export function quit() {
  return { type: QUIT };
}
