const express = require('express');
const app = express();
const http = require('http');

const server = http.createServer(app);
const { Server } = require('socket.io');
const io = new Server(server);

const port = 3000;

app.get('/', (req, res) => { res.sendFile(process.cwd() + '/client/index.html') });
io.on('connection', (socket) => {
    console.log("New User entered the chat...")
    socket.on('chat message', (msg) => {
        console.log('** New message: ', msg);
        io.emit('chat message', msg);
    })
    socket.on('disconnect', () => { console.log('User left the chat...') })
})
server.listen(port, () => { console.log('Server listening at port: ', port) })