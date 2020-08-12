// pages/confirm_order/index.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    couponsPop: false,
    coupon: [
      {
        goods_id: null,
        goods_category_id: null,
        use_type: '0',
        name: '\u6ee1200\u51cf30',
        id: '2',
        money: '30.00',
        condition: '200.00',
        createnum: '0',
        use_start_time: '2020-07-10',
        use_end_time: '2020-09-10',
        send_num: '2',
        spacing_time: '249547',
        use_type_title: '\u5168\u5e97\u901a\u7528',
        isget: '1',
      },
      {
        goods_id: null,
        goods_category_id: null,
        use_type: '0',
        name: '\u6ee1100\u51cf10',
        id: '1',
        money: '10.00',
        condition: '100.00',
        createnum: '0',
        use_start_time: '2020-07-10',
        use_end_time: '2020-09-10',
        send_num: '2',
        spacing_time: '249499',
        use_type_title: '\u5168\u5e97\u901a\u7528',
        isget: '1',
      },
    ],
    dataSoure: {
      goods: [
        {
          original_img:
            '/public/upload/goods/2020/07-02/9cc32248b1f56ff295d8edd816a9ab1e.jpg',
          goods_name:
            '\u9ed1\u68ee\u9999\u83c7\u8106\u7247啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦',
          price: '10.00',
          buy_num: '5',
          shop_price: '16.00',
          key_name: '\u89c4\u683c:70\u514b/\u76d2',
        },
        {
          original_img:
            '/public/upload/goods/2020/07-02/9cc32248b1f56ff295d8edd816a9ab1e.jpg',
          goods_name: '\u9ed1\u68ee\u9999\u83c7\u8106\u7247',
          price: '16.00',
          key_name: '\u89c4\u683c:70\u514b/\u76d2',
          buy_num: '1',
        },
      ],
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
      // wx.showToast({
      //   title: '成功',
      //   mask: true,
      // })

      setTimeout(function () {
        wx.navigateBack({
          delta: 1,
        })
      }, 1500)
    }, 2000)
  },
})
