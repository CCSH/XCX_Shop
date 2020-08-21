class Routing {
  // 路由设置
  static setRouting(name, param) {
    //设置路径
    var routingName = name

    if (routingName.indexOf('/pages/') == -1) {
      //补根目录
      routingName = `/pages/${name}`
      if (routingName.split('/').length == 3) {
        //补具体路径
        routingName = `${routingName}/index`
      }
    }

    //设置参数
    var routingParam = param

    if (routingParam.length != 0) {
      routingParam = `?param=${JSON.stringify(routingParam)}`
    }
    return `${routingName}${routingParam}`
  }

  // 获取路由参数
  static getRoutingParam(event) {
    return JSON.parse(event.param)
  }
}

module.exports = Routing
