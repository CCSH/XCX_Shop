// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

var request = require('request-promise')

// 云函数入口函数
exports.main = async (event, context) => {
  var method = event.method.toLocaleUpperCase()
  //统一参数处理
  var options = {
    uri: event.url,
    method: method,
    timeout: 30 * 1000,
    header: {
      'content-type': 'applicction/x-www-form-urlencoded',
    },
    json: true,
  }

  //拼接参数
  switch (method) {
    case 'POST':
      options.body = event.param
      break
    default:
      //默认是get
      options.qs = event.param
      break
  }
  console.log(options)
  //进行请求
  return new Promise((resolve, reject) => {
    request(options, function (error, response, body) {
      resolve(body)
      if (!error && response.statusCode == 200) {
        try {
        } catch (e) {
          reject()
        }
      }
    })
  })
}
