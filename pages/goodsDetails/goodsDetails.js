// pages/goodsDetails/goodsDetails.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
    getData: {
      logo: 'http://img.ui.cn/data/file/7/7/6/992677.png',
      logo1: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1540189555679&di=2c62a3f6b3455aa09ec4a8364623e104&imgtype=0&src=http%3A%2F%2Fe.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2Fbba1cd11728b4710fde1beb7cecec3fdfd0323fa.jpg',
      ShoppingList: 
        {
          goodsId: '1',
          ShoppingList: '特别长特特别长特别长特别长特别长特别长特别长特别长特别长别长特别长特别长',
          goodsImg: 'http://img.ui.cn/data/file/7/7/6/992677.png',
          goodsPrice: 1,
          goodsNum: 1,
          goodsMoney: '100',
          goodsMadeIn: '中国',
          goodsWight: '350g',
          goodsSpecifications: '本',

        },
    }
  },
  bank:function(){
    console.log(111)
    // wx.back({
    //   url: '../OfflineShoppingCard/OfflineShoppingCard',
    // })
    wx.navigateBack({
      delta: 2
    })
  },
  ShoppingListDetails: function (e) {
    //console.log(e.detail.current)
    console.log(e.currentTarget.dataset.index);
    wx.navigateTo({
      url: '../goodsDetails/goodsDetails',
    })
  },


  // =====================================================

  
  // 防止 点击编辑数量时 跳转事件
  prevent: function (e) {
    e.prevent;
  },
  // 修改数量
  addNumber(e) {
    console.log('ww', e);
    console.log(e.detail.value,)
    let curNum = 'getData.ShoppingList.goodsNum';
    this.setData({
      [curNum]: e.detail.value,
    })
  },
  // 提交付款
  gotoRetailOrderConfirm: function () {
    console.log('跳页')
    wx.navigateTo({
      url: '../OfflineOrderConfirm/OfflineOrderConfirm',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
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
    // var cartItems = wx.getStorageSync("cartItems") || []
    // var exist = cartItems.find(function (el) {
    //   return el.id == e.target.dataset.id
    // })

    console.log(getApp().aglobalDada.goodsList)
    var cartItems = getApp().aglobalDada.goodsList.goodsNum
    console.log('11', cartItems)

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