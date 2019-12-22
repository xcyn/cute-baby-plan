const { activeDataModel } = require('../../models')
module.exports = async (ctx) => {
  const data = await activeDataModel.findOne({version: 1})
  ctx.state.res({
    data
  })
}
