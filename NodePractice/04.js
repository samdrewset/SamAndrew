
const os = require('os');

var totalmemory = os.totalmem();
var freememory = os.freemem();

//console.log('Total memory: ' + totalmemory);

//Template string
// ES6 / ES2015 : ECMAScript 6

console.log(`Total memory: ${totalmemory}`);
console.log(`Free memory: ${freememory}`);