//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    allData: {
      listShop: []
    },
    listShop: [],
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    imgUrls: [
      {
        id:'001',
        img: 'http://img.ui.cn/data/file/7/7/6/992677.png',
        name: '首都机场蔚蓝书店正式',
        name_text: '入驻流连O2O',
        time: '2018-8-30 19:00',
        icon_text1: '北京首都机场T3航站楼',
        icon_text2: 'AM8:00-PM8：00',
        icon_text3: '8012-44356',
        icon_text4: '仅支持零售',
       
      },
      {
        id: '002',
        img: 'http://img.ui.cn/data/file/7/7/6/992677.png',
        name: '首都机场蔚蓝书店正式',
        name_text: '入驻流连O2O',
        time: '2018-8-30 19:00',
        icon_text1: '北京首都机场T3航站楼',
        icon_text2: '北京首都机场T3航站楼',
        icon_text3: '北京首都机场T3航站楼',
        icon_text4: '北京首都机场T3航站楼',
      },
      {
        id: '003',
        img: 'http://img.ui.cn/data/file/7/7/6/992677.png',
        name: '首都机场蔚蓝书店正式',
        name_text: '入驻流连O2O',
        time: '2018-8-30 19:00',
        icon_text1: '北京首都机场T3航站楼',
        icon_text2: '北京首都机场T3航站楼',
        icon_text3: '北京首都机场T3航站楼',
        icon_text4: '北京首都机场T3航站楼',
      },
      {
        id: '004',
        img: 'http://img.ui.cn/data/file/7/7/6/992677.png',
        name: '首都机场蔚蓝书店正式',
        name_text: '入驻流连O2O',
        time: '2018-8-30 19:00',
        icon_text1: '仅支持零售',
        icon_text1: '北京首都机场T3航站楼',
        icon_text2: '北京首都机场T3航站楼',
        icon_text3: '北京首都机场T3航站楼',
        icon_text4: '北京首都机场T3航站楼',
      
      }
    ],
    swiperIndex: 0
  },
  swiperChange(e) {
    this.setData({
      swiperIndex: e.detail.current
    })
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    // if (app.globalData.userInfo) {
    //   this.setData({
    //     userInfo: app.globalData.userInfo,
    //     hasUserInfo: true
    //   })
    // } else if (this.data.canIUse){
    //   // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
    //   // 所以此处加入 callback 以防止这种情况
    //   app.userInfoReadyCallback = res => {
    //     this.setData({
    //       userInfo: res.userInfo,
    //       hasUserInfo: true
    //     })
    //   }
    // } else {
    //   // 在没有 open-type=getUserInfo 版本的兼容处理
    //   wx.getUserInfo({
    //     success: res => {
    //       app.globalData.userInfo = res.userInfo
    //       this.setData({
    //         userInfo: res.userInfo,
    //         hasUserInfo: true
    //       })
    //     }
    //   })
    // }
    this.getShopShow()
  },
  getShopShow: function () {
    const that = this;
    // 方法组名称为：User（代购用户），不是系统通用用户Users
    app.Ajax(
      'Home',
      'POST',
      'GetHomeShopList',
      {},
      function (json) {
         console.log('json..', json)
        if (json.success) {
          // that.imageLoad();
          that.setData({
            listShop: json.data
          })
          console.log('data', that.data.listShop)
        } else {
          app.Toast('', 'none', 3000, json.msg.code);
          // wx.showToast({
          //   title: json.msg.msg,
          //   icon: 'none',
          //   duration: 2500
          // });
        }
      }
    )
  },
  // getUserInfo: function(e) {
  //   console.log(e)
  //   app.globalData.userInfo = e.detail.userInfo
  //   this.setData({
  //     userInfo: e.detail.userInfo,
  //     hasUserInfo: true
  //   })
  // },

  next: function(e){
    console.log(e.currentTarget.dataset.shopid)
    wx.navigateTo({
      url: '../indexDetails/indexDetails?shopid=' + e.currentTarget.dataset.shopid,
    })
  }
})
