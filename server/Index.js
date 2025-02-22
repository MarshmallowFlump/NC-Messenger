const express = require('express');

const app = express();

const http = require('http');

const server = http.createServer(app);

const { Server } = require('socket.io');

const io = new Server(server);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/Index.html');
});

io.on('connection', (socket) => {
   socket.on('chat message', (message) => {
       console.log('message: ' + message);
   });
});

server.listen(3000, () => {
    console.log('listening on port 3000');
});

