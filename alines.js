require('fs').readFile(process.argv[2], (_,B)=>console.log([...B.values()].filter(b=> b===10).length))
