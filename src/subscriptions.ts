const CompositeDisposable = require('atom').CompositeDisposable;
import store from './store';
import {windowToggle, tutorialBuild, tutorialLoad} from './actions';
import Root from './components/Root';
import Top from './components/TopPanel/Top';

let subscriptions = null;

export function onActivate(): AtomCore.Disposable {
  // Atom Listeners
  subscriptions = new CompositeDisposable;

  subscriptions.add(
    atom.commands.add('atom-workspace', {
      'cb-viewer:toggle': () => store.dispatch(windowToggle())
    })
  );

  atom.workspace.observeTextEditors((editor: AtomCore.IEditor) => {
    subscriptions.add(
      editor.onDidSave(() => {
        store.dispatch(tutorialBuild());
        store.dispatch(tutorialLoad());
      }));
  });

  return subscriptions;
}

export function onDeactivate(): void {
  // unmount React
  Root.unmount();
  Top.unmount();
  // unsubscribe from Redux store
  store.subscribe(() => null);
  // cleanup subscriptions
  subscriptions.dispose();
}
