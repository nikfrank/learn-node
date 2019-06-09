require('./ls-module')(process.argv[2], process.argv[3], (err, l)=> err ? console.log(err) : l.forEach(ll=> console.log(ll)))
