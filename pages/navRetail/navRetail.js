// pages/navRetail/navRetail.js

var QRCode = require('../../utils/weapp-qrcode.js')
var qrcode;


//获取应用实例
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  demo(){
    wx.navigateTo({
      url: '../RetailShoppingCard/RetailShoppingCard',
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

  getScanCode: function () {
    app.Ajax(
      'User',
      'POST',
      'GetScanCode',
      {},
      function (json) {
        //console.log('GetScanCode', json);
        if (json.success) {
          //console.log('QR', json.data)
          wx.sendSocketMessage({
            data: 'getPayState:' + json.data
          })
          qrcode = new QRCode('canvas', {
            // usingIn: this,
            text: json.data,
            width: 227,
            height: 227,
            colorDark: "#000",
            colorLight: "white",
            correctLevel: QRCode.CorrectLevel.H,
          });
        } else {
          console.log('ffffffffffff')
          app.Toast('', 'none', 3000, json.msg.code);
          console.log(json.msg.code)
          // wx.showToast({
          //   title: json.msg.msg,
          //   icon: 'none',
          //   duration: 2500
          // });
        }
      }
    )
  },


  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
    const that = this;
    wx.connectSocket({
      // url: 'wss://wxapp.llwell.net/api/PG/ws'
      url: 'wss://wxapp.llwell.net/api/oto/ws'
    })

    wx.onSocketOpen(function (res) {
      //console.log('xin')
      that.getScanCode();

    })

    wx.onSocketMessage(function (res) {
      const that = this;
      // console.log(res);

      wx.showToast({
        title: '已收到付款',
        duration: 3000,
        success: function () {
          // that.getScanCode();
          // 
          setTimeout(function () {
            app.Ajax(
              'User',
              'POST',
              'GetScanCode',
              {},
              function (json) {
                // console.log('GetScanCode',json);
                if (json.success) {
                  wx.sendSocketMessage({
                    data: 'getPayState:' + json.data
                  })
                  qrcode.makeCode(json.data)
                }
              }
            )
          }, 1500)
          // 
        }
      });
    })

  },




  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    wx.closeSocket(function (rea) {
      console.log(rea)
    })
    wx.onSocketClose(function (res) {
      console.log('WebSocket 已关闭！')
    })
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