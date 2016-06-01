import {TUTORIAL_CONFIG_SAVE, TUTORIAL_INFO_SAVE} from './types';
import {readPackageJson, writePackageJson} from './utils/packageJson';

const _config: Tutorial.PJ = {
  name: 'coderoad-',
  version: '0.1.0',
  description: '',
  keywords: ['coderoad', 'tutorial'],
  config: {
    language: 'JS',
    runner: 'mocha-coderoad',
    runnerOptions: {}
  }
};

const defaultPJ = {};

export default function tutorialConfig(
  c = _config, action: Action
): Tutorial.ConfigSet {
  switch (action.type) {

    case TUTORIAL_CONFIG_SAVE:
      const {config, dir} = action.payload;
      const pj = readPackageJson(dir);
      const content = !!pj
        ? Object.assign({}, pj, config)
        : config;
      writePackageJson(dir, content);
      return action.payload.config;

    case TUTORIAL_INFO_SAVE:
      return action.payload.info;

    default:
      return c;
  }
}
