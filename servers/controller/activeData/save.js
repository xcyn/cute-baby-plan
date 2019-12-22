const { activeDataModel } = require('../../models')
module.exports = async (ctx) => {
  let activeData = ctx.request.body
  const ActiveDataApi = new activeDataModel(activeData);
  await ActiveDataApi.save()
  ctx.state.res({
    data: '添加活动数据版本成功'
  })
}
