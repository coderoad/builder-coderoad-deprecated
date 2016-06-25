import {TEST_RUN, TEST_COMPLETE} from '../types';
import runTaskTests from './run';

export default function runTest(
  testRun = false, action: Action
): boolean {
  switch (action.type) {

    case TEST_RUN:
      const {taskTests, dir, tutorial, taskPosition} = action.payload;
      return runTaskTests(taskTests, dir, tutorial, taskPosition);

    default:
      return testRun;
  }
}
