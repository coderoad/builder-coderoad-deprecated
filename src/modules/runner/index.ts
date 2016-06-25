const RUNNER_SET = 'RUNNER_SET';

export function runnerSet(name: string) {
  return { type: RUNNER_SET, payload: { name } };
}

const r = function() {
  alert('Runner not installed. Run "npm install"');
};

export function reducer(runner = r, action: Action) {
  switch (action.type) {
    case RUNNER_SET:
      const {name} = action.payload;
      console.log(name);
      return runner;
    default:
      return runner;
  }
}
