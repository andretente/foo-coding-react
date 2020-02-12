import { db } from '../../../config/firebase'

export default async function fetchList() {
  return db
    .collection('list')
    .get()
    .then(querySnapshot => {
      return querySnapshot.docs.map(doc => {
        return {
          ...doc.data(),
          id: doc.id,
        }
      })
    })
}
