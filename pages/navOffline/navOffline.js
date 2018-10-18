// pages/navOffline/navOffline.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    getData:{
      id:''
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
    const that = this
    console.log(this.data.getData.id)
    if (this.data.getData.id == ''){
      wx.navigateTo({
        url: '../OfflineScanShopcode/OfflineScanShopcode',
      })
    }else {
      wx.navigateTo({
        url: '../OfflineShoppingCard/OfflineShoppingCard',
      })
    }
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