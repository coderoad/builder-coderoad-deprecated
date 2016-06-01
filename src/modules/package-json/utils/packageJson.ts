import {join} from 'path';
import {readFileSync, writeFileSync} from 'fs';
import fileExists from 'node-file-exists';
import {sortPackageJson} from 'sort-package-json';

export function readPackageJson(dir: string): boolean {
  const pathToPJ = join(dir, './package.json');
  if (!fileExists(pathToPJ)) { return false; }
  try {
    return JSON.parse(readFileSync(pathToPJ, 'utf8'));
  } catch (e) {
    return null;
  }
}

export function writePackageJson(dir: string, content: Object): void {
  writeFileSync(
    join(dir, './package.json'),
    sortPackageJson(JSON.stringify(content, null, 2))
  );
}
