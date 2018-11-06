// pages/mineAfterSale/mineAfterSale.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    seccode: '',
    iuser:'',
    itel:'',
    about:'',
    atempFilePaths: '',
    All:{
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
        text10:'添加图片',
        text11: '联系人：',
        text12: '联系电话：',
        text13:'申请售后'
      }
     
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  // bindTextAreaBlur: function (e) {
  //   console.log(e.detail.value)
  // },

  iuser: function (e) {
    this.setData({
      iuser: e.detail.value
    })
  },
  itel: function (e) {
    this.setData({
      itel: e.detail.value
    })
  },
  bindTextAreaBlur:function(){
    // this.setData({
    //   about: e.detail.value
    // })
  },


  formSubmit: function (e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
  },


  //图片上传

  chooseimage: function () {
    var that = this;
    wx.showActionSheet({
      itemList: ['从相册中选择', '拍照'],
      itemColor: "#000",
      success: function (res) {
        if (!res.cancel) {
          if (res.tapIndex == 0) {
            that.chooseWxImage('album')
          } else if (res.tapIndex == 1) {
            that.chooseWxImage('camera')
          }
        }
      }
    })
  },
  chooseWxImage: function (type) {
    var that = this;
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: [type],
      success: function (res) {
        console.log(res);
        that.setData({
          atempFilePaths: res.tempFilePaths[0],
        })
      }
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
    console.log('fff', this.data.seccode)
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