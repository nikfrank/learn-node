require('http').createServer((req, res)=> require('fs').createReadStream(process.argv[3]).pipe(res) ).listen(process.argv[2])
