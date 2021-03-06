// pages/order_detail/index.js
import routing from '../../utils/routing'
import Routing from '../../utils/routing'
let app = getApp()

Page({
  /**
   * 页面的初始数据
   */
  data: {
    statusBarH: app.statusBarH,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let dataSoure = routing.getRoutingParam(options)
    this.setData({
      dataSoure,
    })
    this.handleData()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {},

  // MARK 返回页面
  onBack: function () {
    Routing.navBack('me_order/index', {
      isReload: true,
    })
  },

  // MARK 处理数据
  handleData() {
    let dataSoure = this.data.dataSoure

    //处理优惠金额
    dataSoure.amount =
      parseFloat(dataSoure.total_amount) - parseFloat(dataSoure.order_amount)

    this.setData({
      dataSoure,
    })
  },
  // MARK 商品点击
  onGoods(event) {
    Routing.navTo('good_detail/index', {
      goods_id: event.currentTarget.dataset.param,
    })
  },
})
