import {VALIDATE_PJ} from './types';
import {validatePackageJson} from 'coderoad-cli';

const _v: Validation.Object = {
  errors: [],
  warnings: [],
};

export default function validation(v = _v, action: Action): Validation.Object {
  switch (action.type) {
    case VALIDATE_PJ:
      return validatePackageJson(action.payload.packageJson);
    default:
      return v;
  }
}
