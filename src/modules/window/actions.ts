import {QUIT, WINDOW_TOGGLE} from './types';

export function windowToggle() {
  return (dispatch, getState) => {
    const {route} = getState();
    dispatch({ type: WINDOW_TOGGLE, payload: {route} });
  };
}

export function quit() {
  return { type: QUIT };
}
