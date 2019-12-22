const { pothunterModel } = require('../../models')
const { updatePothunterNumApi } = require('../../api/updateVisit')
module.exports = async (ctx) => {
  let pothunter = ctx.request.body
  const hasPothunter = await pothunterModel.findOne({phone: pothunter.phone})
  if(hasPothunter) {
    await pothunterModel.remove(hasPothunter)
    // 更新活动数据
    updatePothunterNumApi(-1)
    ctx.state.res({
      data: '删除参赛者成功'
    })
  } else {
    ctx.state.res({
      errno: 400,
      errmsg: '不存在参赛者',
    })
  }
}
