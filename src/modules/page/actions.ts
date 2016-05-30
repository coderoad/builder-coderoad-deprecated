import {PAGE_SET} from './types';
import {routeSet} from '../../actions';
export {editorOpen, editorSave, editorSet, editorInsert} from '../../actions';

export function pageNext(): ReduxThunk.ThunkInterface | Action {
  return (dispatch, getState): void => {
    let {pagePosition} = getState();
    dispatch(pageSet(pagePosition + 1));
  };
}

export function pageSet(pagePosition = 0): ReduxThunk.ThunkInterface {
  return (dispatch, getState): void => {
    const {dir, progress, tutorial, route} = getState();
    // create absolute paths for 'task-tests'
    const tasks = tutorial.pages[pagePosition].tasks || [];
    dispatch({
      type: PAGE_SET, payload: { dir, pagePosition, tutorial, progress, tasks }
    });
  };
}
