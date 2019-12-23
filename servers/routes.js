var Router = require('koa-router')
var appRouter = new Router();

// 模块分层
//mogoose搭建测试: todo
// 活动数据统计
var activeData = require('./controller/activeData/router')
// 参赛人员
var pothunter = require('./controller/pothunter/router')
// 微信
var weixin = require('./controller/weixin/router')

appRouter.use('/babyService/activeData', activeData)
appRouter.use('/babyService/pothunter', pothunter)
// 微信接口
appRouter.use(weixin)

module.exports = appRouter
