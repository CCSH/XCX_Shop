const Routing = require('../../utils/routing')
const util = require('../../utils/util')
let app = getApp()

//Page Object
Page({
  data: {
    dataSoure: [
      {
        id: 4,
        title: '22222',
        goods_id: 41,
        item_id: 60,
        price: '100.00',
        goods_num: 20,
        buy_limit: 5,
        buy_num: 0,
        order_num: 0,
        description: '',
        start_time: 1600729600,
        end_time: 1601481600,
        is_end: 0,
        goods_name:
          '\u7a3b\u82b1\u9999\uff08\u888b\u88c5\uff09\u89c4\u683c:5\u5343\u514b/\u888b',
        percent: 0,
        spec_goods_price: {
          item_id: 60,
          goods_id: 41,
          key: '78',
          key_name: '\u89c4\u683c:5\u5343\u514b/\u888b',
          price: '110.00',
          cost_price: '73.00',
          cost_money: '0.00',
          skill_money: '0.00',
          third_money: '0.00',
          extend_money: '0.00',
          user_money: '0.00',
          commission: '0.00',
          store_count: 50,
          bar_code: '',
          sku: '',
          spec_img: '',
          prom_id: 4,
          prom_type: 1,
        },
        goods: {
          goods_id: 41,
          cat_id: 12,
          extend_cat_id: 0,
          goods_sn: 'WS0000041',
          goods_name: '\u7a3b\u82b1\u9999\uff08\u888b\u88c5\uff09',
          click_count: 0,
          brand_id: 0,
          store_count: 50,
          comment_count: 0,
          weight: 0,
          volume: 0,
          market_price: '0.00',
          shop_price: '110.00',
          cost_price: '73.00',
          cost_money: '0.00',
          skill_money: '0.00',
          third_money: '0.00',
          extend_money: '0.00',
          user_money: '0.00',
          price_ladder: [],
          keywords: '',
          goods_remark: '',
          goods_content: null,
          mobile_content: null,
          original_img:
            '/public/upload/goods/2020/07-02/74c23f4346ffbec3a46ec1866db45785.jpg',
          is_virtual: 0,
          virtual_indate: 0,
          virtual_limit: 0,
          virtual_refund: 1,
          virtual_sales_sum: 0,
          virtual_collect_sum: 0,
          collect_sum: 0,
          is_on_sale: 1,
          is_free_shipping: 0,
          sort: 50,
          is_recommend: 1,
          is_new: 0,
          is_hot: 0,
          last_update: 1593675830,
          goods_type: 12,
          give_integral: 0,
          exchange_integral: 0,
          suppliers_id: 0,
          sales_sum: 0,
          prom_type: 1,
          prom_id: 0,
          commission: '0.00',
          spu: '',
          sku: '',
          template_id: 0,
          video: '',
          discount: 100,
          is_integral: 0,
          integral: 0,
        },
      },
      {
        id: 3,
        title: '111111',
        goods_id: 42,
        item_id: 61,
        price: '10.00',
        goods_num: 100,
        buy_limit: 5,
        buy_num: 1,
        order_num: 1,
        description: '',
        start_time: 1596758400,
        end_time: 1601395200,
        is_end: 0,
        goods_name:
          '\u9ed1\u68ee\u9999\u83c7\u8106\u7247\u89c4\u683c:70\u514b/\u76d2',
        percent: 30,
        spec_goods_price: {
          item_id: 61,
          goods_id: 42,
          key: '89',
          key_name: '\u89c4\u683c:70\u514b/\u76d2',
          price: '16.00',
          cost_price: '11.00',
          cost_money: '0.00',
          skill_money: '0.00',
          third_money: '0.00',
          extend_money: '0.00',
          user_money: '0.00',
          commission: '0.00',
          store_count: 297,
          bar_code: '',
          sku: '',
          spec_img: '',
          prom_id: 3,
          prom_type: 1,
        },
        goods: {
          goods_id: 42,
          cat_id: 15,
          extend_cat_id: 0,
          goods_sn: 'WS0000042',
          goods_name: '\u9ed1\u68ee\u9999\u83c7\u8106\u7247',
          click_count: 0,
          brand_id: 0,
          store_count: 297,
          comment_count: 0,
          weight: 0,
          volume: 0,
          market_price: '0.00',
          shop_price: '16.00',
          cost_price: '11.00',
          cost_money: '0.00',
          skill_money: '0.00',
          third_money: '0.00',
          extend_money: '0.00',
          user_money: '0.00',
          price_ladder: [],
          keywords: '',
          goods_remark: '',
          goods_content: null,
          mobile_content: null,
          original_img:
            '/public/upload/goods/2020/07-02/9cc32248b1f56ff295d8edd816a9ab1e.jpg',
          is_virtual: 0,
          virtual_indate: 0,
          virtual_limit: 0,
          virtual_refund: 1,
          virtual_sales_sum: 0,
          virtual_collect_sum: 0,
          collect_sum: 0,
          is_on_sale: 1,
          is_free_shipping: 0,
          sort: 50,
          is_recommend: 1,
          is_new: 0,
          is_hot: 0,
          last_update: 1593676207,
          goods_type: 15,
          give_integral: 0,
          exchange_integral: 0,
          suppliers_id: 0,
          sales_sum: 3,
          prom_type: 1,
          prom_id: 0,
          commission: '0.00',
          spu: '',
          sku: '',
          template_id: 0,
          video: '',
          discount: 100,
          is_integral: 0,
          integral: 0,
        },
      },
      {
        id: 5,
        title: '33333',
        goods_id: 35,
        item_id: 52,
        price: '80.00',
        goods_num: 20,
        buy_limit: 5,
        buy_num: 0,
        order_num: 0,
        description: '',
        start_time: 1597075200,
        end_time: 1501395200,
        is_end: 0,
        goods_name:
          '\u9ed1\u68ee\u5c0f\u7c73\u793c\u76d2\u89c4\u683c:500\u514b*8/\u76d2',
        percent: 100,
        spec_goods_price: {
          item_id: 52,
          goods_id: 35,
          key: '73',
          key_name: '\u89c4\u683c:500\u514b*8/\u76d2',
          price: '100.00',
          cost_price: '70.00',
          cost_money: '0.00',
          skill_money: '0.00',
          third_money: '0.00',
          extend_money: '0.00',
          user_money: '0.00',
          commission: '0.00',
          store_count: 50,
          bar_code: '',
          sku: '',
          spec_img: '',
          prom_id: 5,
          prom_type: 1,
        },
        goods: {
          goods_id: 35,
          cat_id: 11,
          extend_cat_id: 0,
          goods_sn: 'WS0000035',
          goods_name: '\u9ed1\u68ee\u5c0f\u7c73\u793c\u76d2',
          click_count: 0,
          brand_id: 0,
          store_count: 100,
          comment_count: 0,
          weight: 0,
          volume: 0,
          market_price: '0.00',
          shop_price: '100.00',
          cost_price: '70.00',
          cost_money: '0.00',
          skill_money: '0.00',
          third_money: '0.00',
          extend_money: '0.00',
          user_money: '0.00',
          price_ladder: [],
          keywords: '',
          goods_remark: '',
          goods_content: null,
          mobile_content: null,
          original_img:
            '/public/upload/goods/2020/07-02/1d1fff11d50640f5e4060be7d561e951.jpg',
          is_virtual: 0,
          virtual_indate: 0,
          virtual_limit: 0,
          virtual_refund: 1,
          virtual_sales_sum: 0,
          virtual_collect_sum: 0,
          collect_sum: 0,
          is_on_sale: 1,
          is_free_shipping: 0,
          sort: 50,
          is_recommend: 1,
          is_new: 0,
          is_hot: 0,
          last_update: 1593673271,
          goods_type: 11,
          give_integral: 0,
          exchange_integral: 0,
          suppliers_id: 0,
          sales_sum: 0,
          prom_type: 1,
          prom_id: 0,
          commission: '0.00',
          spu: '',
          sku: '',
          template_id: 0,
          video: '',
          discount: 100,
          is_integral: 0,
          integral: 0,
        },
      },
    ],
  },
  //options(Object)
  onLoad: function (options) {
    let param = Routing.getRoutingParam(options)
    var title = '每日抢鲜'
    if (param && param.title) {
      title = param.title
    }

    wx.setNavigationBarTitle({
      title: title,
    })

    this.handleData()
  },
  onReady: function () {},
  onShow: function () {},
  onHide: function () {},
  onUnload: function () {},
  onPullDownRefresh: function () {},
  onReachBottom: function () {},
  onShareAppMessage: function () {},
  onPageScroll: function () {},
  //item(index,pagePath,text)
  onTabItemTap: function (item) {},

  // MARK 处理数据
  handleData(event) {
    var self = this
    var dataSoure = event
    if (!dataSoure) {
      dataSoure = self.data.dataSoure
    }

    dataSoure.map((item, index) => {
      // 处理定时器
      self.handleTime(index)
    })

    self.setData({
      dataSoure,
    })
  },

  // MARK 处理定时器
  handleTime(event) {
    var self = this
    var dataSoure = this.data.dataSoure
    var item = dataSoure[event]

    var timer = setInterval(function () {
      //循环代码
      var time = util.toCountDown(item.start_time)

      if (
        time.day >= 0 &&
        time.hour >= 0 &&
        time.minute >= 0 &&
        time.second >= 0
      ) {
        // 未开始
        time = util.toCountDown(item.start_time)
        item.name = '活动未开始!'
        item.time = `活动开始还有:${time.day}天 ${time.hour}小时 ${time.minute}分钟 ${time.second}秒`
      } else {
        time = util.toCountDown(item.end_time)
        if (
          time.day <= 0 &&
          time.hour <= 0 &&
          time.minute <= 0 &&
          time.second <= 0
        ) {
          // 结束了
          self.clearTimer(event)
          item.name = '活动已结束!'
          item.time = util.secondsToTime(item.start_time)
        } else {
          // 进行中
          item.name = '活动进行中!'
          item.time = `活动结束还有:${time.day}天 ${time.hour}小时 ${time.minute}分钟 ${time.second}秒`
        }
      }

      // 设置数据
      dataSoure[event] = item
      self.setData({
        dataSoure,
      })
    }, 1 * 1000)

    // 定时器设置
    item.timer = timer
    dataSoure[event] = item
    self.setData({
      dataSoure,
    })
  },

  // MARK 移除定时器
  clearTimer(event) {
    var self = this
    var dataSoure = self.data.dataSoure
    var item = dataSoure[event]
    //处理数据
    clearInterval(item.timer)
  },

  // MARK 点击
  onSelect(event) {
    app.gotoGoods(event.currentTarget.dataset.param)
  },
})
