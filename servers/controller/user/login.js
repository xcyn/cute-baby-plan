const { userModel } = require('../../models')
const jwtUtils = require('../../utils/jwt')
module.exports = async (ctx) => {
  let user = ctx.request.body
  const hasuser = await userModel.findOne({name: user.name})
  if(hasuser) {
    let userInfo = {
      name: hasuser.name,
      password: hasuser.password
    }
    const checkLogin = JSON.stringify(userInfo) === JSON.stringify(user)
    if(checkLogin) {
      const jwt = await jwtUtils.jwtSign({
        name: userInfo.name,
        password: userInfo.password
      })
      ctx.cookies.set("auth", jwt)
      ctx.state.res({
        errmsg: '登录成功',
        data: {
          ...userInfo,
          votes: hasuser.votes,
          auth: jwt
        }
      })
    } else {
      ctx.state.res({
        errno: 400,
        errmsg: '帐号密码不正确'
      })
    }
  } else {
    ctx.state.res({
      errno: 400,
      errmsg: '不存在当前用户, 请注册用户',
    })
  }
}
