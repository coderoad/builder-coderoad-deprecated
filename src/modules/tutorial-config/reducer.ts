import {TUTORIAL_CONFIG_SAVE} from './types';

const _config: Tutorial.ConfigSet = {
  name: 'coderoad-',
  repo: '',
  language: 'JS',
  runner: 'mocha-coderoad',
  runnerOptions: {}
};

export default function tutorialConfig(
  c = _config, action: Action
): Tutorial.ConfigSet {
  switch (action.type) {

    case TUTORIAL_CONFIG_SAVE:
      return action.payload.config;

    default:
      return c;
  }
}
