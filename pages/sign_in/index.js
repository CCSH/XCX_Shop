// pages/sign_in/index.js
import util from '../../utils/util'
let app = getApp()

Page({
  /**
   * 页面的初始数据
   */
  data: {
    statusH: app.statusBarH,
    customData: {
      specialDays: [],
      isShow: false,
    },
    dataSoure: {
      sign_time: '20200814,20200817',
      active_num: '4',
      show:
        '1.\u7b7e\u5230\u53ef\u83b7\u5f97\u6d3b\u8dc3\u6307\u6570\uff0c\u6bcf\u65e5\u7b7e\u5230\u4e00\u6b21\uff0c\u53ef\u83b7\u5f971\u6d3b\u8dc3\u6307\u6570\n2.\u83b7\u5f97\u6d3b\u8dc3\u6307\u6570\u53ef\u83b7\u5f97\u5206\u7ea2\u8d44\u683c',
    },
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
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
    wx.navigateBack({
      delta: 1,
    })
  },

  // MARK 处理数据
  handleData() {
    let data = this.data.dataSoure
    let customData = this.data.customData

    //  处理特殊
    customData.specialDays = data.sign_time.split(',')
    this.setData({
      customData: customData,
    })
  },

  // MARK 点击签到
  onSignin() {
    let customData = this.data.customData

    //  处理数据
    customData.isShow = true
    this.setData({
      customData: customData,
    })
  },

  // MARK 关闭弹窗
  onClose() {
    let customData = this.data.customData

    //  处理数据
    customData.isShow = false
    this.setData({
      customData: customData,
    })
  },
})
