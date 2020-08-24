// pages/home/index.js
import Toast from '/@vant/weapp/toast/toast'
import Interface from '../../utils/interface'
import Routing from '../../utils/routing'

let app = getApp()

Page({
  /**
   * 页面的初始数据
   */
  data: {
    statusBarH: app.statusBarH,
    //提示文字
    searchContent: '精品猪肉',
    active: 0,
    //数据
    tabArr: ['全部', '热卖', '新品', '推荐'],
    dataSoure: {
      ad: [
        {
          ad_code:
            '/public/upload/ad/2020/06-02/63c7968ba19e38f3aea196976a2f1002.jpg',
          ad_link: '',
          flag: '',
        },
        {
          ad_code:
            '/public/upload/ad/2020/06-02/9954c7b36b40963269a068bc2d55e4ce.jpg',
          ad_link: '',
          flag: '',
        },
        {
          ad_code:
            '/public/upload/ad/2020/06-02/659ee60ebbd35296cea8ec7ce279d0a7.jpg',
          ad_link: '',
          flag: '',
        },
      ],
      nav: [
        {
          link_id: '1',
          link_name: '\u65b0\u95fb\u52a8\u6001',
          link_logo:
            '/public/upload/link/2020/06-11/e68766cc24d55b4e7bbe7888c07d9680.png',
        },
        {
          link_id: '2',
          link_name: '\u6bcf\u65e5\u62a2\u9c9c',
          link_logo:
            '/public/upload/link/2020/05-28/a12cb0bdbabf4307526c47632af0b1f7.png',
        },
        {
          link_id: '3',
          link_name: '\u68ee\u6797\u98df\u54c1',
          link_logo:
            '/public/upload/link/2020/06-11/47a401a8b3bf81274a39b35dc8f26ea0.png',
        },
        {
          link_id: '4',
          link_name: '\u76f4\u64ad\u5e26\u8d27',
          link_logo:
            '/public/upload/link/2020/07-08/8714f17840cac6b2eee9f7e13b9180f2.png',
        },
      ],
      red_ad: {
        ad_code:
          '/public/upload/ad/2020/05-29/760bf165d2a956aec4a7cafa4add8785.png',
        ad_link: '',
        flag: '',
      },
      notice: [
        {
          topic_id: '2',
          topic_title: '\u6b22\u8fce',
          topic_image:
            '/public/upload/topic/2020/07-10/f1d40a49f2fb9544af25fc26125c46f3.png',
          ctime: '1596512593',
          url:
            'http://legong.frnnet.com/index.php/Api/UsersIndex/topic/table/topic/t_id/topic_id/id/2.html',
        },
        {
          topic_id: '1',
          topic_title: '\u6b22\u8fce\u8fdb\u5165\u4e50\u62f1',
          topic_image:
            '/public/upload/topic/2020/07-10/f1d40a49f2fb9544af25fc26125c46f3.png',
          ctime: '1594358102',
          url:
            'http://legong.frnnet.com/index.php/Api/UsersIndex/topic/table/topic/t_id/topic_id/id/1.html',
        },
      ],
      flash_sale_ad: {
        ad_code:
          '/public/upload/ad/2020/06-15/0acdca2e1da511d35472a39bd0856882.jpg',
        ad_link: '30',
        flag: 'goods_id',
      },
      flash_sale: {
        id: '5',
        goods_id: '35',
        goods_name:
          '\u9ed1\u68ee\u5c0f\u7c73\u793c\u76d2\u89c4\u683c:500\u514b*8/\u76d2',
        item_id: '52',
        price: '80.00',
        start_time: '1597075200',
        end_time: '1601395200',
        original_img:
          '/public/upload/goods/2020/07-02/1d1fff11d50640f5e4060be7d561e951.jpg',
        shop_price: '100.00',
      },
      one_ad: {
        ad_code:
          '/public/upload/ad/2020/06-15/5fa41fc7f27948562e4030bbee700262.png',
        ad_link: '6',
        flag: 'cat_id',
      },
      two_ad: {
        ad_code:
          '/public/upload/ad/2020/06-15/c972c4251c87e76d602d577fe0850ab1.png',
        ad_link: '2',
        flag: 'goods_id',
      },
      three_ad: {
        ad_code:
          '/public/upload/ad/2020/06-15/f7b1eef572b8e304457fde07321d0133.png',
        ad_link: '1',
        flag: 'goods_id',
      },
    },

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
  onPullDownRefresh: function () {
    wx.showLoading({
      title: '加载中',
      mask: true,
      success: (result) => {},
      fail: () => {},
      complete: () => {},
    })

    setTimeout(function () {
      // 数据请求成功后，关闭刷新
      wx.stopPullDownRefresh({
        success(res) {
          wx.hideLoading()
        },
      })
    }, 2000)
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {},

  // MARK: 进入商品详情
  gotoGoodDetail(event) {
    app.gotoGoods(event.currentTarget.dataset.param)
  },
})
