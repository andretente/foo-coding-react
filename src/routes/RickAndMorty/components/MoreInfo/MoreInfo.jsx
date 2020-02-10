/* eslint-disable react/forbid-prop-types */
import React from 'react'
import PropTypes from 'prop-types'
import { Box, Text, Layer } from 'grommet'

export default function MoreInfo({
  setLayer,
  name,
  episode,
  location,
  species,
  status,
}) {
  return (
    <Layer onClickOutside={() => setLayer(false)} onEsc={() => setLayer(false)}>
      <Box pad="large">
        <Text alignSelf="center">{name}</Text>
        <Text>
          Number of episodes:
          {episode.length}
        </Text>
        <Text>
          Location:
          {location.name}
        </Text>
        <Text>
          Species:
          {species}
        </Text>
        <Text>
          Status:
          {status}
        </Text>
      </Box>
    </Layer>
  )
}

MoreInfo.propTypes = {
  episode: PropTypes.array,
  location: PropTypes.object,
  name: PropTypes.string,
  species: PropTypes.string,
  status: PropTypes.string,
  setLayer: PropTypes.func.isRequired,
}

MoreInfo.defaultProps = {
  episode: [],
  name: '',
  location: {},
  species: '',
  status: '',
}
