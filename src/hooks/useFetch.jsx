import axios from 'axios'
import { useEffect, useState } from 'react'

export default function useFetch({ endpoint }) {
  const [state, setState] = useState({
    data: null,
    loading: true,
    error: false,
    hasLoaded: false,
  })

  async function fetchData() {
    try {
      setState({ ...state, loading: true, hasLoaded: false })

      const { data } = await axios.get(endpoint)

      setState({ ...state, loading: false, hasLoaded: true, data })
    } catch (err) {
      setState({ ...state, loading: false, error: err })
    }
  }

  useEffect(() => {
    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return { ...state }
}
