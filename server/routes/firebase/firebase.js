import express from 'express'

import fetchList from './controllers/fetchList'
import postItem from './controllers/postItem'

const router = express.Router()

router.get('/list', async (_, res) => {
  const data = await fetchList()
  res.send(data)
})

router.post('/list', async (req, res) => {
  const data = await postItem(req)
  res.send(data)
})

export default router
