import {readFileSync} from 'fs';
import {join, resolve} from 'path';

import fileExists from 'node-file-exists';

function noRunner() {
  alert(`Runner not installed.
Select a runner and run "npm install"`);
}

export default function loadRunner(dir: string, name: string) {
  const packagePath = join(dir, 'node_modules', name);
  // no runner installed
  if (!fileExists(packagePath)) {
    return noRunner;
  }
  let runner;
  try {
    const pj = join(packagePath, 'package.json');
    const runnerMain = require(pj).main;
    let pathToMain = resolve(packagePath, runnerMain);
    runner = require(pathToMain);
  } catch (e) {
    console.log(e);
  }
  return runner ? runner.default : noRunner;
}
