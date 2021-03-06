// pages/RetailShoppingCard/RetailShoppingCard.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
    shoppingCardData:{
      title:"首都机场零售店",
      ShoppingList: [
        {
        goodsId: '1',
        goodsName: '特别长特别长特别长特别长特别长的耳机',
        goodsImg: 'http://img.ui.cn/data/file/7/7/6/992677.png',
        goodsPrice: 1,
        goodsNum: 1,
      }, {
          goodsId: '2',
          goodsName: '特别长特别长特别长特别长特别长的耳机',
          goodsImg: 'http://img.ui.cn/data/file/7/7/6/992677.png',
          goodsPrice: 2,
          goodsNum: 2,
        }, {
          goodsId: '3',
          goodsName: '特别长特别长特别长特别长特别长的耳机',
          goodsImg: 'http://img.ui.cn/data/file/7/7/6/992677.png',
          goodsPrice: 3,
          goodsNum: 3,
        }, {
          goodsId: '4',
          goodsName: '特别长特别长特别长特别长特别长的耳机',
          goodsImg: 'http://img.ui.cn/data/file/7/7/6/992677.png',
          goodsPrice: 4,
          goodsNum: 4,
        }, {
          goodsId: '5',
          goodsName: '特别长特别长特别长特别长特别长的耳机',
          goodsImg: 'http://img.ui.cn/data/file/7/7/6/992677.png',
          goodsPrice: 5,
          goodsNum: 5,
        }, {
          goodsId: '6',
          goodsName: '特别长特别长特别长特别长特别长的耳机',
          goodsImg: 'http://img.ui.cn/data/file/7/7/6/992677.png',
          goodsPrice: 6,
          goodsNum: 6,
        }, {
          goodsId: '7',
          goodsName: '特别长特别长特别长特别长特别长的耳机',
          goodsImg: 'http://img.ui.cn/data/file/7/7/6/992677.png',
          goodsPrice: 7,
          goodsNum: 7,
        }, {
          goodsId: '8',
          goodsName: '特别长特别长特别长特别长特别长的耳机',
          goodsImg: 'http://img.ui.cn/data/file/7/7/6/992677.png',
          goodsPrice: 8,
          goodsNum: 8,
        }, {
          goodsId: '9',
          goodsName: '特别长特别长特别长特别长特别长的耳机',
          goodsImg: 'http://img.ui.cn/data/file/7/7/6/992677.png',
          goodsPrice: 9,
          goodsNum: 9,
        }, {
          goodsId: '10',
          goodsName: '特别长特别长特别长特别长特别长的耳机',
          goodsImg: 'http://img.ui.cn/data/file/7/7/6/992677.png',
          goodsPrice: 10,
          goodsNum: 10,
        }
        ]
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

  },
  // =====================================================
  // sss:function(e){
  //   e.prevent;
  //   console.log('e', e.currentTarget.dataset.index)
  //   let curIndex = e.currentTarget.dataset.index
  //   this.data.shoppingCardData.ShoppingList.splice(curIndex, 1);
  //   this.setData({
  //     'shoppingCardData.ShoppingList': this.data.shoppingCardData.ShoppingList,
  //   })
  // },
  gotoGoodsDetails: function (e) {
    console.log('num',e.currentTarget.dataset.index)
    console.log('跳页gotoGoodsDetails')
    wx.navigateTo({
     // url: '../RetailGoodsDetails/RetailGoodsDetails?shopid=' + e.currentTarget.dataset.index,
      url: "../RetailGoodsDetails/RetailGoodsDetails?shopid=" + e.currentTarget.dataset.index
                                        
    })
  },
  // 防止 点击编辑数量时 跳转事件
  prevent: function (e) {
    e.prevent;
  },
  // 修改数量
  // addNumber(e) {
  //   console.log('ww', e);
  //   let curNum = 'shoppingCardData.ShoppingList[' + e.currentTarget.dataset.index + '].goodsNum';
  //   this.setData({
  //     [curNum]: e.detail.value,
  //   })
  // },
  // 提交付款
  gotoRetailOrderConfirm: function () {
    console.log('跳页')
    wx.navigateTo({
      url: '../RetailOrderConfirm/RetailOrderConfirm',
    })
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