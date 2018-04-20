import User from '../models/user'
export const onConnection = async (socket) => {
  const ipAddress = socket.handshake.address
  const user = await User.create({ ipAddress })
  socket.on('new_message_send', (message) => {
    socket.broadcast.emit('new_message_receive', {ipAddress, text: message})
  })
  socket.emit('user_own_id', {
    userId: user.id,
    ipAddress,
  })
  socket.on('disconnect', () => {
    user.updateAttributes({ active: false })
  })
}

