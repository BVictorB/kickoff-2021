const router = require('express').Router()

const
  home = require('./routes/home'),
  chat = require('./routes/chat')

router
  .get('/', home)
  .get('/chat', chat)

module.exports = router
