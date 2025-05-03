/* How NodeJS differs from Vanilla JS?
1) Node runs on a server - not in a browser (backend not frontend)
2) The console is the terminal window
3) global object instead of window object
4) Has common core modules that we will explore
5) CommonJS modules instead of ES6 modules
6) Missing some JS APIs like fetch
*/

// console.log(global)

const os = require('os');
const path = require('path');
const { add, subtract, multiply, divide } = require('./math')

console.log(add(2, 2));
console.log(subtract(98, 44));
console.log(multiply(52, 2));
console.log(divide(10, 2));


// console.log(os.type());
// console.log(os.version());
// console.log(os.homedir());

// console.log(__dirname);
// console.log(__filename);

// console.log(path.dirname(__filename));
// console.log(path.basename(__filename));
// console.log(path.extname(__filename));

// console.log(path.parse(__filename));