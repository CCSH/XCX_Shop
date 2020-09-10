// pages/good_detail/index.js
import Util from '../../utils/util'
import Toast from '@vant/weapp/toast/toast'
import Routing from '../../utils/routing'
import InterFace from '../../utils/interface'

let app = getApp()

Page({
  /**
   * 页面的初始数据
   */
  data: {
    statusBarH: app.statusBarH,
    bottomH: app.bottomH,
    //自定义数据
    number: 1,
    //优惠卷
    coupon: '',
    toolH: 60,
    modelPop: false,
    couponsPop: false,
    timer: null,
    time: '',
    goods_id: null,
    //数据
    dataSoure: null,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      goods_id: Routing.getRoutingParam(options).goods_id,
    })
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
  onUnload: function () {
    //移除定时器
    this.clearTimer()
  },

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
    let self = this
    InterFace.goodsInfo({
      goods_id: this.data.goods_id,
    }).then((res) => {
      self.handleData(res.data)
    })
  },

  // MARK 返回页面
  onBack: function () {
    wx.navigateBack({
      delta: 1,
    })
  },

  // MARK 处理数据
  handleData(event) {
    var dataSoure = event
    if (!dataSoure) {
      dataSoure = this.data.dataSoure
    }

    var couponArr = []
    //  处理优惠卷
    dataSoure.coupon.map((item) => {
      couponArr.push(item.name)
    })

    // 处理限时优惠
    if (dataSoure.is_flash_sale == '1') {
      var good = dataSoure.flash_sale

      dataSoure.total_spec.map((item, index) => {
        if (item.item_id == good.item_id) {
          var temp = Object.assign(item, good)
          item = temp
        }
      })
      if (dataSoure.check_spec.item_id == good.item_id) {
        var temp = Object.assign(dataSoure.check_spec, good)
        dataSoure.check_spec = temp
      }
    }

    this.setData({
      dataSoure,
      coupon: couponArr.length ? couponArr.join(',') : '11',
    })

    //处理时间
    this.handleTime()
  },

  // MARK 型号点击
  onModel() {
    this.setData({
      modelPop: true,
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
      modelPop: false,
      couponsPop: false,
    })
  },

  // MARK 规格选择
  onModelSelection(event) {
    var temp = this.data.dataSoure
    temp.check_spec = event.target.dataset.param
    this.setData({
      dataSoure: temp,
    })
  },

  // MARK 数量更改
  onChange(event) {
    this.setData({
      number: event.detail,
    })
  },

  // MARK 点击收藏
  onCollection() {
    var temp = this.data.dataSoure
    temp.goods_collect = temp.goods_collect == '0' ? '1' : '0'

    this.setData({
      dataSoure: temp,
    })
  },

  // MARK 立即购买
  onPay() {
    console.log('立即购买')
    wx.navigateTo({
      url: '/pages/confirm_order/index',
      success: (result) => {},
      fail: () => {},
      complete: () => {},
    })
  },

  // MARK 数量超出了
  onOverlimit(event) {
    if (event.detail == 'plus') {
      if (this.data.dataSoure.is_flash_sale == '1') {
        Toast('超过限购数量')
      } else {
        Toast('超过库存数量')
      }
    }
  },

  // MARK 处理时间
  handleTime() {
    var self = this
    var data = self.data.dataSoure
    var timer = setInterval(function () {
      //循环代码
      var time = Util.toCountDown(data.flash_sale.end_time)

      if (
        time.day <= 0 &&
        time.hour <= 0 &&
        time.minute <= 0 &&
        time.second <= 0
      ) {
        // 结束了
        self.clearTimer()
        return
      }
      self.setData({
        time: ` ${time.day}天 ${time.hour}小时 ${time.minute}分钟 ${time.second}秒`,
      })
    }, 1 * 1000)

    self.setData({
      timer: timer,
    })
  },

  // MARK 移除定时器
  clearTimer() {
    var self = this
    var data = self.data.dataSoure
    //处理数据
    clearInterval(self.data.timer)

    data.is_flash_sale = null
    self.setData({
      dataSoure: data,
    })

    self.handleData()
  },
})
