import {writeFileSync} from 'fs';
import {join} from 'path';

export default function writeFile(dir: string, file: string, content: Object): void {
  writeFileSync(join(dir, file), content);
}
