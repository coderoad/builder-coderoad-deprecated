import loadRunner from './loadRunner';

const RUNNER_SET = 'RUNNER_SET';
const RUNNER_RUN = 'RUNNER_RUN';

export function runnerSet(name: string) {
  return (dispatch, getState) => {
    const {dir} = getState();
    dispatch({ type: RUNNER_SET, payload: { dir, name } });
  };
}

export function runnerRun(content: string) {
  return (dispatch, getState) => {
    dispatch({ type: RUNNER_RUN, payload: { content } });
  };
}

const r = (content: string) => {
  console.log(content);
  alert('Runner not installed. Try running "npm install"');
};


export function reducer(runner = r, action: Action) {
  switch (action.type) {
    case RUNNER_SET:
      const {dir, name} = action.payload;
      return loadRunner(dir, name);

    case RUNNER_RUN:
      const {content} = action.payload;
      runner(content);
      return runner;

    default:
      return runner;
  }
}
