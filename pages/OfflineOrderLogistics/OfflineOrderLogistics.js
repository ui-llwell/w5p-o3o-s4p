// pages/OfflineOrderLogistics/OfflineOrderLogistics.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    courierNumber: '',
    type: '顺丰',
    logisticsList: [
      {
        context: '[韩国—仁川]包裹已到达[仁川海外仓]',
        ftime: '2018.4.23 23:05 ',
      },
      {
        context: '[韩国—仁川]包裹已到达[仁川海外仓]',
        ftime: '2018.4.23 23:05',
      },
      {
        context: '[韩国—仁川]包裹已到达[仁川海外仓]',
        ftime: '2018.4.23 23:05',
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (obj) {
    // var ttt = JSON.parse(obj.goodsMes);
    // console.log(ttt)
    // this.setData({
    //   logisticsList: ttt.data,
    //   courierNumber: ttt.nu,
    // })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})