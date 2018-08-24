import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TablePagination from '@material-ui/core/TablePagination';
import Paper from '@material-ui/core/Paper';

import TableHeader from '../../containers/TableHeader';
import TableContent from '../../containers/TableContent';

import { ORDER, TABLE_HEADER } from '../../constants/';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
  },
  table: {
    tableLayout: 'fixed'
  }
});

class NodesTable extends Component {
  constructor(props){
    super(props);
    this.state = {
      page: 0,
      rowsPerPage: 5,
      order: ORDER.ASC,
      orderBy: TABLE_HEADER[0].value,
      nodes:this.props.nodes,
    }
  }

  handleChangePage = (event, page) => {
    this.setState({ page });
  };

  handleChangeRowsPerPage = event => {
    this.setState({ rowsPerPage: event.target.value });
  };


  handleRequestSort = (event, property) => {
   const orderBy = property;
   const { ASC, DESC } = ORDER;
   let order = DESC;

   if (this.state.orderBy === property && this.state.order === DESC) {
     order = ASC;
   }

   this.setState({ order, orderBy });
 };


  sortNodes = (orderBy) => {
    let order = '';
    const { ASC, DESC } = ORDER;

    switch(this.state.order){
      case ASC: order = DESC; break;
      case DESC: order = ASC; break;
      default: order = ASC; break;
    }
    this.setState({
      order,
      orderBy
    });
  }


  render(){
    const { classes } = this.props;
    const { page, rowsPerPage, order, orderBy, nodes } = this.state;

    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHeader
            sortNodes={this.sortNodes}
            headers={TABLE_HEADER}
            orderBy={orderBy}
            order={order}
          />
          <TableContent
            data={nodes}
            order={order}
            orderBy={orderBy}
            page={page}
            rowsPerPage={rowsPerPage}
            colNum={TABLE_HEADER.length}
          />
        </Table>
        <TablePagination
            component="div"
            count={nodes.length}
            rowsPerPage={rowsPerPage}
            page={page}
            backIconButtonProps={{
              'aria-label': 'Previous Page',
            }}
            nextIconButtonProps={{
              'aria-label': 'Next Page',
            }}
            onChangePage={this.handleChangePage}
            onChangeRowsPerPage={this.handleChangeRowsPerPage}
          />
      </Paper>
    );
  }
}

NodesTable.propTypes = {
  classes: PropTypes.object.isRequired,
  nodes: PropTypes.array.isRequired,
};

export default withStyles(styles)(NodesTable);
