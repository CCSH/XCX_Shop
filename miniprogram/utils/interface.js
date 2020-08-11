// Promise 小程序接口

let request = require('request.js')

class InterFace {
  // 电影列表
  static moviceList(event) {
    event.url = 'http://api.douban.com/' + 'v2/movie/in_theaters'
    return request.GET(event)
  }
}

module.exports = InterFace
