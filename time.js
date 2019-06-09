require('net').createServer(socket => socket.end((new Date(Date.now() + 10800000)).toISOString().slice(0,16).replace('T',' ')+'\n') ).listen(process.argv[2])
