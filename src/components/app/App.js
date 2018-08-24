import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import Header from '../header/Header';
import Main from '../main/Main';

import { THEME } from '../../constants';
import './App.css';

const theme = createMuiTheme(THEME);

const App = () => {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="Nessus">
          <Header />
          <Main/>
        </div>
      </MuiThemeProvider>
    );
}

export default App;
