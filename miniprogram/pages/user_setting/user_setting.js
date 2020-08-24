const Routing = require('../../utils/routing')

//Page Object
Page({
  data: {
    dataList: ['关于我们', '当前版本', '退出账号'],
  },
  //options(Object)
  onLoad: function (options) {},
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

  // MARK 点击
  onSelect(event) {
    switch (event.currentTarget.dataset.param) {
      case '关于我们':
        Routing.navTo('custom_web', {
          title: '个人中心',
          url: 'index.php/api/UsersIndex/agreement/id/1',
        })
        break

      default:
        break
    }
  },
})
