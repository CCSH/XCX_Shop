class Routing {
  // MARK 路由设置
  static setRouting(name, param) {
    //设置路径
    var routingName = ''

    if (name.indexOf('/pages/') == -1) {
      //补根目录
      routingName = `/pages/${name}`
      if (routingName.split('/').length == 3) {
        //补具体路径
        routingName = `${routingName}/${name}`
      }
    }

    //设置参数
    var routingParam = ''

    if (param) {
      routingParam = `?param=${JSON.stringify(param)}`
    }
    return `${routingName}${routingParam}`
  }

  // MARK 获取路由参数
  static getRoutingParam(event) {
    if (event.param) {
      return JSON.parse(event.param)
    }
    return null
  }

  // MARK 导航跳转
  static navTo(name, param) {
    wx.navigateTo({
      url: this.setRouting(name, param),
    })
  }

  // MARK 导航返回指定页面
  static navBack(routeName, data) {
    let currentPages = getCurrentPages()

    //没有名字 返回上一页面
    if (!routeName) {
      if (currentPages > 1) {
        //返回上一页面
        wx.navigateBack({
          delta: 1,
        })
      } else {
        //去首页
        wx.redirectTo({
          url: '/pages/home/index',
        })
      }
    } else {
      var isHave = false
      currentPages.map((item, index) => {
        //找到了
        if (item.route.indexOf(routeName)) {
          isHave = true
          //数据给他
          item.setData(data)
          //返回这个页面
          wx.navigateBack({
            delta: currentPages.length - 1 - index,
          })
          return
        }
      })

      // 没有
      if (isHave) {
        //去首页
        wx.redirectTo({
          url: '/pages/home/index',
        })
      }
    }
  }
}

module.exports = Routing
