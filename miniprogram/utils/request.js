// 定义
module.exports = {
  POST,
  GET,
}

// MARK GET请求
function GET(event) {
  wx.cloud.init()
  return wx.cloud.callFunction({
    name: 'request_get',
    data: {
      method: event.method,
      url: event.url,
      param: event.param,
    },
  })
}

// MARK POST请求
function POST(event) {
  wx.cloud.init()
  return wx.cloud.callFunction({
    name: 'request_post',
    data: {
      url: event.url,
      param: event.param,
    },
  })
}
