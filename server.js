var counter = 0;
const express = require('express');
const app = express();
app.use(express.static(__dirname + "/public"));
const server = app.listen(1337, '192.168.2.45');
const io = require('socket.io')(server);

io.on('connection', function (socket) { //2

    socket.emit('greeting', { msg: 'Greetings, from server Node, brought to you by Sockets! -Server' }); //3
    socket.on('thankyou', function (data) { //7
        console.log(data.msg); //8 (note: this log will be on your server's terminal)
    });

});
