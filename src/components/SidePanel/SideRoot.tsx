import * as React from 'react';
import {Provider} from 'react-redux';
import SidePanel from './SidePanel';
import muiTheme from '../styles/theme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const SideRoot = store => (
  <Provider store={store}>
    <MuiThemeProvider muiTheme={muiTheme}>
      <SidePanel />
    </MuiThemeProvider>
  </Provider>
);
export default SideRoot;
