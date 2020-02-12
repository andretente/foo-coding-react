import axios from 'axios'
import { useState } from 'react'

export default function usePost({ endpoint }) {
  const [state, setState] = useState({
    data: null,
    loading: false,
    error: false,
    hasLoaded: false,
  })

  async function post(postData) {
    try {
      setState({ ...state, loading: true, hasLoaded: false })
      const { data } = await axios.post(endpoint, { data: postData })
      setState({ ...state, loading: false, hasLoaded: true, data })
    } catch (err) {
      setState({ ...state, loading: false, error: err })
    }
  }

  return { ...state, post }
}
