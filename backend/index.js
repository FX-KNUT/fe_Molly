/* 서버를 구성하는데 필요한 것들 */
const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);

/* socket.io 하고 실행해본 것들 */
const { Server } = require('socket.io');
const io = new Server(server);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

server.listen(3000, () => {
  console.log('listening on *:3000');
});

/* io.on은 받아들이는 메서드 */
io.on('connection', (socket) => {
  socket.on('chat message', (msg) => {
    console.log('message: ' + msg);
    /* emit으로 다른 사용자에게 메시지 전송*/
    io.emit('chat message', msg);
  });
  console.log('a user connected');
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});