import React from 'react'
import PropTypes from 'prop-types'
import { Table, TableHeader, TableRow, TableCell, TableBody } from 'grommet'
import Item from './Item'

export default function TodoList({ data }) {
  return (
    <Table className="list" alignSelf="stretch">
      <TableHeader>
        <TableRow>
          <TableCell scope="col" border="bottom">
            Status
          </TableCell>
          <TableCell scope="col" border="bottom">
            Title
          </TableCell>
          <TableCell scope="col" border="bottom">
            Category
          </TableCell>
          <TableCell scope="col" border="bottom">
            Date
          </TableCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data?.map(item => (
          <Item key={item.id} data={item} />
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
