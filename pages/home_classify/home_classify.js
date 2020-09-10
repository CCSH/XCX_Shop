import Toast from '@vant/weapp/toast/toast'
import InterFace from '../../utils/interface'
const Routing = require('../../utils/routing')

let app = getApp()

//Page Object
Page({
  data: {
    dataSoure: null,
  },
  //options(Object)
  onLoad: function (options) {
    let param = Routing.getRoutingParam(options)
    var title = '商品分类'
    if (param) {
      if (param.title) {
        console.log('1')
        title = param.title
      }
    }

    wx.setNavigationBarTitle({
      title: title,
    })

    if (param.search) {
      // 搜索
      this.requestSearch(param.search)
    } else {
      // 分类
      this.requestData()
    }
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

  // MARK 请求 商品分类
  requestData() {
    // forest
    InterFace.homeGood({
      category: '',
    }).then((res) => {
      this.handleData(res.data)
    })
  },

  // MARK 请求 搜索内容
  requestSearch(event) {
    InterFace.goodsSearch({
      key_word: event,
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

    // dataSoure.map((item) => {
    //   item.time = util.secondsToTime(item.publish_time)
    // })

    this.setData({
      dataSoure,
    })
  },

  // MARK 点击
  onSelect(event) {
    app.gotoGoods(event.currentTarget.dataset.param)
  },
})
