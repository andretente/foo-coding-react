import express from 'express'
import { db } from '../config/firebase'

const router = express.Router()

router.get('/list', async (_, res) => {
  db.collection('list')
    .get()
    .then(querySnapshot => {
      const data = querySnapshot.docs.map(doc => {
        return {
          ...doc.data(),
          id: doc.id,
        }
      })

      res.send(data)
    })
})

router.post('/list', async (req, res) => {
  const title = req.body.data
  const data = {
    title,
    category: 'Personal',
    done: false,
  }
  db.collection('list')
    .doc()
    .set(data)
    .then(result => {
      res.send(result)
    })
})

export default router
