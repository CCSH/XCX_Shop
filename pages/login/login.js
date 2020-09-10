const Store = require('../../utils/store')
let app = getApp()

// pages/login/login.js
Page({
  /**
   * 页面的初始数据
   */
  data: {},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    Store.setStorage(app.userInfo, {
      user_id: '2',
      nickname: '132****0601',
      user_money: '101.40',
      head_pic:
        '/public/api_upload/2020/06-12/00f2f215ba6dc9d88bb58e8681059128.jpg',
      sex: '2',
      birthday: '0',
      province: '8558',
      city: '8559',
      district: '8585',
      warrant_lock: '5639.80',
      warrant_free: '0.20',
      openid: '',
      user_sn: 'LG1234567',
      province_name: '黑龙江省',
      city_name: '哈尔滨市',
      district_name: '南岗区',
      active_num: '7',
      order_num: {
        WAITPAY: '7',
        WAITSEND: '8',
        WAITRECEIVE: '0',
        WAITCCOMMENT: '0',
      },
    })
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
})
