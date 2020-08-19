// pages/me/index.js
import Toast from '@vant/weapp/toast/toast'
Page({
  /**
   * 页面的初始数据
   */
  data: {
    orderList: [
      {
        img: '/images/order_dfk.png',
        name: '待付款',
      },
      {
        img: '/images/order_dfh.png',
        name: '待发货',
      },
      {
        img: '/images/order_dsh.png',
        name: '待收货',
      },
      {
        img: '/images/order_dpj.png',
        name: '待评价',
      },
      {
        img: '/images/order_qb.png',
        name: '全部',
      },
    ],
    fwList: [
      {
        img: '/images/me_grzx.png',
        name: '个人中心',
      },
      {
        img: '/images/me_tjm.png',
        name: '绑定推荐码',
      },
      {
        img: '/images/me_wdsc.png',
        name: '我的收藏',
      },
      {
        img: '/images/me_shdz.png',
        name: '收货地址',
      },
      {
        img: '/images/me_sz.png',
        name: '设置',
      },
    ],
    dataSoure: {
      user_id: '41',
      nickname: '176****5339',
      user_money: '0.00',
      head_pic: '/public/images/wosheng_head_defaul.png',
      sex: '0',
      birthday: '0',
      province: '0',
      city: '0',
      district: '0',
      warrant_lock: '0.00',
      warrant_free: '0.00',
      openid: null,
      user_sn: 'LG41776366',
      first_leader: '0',
      province_name: '',
      city_name: '',
      district_name: '',
      active_num: '1',
      first_leader_sn: '',
      order_num: {
        WAITPAY: '5',
        WAITSEND: '0',
        WAITRECEIVE: '0',
        WAITCCOMMENT: '0',
      },
    },
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {},

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

  // MARK 复制推荐码
  onCopy() {
    wx.setClipboardData({
      data: this.data.dataSoure.user_sn,
    })
  },

  // MARK 进入签到
  onSignin() {
    console.log(1)
    wx.navigateTo({
      url: '/pages/sign_in/index',
    })
  },

  // MARK 我的订单
  onOrder(event) {
    let index = event.currentTarget.dataset.param
    wx.navigateTo({
      url: `/pages/me_order/index?index=${index}`,
    })
  },
})
