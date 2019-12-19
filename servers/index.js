// 定义全局路径
global.APP_PATH = __dirname;

var Koa = require('koa')
const koaBody = require('koa-body')
const chalk = require('chalk')
var appRoute = require('./routes')


//中间件
var response = require('./middleware/response');
var app = new Koa();

app.use(response)
app.use(koaBody({"multipart": true}))
app.use(appRoute.routes())
app.use(appRoute.allowedMethods());

app.on('error', (err, ctx) => {
  console.error('server error', err)
  ctx.body = '请求报错了';
});

app.listen(8108,() => {
  chalk.green('Server running on port 3099');
})

