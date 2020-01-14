const { checkLoginApi } = require('../api/checkLogin')
const jwtUtils = require('../utils/jwt')
// 需要登录的接口
const authLists = ['/babyService/pothunter/vote']
// 判断登录
module.exports = async (ctx, next) => {
  const path = ctx.path
  if(authLists.indexOf(path) !== -1) {
    const auth = ctx.request.query.auth
    if(!auth) {
      ctx.state.res({
        errno: 401,
        errmsg: '请登录',
      })
      return
    } else {
      const userInfo = await jwtUtils.jwtVerify({
        jwt: auth
      })
      const isLogin = await checkLoginApi({
        name: userInfo.name,
        password: userInfo.password
      })
      if(!isLogin) {
        ctx.state.res({
          errno: 401,
          errmsg: '登录已经过期-请重写登录',
        })
        return
      }
    }
  }
  await next();
}