import * as React from 'react';
import {sideElement} from './components/SidePanel';
import render from './components/render';
import {topElement} from './components/TopPanel';
import renderTop from './components/TopPanel/TopRoot';
import {loadPolyfills} from 'core-coderoad';
import {onActivate, onDeactivate} from './subscriptions';
import store from './store';
import {setupVerify} from './modules/setup';

class Main {
  side: HTMLElement;
  top: HTMLElement;
  constructor() {
    loadPolyfills();
    // run startup checks
    store.dispatch(setupVerify());
    this.side = sideElement.init();
    this.top = topElement.init();
  }
  activate(): void {
    // create atom panel
    atom.workspace.addRightPanel({
      item: this.side,
      priority: 0,
    });
    atom.workspace.addTopPanel({
      item: this.top,
      priority: 1100,
    });
    onActivate();
    // render React component
    render(this.side);
    renderTop(this.top);
  }
  deactivate(): void {
    // remove subscriptions & unmount react app
    onDeactivate();
  }
};
export = new Main();
