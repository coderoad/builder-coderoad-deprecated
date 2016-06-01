import {TUTORIAL_CONFIG_SAVE} from './types';
import {readPackageJson, writePackageJson} from './utils/packageJson';

const _config: Tutorial.ConfigSet = {
  name: 'coderoad-',
  repo: '',
  language: 'JS',
  runner: 'mocha-coderoad',
  runnerOptions: {}
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

    default:
      return c;
  }
}
