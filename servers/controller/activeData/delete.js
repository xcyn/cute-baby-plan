const { activeDataModel } = require('../../models')
module.exports = async (ctx) => {
  let ActiveData = ctx.request.body
  const hasActiveData = await activeDataModel.findOne({phone: ActiveData.phone})
  if(hasActiveData) {
    await activeDataModel.remove(hasActiveData)
    ctx.state.res({
      data: '删除活动数据'
    })
  } else {
    ctx.state.res({
      errno: 400,
      errmsg: '不存在活动数据',
    })
  }
}
