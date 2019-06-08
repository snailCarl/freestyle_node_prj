let http = require('http')

let server = http.createServer((request, response) => {
  console.log('Hello request!')
  response.end('Hello Jenkins!\n')
})

server.listen(12034)