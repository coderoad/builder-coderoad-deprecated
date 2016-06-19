import {PJ_SAVE, PJ_LOAD} from './types';

export function pjLoad() {
  return (dispatch, getState) => {
    const {dir} = getState();
    dispatch({ type: PJ_LOAD, payload: { dir } });
  };
}

export function pjSave(pj: Tutorial.PJ) {
  return (dispatch, getState) => {
    const {dir} = getState();
    dispatch({ type: PJ_SAVE, payload: { pj, dir } });
  };
}
