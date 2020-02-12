import { Box } from 'grommet'
import React, { useEffect, useState } from 'react'

import InputField from '../../components/InputField'
import Spinner from '../../components/Spinner'
import useFetch from '../../hooks/useFetch'
import usePost from '../../hooks/usePost'

import List from './components/List'

export default function TodoList() {
  const [state, setState] = useState({
    intialLoad: false,
    todoList: [],
  })

  const { data: initialList, loading: loadingFetch } = useFetch({
    endpoint: '/firebase/list',
  })

  const { data: updatedList, loading: loadingPost, post } = usePost({
    endpoint: '/firebase/list',
  })

  const isLoading = loadingFetch || loadingPost

  useEffect(() => {
    if (initialList && !state.intialLoad) {
      setState({ ...state, intialLoad: true, todoList: initialList })
    } else if (updatedList && state.intialLoad) {
      setState({ ...state, todoList: updatedList })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialList, updatedList])

  return (
    <Box>
      <InputField
        submitText={data => {
          post(data)
        }}
      />
      {isLoading ? <Spinner /> : <List data={state.todoList} />}
    </Box>
  )
}
