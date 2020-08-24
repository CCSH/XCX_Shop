const Routing = require('../../utils/routing')
let app = getApp()

//Page Object
Page({
  data: {
    dataSoure: [
      {
        collect_id: '45',
        goods_id: '42',
        goods_name: '\u9ed1\u68ee\u9999\u83c7\u8106\u7247',
        shop_price: '16.00',
        original_img:
          '/public/upload/goods/2020/07-02/9cc32248b1f56ff295d8edd816a9ab1e.jpg',
      },
      {
        collect_id: '46',
        goods_id: '6',
        goods_name: '\u94f6 \u8033',
        shop_price: '30.00',
        original_img:
          '/public/upload/goods/2020/07-01/a31f9deb66a7d349ced7b4edc1ecd977.jpg',
      },
    ],
  },
  //options(Object)
  onLoad: function (options) {},
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
  // MARK 取消收藏
  onCancel(event) {
    var dataSoure = this.data.dataSoure

    dataSoure.splice(event.currentTarget.dataset.param, 1)

    this.setData({
      dataSoure,
    })
  },
  // MARK 点击
  onSelect(event) {
    app.gotoGoods(event.currentTarget.dataset.param)
  },
})
