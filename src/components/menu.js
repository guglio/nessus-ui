import React from 'react';
import PropTypes from 'prop-types';

import List from '@material-ui/core/List';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import DnsIcon from '@material-ui/icons/Dns';
import SaveIcon from '@material-ui/icons/SaveAlt';

const leftMenu = (props) => {
  return(
    <List>
      <MenuItem
        selected={props.activeView === 'main'}
        button
      >
        <ListItemIcon>
          <DnsIcon />
        </ListItemIcon>
        <ListItemText
          primary="Hosts"
          onClick={() => props.handleChangeView({activeView:'main'})}
        />
      </MenuItem>
      <MenuItem
        selected={props.activeView === 'request'}
        button
      >
        <ListItemIcon>
          <SaveIcon />
        </ListItemIcon>
        <ListItemText
          primary="Request"
          onClick={() => props.handleChangeView({activeView:'request'})}
        />
      </MenuItem>
    </List>
  )
};

leftMenu.propTypes = {
  handleChangeView: PropTypes.func.isRequired,
}

export default leftMenu;
