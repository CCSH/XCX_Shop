const Routing = require('../../utils/routing')
const util = require('../../utils/util')
const InterFace = require('../../utils/interface')
let app = getApp()

//Page Object
Page({
  data: {
    dataSoure: null,
  },
  //options(Object)
  onLoad: function (options) {
    let param = Routing.getRoutingParam(options)
    var title = '每日抢鲜'
    if (param && param.title) {
      title = param.title
    }

    wx.setNavigationBarTitle({
      title: title,
    })

    //请求
    this.requestData()
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

  // MARK 请求
  requestData() {
    InterFace.flashSale().then((res) => {
      this.handleData(res.data)
    })
  },

  // MARK 处理数据
  handleData(event) {
    var self = this
    var dataSoure = event
    if (!dataSoure) {
      dataSoure = self.data.dataSoure
    }

    self.setData({
      dataSoure,
    })

    dataSoure.map((item, index) => {
      // 处理定时器
      self.handleTime(index)
    })
  },

  // MARK 处理定时器
  handleTime(event) {
    var self = this
    var dataSoure = this.data.dataSoure
    var item = dataSoure[event]

    var timer = setInterval(function () {
      //循环代码
      var time = util.toCountDown(item.start_time)

      if (
        time.day >= 0 &&
        time.hour >= 0 &&
        time.minute >= 0 &&
        time.second >= 0
      ) {
        // 未开始
        time = util.toCountDown(item.start_time)
        item.name = '活动未开始!'
        item.time = `活动开始还有:${time.day}天 ${time.hour}小时 ${time.minute}分钟 ${time.second}秒`
      } else {
        time = util.toCountDown(item.end_time)
        if (
          time.day <= 0 &&
          time.hour <= 0 &&
          time.minute <= 0 &&
          time.second <= 0
        ) {
          // 结束了
          self.clearTimer(event)
          item.name = '活动已结束!'
          item.time = util.secondsToTime(item.start_time)
        } else {
          // 进行中
          item.name = '活动进行中!'
          item.time = `活动结束还有:${time.day}天 ${time.hour}小时 ${time.minute}分钟 ${time.second}秒`
        }
      }

      // 设置数据
      dataSoure[event] = item
      self.setData({
        dataSoure,
      })
    }, 1 * 1000)

    // 定时器设置
    item.timer = timer
    dataSoure[event] = item
    self.setData({
      dataSoure,
    })
  },

  // MARK 移除定时器
  clearTimer(event) {
    var self = this
    var dataSoure = self.data.dataSoure
    var item = dataSoure[event]
    //处理数据
    clearInterval(item.timer)
  },

  // MARK 点击
  onSelect(event) {
    app.gotoGoods(event.currentTarget.dataset.param)
  },
})
