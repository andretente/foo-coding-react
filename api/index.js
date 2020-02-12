import 'dotenv/config'
import path from 'path'

import express from 'express'

import { firebaseRoutes, giphyRoutes, rickAndMorty } from './routes'

const app = express()
const port = process.env.PORT

const publicPath = path.join(__dirname, '../build')

app.use(express.static(publicPath))

app.use(express.json())
app.use('/firebase', firebaseRoutes)
app.use('/giphy', giphyRoutes)
app.use('/rick-and-morty', rickAndMorty)

app.get('*', (req, res) => {
  res.sendFile(path.join(`${__dirname}/../build/index.html`))
})
// eslint-disable-next-line no-console
app.listen(port, () => console.log(`Server on port ${port}!`))
