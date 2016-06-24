import {join} from 'path';
import {writeFileSync} from 'fs';

export default function writeFile(dir: string, file: string, content: Object): void {
  writeFileSync(join(dir, file), content);
}
