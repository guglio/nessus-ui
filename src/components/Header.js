import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    zIndex: theme.zIndex.drawer + 1,
  },

});

const Header = (props) => {
  const { classes } = props;
  return (
      <AppBar
        position="fixed"
        color="primary"
        className={classes.root}
      >
        <Toolbar>
          <Typography variant="title" color="inherit">
            Nessus
          </Typography>
        </Toolbar>
      </AppBar>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
