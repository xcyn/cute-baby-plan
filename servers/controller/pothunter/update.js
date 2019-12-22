const { pothunterModel } = require('../../models')
module.exports = async (ctx) => {
  let pothunter = ctx.request.body
  const hasPothunter = await pothunterModel.findOneAndUpdate({phone: pothunter.phone}, pothunter)
  if(hasPothunter) {
    ctx.state.res({
      data: '更新参赛者成功'
    })
  } else {
    ctx.state.res({
      errno: 400,
      errmsg: '不存在参赛者',
    })
  }
}
