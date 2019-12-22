const { pothunterModel } = require('../../models')
const { updatePothunterNumApi } = require('../../api/updateVisit')
module.exports = async (ctx) => {
  let pothunter = ctx.request.body
  const hasPothunter = await pothunterModel.findOne({phone: pothunter.phone})
  if(hasPothunter) {
    ctx.state.res({
      errno: 400,
      errmsg: '已存在参赛者',
    })
  } else {
    const PothunterApi = new pothunterModel({...pothunter, voteNum: 0});
    try {
      await PothunterApi.save()
      // 更新参赛人数
      updatePothunterNumApi(1)
      ctx.state.res({
        data: '添加参赛者成功'
      })
    } catch(err) {
      ctx.state.res({
        errno: 400,
        errmsg: '添加参赛者失败',
      })
    }
  }
}
