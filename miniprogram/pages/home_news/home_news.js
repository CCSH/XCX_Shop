const Routing = require('../../utils/routing')
const util = require('../../utils/util')

//Page Object
Page({
  data: {
    dataSoure: [
      {
        article_id: '2',
        title: '\u793e\u533a\u515a\u652f\u90e8',
        description: '',
        publish_time: '1596988800',
        thumb:
          '/public/upload/article/2020/07-10/3f44a6924ca3eff9c3113405d44b91d6.png',
        link: 'https://www.baidu.com/',
        url: 'https://www.baidu.com/',
      },
      {
        article_id: '1',
        title:
          '\u4e9a\u5e03\u529b\u9547\u515a\u59d4\u5f00\u5c55\u8bb2\u515a\u8bfe\u6d3b\u52a8',
        description: '',
        publish_time: '1594396800',
        thumb:
          '/public/upload/article/2020/07-10/3f44a6924ca3eff9c3113405d44b91d6.png',
        link: '',
        url:
          'http://legong.frnnet.com/index.php/Api/UsersIndex/detaile/table/news/t_id/article_id/id/1.html',
      },
    ],
  },
  //options(Object)
  onLoad: function (options) {
    let param = Routing.getRoutingParam(options)
    var title = '新闻动态'
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
    var dataSoure = event
    if (!dataSoure) {
      dataSoure = this.data.dataSoure
    }

    dataSoure.map((item) => {
      item.time = util.secondsToTime(item.publish_time)
    })

    this.setData({
      dataSoure,
    })
  },

  // MARK 点击
  onSelect(event) {
    Routing.navTo('custom_web', {
      url: event.currentTarget.dataset.param,
      title: '详情',
    })
  },
})
