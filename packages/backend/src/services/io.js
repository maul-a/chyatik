import User from '../models/user'
export const onConnection = async (socket) => {
  const ipAddress = socket.handshake.address
  const user = await User.create({ ipAddress })
  socket.broadcast.emit('new_user_receive', {
    id: user.id,
    ipAddress: user.ipAddress,
    active: true,
  })
  socket.on('new_message_send', (message) => {
    socket.broadcast.emit('new_message_receive', {ipAddress, text: message})
  })
  socket.emit('user_own_id', {
    userId: user.id,
    ipAddress,
  })
  socket.on('disconnect', () => {
    socket.broadcast.emit('disconnect_user_receive', user.id)
    user.updateAttributes({ active: false })
  })
}

