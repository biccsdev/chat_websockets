const express = require('express');
const app = express();
const http = require('http');

const server = http.createServer(app);
const { Server } = require('socket.io');
const io = new Server(server);

const port = 3000;

// Almacenar usuarios conectados
const users = new Map();

app.get('/', (req, res) => { res.sendFile(process.cwd() + '/client/index.html') });

io.on('connection', (socket) => {
    // Asignar un nombre de usuario temporal
    const username = 'User_' + socket.id.slice(0, 4);
    users.set(socket.id, username);

    // Notificar a todos que un nuevo usuario se conectó
    io.emit('user status', `${username} ha entrado al chat`);
    console.log(`${username} ha entrado al chat`);

    // Manejar mensajes de chat
    socket.on('chat message', (msg) => {
        console.log(`Mensaje de ${username}: ${msg}`);
        io.emit('chat message', `${username}: ${msg}`);
    });

    // Manejar estado de "escribiendo"
    socket.on('typing', (isTyping) => {
        socket.broadcast.emit('user typing', {
            username: username,
            isTyping: isTyping
        });
    });

    // Manejar desconexión
    socket.on('disconnect', () => {
        io.emit('user status', `${username} ha salido del chat`);
        console.log(`${username} ha salido del chat`);
        users.delete(socket.id);
    });
});

server.listen(port, () => { console.log('Servidor escuchando en puerto: ', port) });