const Routing = require('../../utils/routing')

//Page Object
Page({
  data: {
    listData: [
      {
        name: '收货人',
        placeholder: '请填写收货人姓名',
      },
      {
        name: '手机号码',
        placeholder: '收货人手机号',
      },
      {
        name: '所在地区',
      },
      {
        name: '详细地址',
        placeholder: '街道，门牌号等',
      },
    ],
    dataSoure: {},
  },
  //options(Object)
  onLoad: function (options) {
    let dataSoure = Routing.getRoutingParam(options)

    var title = '新增收货地址'
    if (dataSoure) {
      title = '编辑收货地址'
    }

    //设置标题
    wx.setNavigationBarTitle({
      title: title,
    })

    this.handleData(dataSoure)
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

    console.log(dataSoure)

    var listData = this.data.listData

    listData.map((item, index) => {
      switch (index) {
        case 0:
          item.value = dataSoure.consignee
          break
        case 1:
          item.value = dataSoure.mobile
          break
        case 3:
          item.value = dataSoure.address
          break
        default:
          break
      }
    })

    this.setData({
      dataSoure,
      listData,
    })
  },

  // MARK 地区
  onRegion(event) {
    let data = event.detail.value
    var dataSoure = this.data.dataSoure

    dataSoure.province = data[0]
    dataSoure.city = data[1]
    dataSoure.district = data[2]
    this.handleData(dataSoure)
  },

  // MARK 保存
  onSave() {
    Routing.navBack()
  },

  // MARK 输入框
  onInput(event) {
    let value = event.detail.value
    var dataSoure = this.data.dataSoure

    switch (event.currentTarget.dataset.param) {
      case 0:
        dataSoure.consignee = value
        break
      case 1:
        dataSoure.mobile = value
        break
      case 3:
        dataSoure.address = value
        break

      default:
        break
    }

    this.handleData(dataSoure)
  },
})
