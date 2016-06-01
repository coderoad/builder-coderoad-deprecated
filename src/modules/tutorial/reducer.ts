import {TUTORIAL_INIT} from './types';

const _tutorial = {};

export default function tutorial(t = _tutorial, action: Action) {
  switch (action.type) {
    case TUTORIAL_INIT:
      return t;
    default:
      return t;
  }
}
