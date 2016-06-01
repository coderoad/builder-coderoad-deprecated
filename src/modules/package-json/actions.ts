import {PJ_SAVE} from './types';

export function pjSave(pj: Tutorial.PJ) {
  return (dispatch, getState) => {
    const {dir} = getState();
    dispatch({ type: PJ_SAVE, payload: { pj, dir } });
  };
}
