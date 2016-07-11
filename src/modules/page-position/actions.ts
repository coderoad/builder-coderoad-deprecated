import {routeSet} from '../../actions';
import {PAGE_SET} from './types';

export function pageSet(pagePosition: number) {
  return (dispatch, getState) => {
    dispatch({ type: PAGE_SET, payload: { pagePosition } });
    dispatch(routeSet('page'));
  };
}
