import { Heading, Text } from 'grommet'
import PropTypes from 'prop-types'
import React from 'react'

import './home.scss'

export default function Home({ message }) {
  return (
    <>
      <Heading alignSelf="center" className="home__heading" level="2">
        {message}
      </Heading>
      <Text>
        This app highlights some React functionalities we looked into by reusing
        some of the code produced during foo coding.
      </Text>
      <ul>
        <li>
          <Text>
            Styling
            <span aria-label="nope" role="img">
              ❌
            </span>
          </Text>
        </li>
        <li>
          <Text>
            Coherent Concept
            <span aria-label="nope" role="img">
              ❌
            </span>
          </Text>
        </li>
        <li>
          <Text>
            Best practises
            <span aria-label="maybe" role="img">
              🤷‍♂️
            </span>
          </Text>
        </li>
      </ul>
    </>
  )
}

Home.propTypes = {
  message: PropTypes.string,
}

Home.defaultProps = {
  message: 'Hi, this is a small React App with even smaller Apps  🤯',
}
