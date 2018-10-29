const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    // var that = this;
    // // 查看是否授权
    // wx.getSetting({
    //   success: function (res) {
    //     if (res.authSetting['scope.userInfo']) {
    //       wx.getUserInfo({
    //         success: function (res) {
    //           //从数据库获取用户信息
    //           //用户已经授权过
    //           wx.switchTab({
    //             url: '../index/index'
    //           })
    //         }
    //       });
    //     }
    //   }
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
    let that = this
    that.setData({
      register: wx.getStorageSync('isReg')
    })
    // console.log('indexglobaol.register111~~~', getApp().aglobalDada.register)
    console.log('hree', wx.getStorageSync('isReg'))
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

  },

  /**/
  // bindGetUserInfo: function (e) {
  //   console.log(111)
  //   var that = this;
  //   //此处授权得到userInfo
  //    //console.log(e.detail.userInfo);
  //   //接下来写业务代码
  //   app.Ajax(
  //     'Open',
  //     'POST',
  //     'UserReg',
  //     { ...e.detail.userInfo },
  //     function (json) {
  //       console.log('json注册', json);
  //       if (json.success) {
  //         console.log('跳转')
  //         wx.switchTab({
  //           url: '../index/index',
  //         })
  //       } else {
  //         console.log('ssssssss')
  //       }

  //     }
  //   );
  //   //最后，记得返回刚才的页面
  //   // wx.navigateBack({
  //   //   delta: 1
  //   // })

  // },
  bindGetUserInfo: function (e) {
    //console.log(111)
    var that = this;
    //此处授权得到userInfo
    console.log(e.detail.userInfo);
    //接下来写业务代码
    app.Ajax(
      'Open',
      'POST',
      'UserReg',
      { ...e.detail.userInfo },
      function (json) {
        console.log('json注册', json);
        if (json.success) {
          console.log('跳转')
          wx.switchTab({
            url: '../index/index',
          })
        } else {
          console.log('ssssssss')
        }

      }
    );
    //最后，记得返回刚才的页面
    // wx.navigateBack({
    //   delta: 1
    // })

  },


})