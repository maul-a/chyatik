import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:8000');

function newMessage(cb) {
  socket.on('new_message_receive', message => cb(message))
}