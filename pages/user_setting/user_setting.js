const Routing = require('../../utils/routing')
const Store = require('../../utils/store')
let app = getApp()

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
      case '退出账号':
        wx.showLoading({
          title: '退出登录',
        })

        Store.setStorage(app.userInfo)
          .then(() => {
            wx.hideLoading()
            setTimeout(function () {
              //返回页面
              wx.navigateBack({
                delta: 1,
              })
            }, 1000)
          })
          .catch(() => {
            wx.showToast({
              icon: 'none',
              title: '退出失败',
            })
          })
        break
      default:
        break
    }
  },
})
