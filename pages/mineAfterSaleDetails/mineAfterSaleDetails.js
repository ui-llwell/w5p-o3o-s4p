// pages/mineAfterSale/mineAfterSale.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    atempFilePaths: '',
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
        text10: '添加图片',
        text11: '李嘉豪',
        text12: '17601620130',
        text13: '申请售后',
        text17: '第四次工业革命第四次工业革命第四次工业革命第四次工业革命第四次工业革命第四次工业革命第四次工业革命第四次工业革命第四次工业革命第四次工业革命'
      },
      imgArr: [
        'http://llwell-wxapp.oss-cn-beijing.aliyuncs.com/PurchasingAssistantWorkbench/home_bg.jpg'
      ]

    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  bindTextAreaBlur: function (e) {
    console.log(e.detail.value)
  },

  //图片点击放大

  previewImg: function (e) {


    //console.log(e.currentTarget.dataset.index);
    var index = e.currentTarget.dataset.index;
    var imgArr = this.data.All.imgArr;

    wx.previewImage({
      current: imgArr[index],     //当前图片地址
      urls: imgArr,               //所有要预览的图片的地址集合 数组形式


      // success: function (res) { },
      // fail: function (res) { },
      // complete: function (res) { },
    })

  },  
  

  


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