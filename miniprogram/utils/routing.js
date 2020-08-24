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

  // MARK 导航返回
  static navBack(num) {
    wx.navigateBack({
      delta: num ? num : 1,
    })
  }
}

module.exports = Routing
