import {join} from 'path';
import {editorOpen} from '../../actions';
import tutorialConfigOptions from '../../config-options';

function twoDigitify(n: number): string {
  return n > 9 ? '' + n : '0' + n;
}

export function editorOpenPage(index: number) {
  const filePath = join(
    'tutorial',
    twoDigitify(index + 1),
    'index.md'
  );
  return dispatch => editorOpen(filePath);
}

export function editorOpenTest(pageIndex: number, testIndex: number) {
  return (dispatch, getState) => {
    // get language suffix, ex: .js
    const suffix = tutorialConfigOptions[getState().packageJson.config].suffix;
    const filePath = join(
      'tutorial',
      twoDigitify(pageIndex),
      twoDigitify(testIndex) + '.' + suffix
    );
    editorOpen(filePath);
  };
}
