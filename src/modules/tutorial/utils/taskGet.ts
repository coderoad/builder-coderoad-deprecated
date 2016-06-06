import {join} from 'path';
import twoDigitify from '../../../services/twoDigitify';

export default function taskGet(
  pagePosition: number, taskPosition: number
): CR.Task {
  return {
    tests: [].concat(
      join(twoDigitify(pagePosition + 1), twoDigitify(taskPosition + 1))
    ),
    description: '',
    hints: [],
    actions: [],
  };
}
