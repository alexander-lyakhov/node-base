const path = require('path')

console.log('__dirname:', __dirname)
console.log('__filename:', __filename)

console.log('Filename:', path.basename(__filename))
console.log(' Dirname:', path.dirname(__filename))
console.log(' Extname:', path.extname(__filename))
console.log(' Parse:', path.parse(__filename))