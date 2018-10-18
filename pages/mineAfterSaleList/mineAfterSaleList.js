// pages/mineAfterSaleList/mineAfterSaleList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    getData: {
      goodsList: [{
        goodsSrc: 'http://img.ui.cn/data/file/7/7/6/992677.png',
        goodsName: '丑娃娃身上的丑娃娃身上的还是丑娃娃身上的还是丑娃娃身上的还是丑娃娃身上的还是丑娃娃身上的还是丑娃娃身上的还是丑娃娃身上的还是丑娃娃身上的还是还是',
        goodsPrice: '123',
      }],
      orderTtle: '流连旗舰店-O2O订单',
      details: '查看详情',
    }

  },
  details:function(){
    wx.navigateTo({
      url: '../mineAfterSaleDetails/mineAfterSaleDetails',
    })  
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