const Routing = require('../../utils/routing')

//Page Object
Page({
  data: {
    dataSoure: [
      {
        address_id: '261',
        user_id: '41',
        consignee: '11',
        province: '\u5317\u4eac\u5e02',
        city: '\u5e02\u8f96\u533a',
        district: '\u4e1c\u57ce\u533a',
        address: '13',
        mobile: '111',
        is_default: '0',
        province_id: '1',
        city_id: '2',
        district_id: '3',
      },
      {
        address_id: '265',
        user_id: '41',
        consignee: '12342134',
        province: '\u5317\u4eac\u5e02',
        city: '\u5e02\u8f96\u533a',
        district: '\u4e1c\u57ce\u533a',
        address: 'Qwerwqer',
        mobile: '123421342134',
        is_default: '0',
        province_id: '1',
        city_id: '2',
        district_id: '3',
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

  // MARK 设置默认
  onDefault(event) {
    console.log('123', event)

    var dataSoure = this.data.dataSoure

    dataSoure.map((item, index) => {
      item.is_default = '0'
      if (index == event.currentTarget.dataset.param) {
        item.is_default = '1'
      }
    })

    this.setData({
      dataSoure,
    })
  },

  // MARK 删除
  onDelete(event) {
    var dataSoure = this.data.dataSoure
    dataSoure.splice(event.currentTarget.dataset.param, 1)

    this.setData({
      dataSoure,
    })
  },

  // MARK 地址
  onAddress(event) {
    Routing.navTo('address_edit', event.currentTarget.dataset.param)
  },
})
