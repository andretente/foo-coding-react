import React from 'react'
import { Box, Image, Text } from 'grommet'
import usePost from '../../hooks/usePost'

import InputField from '../../components/InputField'

import './giphy.scss'

export default function Giphy() {
  const { post, data: postData } = usePost({ endpoint: '/giphy/random' })
  const url = postData?.data

  return (
    <Box alignContent="center" className="giphy">
      <InputField submitText={data => post(data)} />
      {url && <Image className="giphy__image" fit="contain" src={url} />}
      {!url && (
        <Text className="giphy__text">
          Write something on the input field to get a random GIF
        </Text>
      )}
    </Box>
  )
}
