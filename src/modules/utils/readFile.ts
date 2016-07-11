import {readFileSync} from 'fs';
import {join} from 'path';

import fileExists from 'node-file-exists';

export default function readFile(dir: string, file: string): Object|boolean {
  const pathToFile = join(dir, file);
  if (!fileExists(pathToFile)) { return false; }
  try {
    return JSON.parse(readFileSync(pathToFile, 'utf8'));
  } catch (e) {
    return null;
  }
}
