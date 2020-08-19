const util = require('../../utils/util')
import Toast from '@vant/weapp/toast/toast'

// pages/me_order/index.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    active: 0,
    tabArr: ['全部', '待付款', '待发货', '待收货', '待评价', '退款'],
    dataSoure: [
      [
        {
          order_id: '21',
          order_sn: '202008121426304358',
          user_id: '41',
          order_status: '0',
          shipping_status: '0',
          pay_status: '0',
          add_time: '1597213590',
          consignee: '11',
          province: '\u5317\u4eac\u5e02',
          city: '\u5e02\u8f96\u533a',
          district: '\u4e1c\u57ce\u533a',
          address: '13',
          mobile: '111',
          user_note: '',
          total_amount: '1080.00',
          order_amount: '1080.00',
          shipping_code: '',
          invoice_no: '',
          express: '\u5546\u5bb6\u914d\u9001',
          btn: '1',
          goodsList: [
            {
              rec_id: '28',
              goods_id: '39',
              goods_name: '\u6709\u673a\u7a3b\u82b1\u9999\u7c73',
              goods_num: '6',
              final_price: '180.00',
              spec_key_name: '\u89c4\u683c:500\u514b*8/\u76d2',
              original_img:
                '/public/upload/goods/2020/07-02/9dcadb92a8b2dc401f8f94a6e85ef00c.jpg',
            },
          ],
          money: '1080.00',
          num: '6',
        },
        {
          order_id: '20',
          order_sn: '202008121306485744',
          user_id: '41',
          order_status: '0',
          shipping_status: '0',
          pay_status: '0',
          add_time: '1597208808',
          consignee: '11',
          province: '\u5317\u4eac\u5e02',
          city: '\u5e02\u8f96\u533a',
          district: '\u4e1c\u57ce\u533a',
          address: '13',
          mobile: '111',
          user_note: '',
          total_amount: '180.00',
          order_amount: '180.00',
          shipping_code: '',
          invoice_no: '',
          express: '\u5546\u5bb6\u914d\u9001',
          btn: '1',
          goodsList: [
            {
              rec_id: '27',
              goods_id: '39',
              goods_name: '\u6709\u673a\u7a3b\u82b1\u9999\u7c73',
              goods_num: '1',
              final_price: '180.00',
              spec_key_name: '\u89c4\u683c:500\u514b*8/\u76d2',
              original_img:
                '/public/upload/goods/2020/07-02/9dcadb92a8b2dc401f8f94a6e85ef00c.jpg',
            },
          ],
          money: '180.00',
          num: '1',
        },
        {
          order_id: '19',
          order_sn: '202008121051316919',
          user_id: '41',
          order_status: '3',
          shipping_status: '0',
          pay_status: '0',
          add_time: '1597200691',
          consignee: '11',
          province: '\u5317\u4eac\u5e02',
          city: '\u5e02\u8f96\u533a',
          district: '\u4e1c\u57ce\u533a',
          address: '13',
          mobile: '111',
          user_note: '123123',
          total_amount: '590.00',
          order_amount: '560.00',
          shipping_code: '',
          invoice_no: '',
          express: '\u5546\u5bb6\u914d\u9001',
          btn: '2',
          goodsList: [
            {
              rec_id: '25',
              goods_id: '42',
              goods_name: '\u9ed1\u68ee\u9999\u83c7\u8106\u7247',
              goods_num: '5',
              final_price: '9.49',
              spec_key_name: '\u89c4\u683c:70\u514b/\u76d2',
              original_img:
                '/public/upload/goods/2020/07-02/9cc32248b1f56ff295d8edd816a9ab1e.jpg',
            },
            {
              rec_id: '26',
              goods_id: '39',
              goods_name: '\u6709\u673a\u7a3b\u82b1\u9999\u7c73',
              goods_num: '3',
              final_price: '170.85',
              spec_key_name: '\u89c4\u683c:500\u514b*8/\u76d2',
              original_img:
                '/public/upload/goods/2020/07-02/9dcadb92a8b2dc401f8f94a6e85ef00c.jpg',
            },
          ],
          money: '560.00',
          num: '8',
        },
        {
          order_id: '18',
          order_sn: '202008071305137993',
          user_id: '41',
          order_status: '3',
          shipping_status: '0',
          pay_status: '0',
          add_time: '1596776713',
          consignee: '11',
          province: '\u5317\u4eac\u5e02',
          city: '\u5e02\u8f96\u533a',
          district: '\u4e1c\u57ce\u533a',
          address: '13',
          mobile: '111',
          user_note: '',
          total_amount: '16.00',
          order_amount: '16.00',
          shipping_code: '',
          invoice_no: '',
          express: '\u5546\u5bb6\u914d\u9001',
          btn: '2',
          goodsList: [
            {
              rec_id: '24',
              goods_id: '42',
              goods_name: '\u9ed1\u68ee\u9999\u83c7\u8106\u7247',
              goods_num: '1',
              final_price: '16.00',
              spec_key_name: '\u89c4\u683c:70\u514b/\u76d2',
              original_img:
                '/public/upload/goods/2020/07-02/9cc32248b1f56ff295d8edd816a9ab1e.jpg',
            },
          ],
          money: '16.00',
          num: '1',
        },
        {
          order_id: '16',
          order_sn: '202008061629006012',
          user_id: '41',
          order_status: '3',
          shipping_status: '0',
          pay_status: '0',
          add_time: '1596702540',
          consignee: '11',
          province: '\u5317\u4eac\u5e02',
          city: '\u5e02\u8f96\u533a',
          district: '\u4e1c\u57ce\u533a',
          address: '13',
          mobile: '111',
          user_note: '',
          total_amount: '477.00',
          order_amount: '477.00',
          shipping_code: '',
          invoice_no: '',
          express: '\u5546\u5bb6\u914d\u9001',
          btn: '2',
          goodsList: [
            {
              rec_id: '18',
              goods_id: '23',
              goods_name: '\u5c71\u699b\u5b50',
              goods_num: '1',
              final_price: '80.00',
              spec_key_name: '\u89c4\u683c:550\u514b/\u74f6',
              original_img:
                '/public/upload/goods/2020/07-01/58a0aa80a9f2c2ec99ac971d88e2d2f7.jpg',
            },
            {
              rec_id: '19',
              goods_id: '26',
              goods_name: '\u7ea2\u677e\u7c7d\u4ec1',
              goods_num: '1',
              final_price: '55.00',
              spec_key_name: '\u89c4\u683c:108\u514b/\u91d1\u5c5e\u7f50',
              original_img:
                '/public/upload/goods/2020/07-02/f265d9f1efcd86868f25fbd93a8f2982.jpg',
            },
            {
              rec_id: '20',
              goods_id: '3',
              goods_name: '\u79cb\u6728\u8033',
              goods_num: '1',
              final_price: '42.00',
              spec_key_name: '\u89c4\u683c:200\u514b/\u888b',
              original_img:
                '/public/upload/goods/2020/06-30/cfa34a5ad1e4f6ce0ceef5537fb80038.jpg',
            },
            {
              rec_id: '21',
              goods_id: '32',
              goods_name: '\u9ed1\u68ee\u6934\u6811\u871c',
              goods_num: '2',
              final_price: '50.00',
              spec_key_name: '\u89c4\u683c:500\u514b/\u74f6',
              original_img:
                '/public/upload/goods/2020/07-02/509953a8745d52823f29612745144b1e.jpg',
            },
            {
              rec_id: '22',
              goods_id: '32',
              goods_name: '\u9ed1\u68ee\u6934\u6811\u871c',
              goods_num: '1',
              final_price: '200.00',
              spec_key_name: '\u89c4\u683c:2200\u514b/\u74f6',
              original_img:
                '/public/upload/goods/2020/07-02/509953a8745d52823f29612745144b1e.jpg',
            },
          ],
          money: '477.00',
          num: '6',
        },
        {
          order_id: '11',
          order_sn: '202007200927086074',
          user_id: '41',
          order_status: '3',
          shipping_status: '0',
          pay_status: '0',
          add_time: '1595208428',
          consignee: '11',
          province: '\u5317\u4eac\u5e02',
          city: '\u5e02\u8f96\u533a',
          district: '\u4e1c\u57ce\u533a',
          address: '13',
          mobile: '111',
          user_note: '',
          total_amount: '60.00',
          order_amount: '60.00',
          shipping_code: '',
          invoice_no: '',
          express: '\u5546\u5bb6\u914d\u9001',
          btn: '2',
          goodsList: [
            {
              rec_id: '13',
              goods_id: '42',
              goods_name: '\u9ed1\u68ee\u9999\u83c7\u8106\u7247',
              goods_num: '5',
              final_price: '12.00',
              spec_key_name: '\u89c4\u683c:70\u514b/\u76d2',
              original_img:
                '/public/upload/goods/2020/07-02/9cc32248b1f56ff295d8edd816a9ab1e.jpg',
            },
          ],
          money: '60.00',
          num: '5',
        },
        {
          order_id: '10',
          order_sn: '202007200912272781',
          user_id: '41',
          order_status: '3',
          shipping_status: '0',
          pay_status: '0',
          add_time: '1595207547',
          consignee: '11',
          province: '\u5317\u4eac\u5e02',
          city: '\u5e02\u8f96\u533a',
          district: '\u4e1c\u57ce\u533a',
          address: '13',
          mobile: '111',
          user_note: '',
          total_amount: '13.00',
          order_amount: '13.00',
          shipping_code: '',
          invoice_no: '',
          express: '\u5546\u5bb6\u914d\u9001',
          btn: '2',
          goodsList: [
            {
              rec_id: '12',
              goods_id: '37',
              goods_name: '\u9ed1\u68ee\u858f\u7c73',
              goods_num: '1',
              final_price: '13.00',
              spec_key_name: '\u89c4\u683c:350\u514b/\u76d2',
              original_img:
                '/public/upload/goods/2020/07-02/18f7c7d5fc2aee1c16eb69530af6d766.jpg',
            },
          ],
          money: '13.00',
          num: '1',
        },
        {
          order_id: '9',
          order_sn: '202007200911181124',
          user_id: '41',
          order_status: '0',
          shipping_status: '0',
          pay_status: '0',
          add_time: '1595207478',
          consignee: '11',
          province: '\u5317\u4eac\u5e02',
          city: '\u5e02\u8f96\u533a',
          district: '\u4e1c\u57ce\u533a',
          address: '13',
          mobile: '111',
          user_note: '\t1',
          total_amount: '91.00',
          order_amount: '91.00',
          shipping_code: '',
          invoice_no: '',
          express: '\u5546\u5bb6\u914d\u9001',
          btn: '1',
          goodsList: [
            {
              rec_id: '11',
              goods_id: '37',
              goods_name: '\u9ed1\u68ee\u858f\u7c73',
              goods_num: '7',
              final_price: '13.00',
              spec_key_name: '\u89c4\u683c:350\u514b/\u76d2',
              original_img:
                '/public/upload/goods/2020/07-02/18f7c7d5fc2aee1c16eb69530af6d766.jpg',
            },
          ],
          money: '91.00',
          num: '7',
        },
        {
          order_id: '8',
          order_sn: '202007171555016585',
          user_id: '41',
          order_status: '0',
          shipping_status: '0',
          pay_status: '0',
          add_time: '1594972501',
          consignee: '11',
          province: '\u5317\u4eac\u5e02',
          city: '\u5e02\u8f96\u533a',
          district: '\u4e1c\u57ce\u533a',
          address: '13',
          mobile: '111',
          user_note: '',
          total_amount: '13.00',
          order_amount: '13.00',
          shipping_code: '',
          invoice_no: '',
          express: '\u5546\u5bb6\u914d\u9001',
          btn: '1',
          goodsList: [
            {
              rec_id: '10',
              goods_id: '37',
              goods_name: '\u9ed1\u68ee\u858f\u7c73',
              goods_num: '1',
              final_price: '13.00',
              spec_key_name: '\u89c4\u683c:350\u514b/\u76d2',
              original_img:
                '/public/upload/goods/2020/07-02/18f7c7d5fc2aee1c16eb69530af6d766.jpg',
            },
          ],
          money: '13.00',
          num: '1',
        },
        {
          order_id: '7',
          order_sn: '202007171554524274',
          user_id: '41',
          order_status: '3',
          shipping_status: '0',
          pay_status: '0',
          add_time: '1594972492',
          consignee: '11',
          province: '\u5317\u4eac\u5e02',
          city: '\u5e02\u8f96\u533a',
          district: '\u4e1c\u57ce\u533a',
          address: '13',
          mobile: '111',
          user_note: '',
          total_amount: '13.00',
          order_amount: '13.00',
          shipping_code: '',
          invoice_no: '',
          express: '\u5546\u5bb6\u914d\u9001',
          btn: '2',
          goodsList: [
            {
              rec_id: '9',
              goods_id: '37',
              goods_name: '\u9ed1\u68ee\u858f\u7c73',
              goods_num: '1',
              final_price: '13.00',
              spec_key_name: '\u89c4\u683c:350\u514b/\u76d2',
              original_img:
                '/public/upload/goods/2020/07-02/18f7c7d5fc2aee1c16eb69530af6d766.jpg',
            },
          ],
          money: '13.00',
          num: '1',
        },
        {
          order_id: '6',
          order_sn: '202007171552207157',
          user_id: '41',
          order_status: '0',
          shipping_status: '0',
          pay_status: '0',
          add_time: '1594972340',
          consignee: '11',
          province: '\u5317\u4eac\u5e02',
          city: '\u5e02\u8f96\u533a',
          district: '\u4e1c\u57ce\u533a',
          address: '13',
          mobile: '111',
          user_note: '',
          total_amount: '13.00',
          order_amount: '13.00',
          shipping_code: '',
          invoice_no: '',
          express: '\u5546\u5bb6\u914d\u9001',
          btn: '1',
          goodsList: [
            {
              rec_id: '8',
              goods_id: '37',
              goods_name: '\u9ed1\u68ee\u858f\u7c73',
              goods_num: '1',
              final_price: '13.00',
              spec_key_name: '\u89c4\u683c:350\u514b/\u76d2',
              original_img:
                '/public/upload/goods/2020/07-02/18f7c7d5fc2aee1c16eb69530af6d766.jpg',
            },
          ],
          money: '13.00',
          num: '1',
        },
      ],
      [],
      [],
      [],
      [],
      [],
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let active = parseInt(options.index) + 1
    if (active >= 5) {
      active = 0
    }
    this.setData({
      active: active,
    })

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
    let data = this.data.dataSoure

    for (let index = 0; index < data.length; index++) {
      const soure = data[index]

      soure.map((item) => {
        // 处理状态
        switch (item.btn) {
          case '1':
            item.status_name = '待支付'
            item.operation = [this.getOperation('0'), this.getOperation('1')]
            break
          case '2':
            item.status_name = '已取消'
            item.operation = [this.getOperation('2')]
            break
          case '3':
            item.status_name = '待发货'
            break
          case '4':
            item.status_name = '待收货'
            break
          case '5':
            item.status_name = '待评价'
            break
          case '6':
            item.status_name = '已完成'
            break
          default:
            item.status_name = item.btn
            break
        }

        // 处理时间
        let time = new Date(parseInt(item.add_time) * 1000)

        item.order_time = `${time.getFullYear()}-${util.zero(
          time.getMonth(),
        )}-${util.zero(time.getDate())} ${util.zero(
          time.getHours(),
        )}:${util.zero(time.getMinutes())}`
      })
    }

    this.setData({
      dataSoure: data,
    })
  },

  // MARK 获取操作
  getOperation(tag) {
    let param = {}
    param.tag = tag

    switch (tag) {
      case '0': //取消
        param.name = '取消订单'
        break
      case '1': //立即支付
        param.name = '立即支付'
        break
      case '2': //查看订单
        param.name = '查看订单'
        break
      default:
        break
    }

    return param
  },

  // MARK 操作点击
  onOperation(event) {
    let data = event.currentTarget.dataset
    Toast(`点击了第${data.index}个 操作为${data.param.name}`)
  },
})
