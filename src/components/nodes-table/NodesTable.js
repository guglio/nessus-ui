import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});


const NodesTable = (props) => {
  const { classes, nodes } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Node name</TableCell>
            <TableCell>Hostname</TableCell>
            <TableCell>Username</TableCell>
            <TableCell numeric>Port</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {nodes.map((n,i) => {
            return (
              <TableRow key={i}>
                <TableCell component="th" scope="row">
                  {n.name}
                </TableCell>
                <TableCell>{n.hostname}</TableCell>
                <TableCell>{n.username}</TableCell>
                <TableCell numeric>{n.port}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
}

NodesTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NodesTable);
