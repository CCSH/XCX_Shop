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
    tabArr: [{ name: '全部' }],
    dataSoure: {},
    goodArr: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.requestHome()
    this.requestCategory()
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
  onPullDownRefresh: function () {
    wx.showLoading({
      title: '加载中',
      mask: true,
    })

    if (this.data.active == 0) {
      this.requestHome()
    } else {
      this.requestGood()
    }
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {},

  // MARK 请求 首页
  requestHome() {
    let self = this
    Interface.homeIndex()
      .then((res) => {
        self.setData({
          dataSoure: res.data,
        })
      })
      .catch((err) => {
        console.error(err)
      })
  },

  // MARK 请求 类别
  requestCategory() {
    let self = this

    Interface.homeCategory()
      .then((res) => {
        var tabArr = self.data.tabArr
        tabArr = tabArr.concat(res.data)
        self.setData({
          tabArr,
        })
      })
      .catch((err) => {
        console.error(err)
      })
  },

  // MARK 请求 商品
  requestGood() {
    let self = this
    let category = this.data.tabArr[this.data.active].flag
    Interface.homeGood({
      category,
    })
      .then((res) => {
        self.setData({
          goodArr: res.data,
        })
      })
      .catch((err) => {
        console.error(err)
      })
  },

  // MARK: 进入商品详情
  gotoGoodDetail(event) {
    app.gotoGoods(event.currentTarget.dataset.param)
  },

  // MARK 工具栏点击
  onTool(event) {
    let index = event.currentTarget.dataset.param
    let dataSoure = this.data.dataSoure
    let data = dataSoure.nav[index]
    var param = {
      title: data.link_name,
      id: data.link_id,
    }
    switch (index) {
      case 0: //新闻动态
        Routing.navTo('home_news', param)
        break
      case 1: //每日抢鲜
        Routing.navTo('home_qg', param)
        break
      case 2: //森林食品
        Routing.navTo('home_classify', param)
        break
      case 3: //直播带货
        Routing.navTo('home_live', param)
        break
      default:
        break
    }
  },

  // MARK 通知点击
  onNot(event) {
    let param = event.currentTarget.dataset.param
    app.gotoWeb(param.url, param.topic_title)
  },

  // MARK 商品点击
  onGoods(event) {
    let param = event.currentTarget.dataset.param
    let content = param.ad_link

    switch (param.flag) {
      case 'cat_id':
        Routing.navTo('home_classify')
        break
      case 'goods_id':
        app.gotoGoods(content)
        break
      case 'url':
        app.gotoWeb(content)
        break
      default:
        break
    }
  },

  // MARK 分享
  onShare() {
    console.log('邀请好友')
  },

  // MARK 搜索
  onSearch(event) {
    var search = event.detail
    if (!search.length) {
      search = this.data.searchContent
    }
    Routing.navTo('home_classify', {
      title: '搜索结果',
      search: search,
    })
  },

  // MARK 标签点击
  onChange(event) {
    this.setData({
      active: event.detail.index,
    })

    if (event.detail.index == 0) {
      return
    }
    // 请求商品
    this.requestGood()
  },
})
