import loadRunner from './loadRunner';

const RUNNER_SET = 'RUNNER_SET';

export function runnerSet(name: string) {
  return (dispatch, getState) => {
    const {dir} = getState();
    dispatch({ type: RUNNER_SET, payload: { dir, name } });
  };
}

const r = function() {
  alert('Runner not installed. Run "npm install"');
};

export function reducer(runner = r, action: Action) {
  switch (action.type) {
    case RUNNER_SET:
      const {dir, name} = action.payload;
      return loadRunner(dir, name);
    default:
      return runner;
  }
}
