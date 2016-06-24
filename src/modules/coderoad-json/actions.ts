import {CJ_SAVE, CJ_LOAD} from './types';

export function cjLoad() {
  return (dispatch, getState) => {
    const {dir} = getState();
    dispatch({ type: CJ_LOAD, payload: { dir } });
  };
}

export function cjSave(cj: Object) {
  return (dispatch, getState) => {
    const {dir} = getState();
    dispatch({ type: CJ_SAVE, payload: { cj, dir } });
  };
}
