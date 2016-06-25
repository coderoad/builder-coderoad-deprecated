import {join} from 'path';
import parseLoaders from './parse-loaders';

// placeholder empty function
function handleResult() { return; }

export default function runTaskTests(
  taskTests: string, dir: string, taskPosition = 0
): boolean {
  const tests: string = taskTests;

  if (tests && tests.length) {
    const tutorialConfig: Tutorial.Config = tutorial.config;
    const output = parseLoaders(
      tests, tutorialConfig.testSuffix, tutorial, dir
    );

    const config: Test.Config = {
      dir,
      tutorialDir: tutorialConfig.dir,
      taskPosition
    };

    // call test runner
    tutorialConfig.run(output, config, handleResult);
  }
  return true;
}
