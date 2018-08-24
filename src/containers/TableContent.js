import React from 'react';
import PropTypes from 'prop-types';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

import { ORDER } from '../constants/';

const desc = (a, b, orderBy) => {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

const getSorting = (order, orderBy) => {
  return order === ORDER.DESC ? (a, b) => desc(a, b, orderBy) : (a, b) => -desc(a, b, orderBy);
}

const TableContent = props => {
  const { data, order, orderBy, page, rowsPerPage, colNum } = props;
  const emptyRows = rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);

  return(
    <TableBody>
      {
        data.sort(getSorting(order, orderBy))
        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
        .map((node ,i) => {
          return (
            <TableRow key={i}>
              <TableCell component="th" scope="row">
                {node.name}
              </TableCell>
              <TableCell>{node.hostname}</TableCell>
              <TableCell>{node.username}</TableCell>
              <TableCell numeric>{node.port}</TableCell>
            </TableRow>
          );
        })
      }
      {
        emptyRows > 0 && (
          <TableRow style={{ height: 48 * emptyRows }}>
            <TableCell colSpan={colNum} />
          </TableRow>
        )
      }
    </TableBody>
  )
}

TableContent.propTypes = {
  data: PropTypes.array.isRequired,
  order: PropTypes.string.isRequired,
  orderBy: PropTypes.string.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
  colNum: PropTypes.number.isRequired,
};

export default TableContent;
