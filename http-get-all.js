(s => require('http').get(process.argv[2], res=> (res.on('data', data=> (s += data.toString())), res.on('end', ()=> (console.log(s.length), console.log(s))) )))('')
