import * as React from 'react';
import render from './components/render';
import Root from './components/Root';
import Top from './components/top-panel/Top';
import loadPolyfills from 'core-coderoad/lib/polyfills';
import {onActivate, onDeactivate} from './subscriptions';
import store from './store';
import {setupVerify} from 'core-coderoad/lib/setup';

class Main {
  root: HTMLElement;
  top: HTMLElement;
  constructor() {
    loadPolyfills();
    // run startup checks
    store.dispatch(setupVerify());
    this.root = Root.init();
    this.top = Top.init();
  }
  activate(): void {
    // create atom panel
    atom.workspace.addRightPanel({
      item: this.root,
      priority: 0,
    });
    atom.workspace.addTopPanel({
      item: this.top,
      priority: 1100,
    });
    onActivate();
    // render React component
    render(this.root);
  }
  deactivate(): void {
    // remove subscriptions & unmount react app
    onDeactivate();
  }
};
export = new Main();
