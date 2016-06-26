import {join} from 'path';
import {readFileSync} from 'fs';
import fileExists from 'node-file-exists';

export default function loadRunner(dir: string, name: string) {
  const packagePath = join(dir, 'node_modules', name);
  if (!fileExists(packagePath)) {
    console.log(`Runner ${name} not installed`);
    return false;
  }
  try {
    const pj = JSON.parse(
      readFileSync(
        join(packagePath, 'package.json'), 'utf8'
      )
    );
    return require(name);
  } catch (e) {
    console.log(e);
  }
}
