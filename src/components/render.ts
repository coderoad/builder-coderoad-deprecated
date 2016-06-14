import * as React from 'react';
import * as ReactDOM from 'react-dom';
import store from '../store';
import SidePanelRoot from './SidePanel/SidePanelRoot';

// remove later
import * as injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

export default function render(target: HTMLElement) {
  ReactDOM.render(
    SidePanelRoot(store),
    target
  );
}
