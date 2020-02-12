import 'dotenv/config'

import express from 'express'

import { firebaseRoutes, giphyRoutes, rickAndMorty } from './routes'

const app = express()
const port = process.env.PORT

app.use(express.json())
app.use('/firebase', firebaseRoutes)
app.use('/giphy', giphyRoutes)
app.use('/rick-and-morty', rickAndMorty)

// eslint-disable-next-line no-console
app.listen(port, () => console.log(`Server on port ${port}!`))
