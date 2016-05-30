import {TUTORIAL_CONFIG_SAVE} from './types';

export function tutorialConfigSave(config: Tutorial.ConfigSet) {
  return { type: TUTORIAL_CONFIG_SAVE, payload: { config }};
}
