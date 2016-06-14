const CompositeDisposable = require('atom').CompositeDisposable;
import store from './store';
import {windowToggle, tutorialBuild, tutorialLoad} from './actions';
import sidePanelElement from './components/SidePanel/element';
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
        if (store.getState().window) {
          store.dispatch(tutorialBuild());
          store.dispatch(tutorialLoad());
        }
      }));
  });

  return subscriptions;
}

export function onDeactivate(): void {
  // unmount React
  sidePanelElement.unmount();
  Top.unmount();
  // unsubscribe from Redux store
  store.subscribe(() => null);
  // cleanup subscriptions
  subscriptions.dispose();
}
