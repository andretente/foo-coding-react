import { useState } from 'react'
import axios from 'axios'

export default function usePost({ endpoint }) {
  const [state, setState] = useState({
    data: null,
    loading: false,
    error: false,
    isFinished: false,
  })

  async function post(data) {
    try {
      setState({ ...state, loading: true, isFinished: false })
      const response = await axios.post(endpoint, { data })
      setState({ ...state, loading: false, data: response, isFinished: true })
    } catch (err) {
      setState({ ...state, loading: false, error: err })
    }
  }

  return { ...state, post }
}
