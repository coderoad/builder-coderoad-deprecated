import loadRunner from './loadRunner';
import handleResult from './handleResult';
import {testResult} from '../../actions';

const RUNNER_SET = 'RUNNER_SET';
const RUNNER_RUN = 'RUNNER_RUN';

export function runnerSet() {
  return (dispatch, getState) => {
    const {dir, packageJson} = getState();
    if (packageJson && packageJson.config && packageJson.config.runner) {
      const name = packageJson.config.runner;
      dispatch({ type: RUNNER_SET, payload: { dir, name } });
    }
  };
}

export function runnerRun(content: string) {
  return (dispatch, getState) => {
    const {dir, tutorial} = getState();
    let config = Object.assign({}, dir, {taskPosition: 0}, tutorial.config);
    dispatch({ type: RUNNER_RUN, payload: { content, config } });
  };
}

const r = (content: string) => {
  console.log(content);
  // alert('Runner not installed. Try running "npm install"');
  alert('Runner not yet implemented.');
};

export function reducer(runner = r, action: Action) {
  switch (action.type) {

    case RUNNER_SET:
      const {dir, name} = action.payload;
      return loadRunner(dir, name);

    case RUNNER_RUN:
      let {content, config} = action.payload;
      // call runner
      runner(content, config, handleResult);
      return runner;

    default:
      return runner;
  }
}
