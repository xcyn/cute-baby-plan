var Router = require('koa-router')
var appRouter = new Router();

// 模块分层
//mogoose搭建测试: todo
// 个人博客
var person = require('./controller/person/router')
// 微信
// var weixin = require('./controller/weixin/router')
// 微信接口
// appRouter.use(weixin)
appRouter.use('/baby', person)

module.exports = appRouter
