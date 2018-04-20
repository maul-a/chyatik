import User from '../models/user'

export const onConnection = async (socket) => {
  const ipAddress = socket.handshake.address
  const user = await User.create({ipAddress})
  socket.on('new_message_send', (message) => {
    console.log(message)
  })
  socket.on('disconnect', () => {
    User.destroy({
      where: {
        id: user.id
      }
    })
  })
  console.log('ya zakonnektilsa', ipAddress)
}

