const Routing = require('../../utils/routing')
const InterFace = require('../../utils/interface')
let app = getApp()

// pages/classify/index.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    screeningArr: ['销量', '价格'],
    screeningIndex: 0,
    activeKey: 0,
    //数据
    dataSoure: null,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.requestData()
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

  // MARK 请求
  requestData() {
    InterFace.goodsList().then((res) => {
      this.setData({
        dataSoure: res.data,
      })
    })
  },

  //MARK: 点击了筛选
  onScreening: function (event) {
    this.setData({
      screeningIndex: event.target.dataset.index,
    })
  },

  // MARK: 进入商品详情
  gotoGoodDetail(event) {
    app.gotoGoods(event.currentTarget.dataset.param)
  },

  // MARK 改变
  onChange(event) {
    this.setData({
      activeKey: event.detail,
    })
  },
})
