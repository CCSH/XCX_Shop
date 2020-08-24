const Routing = require('./utils/routing')

//app.js
App({
  // 系统信息
  winW: 0,
  winH: 0,
  statusBarH: 0,
  systemName: '',
  systemVersion: '',
  systemSDKVersion: '',
  // 主机地址
  baseUrl: 'http://legong.frnnet.com/',
  // 是否是全面屏
  isFull: false,
  bottomH: 0,

  onLaunch: function (options) {
    let self = this
    let systemInfo = wx.getSystemInfoSync()
    //设置
    self.systemName = systemInfo.system
    self.systemVersion = systemInfo.version
    self.systemSDKVersion = systemInfo.SDKVersion
    self.winW = systemInfo.windowWidth
    self.winH = systemInfo.windowHeight
    self.statusBarH = systemInfo.statusBarHeight
    // 保护
    if (!self.statusBarH) {
      self.statusBarH = 20
    }
    self.isFull = self.statusBarH > 20
    if (self.isFull) {
      self.bottomH = 31
    }
  },

  handleUrl(url, param) {
    return
  },

  // MARK 进入商品详情
  gotoGoods(event) {
    Routing.navTo('good_detail/index', {
      goods_id: event,
    })
  },
})
