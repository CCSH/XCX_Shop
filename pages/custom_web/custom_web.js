import Toast from '@vant/weapp/toast/toast'

const Routing = require('../../utils/routing')
let app = getApp()

//Page Object
Page({
  data: {
    param: {},
  },
  //options(Object)
  onLoad: function (options) {
    let param = Routing.getRoutingParam(options)
    this.handleData(param)
  },
  onReady: function () {},
  onShow: function () {},
  onHide: function () {},
  onUnload: function () {},
  onPullDownRefresh: function () {},
  onReachBottom: function () {},
  onShareAppMessage: function () {},
  onPageScroll: function () {},
  //item(index,pagePath,text)
  onTabItemTap: function (item) {},

  // MARK 处理数据
  handleData(event) {
    var param = event
    if (!param) {
      param = this.data.param
    }

    // 设置标题
    if (param.title) {
      wx.setNavigationBarTitle({
        title: param.title,
      })
    }

    // 设置url
    if (param.url.indexOf('http') == -1) {
      param.url = app.baseUrl + param.url
    }
    this.setData({
      param,
    })
    console.log(`访问地址：${param.url}`)
  },
})
