var Router = require('koa-router')
var appRouter = new Router();

var get = require('./get')
var register = require('./register')
var login = require('./login')


appRouter.get('/get', get)
appRouter.post('/register', register)
appRouter.post('/login', login)


module.exports = appRouter.routes()
