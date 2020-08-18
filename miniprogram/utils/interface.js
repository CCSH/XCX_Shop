// 小程序接口层

let request = require('request.js')
import CryptoJS from './encrypt_util'

class InterFace {
  // 电影列表
  static moviceList(event) {
    return request.GET({
      url: 'http://api.douban.com/' + 'v2/movie/in_theaters',
      param: event,
    })
  }

  static login(event) {
    let param = CryptoJS.handleParam(event)
    console.log(param)
    return request.POST({
      url: 'http://api.douban.com/' + 'v2/movie/in_theaters',
      param: param,
    })
  }
}

module.exports = InterFace
