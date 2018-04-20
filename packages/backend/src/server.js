import socketIO from 'socket.io'
import {Server} from 'http'
import app from './app'
import {onConnection} from './services/io'

const port = process.env['PORT'] || 3000
const http = Server(app);
const io = socketIO(http);

io.on('connection', onConnection)
http.listen(port, () => {
  console.log(`chat application listening on port :${port}`)
})