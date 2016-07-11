import {CompositeDisposable} from 'atom';

import {tutorialBuild, tutorialLoad, windowToggle} from './actions';
import {sideElement} from './components/SidePanel';
import {topElement} from './components/TopPanel';

export default class Subscriptions {
  public subscriptions = new CompositeDisposable();
  public store: Redux.Store;

  public onActivate(store: Redux.Store): AtomCore.Disposable {
    this.store = store;
    this.subscriptions.add(
      atom.commands.add('atom-workspace', {
        'cb-viewer:toggle': () => store.dispatch(windowToggle())
      })
    );
    atom.workspace.observeTextEditors((editor: AtomCore.IEditor) => {
      this.subscriptions.add(
        editor.onDidSave(() => {
          if (store.getState().windowToggle) {
            store.dispatch(tutorialBuild());
            store.dispatch(tutorialLoad());
          }
        })
      );
    });

    return this.subscriptions;
  }

  public onDeactivate(store: Redux.Store): void {
    // unmount React
    sideElement.unmount();
    topElement.unmount();
    // unsubscribe from Redux store
    store.subscribe(() => null);
    // cleanup subscriptions
    this.subscriptions.dispose();
  }

  private addSubscription(fn: () => any) {
    const store = this.store; // used for dispatches
    this.subscriptions.add(fn);
  }
}
