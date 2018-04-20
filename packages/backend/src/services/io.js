export const onConnection = (socket) => {
  const clientIP = socket.handshake.address
  socket.on('new_message_send', (message) => {
    console.log(message)
  })
  console.log('ya zakonnektilsa', clientIP)
}

