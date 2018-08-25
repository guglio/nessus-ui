import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Drawer from '@material-ui/core/Drawer';
import { MuiThemeProvider, createMuiTheme, withStyles } from '@material-ui/core/styles';

import { THEME } from '../../constants';

import Header from '../header/Header';
import LeftMenu from '../menu';
import Main from '../main/Main';
import Request from '../request/Request';

const theme = createMuiTheme(THEME);
const drawerWidth = 240;

const styles = theme => ({
  nessus: {
    flexGrow: 1,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    height: '100vh',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawerPaper: {
    position: 'relative',
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    minWidth: 0, // So the Typography noWrap works
  },
  main: {
    position:'relative',
    backgroundColor:'purple',
  },
  toolbar: theme.mixins.toolbar,
});

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      activeView: 'main',
      hostsNumber: 2,
    }
  }

  handleChange = (state) => {
    this.setState(state);
  }

  render(){
    const { classes } = this.props;
    const { activeView, hostsNumber } = this.state;
    return (
      <MuiThemeProvider theme={theme}>
        <div className={classes.nessus}>
          <Header />
          <Drawer
            variant="permanent"
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <div className={classes.toolbar} />
          <LeftMenu
            activeView={activeView}
            handleChangeView={this.handleChange}
          />
          </Drawer>
          <main className={classes.content}>
            <div className={classes.toolbar} />
            { activeView === 'main' &&
              <Main
                className={classes.main}
                hostsNumber={parseInt(hostsNumber,10)}
              />
            }
            { activeView === 'request' &&
              <Request
                handleChangeHosts={this.handleChange}
                hostsNumber={parseInt(hostsNumber,10)}
              />
            }
          </main>
        </div>
      </MuiThemeProvider>
    );
  }
}
App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
