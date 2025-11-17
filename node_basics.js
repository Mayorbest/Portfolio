import http from 'node:http'
const PORT  = 8000
const server = http.createServer(function (req, res) {
  
  res.end('Hello from Mayor server')
})

server.listen(PORT, () => console.log(`server is running on: ${PORT}`))