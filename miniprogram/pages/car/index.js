// pages/car/index.js
import Toast from '/@vant/weapp/toast/toast'

Page({
  /**
   * 页面的初始数据
   */
  data: {
    customData: {
      num: null,
      money: null,
      isAll: null,
    },
    dataSoure: [
      {
        id: '1007',
        user_id: '41',
        goods_id: '42',
        goods_name: '\u9ed1\u68ee\u9999\u83c7\u8106\u7247',
        goods_price: '16.00',
        member_goods_price: '10.00',
        goods_num: '5',
        item_id: '61',
        spec_key_name: '\u89c4\u683c:70\u514b/\u76d2',
        prom_id: '3',
        prom_type: '1',
        rec_user_id: '0',
        selected: '0',
        flash_sale: {
          id: '3',
          title: '111111',
          goods_id: '42',
          item_id: '61',
          price: '10.00',
          goods_num: '100',
          buy_limit: '5',
          buy_num: '0',
          order_num: '0',
          description: '',
          start_time: '1596758400',
          end_time: '1601395200',
          is_end: '0',
          goods_name:
            '\u9ed1\u68ee\u9999\u83c7\u8106\u7247\u89c4\u683c:70\u514b/\u76d2',
        },
        goods_collect: '0',
        store_count: '298',
        original_img:
          '/public/upload/goods/2020/07-02/9cc32248b1f56ff295d8edd816a9ab1e.jpg',
      },
      {
        id: '1007',
        user_id: '41',
        goods_id: '42',
        goods_name: '\u9ed1\u68ee\u9999\u83c7\u8106\u7247',
        goods_price: '16.00',
        member_goods_price: '10.00',
        goods_num: '5',
        item_id: '61',
        spec_key_name: '\u89c4\u683c:70\u514b/\u76d2',
        prom_id: '3',
        prom_type: '1',
        rec_user_id: '0',
        selected: '0',
        flash_sale: {
          id: '3',
          title: '111111',
          goods_id: '42',
          item_id: '61',
          price: '10.00',
          goods_num: '100',
          buy_limit: '5',
          buy_num: '0',
          order_num: '0',
          description: '',
          start_time: '1596758400',
          end_time: '1601395200',
          is_end: '0',
          goods_name:
            '\u9ed1\u68ee\u9999\u83c7\u8106\u7247\u89c4\u683c:70\u514b/\u76d2',
        },
        goods_collect: '0',
        store_count: '298',
        original_img:
          '/public/upload/goods/2020/07-02/9cc32248b1f56ff295d8edd816a9ab1e.jpg',
      },
      {
        id: '1007',
        user_id: '41',
        goods_id: '42',
        goods_name: '\u9ed1\u68ee\u9999\u83c7\u8106\u7247',
        goods_price: '16.00',
        member_goods_price: '10.00',
        goods_num: '5',
        item_id: '61',
        spec_key_name: '\u89c4\u683c:70\u514b/\u76d2',
        prom_id: '3',
        prom_type: '1',
        rec_user_id: '0',
        selected: '0',
        flash_sale: {
          id: '3',
          title: '111111',
          goods_id: '42',
          item_id: '61',
          price: '10.00',
          goods_num: '100',
          buy_limit: '5',
          buy_num: '0',
          order_num: '0',
          description: '',
          start_time: '1596758400',
          end_time: '1601395200',
          is_end: '0',
          goods_name:
            '\u9ed1\u68ee\u9999\u83c7\u8106\u7247\u89c4\u683c:70\u514b/\u76d2',
        },
        goods_collect: '0',
        store_count: '298',
        original_img:
          '/public/upload/goods/2020/07-02/9cc32248b1f56ff295d8edd816a9ab1e.jpg',
      },
      {
        id: '1007',
        user_id: '41',
        goods_id: '42',
        goods_name: '\u9ed1\u68ee\u9999\u83c7\u8106\u7247',
        goods_price: '16.00',
        member_goods_price: '10.00',
        goods_num: '5',
        item_id: '61',
        spec_key_name: '\u89c4\u683c:70\u514b/\u76d2',
        prom_id: '3',
        prom_type: '1',
        rec_user_id: '0',
        selected: '0',
        flash_sale: {
          id: '3',
          title: '111111',
          goods_id: '42',
          item_id: '61',
          price: '10.00',
          goods_num: '100',
          buy_limit: '5',
          buy_num: '0',
          order_num: '0',
          description: '',
          start_time: '1596758400',
          end_time: '1601395200',
          is_end: '0',
          goods_name:
            '\u9ed1\u68ee\u9999\u83c7\u8106\u7247\u89c4\u683c:70\u514b/\u76d2',
        },
        goods_collect: '0',
        store_count: '298',
        original_img:
          '/public/upload/goods/2020/07-02/9cc32248b1f56ff295d8edd816a9ab1e.jpg',
      },
      {
        id: '1007',
        user_id: '41',
        goods_id: '42',
        goods_name: '\u9ed1\u68ee\u9999\u83c7\u8106\u7247',
        goods_price: '16.00',
        member_goods_price: '10.00',
        goods_num: '5',
        item_id: '61',
        spec_key_name: '\u89c4\u683c:70\u514b/\u76d2',
        prom_id: '3',
        prom_type: '1',
        rec_user_id: '0',
        selected: '0',
        flash_sale: {
          id: '3',
          title: '111111',
          goods_id: '42',
          item_id: '61',
          price: '10.00',
          goods_num: '100',
          buy_limit: '5',
          buy_num: '0',
          order_num: '0',
          description: '',
          start_time: '1596758400',
          end_time: '1601395200',
          is_end: '0',
          goods_name:
            '\u9ed1\u68ee\u9999\u83c7\u8106\u7247\u89c4\u683c:70\u514b/\u76d2',
        },
        goods_collect: '0',
        store_count: '298',
        original_img:
          '/public/upload/goods/2020/07-02/9cc32248b1f56ff295d8edd816a9ab1e.jpg',
      },
      {
        id: '1007',
        user_id: '41',
        goods_id: '42',
        goods_name: '\u9ed1\u68ee\u9999\u83c7\u8106\u7247',
        goods_price: '16.00',
        member_goods_price: '10.00',
        goods_num: '5',
        item_id: '61',
        spec_key_name: '\u89c4\u683c:70\u514b/\u76d2',
        prom_id: '3',
        prom_type: '1',
        rec_user_id: '0',
        selected: '0',
        flash_sale: {
          id: '3',
          title: '111111',
          goods_id: '42',
          item_id: '61',
          price: '10.00',
          goods_num: '100',
          buy_limit: '5',
          buy_num: '0',
          order_num: '0',
          description: '',
          start_time: '1596758400',
          end_time: '1601395200',
          is_end: '0',
          goods_name:
            '\u9ed1\u68ee\u9999\u83c7\u8106\u7247\u89c4\u683c:70\u514b/\u76d2',
        },
        goods_collect: '0',
        store_count: '298',
        original_img:
          '/public/upload/goods/2020/07-02/9cc32248b1f56ff295d8edd816a9ab1e.jpg',
      },
      {
        id: '1007',
        user_id: '41',
        goods_id: '42',
        goods_name: '\u9ed1\u68ee\u9999\u83c7\u8106\u7247',
        goods_price: '16.00',
        member_goods_price: '10.00',
        goods_num: '5',
        item_id: '61',
        spec_key_name: '\u89c4\u683c:70\u514b/\u76d2',
        prom_id: '3',
        prom_type: '1',
        rec_user_id: '0',
        selected: '0',
        flash_sale: {
          id: '3',
          title: '111111',
          goods_id: '42',
          item_id: '61',
          price: '10.00',
          goods_num: '100',
          buy_limit: '5',
          buy_num: '0',
          order_num: '0',
          description: '',
          start_time: '1596758400',
          end_time: '1601395200',
          is_end: '0',
          goods_name:
            '\u9ed1\u68ee\u9999\u83c7\u8106\u7247\u89c4\u683c:70\u514b/\u76d2',
        },
        goods_collect: '0',
        store_count: '298',
        original_img:
          '/public/upload/goods/2020/07-02/9cc32248b1f56ff295d8edd816a9ab1e.jpg',
      },
      {
        id: '1006',
        user_id: '41',
        goods_id: '6',
        goods_name: '\u94f6 \u8033',
        goods_price: '30.00',
        member_goods_price: '30.00',
        goods_num: '1',
        item_id: '9',
        spec_key_name: '\u89c4\u683c:150\u514b/\u888b',
        prom_id: '0',
        prom_type: '0',
        rec_user_id: '0',
        selected: '1',
        flash_sale: null,
        goods_collect: '0',
        store_count: '199',
        original_img:
          '/public/upload/goods/2020/07-01/a31f9deb66a7d349ced7b4edc1ecd977.jpg',
      },
      {
        id: '1005',
        user_id: '41',
        goods_id: '39',
        goods_name: '\u6709\u673a\u7a3b\u82b1\u9999\u7c73',
        goods_price: '180.00',
        member_goods_price: '180.00',
        goods_num: '1',
        item_id: '58',
        spec_key_name: '\u89c4\u683c:500\u514b*8/\u76d2',
        prom_id: '0',
        prom_type: '0',
        rec_user_id: '0',
        selected: '1',
        flash_sale: null,
        goods_collect: '0',
        store_count: '48',
        original_img:
          '/public/upload/goods/2020/07-02/9dcadb92a8b2dc401f8f94a6e85ef00c.jpg',
      },
    ],
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
  handleData(event) {
    let dataSoure = this.data.dataSoure
    if (event) {
      dataSoure = event
    }

    let customData = {
      num: 0,
      money: 0,
      isAll: 0,
    }
    //处理金额
    dataSoure.map((item, index) => {
      if (item.selected == '1') {
        //找到选中
        customData = {
          num: ++customData.num,
          money:
            parseFloat(customData.money) +
            parseFloat(item.member_goods_price) * parseFloat(item.goods_num),
        }
      }
    })

    if (parseInt(customData.num) == dataSoure.length) {
      customData.isAll = 1
    }

    this.setData({
      dataSoure: dataSoure,
      customData: customData,
    })
  },

  // MARK 选择
  onChange(event) {
    let dataSoure = this.data.dataSoure

    dataSoure.map((item, index) => {
      if (index == event.detail) {
        item.selected = item.selected == '1' ? '0' : '1'
      }
    })

    this.handleData(dataSoure)
  },

  // MARK 数量改变
  onNumChange(event) {
    let dataSoure = this.data.dataSoure

    dataSoure.map((item, index) => {
      if (index == event.currentTarget.dataset.param) {
        item.goods_num = event.detail
      }
    })

    this.handleData(dataSoure)
  },

  // MARK 数量超出了
  onOverlimit(event) {
    console.log(event)
    if (event.detail == 'plus') {
      let dataSoure = this.data.dataSoure

      dataSoure.map((item, index) => {
        if (index == event.currentTarget.dataset.param) {
          if (dataSoure.flash_sale) {
            Toast('超过限购数量')
          } else {
            Toast('超过库存数量')
          }
        }
      })
    }
  },

  // MARK 点击删除
  onDelete(event) {
    let dataSoure = this.data.dataSoure
    //处理数据
    dataSoure.splice(event.currentTarget.dataset.param, 1)

    this.handleData(dataSoure)
  },

  // MARK 全选
  onAllCheck(event) {
    console.log(event)

    let customData = this.data.customData
    let dataSoure = this.data.dataSoure
    let str = customData.isAll ? '0' : '1'
    dataSoure.map((item, index) => {
      item.selected = str
    })

    this.handleData(dataSoure)
  },

  // MARK 去结算
  onSettlement() {
    if (this.data.customData.num == 0) {
      return
    }
    wx.navigateTo({
      url: '/pages/confirm_order/index',
    })
  },
})
