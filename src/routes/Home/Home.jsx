import React from 'react'
import PropTypes from 'prop-types'
import { Text } from 'grommet'

export default function Home({ message }) {
  return <Text>{message}</Text>
}

Home.propTypes = {
  message: PropTypes.string,
}

Home.defaultProps = {
  message: 'Hi, this is a small React App with even smaller Apps ',
}
