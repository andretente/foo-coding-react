import { db } from '../../../config/firebase'

import fetchList from './fetchList'

export default async function postItem(req) {
  const title = req.body.data

  const item = {
    title,
    category: 'Personal',
    done: false,
  }

  return db
    .collection('list')
    .doc()
    .set(item)
    .then(async () => {
      const data = await fetchList()
      return data
    })
}
