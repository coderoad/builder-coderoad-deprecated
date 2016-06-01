import commandLine from 'atom-plugin-command-line';

export default function createTutorial(name: string) {
  return new Promise((resolve, reject) => {
    commandLine('coderoad', `create ${name}`)
      .then((res: string) => {
        res.match(/✓/g) ? resolve() : reject();
      });
  });
}
