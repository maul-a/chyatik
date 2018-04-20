import path from 'path'
import express from 'express';
import routes from './routes'


const app = express()
console.log(path.join(__dirname, '../../frontend/dist/assets/js'))
app.use(express.static(path.join(__dirname, '../../frontend/dist')));
app.use('/', routes)

export default app