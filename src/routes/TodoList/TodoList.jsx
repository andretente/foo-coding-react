import React, { useEffect } from 'react'
import { Box } from 'grommet'

import useFetch from '../../hooks/useFetch'
import usePost from '../../hooks/usePost'

import InputField from '../../components/InputField'
import List from '../../components/List'
import Spinner from '../../components/Spinner'

export default function TodoList() {
  const { data: list, loading: loadingFetch = true, forceRefetch } = useFetch({
    endpoint: '/firebase/list',
  })
  const { isFinished, post } = usePost({ endpoint: '/firebase/list' })

  useEffect(() => {
    forceRefetch(true)
  }, [forceRefetch, isFinished])

  return (
    <Box>
      <InputField
        submitText={data => {
          post(data)
        }}
      />
      {loadingFetch ? <Spinner /> : <List data={list} />}
    </Box>
  )
}
