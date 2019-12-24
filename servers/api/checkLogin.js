const { userModel } = require('../models')

// 登录校验
async function checkLogin(userInfo) {
  try {
    let hasUser = await userModel.findOne(userInfo)
    return hasUser
  } catch(err) {
    throw err
  }
}

module.exports = {
  checkLoginApi: checkLogin
}
