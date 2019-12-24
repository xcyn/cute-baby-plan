const { pothunterModel } = require('../../models')
const { updateVoteNumApi, updateUserVoteApi } = require('../../api/updateVisit')
module.exports = async (ctx) => {
  let pothunter = ctx.request.body
  const hasPothunter = await pothunterModel.findOne({phone: pothunter.phone})
  if(hasPothunter) {
    await pothunterModel.findOneAndUpdate({phone: pothunter.phone}, {
      voteNum: +hasPothunter.voteNum + 1
    })
    // 更新投票数据
    updateVoteNumApi(1)
    // 更新用户投票数据
    const votes = await updateUserVoteApi({
      user: {name: pothunter.userName},
      pothUnterId: pothunter.phone
    })
    ctx.state.res({
      data: {
        message: '投票成功',
        votes: votes
      }
    })
  } else {
    ctx.state.res({
      errno: 400,
      errmsg: '不存在参赛者',
    })
  }
}
