// pages/RetailOrderConfirm/RetailOrderConfirm.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    consignee: '',
    getData: {
     list:[{
       retailImg:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1539685745806&di=e57bfede68f06cca9d72b2df1005e7f3&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fpic%2F9%2F44%2Fb6869a0cc5_250_350.jpg',
       retailTitle: '第四次工业革命 作者：李登辉',
       retailNum: '7',
       retailMoney: '178'
     }, {
         retailImg: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1540189555679&di=2c62a3f6b3455aa09ec4a8364623e104&imgtype=0&src=http%3A%2F%2Fe.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2Fbba1cd11728b4710fde1beb7cecec3fdfd0323fa.jpg',
         retailTitle: '第四次工业革命 作者：李登辉',
         retailNum: '7',
         retailMoney: '178'
       }]
    },
    All: {
      list: {
        text1: '售后服务类型',
        text2: '退货退款',
        text3: '74865912793465765',
        text4: '第四次工业革命 作者：李登辉',
        text5: '1',
        text6: '168',
        text7: '退款说明',
        text8: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1539685745806&di=e57bfede68f06cca9d72b2df1005e7f3&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fpic%2F9%2F44%2Fb6869a0cc5_250_350.jpg',
        text9: '上传图片',
        text10: '45',
        text11: '158',
        text12: '30',
        text13: '20'
      },
    }
  },

  pay:function(){
    // wx.requestPayment({
    //   timeStamp: '',
    //   nonceStr: '',
    //   package: '',
    //   signType: 'MD5',
    //   paySign: '',
    //   success(res) {
    //     console.log('ok')
    //    },
    //   fail(res) {
    //     console.log('no')   
    //    }
    // })
    wx.navigateTo({
      url: '../OrderList/OrderList?num=0' 
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