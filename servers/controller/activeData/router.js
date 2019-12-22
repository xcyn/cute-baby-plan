var Router = require('koa-router')
var appRouter = new Router();

var get = require('./get')
var save = require('./save')
var update = require('./update')
var remove = require('./delete')

appRouter.get('/get', get)
appRouter.post('/save', save)
appRouter.post('/update', update)
appRouter.post('/delete', remove)

module.exports = appRouter.routes()
