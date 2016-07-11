import {join} from 'path';

import {editorOpen, editorScroll} from '../../actions';
import twoDigitify from '../../services/twoDigitify';
import {tutorialConfigOptions} from 'core-coderoad';

export function editorMarkdownOpen(content: string, index?: number) {
  return (dispatch, getState) => {

    // open file
    const {pagePosition} = getState();
    const filePath = join(
      'tutorial',
      twoDigitify(index ? index + 1 : pagePosition + 1),
      'index.md'
    );
    dispatch(editorOpen(filePath));

    // scroll to content
    setTimeout(() => {
      if (content) {
        content = content.replace(/↵/mg, '\n');
        dispatch(editorScroll(content));
      }
    });
  };
}

export function editorTestOpen(file: string) {
  return (dispatch, getState) => {
    // get language suffix, ex: .js
    const configLanguage = getState().packageJson.config.language;
    if (!configLanguage) {
      return;
    }
    const suffix = tutorialConfigOptions[configLanguage].language.suffix;
    if (!suffix) {
      return;
    }
    const filePath = join(
      'tutorial',
      file + '.' + suffix
    );
    dispatch(editorOpen(filePath));
  };
}

export function editorPjOpen() {
  return (dispatch, getState) => {
    const {dir} = getState();
    dispatch(editorOpen('package.json'));
  };
}
