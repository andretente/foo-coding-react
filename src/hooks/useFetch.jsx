import { useEffect, useState } from 'react'
import axios from 'axios'

export default function useFetch({ endpoint }) {
  const [refetch, forceRefetch] = useState(false)
  const [state, setState] = useState({
    data: null,
    loading: false,
    error: false,
  })

  useEffect(() => {
    async function fetchData() {
      try {
        setState({ ...state, loading: true })

        const { data } = await axios.get(endpoint)

        setState({ ...state, loading: false, data })
        forceRefetch(false)
      } catch (err) {
        setState({ ...state, loading: false, error: err })
      }
    }
    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refetch])

  return { ...state, forceRefetch }
}
