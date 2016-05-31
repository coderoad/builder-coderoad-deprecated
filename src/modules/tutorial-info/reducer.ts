import {TUTORIAL_INFO_SAVE} from './types';

const _info: Tutorial.Info = {
  name: '',
  description: '',
  version: [0, 1, 0],
  keywords: ['coderoad', 'tutorial'],
};

export default function tutorialConfig(
  i = _info, action: Action
): Tutorial.Info {
  switch (action.type) {

    case TUTORIAL_INFO_SAVE:
      return action.payload.info;

    default:
      return i;
  }
}
