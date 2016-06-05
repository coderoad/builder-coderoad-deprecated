import {join} from 'path';

function twoDigitify(n: number): string {
  return n > 9 ? '' + n : '0' + n;
}

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
