const { activeDataModel } = require('../models')

// 更新参赛人数
async function updatePothunterNum(num = 1) {
  try {
    let data = await activeDataModel.findOne({version: 1})
    await activeDataModel.findOneAndUpdate({version: 1}, {
      pothunterNum: +data.pothunterNum + num
    })
  } catch(err) {
    throw err
  }
}


// 更新访问用户数据
async function updateVisitNum() {
  try {
    let data = await activeDataModel.findOne({version: 1})
    await activeDataModel.findOneAndUpdate({version: 1}, {
      visitNum: +data.visitNum + 1
    })
  } catch(err) {
    throw err
  }
}

// 更新投票数据
async function updateVoteNum(num = 1) {
  try {
    let data = await activeDataModel.findOne({version: 1})
    await activeDataModel.findOneAndUpdate({version: 1}, {
      voteNum: +data.voteNum + num
    })
  } catch(err) {
    throw err
  }
}

module.exports = {
  updatePothunterNumApi: updatePothunterNum,
  updateVisitNumApi: updateVisitNum,
  updateVoteNumApi: updateVoteNum
}
