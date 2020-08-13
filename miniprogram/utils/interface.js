// 小程序接口层

let request = require('request.js')

class InterFace {
  // 电影列表
  static moviceList(event) {
    return request.GET({
      url: 'http://api.douban.com/' + 'v2/movie/in_theaters',
      param: event,
    })
  }
}

module.exports = InterFace
