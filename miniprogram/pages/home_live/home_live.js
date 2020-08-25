const Routing = require('../../utils/routing')

//Page Object
Page({
  data: {
    dataSoure: {
      TotalNum: '1',
      TotalPage: '1',
      PageNum: '1',
      PageSize: '100',
      OnlineInfo: [
        {
          StreamName: '41',
          PublishTimeList: [{ PublishTime: '2020-08-25T01:09:06Z' }],
          AppName: 'live',
          DomainName: 'lgpush.frnnet.com',
          chat_id: '121638060359681',
          chat_name: '\u76f4\u64ad',
          imgurl:
            '/public/api_upload/2020/08-25/4e1e94ea4862f2578b8b611725078335.jpg',
          des: '\u7b80\u4ecb',
          channel_name: '176****5339',
          phone: '17600075339',
          headimg: '/public/images/wosheng_head_defaul.png',
          attention_num: '0',
          support_num: '0',
          init_num: '83',
          watch_num: '84',
          create_time: '2020-08-25 09:08:48',
          playurl: 'rtmp://lgplay.frnnet.com/live/41',
          isattention: '0',
          issupport: '0',
        },
        {
          StreamName: '41',
          PublishTimeList: [{ PublishTime: '2020-08-25T01:09:06Z' }],
          AppName: 'live',
          DomainName: 'lgpush.frnnet.com',
          chat_id: '121638060359681',
          chat_name: '\u76f4\u64ad',
          imgurl:
            '/public/api_upload/2020/08-25/4e1e94ea4862f2578b8b611725078335.jpg',
          des: '\u7b80\u4ecb',
          channel_name: '176****5339',
          phone: '17600075339',
          headimg: '/public/images/wosheng_head_defaul.png',
          attention_num: '0',
          support_num: '0',
          init_num: '83',
          watch_num: '84',
          create_time: '2020-08-25 09:08:48',
          playurl: 'rtmp://lgplay.frnnet.com/live/41',
          isattention: '0',
          issupport: '0',
        },
        {
          StreamName: '41',
          PublishTimeList: [{ PublishTime: '2020-08-25T01:09:06Z' }],
          AppName: 'live',
          DomainName: 'lgpush.frnnet.com',
          chat_id: '121638060359681',
          chat_name: '\u76f4\u64ad',
          imgurl:
            '/public/api_upload/2020/08-25/4e1e94ea4862f2578b8b611725078335.jpg',
          des: '\u7b80\u4ecb',
          channel_name: '176****5339',
          phone: '17600075339',
          headimg: '/public/images/wosheng_head_defaul.png',
          attention_num: '0',
          support_num: '0',
          init_num: '83',
          watch_num: '84',
          create_time: '2020-08-25 09:08:48',
          playurl: 'rtmp://lgplay.frnnet.com/live/41',
          isattention: '0',
          issupport: '0',
        },
      ],
      RequestId: '75c89bc6-06d2-4e9d-89b6-169669504473',
      is_live: '1',
    },
  },
  //options(Object)
  onLoad: function (options) {
    let param = Routing.getRoutingParam(options)
    var title = '直播列表'
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

    // dataSoure.map((item) => {
    //   item.time = util.secondsToTime(item.publish_time)
    // })

    this.setData({
      dataSoure,
    })
  },

  // MARK 点击
  onSelect(event) {
    console.log(event.currentTarget.dataset.param)
  },

  // MARK 直播
  onLive() {
    Routing.navTo('')
  },
})
