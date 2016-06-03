import {SETUP_VERIFY} from './types';
import setupVerify from './utils/verify';

const _checks: BuilderChecks = {
  passed: false,
  system: {
    node: false,
    npm: false,
    xcode: false,
  },
  setup: {
    hasDir: false,
  }
};

export default function checks(
  checks = _checks, action: Action
): BuilderChecks {
  switch (action.type) {

    case SETUP_VERIFY:
      const {dir, packageJson} = action.payload;
      return setupVerify(dir, packageJson);

    default:
      return checks;
  }
}
