import {TUTORIAL_INFO_SAVE} from './types';

export function tutorialInfoSave(info: Tutorial.Info) {
  return { type: TUTORIAL_INFO_SAVE, payload: { info }};
}
