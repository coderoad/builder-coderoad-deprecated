export {pageSet} from './modules/page-position';
export {pjSave, pjLoad} from './modules/package-json';
export {setupVerify, setupPackage} from './modules/setup';
export {
  tutorialInit, tutorialLoad, tutorialBuild, tutorialPageAdd,
  tutorialTaskAdd, tutorialHintAdd, tutorialActionAdd
} from './modules/tutorial';
export {windowToggle, quit} from './modules/window';
export {editorMarkdownOpen, editorTestOpen, editorPjOpen} from './modules/editor-paths';
export {validatePj} from './modules/validation';

export {
  alertOpen, alertClose, alertReplay,
  editorDevToolsToggle, editorOpen, editorInsert,
  editorSave, editorSet, editorScroll,
  routeSet
} from 'core-coderoad';
