import express from 'express'
import axios from 'axios'

const router = express.Router()

router.get('/characters', async (req, res) => {
  try {
    const { data } = await axios.get(
      'https://rickandmortyapi.com/api/character/',
    )

    const { results } = data

    res.send(results)
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('🚧🚧🚧🚧🚧🚧🚧: error', error)
  }
})

export default router
