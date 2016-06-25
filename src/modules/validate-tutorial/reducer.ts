import {VALIDATE_TUTORIAL, RUN_TEST_ON_SOLUTION} from './types';
import {validatePackageJson} from 'coderoad-cli';

const _v: Validation.Object = {
  errors: [],
  warnings: [],
};

export default function validation(v = _v, action: Action): Validation.Object {
  switch (action.type) {
    case VALIDATE_TUTORIAL:
      return validatePackageJson(action.payload.packageJson);
    case RUN_TEST_ON_SOLUTION:
      console.log(action.payload.text);
      return v;
    default:
      return v;
  }
}
