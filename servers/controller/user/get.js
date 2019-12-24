const { userModel } = require('../../models')
module.exports = async (ctx) => {
  let data = []
  data = await userModel.find()
  ctx.state.res({
    data
  })
}
