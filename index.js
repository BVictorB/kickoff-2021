const
  express = require('express'),
  socket = require('socket.io'),
  app = express(),
  server = require('http').createServer(app),
  io = socket(server),
  router = require('./src/router')
  
app
  .set('view engine', 'ejs')
  .set('views', 'src/views')
  .use(express.json())
  .use(express.urlencoded({ extended: true }))
  .use(express.static('src/static'))

server.listen(4000)

io.on('connection', socket => {
  socket.on('chat', data => {
    io.emit('chat', data)
  })
})

app.use(router)
