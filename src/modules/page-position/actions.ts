import {PAGE_SET} from './types';
import {routeSet} from '../../actions';

export function pageSet(pagePosition: number) {
  return (dispatch, getState) => {
    dispatch({ type: PAGE_SET, payload: { pagePosition } });
    dispatch(routeSet('page'));
  };
}
