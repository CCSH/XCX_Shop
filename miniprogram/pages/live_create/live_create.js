// pages/live_create/live_create.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    listData: [
      {
        name: '直播标题',
        placeholder: '请填写直播标题',
      },
      {
        name: '直播简介',
        placeholder: '请填写简介',
      },
    ],
    imagePath: null,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {},

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {},

  // MARK 选择图片
  onImage(event) {
    if (event.target.dataset.param) {
      return
    }
    let self = this
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success(res) {
        // 设置图片
        self.setData({
          imagePath: res.tempFilePaths,
        })
      },
    })
  },

  // MARK 删除
  onDelete() {
    this.setData({
      imagePath: null,
    })
  },

  // MARK 输入框
  onInput(event) {
    let value = event.detail.value
    console.log(event.currentTarget.dataset.param)
  },
})
