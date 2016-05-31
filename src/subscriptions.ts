const CompositeDisposable = require('atom').CompositeDisposable;
import store from './store';
import Root from './components/Root';
import Top from './components/top-panel/Top';

let subscriptions = null;

export function onActivate(): AtomCore.Disposable {
  // Atom Listeners
  subscriptions = new CompositeDisposable;

  subscriptions.add(
    atom.commands.add('atom-workspace', {
      'cb-viewer:toggle': () => store.dispatch({ type: 'WINDOW_TOGGLE'})
    })
  );

  // atom.workspace.observeTextEditors((editor: AtomCore.IEditor) => {
  //   subscriptions.add(
  //     editor.onDidSave(() => {
  //       store.dispatch(compilePage(pageIndex, content));
  //     }));
  // });

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
