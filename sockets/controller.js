
const socketController = (socket) => {

    console.log('Cliente conectado', socket.id);

    socket.on('disconnect', () => {
        console.log('Cliente desconectado.', socket.id);
    });

    socket.on('enviar-mensaje', (payload, callback) => {

        // Retorna solo al cliente que emite mediante el callback
        const id = 123456;
        callback(id);

        // Emite a todos los clientes conectados, no usa el callback
        socket.broadcast.emit('enviar-mensaje', payload);

    })
};

module.exports = {
    socketController
}