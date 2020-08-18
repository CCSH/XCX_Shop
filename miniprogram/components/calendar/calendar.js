Component({
  // 外部数据
  properties: {
    specialDays: {
      type: Array,
      value: [],
    },
  },

  // 组件的初始数据
  data: {
    //当月格子
    thisMonthDays: [],
    //上月格子
    empytGridsBefore: [],
    //下月格子
    empytGridsAfter: [],
    //显示日期
    title: '',

    // 开始周日
    weekStart: 0,
    //星期数组
    weeks: ['日', '一', '二', '三', '四', '五', '六'],
    //选中
    select: 0,

    year: 0,
    month: 0,
    day: 0,
  },

  ready: function () {
    this.today()
  },

  methods: {
    //初始化
    display: function (year, month, day) {
      this.setData({
        year,
        month,
        day,
        title: year + '年' + this.zero(month) + '月',
      })
      this.createDays(year, month)
      this.createEmptyGrids(year, month)
    },

    //默认选中当天 并初始化组件
    today: function () {
      let date = new Date(),
        year = date.getFullYear(),
        month = date.getMonth() + 1,
        day = date.getDate(),
        select = year + '-' + this.zero(month) + '-' + this.zero(day)

      this.setData({
        year: year,
        month: month,
        day: day,
        select: select,
      })

      //初始化日历组件UI
      this.display(year, month, day)

      //发送事件监听
      this.triggerEvent('select', select)
    },

    // 选择 并格式化数据
    select: function (e) {
      let day = e.currentTarget.dataset.index,
        select =
          this.data.year +
          '-' +
          this.zero(this.data.month) +
          '-' +
          this.zero(day)

      this.setData({
        title: this.data.year + '年' + this.zero(this.data.month) + '月',
        select: select,
        year: this.data.year,
        month: this.data.month,
        day: day,
      })

      //发送事件监听
      this.triggerEvent('select', select)
    },

    //上个月
    lastMonth: function () {
      let month = this.data.month == 1 ? 12 : this.data.month - 1
      let year = this.data.month == 1 ? this.data.year - 1 : this.data.year
      //初始化日历组件UI
      this.display(year, month, 0)
    },

    //下个月
    nextMonth: function () {
      let month = this.data.month == 12 ? 1 : this.data.month + 1
      let year = this.data.month == 12 ? this.data.year + 1 : this.data.year
      //初始化日历组件UI
      this.display(year, month, 0)
    },

    //获取指定月天数
    getThisMonthDays: function (year, month) {
      return new Date(year, month, 0).getDate()
    },

    // 绘制当月天数占的格子
    createDays: function (year, month) {
      let thisMonthDays = [],
        days = this.getThisMonthDays(year, month)

      for (let i = 1; i <= days; i++) {
        let isSpecial = false,
          monthFormat = this.zero(month),
          dateFormat = this.zero(i)
        //是否特殊
        this.data.specialDays.map((item) => {
          if (item === `${year}${monthFormat}${dateFormat}`) {
            isSpecial = true
          }
        })

        thisMonthDays.push({
          day: i,
          dateFormat: dateFormat,
          monthFormat: monthFormat,
          week: this.data.weeks[
            new Date(Date.UTC(year, month - 1, i)).getDay()
          ],
          isSpecial: isSpecial,
        })
      }
      this.setData({
        thisMonthDays,
      })
    },

    //获取当月空出的天数
    createEmptyGrids: function (year, month) {
      let week = new Date(Date.UTC(year, month - 1, 1)).getDay(),
        empytGridsBefore = [],
        empytGridsAfter = [],
        emptyDays = week == 0 ? 7 : week
      //当月天数
      var thisMonthDays = this.getThisMonthDays(year, month)
      //上月天数
      var preMonthDays =
        month - 1 < 0
          ? this.getThisMonthDays(year - 1, 12)
          : this.getThisMonthDays(year, month - 1)

      //空出日期
      for (let i = 1; i <= emptyDays; i++) {
        empytGridsBefore.push(preMonthDays - (emptyDays - i))
      }

      var currentDays = thisMonthDays + emptyDays
      //下个月天数
      var after = 42 - currentDays > 0 ? 42 - currentDays : 0
      for (let i = 1; i <= after; i++) {
        empytGridsAfter.push(i)
      }
      this.setData({
        empytGridsAfter,
        empytGridsBefore,
      })
    },

    //补全0
    zero: function (i) {
      return i >= 10 ? i : '0' + i
    },
  },
})
