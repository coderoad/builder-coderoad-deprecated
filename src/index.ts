import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as injectTapEventPlugin from 'react-tap-event-plugin';

import {SideRoot, sideElement} from './components/SidePanel';
import {TopRoot, topElement} from './components/TopPanel';
import {setupVerify} from './modules/setup';
import loadPolyfills from './polyfills';
import store from './store';
import Subscriptions from './subscriptions';

// React optimization
process.env.NODE_ENV = 'production';

class Main {
  public side: HTMLElement;
  public top: HTMLElement;
  public subscriptions: any;
  constructor() {
    // remove later
    injectTapEventPlugin();

    loadPolyfills();
    // run startup checks
    store.dispatch(setupVerify());

    // initialize element targets
    this.side = sideElement.init();
    this.top = topElement.init();
    this.subscriptions = new Subscriptions();
  }
  public activate(): void {
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
  public deactivate(): void {
    // remove subscriptions & unmount react app
    this.subscriptions.onDeactivate(store);
  }
};

const app = new Main();
// only one export available. Atom package limitation
export = app;
