//app.js
const app = getApp();

App({
  aglobalDada:{
    one: '',
    goodsList: [
      // {
      //   goodsId: '1',
      //   goodsName: '特别长特别长特别长特别长特别长的耳机',
      //   goodsImg: 'http://img.ui.cn/data/file/7/7/6/992677.png',
      //   goodsPrice: 1,
      //   goodsNum: 1,
      // }, {
      //   goodsId: '2',
      //   goodsName: '特别长特别长特别长特别长特别长的耳机',
      //   goodsImg: 'http://img.ui.cn/data/file/7/7/6/992677.png',
      //   goodsPrice: 2,
      //   goodsNum: 2,
      // }, {
      //   goodsId: '3',
      //   goodsName: '特别长特别长特别长特别长特别长的耳机',
      //   goodsImg: 'http://img.ui.cn/data/file/7/7/6/992677.png',
      //   goodsPrice: 3,
      //   goodsNum: 3,
      // }, {
      //   goodsId: '4',
      //   goodsName: '特别长特别长特别长特别长特别长的耳机',
      //   goodsImg: 'http://img.ui.cn/data/file/7/7/6/992677.png',
      //   goodsPrice: 4,
      //   goodsNum: 4,
      // }, {
      //   goodsId: '5',
      //   goodsName: '特别长特别长特别长特别长特别长的耳机',
      //   goodsImg: 'http://img.ui.cn/data/file/7/7/6/992677.png',
      //   goodsPrice: 5,
      //   goodsNum: 5,
      // }, {
      //   goodsId: '6',
      //   goodsName: '特别长特别长特别长特别长特别长的耳机',
      //   goodsImg: 'http://img.ui.cn/data/file/7/7/6/992677.png',
      //   goodsPrice: 6,
      //   goodsNum: 6,
      // }, {
      //   goodsId: '7',
      //   goodsName: '特别长特别长特别长特别长特别长的耳机',
      //   goodsImg: 'http://img.ui.cn/data/file/7/7/6/992677.png',
      //   goodsPrice: 7,
      //   goodsNum: 7,
      // }, {
      //   goodsId: '8',
      //   goodsName: '特别长特别长特别长特别长特别长的耳机',
      //   goodsImg: 'http://img.ui.cn/data/file/7/7/6/992677.png',
      //   goodsPrice: 8,
      //   goodsNum: 8,
      // }, {
      //   goodsId: '9',
      //   goodsName: '特别长特别长特别长特别长特别长的耳机',
      //   goodsImg: 'http://img.ui.cn/data/file/7/7/6/992677.png',
      //   goodsPrice: 9,
      //   goodsNum: 9,
      // }, {
      //   goodsId: '10',
      //   goodsName: '特别长特别长特别长特别长特别长的耳机',
      //   goodsImg: 'http://img.ui.cn/data/file/7/7/6/992677.png',
      //   goodsPrice: 10,
      //   goodsNum: 10,
      // }
    ]
  },

  onLaunch: function () {

    var isDebug = false;//true调试状态使用本地服务器，非调试状态使用远程服务器
    if (!isDebug) {
      //远程域名
      wx.setStorageSync('domainName', "http://localhost:57682/api/Wx/")
    }
    else {
      //本地测试域名
      wx.setStorageSync('domainName', "http://192.168.0.11:55734/api/PG/")
    }



    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null
  },
  Ajax: function (url, type, method, data, callback) {
    // wx.showLoading({
    //   title: 'loading',
    //   duration:1000,
    // });

    var send = {
      token: wx.getStorageSync('token'),
      method: method,
      param: data,
    };
    wx.request({
      url: wx.getStorageSync('domainName') + url,
      data: send,
      method: type, // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      header: {
        'content-type': 'application/json' // 默认值
      }, // 设置请求的 header
      success: function (res) {
        // 发送请求成功执行的函数
        if (typeof callback === 'function') {
          callback(res.data);
        }
      },
      fail: function (res) {
      },
      complete: function () {
        // wx.hideLoading();
      }
    })
  }
})