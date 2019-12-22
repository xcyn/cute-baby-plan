var Router = require('koa-router')
var appRouter = new Router();

var get = require('./get')
var save = require('./save')
var update = require('./update')
var remove = require('./delete')
var vote = require('./vote')
var upload = require('./upload')

appRouter.get('/get', get)
appRouter.post('/save', save)
appRouter.post('/update', update)
appRouter.post('/delete', remove)
appRouter.post('/vote', vote)
appRouter.post('/upload', upload)

module.exports = appRouter.routes()
