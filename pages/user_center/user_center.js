//Page Object
import routing from '../../utils/routing'
import util from '../../utils/util'
import InterFace from '../../utils/interface'

Page({
  data: {
    list: ['头像', '昵称', '性别', '生日', '地区'],
    areaList: null,
    sexList: [
      {
        name: '保密',
        color: '#000',
        tag: 0,
      },
      {
        name: '男',
        color: '#000',
        tag: 1,
      },
      {
        name: '女',
        color: '#000',
        tag: 2,
      },
    ],
    sexShow: false,
    addressShow: false,
    region: '',
    birthday: '',
    dataSoure: {},
  },
  //options(Object)
  onLoad: function (options) {
    let dataSoure = routing.getRoutingParam(options)
    this.handleData(dataSoure)
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
    //处理地址
    var region = `${dataSoure.province_name}${dataSoure.city_name}${dataSoure.district_name}`
    if (!region) {
      region = '请选择地区'
    }

    //处理时间
    let birthday = util.secondsToTime(dataSoure.birthday)

    this.setData({
      dataSoure,
      region,
      birthday,
    })
  },

  // MARK 点击
  onSelect(event) {
    let data = event.currentTarget.dataset.param
    switch (data) {
      case '头像':
        this.onAvator()
        break
      case '昵称':
        break
      case '性别':
        this.setData({
          sexShow: true,
        })
        break
      case '生日':
        break
      case '地区':
        this.setData({
          addressShow: true,
        })

        break
      default:
        break
    }
  },

  // MARK 性别
  onSex(event) {
    let dataSoure = this.data.dataSoure
    dataSoure.sex = event.detail.tag
    this.setData({
      dataSoure,
    })
  },

  // MARK 关闭
  onClose() {
    this.setData({
      sexShow: false,
      addressShow: false,
    })
  },

  // MARK 地区
  onRegion(event) {
    let data = event.detail.value
    var dataSoure = this.data.dataSoure

    dataSoure.province_name = data[0]
    dataSoure.city_name = data[1]
    dataSoure.district_name = data[2]
    this.handleData(dataSoure)
  },

  // MARK 时间
  onDate(event) {
    let data = event.detail.value

    var dataSoure = this.data.dataSoure
    dataSoure.birthday = util.timeToseconds(data)

    this.handleData(dataSoure)
  },

  // MARK 头像
  onAvator() {
    let self = this
    var dataSoure = self.data.dataSoure
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success(res) {
        // tempFilePath可以作为img标签的src属性显示图片
        dataSoure.head_pic = res.tempFilePaths[0]
        self.handleData(dataSoure)

        //上传头像
        InterFace.uploadImg({
          filePath: res.tempFilePaths[0],
        })
      },
    })
  },
})
