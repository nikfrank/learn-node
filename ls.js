require('fs').readdir(process.argv[2], (_,l)=>l.filter(s=>s.slice(-process.argv[3].length-1)==='.'+process.argv[3]).forEach(a=> console.log(a)))
