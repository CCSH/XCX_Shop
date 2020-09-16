const Routing = require('./utils/routing')
const Store = require('./utils/store')

App({
  // 系统信息
  winW: 0,
  winH: 0,
  statusBarH: 0,
  systemName: '',
  systemVersion: '',
  systemSDKVersion: '',
  // 主机地址
  baseUrl: 'https://legong.frnnet.com/',
  // 是否是全面屏
  isFull: false,
  bottomH: 0,

  //APP key
  // 用户信息
  userInfo: 'user_info',
  // 版本
  version: 'version',
  // 账号
  phone: 'phone',

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

  // MARK 进入登录页面
  gotoLogin() {
    //清除登录信息
    Store.setStorage(this.userInfo)
    // 跳转登录
    Routing.redirectTo('login')
  },

  // MARK 进入WEB页面
  gotoWeb(url, title) {
    Routing.navTo('custom_web', {
      url: url,
      title: title,
    })
  },
})
