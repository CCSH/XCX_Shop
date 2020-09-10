// pages/confirm_order/index.js

import Toast from '@vant/weapp/toast/toast'

Page({
  /**
   * 页面的初始数据
   */
  data: {
    couponsPop: false,
    coupon: '可用0张',
    currentCoupon: null,
    money: 0,
    dataSoure: {
      total_price: '604',
      final_price: '580',
      cartList: [
        {
          id: '1007',
          user_id: '41',
          goods_id: '42',
          goods_name: '\u9ed1\u68ee\u9999\u83c7\u8106\u7247',
          goods_price: '16.00',
          member_goods_price: '10.00',
          goods_num: '4',
          item_id: '61',
          spec_key_name: '\u89c4\u683c:70\u514b/\u76d2',
          prom_id: '3',
          prom_type: '1',
          store_count: '298',
          original_img:
            '/public/upload/goods/2020/07-02/9cc32248b1f56ff295d8edd816a9ab1e.jpg',
          cat_id: '15',
        },
        {
          id: '1005',
          user_id: '41',
          goods_id: '39',
          goods_name: '\u6709\u673a\u7a3b\u82b1\u9999\u7c73',
          goods_price: '180.00',
          member_goods_price: '180.00',
          goods_num: '3',
          item_id: '58',
          spec_key_name: '\u89c4\u683c:500\u514b*8/\u76d2',
          prom_id: '0',
          prom_type: '0',
          store_count: '48',
          original_img:
            '/public/upload/goods/2020/07-02/9dcadb92a8b2dc401f8f94a6e85ef00c.jpg',
          cat_id: '12',
        },
      ],
      coupon: [
        {
          coupon_id: '25',
          name: '\u6ee1100\u51cf50',
          money: '50.00',
          condition: '100.00',
          use_start_time: '1597127195',
          use_end_time: '1602483995',
          use_type_title: '\u5168\u5e97\u901a\u7528',
          status: '1',
        },
        {
          coupon_id: '24',
          name: '\u6ee1100\u51cf80',
          money: '80.00',
          condition: '100.00',
          use_start_time: '1597127250',
          use_end_time: '1602484050',
          use_type_title: '\u5168\u5e97\u901a\u7528',
          status: '1',
        },
        {
          coupon_id: '26',
          name: '\u6ee1200\u51cf80',
          money: '80.00',
          condition: '200.00',
          use_start_time: '1597127305',
          use_end_time: '1602484105',
          use_type_title: '\u5168\u5e97\u901a\u7528',
          status: '0',
        },
      ],

      address: null,
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

  // MARK 处理数据
  handleData() {
    let dataSoure = this.data.dataSoure
    //处理优惠
    let coupon = 0

    dataSoure.coupon.map((item, index) => {
      if (item.status == '1') {
        coupon++
      }
    })

    //处理优惠
    let money = (
      parseFloat(dataSoure.total_price) - parseFloat(dataSoure.final_price)
    ).toFixed(2)

    this.setData({
      money: money,
      coupon: `可用${coupon}张`,
    })
  },

  // MARK 优惠卷点击
  onCoupons() {
    this.setData({
      couponsPop: true,
    })
  },

  // MARK  关闭
  onClose() {
    this.setData({
      couponsPop: false,
    })
  },
  // MARK 提交
  onSubmit() {
    wx.showLoading({
      title: '提交中',
      mask: true,
    })

    //模拟支付请求
    setTimeout(function () {
      wx.showToast({
        title: '成功',
        mask: true,
      })

      setTimeout(function () {
        wx.navigateBack({
          delta: 1,
        })
      }, 1500)
    }, 2000)
  },

  // MARK 选择优惠
  checkCoupon(event) {
    let coupon = event.currentTarget.dataset.param

    if (coupon.status != '1') {
      Toast('不能使用此优惠')
      return
    }

    //关闭
    this.onClose()

    //数据处理
    let data = this.data

    if (data.currentCoupon) {
      data.money = parseFloat(data.money) - parseFloat(data.currentCoupon.money)
    }

    data.money = parseFloat(data.money) + parseFloat(coupon.money)

    data.dataSoure.final_price =
      parseFloat(data.dataSoure.total_price) - parseFloat(data.money)

    this.setData({
      coupon: coupon.name,
      money: data.money,
      currentCoupon: coupon,
      dataSoure: data.dataSoure,
    })
  },
})
