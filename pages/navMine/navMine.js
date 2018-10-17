// pages/navMine/navMine.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    All: {
      images: [
        {
          img: 'http://llwell-wxapp.oss-cn-beijing.aliyuncs.com/O2OShop/icon_unpaid@3x.png',
          text: '待付款'
        },{
          img: 'http://llwell-wxapp.oss-cn-beijing.aliyuncs.com/O2OShop/icon_waiting_for_delivery@3x.png',
          text: '待发货'
        },{
          img: 'http://llwell-wxapp.oss-cn-beijing.aliyuncs.com/O2OShop/icon_waiting_for_the_goods@3x.png',
          text: '待收货'
        },{
          img: 'http://llwell-wxapp.oss-cn-beijing.aliyuncs.com/O2OShop/icon_finish@3x.png',
          text: '已完成'
        }],
        logo:{
          log: 'http://llwell-wxapp.oss-cn-beijing.aliyuncs.com/O2OShop/copyright@3x.png'
        }
    }
  },

  order: function(e){
    console.log(e.currentTarget.dataset.index)
    wx.navigateTo({
      url: '../OrderList/OrderList',
    })
  },

  service:function(){
    wx.navigateTo({
      url: '../mineAfterSale/mineAfterSale',
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