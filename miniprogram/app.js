const Routing = require('./utils/routing')
const DB = require('./utils/db')

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
    return DB.addUserInfo({
      user_id: '41',
      nickname: '176****5339',
      user_money: '0.00',
      head_pic: '/public/images/wosheng_head_defaul.png',
      sex: '0',
      birthday: '1597939200',
      province: '338',
      city: '569',
      district: '570',
      warrant_lock: '0.00',
      warrant_free: '0.00',
      openid: null,
      user_sn: 'LG41776366',
      first_leader: '0',
      province_name: '\u5929\u6d25\u5e02',
      city_name: '\u5e02\u8f96\u53bf',
      district_name: '\u5b81\u6cb3\u53bf',
      active_num: '4',
      first_leader_sn: '',
      order_num: {
        WAITPAY: '5',
        WAITSEND: '0',
        WAITRECEIVE: '0',
        WAITCCOMMENT: '0',
      },
    })
  },

  // MARK 进入WEB页面
  gotoWeb(url, title) {
    Routing.navTo('custom_web', {
      url: url,
      title: title,
    })
  },
})
