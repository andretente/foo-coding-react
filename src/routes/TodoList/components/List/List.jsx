import { Table, TableBody, TableCell, TableHeader, TableRow } from 'grommet'
import PropTypes from 'prop-types'
import React from 'react'

import Item from './Item'

export default function TodoList({ data }) {
  return (
    <Table alignSelf="stretch" className="list">
      <TableHeader>
        <TableRow>
          <TableCell border="bottom" scope="col">
            Status
          </TableCell>
          <TableCell border="bottom" scope="col">
            Title
          </TableCell>
          <TableCell border="bottom" scope="col">
            Category
          </TableCell>
          <TableCell border="bottom" scope="col">
            Date
          </TableCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data?.map(item => (
          <Item data={item} key={item.id} />
        ))}
      </TableBody>
    </Table>
  )
}

TodoList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
}

TodoList.defaultProps = {
  data: [],
}
