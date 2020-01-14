const jwt = require('jsonwebtoken');
const secret = 'zybShare'
async function jwtSign(params) {
  return new Promise((resolve, reject) => {
      jwt.sign({
        name: params.name,
        password: params.password
      }, secret, (err, token) => {
          if(err) {
            reject(err)
          }
          resolve(token)
      })
  })
}
async function jwtVerify(params) {
  return new Promise((resolve, reject) => {
    jwt.verify(params.jwt, secret, (error, decoded) => {
      if(error) {
        reject(error)
      }
      resolve(decoded)
    })
  })
}
module.exports = {
  jwtSign,
  jwtVerify
}