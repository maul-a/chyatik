import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:3000');

export function newSocketMessage(cb) {
  socket.on('new_message_receive', message => cb(message))
}
export function newSocketUser(cb) {
  socket.on('new_user_receive', message => cb(message))
}

export function sendSocketMessage(message) {
  socket.emit('new_message_send', message)
}

export function getUserOwnId(cb) {
  socket.on('user_own_id', data => cb(data))
}