import React from 'react';
import PropTypes from 'prop-types';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Tooltip from '@material-ui/core/Tooltip';

const TableHeader = props => {
  const { sortHosts, headers, orderBy, order } = props;

  return(
    <TableHead>
      <TableRow>
        {
          headers.map( cell =>
            <TableCell
              sortDirection={orderBy === cell.value ? order : false}
              numeric={ cell.numeric }
              key={ cell.value }
            >
            <Tooltip
              title={`Sort ${cell.name}`}
              enterDelay={300}
            >
              <TableSortLabel
                direction={order}
                active={orderBy === cell.value}
                onClick={() => sortHosts( cell.value )}
              >
                { cell.name }
              </TableSortLabel>
            </Tooltip>
          </TableCell>
          )
        }
      </TableRow>
    </TableHead>
  )
}

TableHeader.propTypes = {
  sortHosts: PropTypes.func.isRequired,
  headers: PropTypes.array.isRequired,
  orderBy: PropTypes.string.isRequired,
  order: PropTypes.string.isRequired,
};

export default TableHeader;
