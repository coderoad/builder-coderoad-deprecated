const TEST_RESULT = 'TEST_RESULT';

export function testResult(result: Object) {
  console.log('action', result);
  return {type: TEST_RESULT, payload: { result } };
}

export function reducer(res = {}, action: Action) {
  switch (action.type) {

    case TEST_RESULT:
      console.log(action.payload.result);
      return action.payload.result;

    default:
      return res;
  }
}
