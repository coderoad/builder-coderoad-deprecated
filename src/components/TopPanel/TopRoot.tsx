import * as React from 'react';
import {Provider} from 'react-redux';
import TopPanel from './TopPanel';
import muiTheme from '../styles/theme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const TopRoot = store => (
  <Provider store={store}>
    <MuiThemeProvider muiTheme={muiTheme}>
      <TopPanel />
    </MuiThemeProvider>
  </Provider>
);
export default TopRoot;
