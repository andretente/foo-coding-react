import express from 'express'
import axios from 'axios'

const router = express.Router()

function randomizeGif(data) {
  const { length } = data
  const randomIndex = Math.floor(Math.random() * Math.floor(length))
  return data[randomIndex].images.original.url
}

router.post('/random', async (req, res) => {
  const search = req.body.data
  try {
    const { data } = await axios.get('https://api.giphy.com/v1/gifs/search', {
      params: { q: search, api_key: process.env.GIPHY_API },
    })
    const result = randomizeGif(data.data)

    res.send(result)
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('🚧🚧🚧🚧🚧🚧🚧: error', error)
  }
})

export default router
