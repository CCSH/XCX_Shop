const Routing = require('../../utils/routing')
const util = require('../../utils/util')
const InterFace = require('../../utils/interface')

//Page Object
Page({
  data: {
    dataSoure: null,
  },
  //options(Object)
  onLoad: function (options) {
    let param = Routing.getRoutingParam(options)
    var title = '新闻动态'
    if (param) {
      if (param.title) {
        title = param.title
      }
    }

    wx.setNavigationBarTitle({
      title: title,
    })

    this.requestData(param.link_id)
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

  // MARK 新闻动态
  requestData(event) {
    InterFace.newsList({
      pid: event,
    }).then((res) => {
      this.handleData(res.data)
    })
  },

  // MARK 处理数据
  handleData(event) {
    var dataSoure = event
    if (!dataSoure) {
      dataSoure = this.data.dataSoure
    }

    dataSoure.map((item) => {
      item.time = util.secondsToTime(item.publish_time)
    })

    this.setData({
      dataSoure,
    })
  },

  // MARK 点击
  onSelect(event) {
    Routing.navTo('custom_web', {
      url: event.currentTarget.dataset.param,
      title: '详情',
    })
  },
})
