const { checkLoginApi } = require('../api/checkLogin')
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
      const auths = auth.split('-')
      let user = {
        name: auths[1],
        password: auths[2]
      }
      const isLogin = await checkLoginApi(user)
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