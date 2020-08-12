// pages/good_detail/index.js
import InterFace from '../../utils/interface'
import Util from '../../utils/util'
import Toast from '@vant/weapp/toast/toast'

let app = getApp()

Page({
  /**
   * 页面的初始数据
   */
  data: {
    statusBarH: app.statusBarH * 2,
    bottomH: app.bottomH,
    //自定义数据
    number: 1,
    coupon: '',
    toolH: 60,
    modelPop: false,
    couponsPop: false,
    timer: null,
    time: '',
    //数据
    dataInfo: {
      goods_id: '42',
      cat_id: '15',
      goods_name: '\u9ed1\u68ee\u9999\u83c7\u8106\u7247',
      shop_price: '16.00',
      original_img:
        '/public/upload/goods/2020/07-02/9cc32248b1f56ff295d8edd816a9ab1e.jpg',
      store_count: '298',
      sales_sum: '2',
      video: '',
      is_flash_sale: '1',
      flash_sale: {
        id: '3',
        goods_id: '42',
        goods_name:
          '\u9ed1\u68ee\u9999\u83c7\u8106\u7247\u89c4\u683c:70\u514b/\u76d2',
        item_id: '61',
        price: '10.00',
        goods_num: '100',
        buy_limit: '5',
        buy_num: '0',
        start_time: '1596758400',
        end_time: '1601395200',
        shop_price: '16.00',
      },
      top_images: [
        '/public/upload/goods/2020/07-02/9cc32248b1f56ff295d8edd816a9ab1e.jpg',
        '/public/upload/goods/2020/07-02/c7eefb3a307f3b9eec9ac40d77c730c7.jpg',
        '/public/upload/goods/2020/07-02/113cc64af0523a980fe27a06730a2f8f.jpg',
        '/public/upload/goods/2020/07-02/ad9c516d2b736822ccbb4e509a1cd043.jpg',
        '/public/upload/goods/2020/07-02/438ded0e194ee009491c2a881b6f113a.jpg',
      ],
      check_spec: {
        item_id: '61',
        key: '89',
        price: '16.00',
        key_name: '\u89c4\u683c:70\u514b/\u76d2',
        store_count: '298',
      },
      total_spec: [
        {
          item_id: '61',
          key: '89',
          price: '16.00',
          key_name: '\u89c4\u683c:70\u514b/\u76d2',
          store_count: '298',
        },
      ],
      spec: [
        {
          id: '26',
          name: '\u89c4\u683c',
          spec_item: [
            {
              id: '89',
              spec_id: '26',
              item: '70\u514b/\u76d2',
            },
          ],
        },
      ],
      goods_collect: '0',
      comment: [],
      content_images: [
        {
          image_url:
            '/public/upload/detail_images/2020/07-02/84096228ecc2e87a0a98994bae88dfee.jpg',
          width: '790',
          height: '472',
        },
        {
          image_url:
            '/public/upload/detail_images/2020/07-02/afb63f4e519ff5d83b32745159091662.jpg',
          width: '790',
          height: '432',
        },
        {
          image_url:
            '/public/upload/detail_images/2020/07-02/ffd351433e18c23dc24d1447a84c6d4d.jpg',
          width: '790',
          height: '677',
        },
        {
          image_url:
            '/public/upload/detail_images/2020/07-02/a2e4f38cc531402e8f45b7708d5b86a4.jpg',
          width: '790',
          height: '685',
        },
        {
          image_url:
            '/public/upload/detail_images/2020/07-02/78a1b4d6cf6c836c8b2f9b3c7b6baebf.jpg',
          width: '790',
          height: '766',
        },
        {
          image_url:
            '/public/upload/detail_images/2020/07-02/f70ec69f01104b5fad6d7d534cc184a7.jpg',
          width: '790',
          height: '634',
        },
        {
          image_url:
            '/public/upload/detail_images/2020/07-02/f18bb5beb3b248b240a96d1622ed9437.jpg',
          width: '790',
          height: '697',
        },
        {
          image_url:
            '/public/upload/detail_images/2020/07-02/54d3a1077f029100ef494495d1eab313.jpg',
          width: '790',
          height: '745',
        },
        {
          image_url:
            '/public/upload/detail_images/2020/07-02/bde8952a3f023c4c4649e465685d3acd.jpg',
          width: '790',
          height: '816',
        },
        {
          image_url:
            '/public/upload/detail_images/2020/07-02/92992ae1e68d7539216e74977ec969bf.jpg',
          width: '790',
          height: '799',
        },
        {
          image_url:
            '/public/upload/detail_images/2020/07-02/0004a23af17f43ba487ba6093ab127a4.jpg',
          width: '790',
          height: '744',
        },
        {
          image_url:
            '/public/upload/detail_images/2020/07-02/ecd68affa124a6a5d5a52f1ad85b217b.jpg',
          width: '790',
          height: '1167',
        },
        {
          image_url:
            '/public/upload/detail_images/2020/07-02/8ceef0a8418ff8337f0fd605025a3355.jpg',
          width: '790',
          height: '684',
        },
        {
          image_url:
            '/public/upload/detail_images/2020/07-02/6d45e5a37f8d4ae1bed36312b0e4995b.jpg',
          width: '790',
          height: '827',
        },
        {
          image_url:
            '/public/upload/detail_images/2020/07-02/1d8bba09ce2e72fe2346744e02ce6f2a.jpg',
          width: '790',
          height: '603',
        },
        {
          image_url:
            '/public/upload/detail_images/2020/07-02/88556fb849c1a797e487daf1c6df02cf.jpg',
          width: '790',
          height: '638',
        },
        {
          image_url:
            '/public/upload/detail_images/2020/07-02/d680c77527178e267e4cade3e816f08b.jpg',
          width: '790',
          height: '428',
        },
      ],
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
      word:
        '\u8907\u6cbb\u672c\u6bb5\u5185\u5bb9\u6253\u6977\ud83d\udc49\u4e50\u62f1\ud83d\udc48\u3010\u9ed1\u68ee\u9999\u83c7\u8106\u7247\u3011',
    },
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.handleData()

    InterFace.moviceList({
      param: {
        apikey: '0df993c66c0c636e29ecbb5344252a4a',
        start: 0,
        count: 10,
      },
    })
      .then((res) => {
        console.log('11', res)
      })
      .catch((err) => {
        console.error(err)
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

  // MARK 返回页面
  onBack: function () {
    wx.navigateBack({
      delta: 1,
    })
  },

  // MARK 处理数据
  handleData() {
    var data = this.data.dataInfo

    var couponArr = []
    //  处理优惠卷
    data.coupon.forEach((item, index) => {
      couponArr.push(item.name)
    })

    this.setData({
      coupon: couponArr.length ? couponArr.join(',') : '11',
    })

    // 处理限时优惠
    if (data.is_flash_sale == '1') {
      var good = data.flash_sale

      data.total_spec.forEach((item, index) => {
        if (item.item_id == good.item_id) {
          var temp = Object.assign(item, good)
          item = temp
        }
      })
      if (data.check_spec.item_id == good.item_id) {
        var temp = Object.assign(data.check_spec, good)
        data.check_spec = temp
      }

      this.setData({
        dataInfo: data,
      })
    }

    //处理时间
    if (this.data.dataInfo.is_flash_sale == '1') {
      this.handleTime()
    }
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
    var temp = this.data.dataInfo
    temp.check_spec = event.target.dataset.param
    this.setData({
      dataInfo: temp,
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
    var temp = this.data.dataInfo
    temp.goods_collect = temp.goods_collect == '0' ? '1' : '0'

    this.setData({
      dataInfo: temp,
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
      if (this.data.dataInfo.is_flash_sale == '1') {
        console.log('超过限购数量')
      } else {
        console.log('超过库存数量')
      }
    }
    // Toast.setDefaultOptions({
    //   selector: this,
    // })

    // Toast('1')
  },

  // MARK 处理时间
  handleTime() {
    var self = this
    var data = self.data.dataInfo
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
    var data = self.data.dataInfo
    //处理数据
    clearInterval(self.data.timer)

    data.is_flash_sale = null
    self.setData({
      dataInfo: data,
    })

    self.handleData()
  },
})
