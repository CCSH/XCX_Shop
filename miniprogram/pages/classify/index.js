// pages/classify/index.js
let app = getApp()

Page({
  /**
   * 页面的初始数据
   */
  data: {
    baseUrl: app.baseUrl,
    statusBarH: app.statusBarH * 2,
    //数据
    dataArr: [
      '全部商品',
      '全部商品',
      '全部商品',
      '全部商品',
      '全部商品',
      '全部商品',
      '全部商品',
      '全部商品',
    ],
    goodArr: [
      {
        goods_id: '23',
        goods_name: '\u5c71\u699b\u5b50',
        shop_price: '80.00',
        original_img:
          '/public/upload/goods/2020/07-01/58a0aa80a9f2c2ec99ac971d88e2d2f7.jpg',
        sales_sum: '0',
        width: '800',
        height: '800',
      },
      {
        goods_id: '24',
        goods_name: '\u5927\u699b\u5b50',
        shop_price: '50.00',
        original_img:
          '/public/upload/goods/2020/07-01/08a1986efa6847ff0d24c0dd38984b01.jpg',
        sales_sum: '0',
        width: '800',
        height: '800',
      },
      {
        goods_id: '25',
        goods_name: '\u699b\u5b50\u4ec1',
        shop_price: '70.00',
        original_img:
          '/public/upload/goods/2020/07-01/b12ff0f83fd14ea2c0f6f72e48151304.jpg',
        sales_sum: '0',
        width: '1200',
        height: '1200',
      },
      {
        goods_id: '26',
        goods_name: '\u7ea2\u677e\u7c7d\u4ec1',
        shop_price: '55.00',
        original_img:
          '/public/upload/goods/2020/07-02/f265d9f1efcd86868f25fbd93a8f2982.jpg',
        sales_sum: '0',
        width: '800',
        height: '800',
      },
      {
        goods_id: '27',
        goods_name: '\u5c71\u699b\u5b50\u4ec1',
        shop_price: '35.00',
        original_img:
          '/public/upload/goods/2020/07-02/73ed784321a488aabf22d3c926b6a258.jpg',
        sales_sum: '0',
        width: '800',
        height: '800',
      },
      {
        goods_id: '28',
        goods_name: '\u84dd\u8393\u679c\u5e72\u793c\u76d2',
        shop_price: '168.00',
        original_img:
          '/public/upload/goods/2020/07-02/f0a1f164c963566a39fb9201d998f20b.jpg',
        sales_sum: '0',
        width: '1200',
        height: '1200',
      },
      {
        goods_id: '23',
        goods_name: '\u5c71\u699b\u5b50',
        shop_price: '80.00',
        original_img:
          '/public/upload/goods/2020/07-01/58a0aa80a9f2c2ec99ac971d88e2d2f7.jpg',
        sales_sum: '0',
        width: '800',
        height: '800',
      },
      {
        goods_id: '24',
        goods_name: '\u5927\u699b\u5b50',
        shop_price: '50.00',
        original_img:
          '/public/upload/goods/2020/07-01/08a1986efa6847ff0d24c0dd38984b01.jpg',
        sales_sum: '0',
        width: '800',
        height: '800',
      },
      {
        goods_id: '25',
        goods_name: '\u699b\u5b50\u4ec1',
        shop_price: '70.00',
        original_img:
          '/public/upload/goods/2020/07-01/b12ff0f83fd14ea2c0f6f72e48151304.jpg',
        sales_sum: '0',
        width: '1200',
        height: '1200',
      },
      {
        goods_id: '26',
        goods_name: '\u7ea2\u677e\u7c7d\u4ec1',
        shop_price: '55.00',
        original_img:
          '/public/upload/goods/2020/07-02/f265d9f1efcd86868f25fbd93a8f2982.jpg',
        sales_sum: '0',
        width: '800',
        height: '800',
      },
      {
        goods_id: '27',
        goods_name: '\u5c71\u699b\u5b50\u4ec1',
        shop_price: '35.00',
        original_img:
          '/public/upload/goods/2020/07-02/73ed784321a488aabf22d3c926b6a258.jpg',
        sales_sum: '0',
        width: '800',
        height: '800',
      },
      {
        goods_id: '28',
        goods_name: '\u84dd\u8393\u679c\u5e72\u793c\u76d2',
        shop_price: '168.00',
        original_img:
          '/public/upload/goods/2020/07-02/f0a1f164c963566a39fb9201d998f20b.jpg',
        sales_sum: '0',
        width: '1200',
        height: '1200',
      },
    ],
    screeningArr: ['销量', '价格'],
    screeningIndex: 0,
  },

  //MARK: 点击了筛选
  onScreening: function (event) {
    this.setData({
      screeningIndex: event.target.dataset.index,
    })
  },

  // MARK: 进入商品详情
  gotoGoodDetail: function () {
    console.log(111)
    wx.navigateTo({
      url: '/pages/good_detail/index"',
      success: (result) => {},
      fail: () => {},
      complete: () => {},
    })
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
})
