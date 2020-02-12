import { Box, Text, Layer, Heading } from 'grommet'
import PropTypes from 'prop-types'
import React from 'react'

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
        <Heading alignSelf="center" level="2">
          Info
        </Heading>
        <Text alignSelf="center">{name}</Text>
        <Text margin="small">
          Number of episodes:
          {episode.length}
        </Text>
        <Text margin="small">
          Location:
          {location.name}
        </Text>
        <Text margin="small">
          Species:
          {species}
        </Text>
        <Text margin="small">
          Status:
          {status}
        </Text>
      </Box>
    </Layer>
  )
}

MoreInfo.propTypes = {
  episode: PropTypes.arrayOf(PropTypes.string),
  location: PropTypes.shape({
    name: PropTypes.string,
  }),
  name: PropTypes.string,
  species: PropTypes.string,
  status: PropTypes.string,
  setLayer: PropTypes.func.isRequired,
}

MoreInfo.defaultProps = {
  episode: '',
  name: '',
  location: {},
  species: '',
  status: '',
}
