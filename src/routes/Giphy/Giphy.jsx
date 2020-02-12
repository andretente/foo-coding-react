import { Box, Image, Text } from 'grommet'
import React, { useEffect } from 'react'

import InputField from '../../components/InputField'
import Spinner from '../../components/Spinner'
import usePost from '../../hooks/usePost'

import './giphy.scss'

export default function Giphy() {
  const { post, data: srcUrl, loading } = usePost({ endpoint: '/giphy/random' })

  useEffect(() => {
    post('yeah!')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Box alignContent="center" className="giphy">
      <InputField submitText={data => post(data)} />

      <Text className="giphy__text">
        Write something on the input field to get a random GIF
      </Text>

      {loading ? (
        <Spinner />
      ) : (
        srcUrl && <Image className="giphy__image" fit="contain" src={srcUrl} />
      )}
    </Box>
  )
}
