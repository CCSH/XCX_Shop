module.exports = {
  toCountDown: toCountDown,
}

const formatNumber = (n) => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

// MARK 倒计时
function toCountDown(time) {
  //当前时间
  let nowDate = Date.parse(new Date()) / 1000
  let date = time - nowDate
  //规则
  var rule = 60 * 60 * 24
  //天
  let day = Math.floor(date / rule)
  //时
  rule = rule / 24
  let hour = Math.floor((date / rule) % 24)
  //分
  rule = rule / 60
  let minute = Math.floor((date / rule) % 60)
  //秒
  rule = rule / 60
  let second = Math.floor((date / rule) % 60)

  return {
    day: day,
    hour: hour,
    minute: minute,
    second: second,
  }
}
