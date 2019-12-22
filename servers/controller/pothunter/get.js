const { pothunterModel } = require('../../models')
module.exports = async (ctx) => {
  let data = []
  if(ctx.request.query.rank) {
    data = await pothunterModel.find().sort({
      voteNum: ctx.request.query.rank
    })
  } else {
    data = await pothunterModel.find()
  }
  ctx.state.res({
    data
  })
}
