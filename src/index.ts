import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as injectTapEventPlugin from 'react-tap-event-plugin';
import {sideElement, SideRoot} from './components/SidePanel';
import {topElement, TopRoot} from './components/TopPanel';
import {loadPolyfills, render} from 'core-coderoad';
import Subscriptions from './subscriptions';
import store from './store';
import {setupVerify} from './modules/setup';

// React optimization
process.env.NODE_ENV = 'production';

class Main {
  side: HTMLElement;
  top: HTMLElement;
  subscriptions: any;
  constructor() {
    // remove later
    injectTapEventPlugin();

    loadPolyfills();
    // run startup checks
    store.dispatch(setupVerify());

    // initialize element targets
    this.side = sideElement.init();
    this.top = topElement.init();
    this.subscriptions = new Subscriptions;
  }
  activate(): void {
    // create atom panels
    atom.workspace.addRightPanel({
      item: this.side,
      priority: 0,
    });
    atom.workspace.addTopPanel({
      item: this.top,
      priority: 1100,
    });

    // activate subscriptions
    this.subscriptions.onActivate(store);

    // render React component
    ReactDOM.render(SideRoot(store), this.side);
    ReactDOM.render(TopRoot(store), this.top);
  }
  deactivate(): void {
    // remove subscriptions & unmount react app
    this.subscriptions.onDeactivate(store);
  }
};

const app = new Main();
// only one export available. Atom package limitation
export = app;
