import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { TableRow, TableCell, CheckBox, Select } from 'grommet'

export default function Item({
  data: { category: initialCategory, done: initalDone, title },
}) {
  const [done, setDone] = useState(initalDone)
  const [category, setCategory] = useState(initialCategory)
  return (
    <TableRow>
      <TableCell>
        <CheckBox done={done} onChange={event => setDone(event.target.done)} />
      </TableCell>
      <TableCell scope="row">
        <strong>{title}</strong>
      </TableCell>
      <TableCell>
        <Select
          options={['Work', 'Personal']}
          onChange={({ option }) => setCategory(option)}
          value={category}
        />
      </TableCell>
      <TableCell>
        <span>--</span>
      </TableCell>
    </TableRow>
  )
}

Item.propTypes = {
  data: PropTypes.shape({
    category: PropTypes.string,
    done: PropTypes.bool,
    title: PropTypes.string,
  }),
}

Item.defaultProps = {
  data: {
    category: 'Work',
    done: false,
    title: 'Title',
  },
}
