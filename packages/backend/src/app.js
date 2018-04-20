import path from 'path'
import express from 'express'
import bodyParser from 'body-parser'
import routes from './routes'

const app = express()
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, '../../frontend/dist')));
app.use('/', routes)

export default app