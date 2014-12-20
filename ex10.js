var net = require('net');

var server = net.createServer(function callback(socket){
    var d = new Date();
    socket.end(d.getFullYear() + '-'
                + zeroFill(d.getMonth() + 1) + '-'
                + zeroFill(d.getDate()) + ' '
                + zeroFill(d.getHours()) + ':'
                + zeroFill(d.getMinutes()) + '\n'); 
});

function zeroFill(i) {
    return (i < 10 ? '0' : '') + i;
}

server.listen(Number(process.argv[2]));