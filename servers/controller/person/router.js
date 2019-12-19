var Router = require('koa-router')
var appRouter = new Router();

var applyGet = require('./apply/get')
var applySave = require('./apply/save')
var applyUpdate = require('./apply/update')
var applyRemove = require('./apply/delete')

appRouter.get('/apply/get', applyGet)
appRouter.post('/apply/save', applySave)
appRouter.get('/apply/update', applyUpdate)
appRouter.get('/apply/delete', applyRemove)

module.exports = appRouter.routes()
