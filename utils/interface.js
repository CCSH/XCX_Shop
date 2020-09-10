// 小程序接口层
let request = require('request.js')
let store = require('store')

let app = getApp()

class InterFace {
  // MARK 主机地址
  static baseUrl = 'https://legong.frnnet.com/'

  // MARK 首页
  static homeIndex(event) {
    return request.post({
      url: this.baseUrl + 'index.php/api/UsersIndex/index/',
      param: event,
    })
  }

  // MARK 活动商品列表
  static homeGood(event) {
    return request.post({
      url: this.baseUrl + 'index.php/api/UsersIndex/goodsList/',
      param: event,
    })
  }

  // MARK 分类
  static homeCategory(event) {
    return request.post({
      url: this.baseUrl + 'index.php/api/UsersIndex/category/',
      param: event,
    })
  }

  // MARK 分类商品列表
  static goodsList(event) {
    return request.post({
      url: this.baseUrl + 'index.php/api/UsersGoods/goodsList/',
      param: event,
    })
  }

  // MARK 商品搜索
  static goodsSearch(event) {
    return request.post({
      url: this.baseUrl + 'index.php/api/UsersGoods/search',
      param: event,
    })
  }

  // MARK 商品详情
  static goodsInfo(event) {
    var data = event ? event : {}
    let userInfo = wx.getStorageSync(app.userInfo)
    if (userInfo) {
      data.user_id = userInfo.user_id
    }

    return request.post({
      url: this.baseUrl + 'index.php/api/UsersGoods/goodsInfo',
      param: data,
    })
  }

  // MARK 新闻动态
  static newsList(event) {
    return request.get({
      url: this.baseUrl + 'index.php/api/UsersIndex/newsList',
      param: event,
    })
  }

  // MARK 每日抢先
  static flashSale(event) {
    return request.get({
      url: this.baseUrl + 'index.php/api/UsersIndex/flash_sale',
      param: event,
    })
  }
  // MARK 商品详情领取优惠券
  static getCoupon(event) {
    return request.post({
      url: this.baseUrl + 'index.php/api/UsersGoods/get_coupon',
      param: event,
    })
  }

  // MARK 分类商品列表
  static goodsList(event) {
    return request.post({
      url: this.baseUrl + 'index.php/api/UsersGoods/goodsList',
      param: event,
    })
  }

  // // MARK 分类商品列表
  // static goodsList(event) {
  //   return request.post({
  //     url: this.baseUrl + 'index.php/api/UsersGoods/goodsList',
  //     param: event,
  //   })
  // }

  // MARK 上传图片
  static uploadImg(event) {
    return request.upload({
      url: this.baseUrl + 'index.php/api/upload/uploadimgs',
      param: event,
      formData: {},
    })
  }

  // MARK 需要登录
  static needLogin() {
    return store.getStorage(app.userInfo).catch(() => {
      //去登录
      app.gotoLogin()
    })
  }
}

module.exports = InterFace
