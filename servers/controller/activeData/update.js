const { updateVisitNumApi } = require('../../api/updateVisit')
module.exports = async (ctx) => {
  let activeData = ctx.request.body
  // 更新访问数据
  if(activeData.type === 'visitNum') {
    updateVisitNumApi()
  }
  ctx.state.res({
    data: '更新活动数据成功'
  })
}
