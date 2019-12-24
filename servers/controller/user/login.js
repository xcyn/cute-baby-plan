const { userModel } = require('../../models')
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
      ctx.cookies.set("auth", `jwt-${userInfo.name}-${userInfo.password}`)
      ctx.state.res({
        errmsg: '登录成功',
        data: {
          ...userInfo,
          votes: hasuser.votes,
          auth: `jwt-${userInfo.name}-${userInfo.password}`
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
