// pages/navOffline/navOffline.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    shopid:"1",
    getData:{
      arr:{
        img: 'http://llwell-wxapp.oss-cn-beijing.aliyuncs.com/PurchasingAssistantPersonal/shop_img_rebate@3x.png',
        title: '北京首都机场T3蔚蓝书店',
        name: '本店主营书籍、唱片、文具'
      },
      List: [{
        logo: 'http://llwell-wxapp.oss-cn-beijing.aliyuncs.com/PurchasingAssistantPersonal/top_img_consumption@3x.png',
        name: 'MCM',
        num: '15',
        hand: 'http://llwell-wxapp.oss-cn-beijing.aliyuncs.com/PurchasingAssistantPersonal/shop_icon_recommend@3x.png',
        recommend: '掌柜推荐',
      }, {
        logo: 'http://llwell-wxapp.oss-cn-beijing.aliyuncs.com/PurchasingAssistantPersonal/top_img_receipt@3x.png',
        name: 'DOSHISHA',
        num: '7',
        hand: 'http://llwell-wxapp.oss-cn-beijing.aliyuncs.com/PurchasingAssistantPersonal/shop_icon_recommend@3x.png',
        recommend: '掌柜推荐',
      }, {
        logo: 'http://llwell-wxapp.oss-cn-beijing.aliyuncs.com/PurchasingAssistantPersonal/top_img_consumption@3x.png',
        name: 'ELFA PHARM',
        num: '37',
        hand: 'http://llwell-wxapp.oss-cn-beijing.aliyuncs.com/PurchasingAssistantPersonal/shop_icon_hot@3x.png',
        recommend: '热销品牌',
      }, {
        logo: 'http://llwell-wxapp.oss-cn-beijing.aliyuncs.com/PurchasingAssistantPersonal/top_img_receipt@3x.png',
        name: 'DOSHISHA',
        num: '27',
        hand: 'http://llwell-wxapp.oss-cn-beijing.aliyuncs.com/PurchasingAssistantPersonal/shop_icon_hot@3x.png',
        recommend: '热销品牌',
      }, {
        logo: 'http://llwell-wxapp.oss-cn-beijing.aliyuncs.com/PurchasingAssistantPersonal/top_img_consumption@3x.png',
        name: 'Roboto-Light',
        num: '37',
        hand: 'http://llwell-wxapp.oss-cn-beijing.aliyuncs.com/PurchasingAssistantPersonal/shop_icon_recommend@3x.png',
        recommend: '掌柜推荐',
      }]
    }
  },
  start:function(){
    wx.navigateTo({
      url: '../OfflineShoppingCard/OfflineShoppingCard',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    this.setData({
      shop:''
    })
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
    console.log(this.data.shopid)
    if (this.data.shopid == ''){
      wx.redirectTo({
        url: '../OfflineScanShopcode/OfflineScanShopcode',
      })
    }else {
      wx.switchTab({
        url: '../navOffline/navOffline',
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