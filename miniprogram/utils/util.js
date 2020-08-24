module.exports = {
  format: Format,
  // MARK 倒计时
  toCountDown: function (maxTime, minTime) {
    //处理默认值
    var targetTime = minTime
    if (!minTime) {
      targetTime = Date.parse(new Date()) / 1000
    }
    var date = maxTime
    if (!maxTime) {
      date = Date.parse(new Date()) / 1000
    }

    date = date - targetTime
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
  },

  // MARK 处理时间 s -> time
  secondsToTime: function (event) {
    let time = new Date(parseInt(event) * 1000),
      year = time.getFullYear(),
      month = this.zero(time.getMonth() + 1),
      date = this.zero(time.getDate())

    //格式化
    var format = Format.fm_1

    format = format.replace('YYYY', year)
    format = format.replace('MM', month)
    format = format.replace('DD', date)
    return format
  },

  // MARK 处理时间 time -> s
  timeToseconds: function (event) {
    let temp = event.split('-')
    let time = new Date(parseInt(temp[0]), parseInt(temp[1]), parseInt(temp[2]))
    return time / 1000
  },

  // MARK 补0
  zero: function (event) {
    let zero = event.toString()
    return zero[1] ? zero : '0' + zero
  },
}

// 日期格式
class Format {
  static fm_1 = 'YYYY-MM-DD'
}
