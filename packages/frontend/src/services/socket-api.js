import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:3000');

export function newSocketMessage(cb) {
  socket.on('new_message_receive', message => cb(message))
}

export function sendSocketMessage(message) {
  socket.emit('new_message_send', message)
}