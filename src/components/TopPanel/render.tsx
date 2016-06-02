import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from '../../store';
import TopPanel from './TopPanel';
import muiTheme from '../styles/theme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default function render(target: HTMLElement) {
  ReactDOM.render(
      <Provider store={store}>
        <MuiThemeProvider muiTheme={muiTheme}>
          <TopPanel />
        </MuiThemeProvider>
      </Provider>,
    target
  );
}
