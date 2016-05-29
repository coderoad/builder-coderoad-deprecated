const CompositeDisposable = require('atom').CompositeDisposable;
import store from './store';
import Root from './components/root';

let subscriptions = null;

export function onActivate(): AtomCore.Disposable {
  // Atom Listeners
  subscriptions = new CompositeDisposable;

  subscriptions.add(
    atom.commands.add('atom-workspace', {
      'cb-viewer:toggle': () => store.dispatch({ type: 'WINDOW_TOGGLE'})
    })
  );

  return subscriptions;
}

export function onDeactivate(): void {
  // unmount React
  Root.unmount();
  // unsubscribe from Redux store
  store.subscribe(() => null);
  // cleanup subscriptions
  subscriptions.dispose();
}
