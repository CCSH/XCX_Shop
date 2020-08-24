const Routing = require('../../utils/routing')

// pages/me/index.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    isLogin: true,
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
    serviceList: [
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
      birthday: '1597939200',
      province: '338',
      city: '569',
      district: '570',
      warrant_lock: '0.00',
      warrant_free: '0.00',
      openid: null,
      user_sn: 'LG41776366',
      first_leader: '0',
      province_name: '\u5929\u6d25\u5e02',
      city_name: '\u5e02\u8f96\u53bf',
      district_name: '\u5b81\u6cb3\u53bf',
      active_num: '4',
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

  // MARK 我的服务
  onService(event) {
    let index = event.target.dataset.param
    let service = this.data.serviceList[index]
    switch (service.name) {
      case '个人中心':
        Routing.navTo('user_center', this.data.dataSoure)
        break
      case '绑定推荐码':
        Routing.navTo('user_sn', this.data.dataSoure.first_leader_sn)
        break
      case '我的收藏':
        Routing.navTo('user_collection')
        break
      case '收货地址':
        Routing.navTo('user_address')
        break
      case '设置':
        Routing.navTo('user_setting')
        break
      default:
        break
    }
  },

  // MARK 登录
  onLogin() {
    app.gotoLogin()
  },
})
