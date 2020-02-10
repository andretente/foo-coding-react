import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { Box, Text, Image } from 'grommet'
import MoreInfo from '../MoreInfo'

import './card.scss'

export default function Card({
  character: { episode, location, name, image, species, status },
}) {
  const [hover, setHover] = useState(false)
  const [layer, setLayer] = useState(false)

  return (
    <Box
      className="card"
      onClick={() => setLayer(true)}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Text alignSelf="center">{name}</Text>
      <Image fit="contain" opacity={hover ? 'medium' : false} src={image} />
      {hover && <Text className="card__overlay-text">Click for more info</Text>}
      {layer && (
        <MoreInfo
          episode={episode}
          location={location}
          setLayer={value => setLayer(value)}
          species={species}
          status={status}
        />
      )}
    </Box>
  )
}

Card.propTypes = {
  character: PropTypes.shape({
    episode: PropTypes.array,
    location: PropTypes.object,
    name: PropTypes.string,
    image: PropTypes.string,
    species: PropTypes.string,
    status: PropTypes.string,
  }),
}

Card.defaultProps = {
  character: { name: '', image: '' },
}
