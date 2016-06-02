import {PAGE_SET} from './types';

export function pageSet(pagePosition: number) {
  return { type: PAGE_SET, payload: { pagePosition } };
}
