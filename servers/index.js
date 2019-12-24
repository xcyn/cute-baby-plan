// 定义全局路径
global.APP_PATH = __dirname;
const path = require('path')
const Koa = require('koa')
const koaBody = require('koa-body')
const chalk = require('chalk')
const appRoute = require('./routes')
require('./mongodb/index')


//中间件
// 日志
const log = require('./middleware/log')
// 跨域中间件
const cross = require('./middleware/cross')
// 登录
const auth = require('./middleware/auth')
// 规范统一返回
const response = require('./middleware/response')
// 配置静态web服务的中间件
const static = require("koa-static");
const app = new Koa()

app.use(log)
app.use(cross)
app.use(response)
app.use(auth)
app.use(static(path.join( __dirname,  './static/')));
app.use(koaBody({"multipart": true}))
app.use(appRoute.routes())
app.use(appRoute.allowedMethods())

app.on('error', (err, ctx) => {
  console.error('server error', err)
  ctx.body = '请求报错了';
});

app.listen(3100,() => {
  chalk.green('Server running on port 3100')
})

