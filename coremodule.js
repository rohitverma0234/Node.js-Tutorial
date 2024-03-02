// https://nodejs.org/api/fs.html :- for reference

// core modules are the in-built modules.

const obj = require('path');           // https://nodejs.org/docs/latest/api/path.html

const join = obj.join(__filename)      // https://nodejs.org/docs/latest/api/path.html#pathjoinpaths
const basename = obj.basename(join)    // https://nodejs.org/docs/latest/api/path.html#pathbasenamepath-suffix
const extension = obj.extname(basename)

console.log(join)
console.log(basename)
console.log(extension)
