const { userModel } = require('../../models')
module.exports = async (ctx) => {
  let user = ctx.request.body
  const hasuser = await userModel.findOne({name: user.name})
  if(hasuser) {
    ctx.state.res({
      errno: 400,
      errmsg: '已存在用户',
    })
  } else {
    const userApi = new userModel({
      ...user,
      votes: []
    });
    try {
      await userApi.save()
      ctx.state.res({
        data: '创建用户成功'
      })
    } catch(err) {
      ctx.state.res({
        errno: 400,
        errmsg: '创建用户失败',
      })
    }
  }
}
