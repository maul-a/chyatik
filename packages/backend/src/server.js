import app from './app'
import {Server} from 'http'
import socketIO from 'socket.io'

const port = process.env['PORT'] || 3000
const http = Server(app);
const io = socketIO(http);

io.on('connection', (socket) => {
  const clientIP = socket.handshake.headers.host
  console.log('ya zakonnektilsa', clientIP)
})

http.listen(port, () => {
  console.log(`chat application listening on port :${port}`)
})