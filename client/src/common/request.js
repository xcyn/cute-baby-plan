import axios from 'axios'
import qs from 'qs'

const request = function (option = {}) {
  let sendUrl = process.env.VUE_APP_BASE_API + option.url
  let method = option.method.toLocaleLowerCase()
  if (option.method === 'get') {
    sendUrl += '?' + qs.stringify(option.params)
  }
  if(!option.headers) {
    option.headers = {
      'Content-Type': 'application/json;charset=UTF-8'
    }
  }
  console.log('13213', sendUrl)
  return axios({
    method,
    url: sendUrl,
    data: method === 'get' ? null : option.params,
    headers: option.headers,
  })
    .then(response => {
      return response.data
    })
    .catch(err => {
      throw err
    }).finally(() => {
    })
}

axios.interceptors.response.use(
  function (response) {
      if (response && response.data && response.data.errno === 0) {
          return response.data || {};
      } else {
        // todo: 可优化成组件弹窗
        alert(response.data.errmsg || '接口请求失败')
        return response
      }
  },
  function (error) {
      return Promise.reject(error);
  }
);

export default request