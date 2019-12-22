const fs = require('fs')
const path = require('path')
let isdev = process.env.NODE_ENV === 'development'
let baseUrl = isdev ? 'http://127.0.0.1:3099' : 'http://49.233.77.39:3099'
module.exports = async (ctx) => {
  // 上传单个文件
  const file = ctx.request.files.file;
  // 创建可读流
  const reader = fs.createReadStream(file.path);
  let filePath = path.join(__dirname, '../../static/imgs') + `/${file.name}`;
  // 创建可写流
  const upStream = fs.createWriteStream(filePath);
  // 可读流通过管道写入可写流
  reader.pipe(upStream);
  ctx.state.res({
    data: {
      url: `${baseUrl}/imgs/${file.name}`
    }
  })
}
