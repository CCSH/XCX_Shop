import Toast from '@vant/weapp/toast/toast'
const Routing = require('../../utils/routing')

let app = getApp()

//Page Object
Page({
  data: {
    dataSoure: [
      {
        goods_id: '7',
        goods_name: '\u7334\u5934\u76d2\u88c5',
        shop_price: '50.00',
        original_img:
          '/public/upload/goods/2020/07-01/7fc747d7decd07c020f6af4993b8771d.png',
        sales_sum: '1',
        width: '800',
        height: '800',
      },
      {
        goods_id: '8',
        goods_name: '\u9ed1\u6728\u8033\u76d2\u88c5',
        shop_price: '40.00',
        original_img:
          '/public/upload/goods/2020/07-01/f98c5d5f49f7a037793df870ebb82764.jpg',
        sales_sum: '0',
        width: '800',
        height: '800',
      },
      {
        goods_id: '9',
        goods_name: '\u5143\u8611\u76d2\u88c5',
        shop_price: '45.00',
        original_img:
          '/public/upload/goods/2020/07-01/bf7a4bf862ad9398636607ff42993e4c.jpg',
        sales_sum: '0',
        width: '800',
        height: '800',
      },
      {
        goods_id: '10',
        goods_name: '\u9999\u83c7\u76d2\u88c5',
        shop_price: '45.00',
        original_img:
          '/public/upload/goods/2020/07-01/edebe495a6d90be79981439f68229e25.jpg',
        sales_sum: '1',
        width: '800',
        height: '800',
      },
      {
        goods_id: '11',
        goods_name: '\u699b\u8611\u76d2\u88c5',
        shop_price: '48.00',
        original_img:
          '/public/upload/goods/2020/07-01/bdf423712f73c62a890804e4a9654884.jpg',
        sales_sum: '0',
        width: '800',
        height: '800',
      },
      {
        goods_id: '12',
        goods_name: '\u79cb\u6728\u8033\u76d2\u88c5',
        shop_price: '45.00',
        original_img:
          '/public/upload/goods/2020/07-01/18452f1ef0cdbed59171f2220db1f2eb.jpg',
        sales_sum: '0',
        width: '800',
        height: '800',
      },
    ],
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

      if (param.search) {
        Toast(`搜索内容：${param.search}`)
      }
    }

    wx.setNavigationBarTitle({
      title: title,
    })

    this.handleData()
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
