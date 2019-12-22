const { pothunterModel } = require('../../models')
const { updateVoteNumApi } = require('../../api/updateVisit')
module.exports = async (ctx) => {
  let pothunter = ctx.request.body
  const hasPothunter = await pothunterModel.findOne({phone: pothunter.phone})
  if(hasPothunter) {
    await pothunterModel.findOneAndUpdate({phone: pothunter.phone}, {
      voteNum: +hasPothunter.voteNum + 1
    })
    // 更新投票数据
    updateVoteNumApi(1)
    ctx.state.res({
      data: '投票成功'
    })
  } else {
    ctx.state.res({
      errno: 400,
      errmsg: '不存在参赛者',
    })
  }
}
