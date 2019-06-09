module.exports = (dir, ext, cb)=> require('fs').readdir(dir, (err,l)=> err ? cb(err) : cb(null, l.filter(s=>s.slice(-ext.length-1)==='.'+ext)) )
