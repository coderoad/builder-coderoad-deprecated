import {DATA_LOAD} from './types';

export default function dataReducer(d: Object, action: Action): Object {
  switch (action.type) {
    case DATA_LOAD:
      return d;
  }
  return d;
}
