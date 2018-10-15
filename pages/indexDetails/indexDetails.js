// pages/indexDetails/indexDetails.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperCurrent: 0,
    indicatorDots: true,
    autoplay: false,
    interval: 2000,
    duration: 1000,
    circular: false,
    beforeColor: "white",//指示点颜色
    afterColor: "coral",//当前选中的指示点颜色
    previousmargin: '20px',//前边距
    nextmargin: '20px',//后边距
    All: {
      list:{
        img: 'http://img.ui.cn/data/file/7/7/6/992677.png',
        logo:'http://imgsrc.baidu.com/forum/w=580/sign=5729249949540923aa696376a259d1dc/ca816763f6246b60d6ab68ceebf81a4c500fa268.jpg',
        text1: '北京首都机场T3蔚蓝书店',
        text2: '北京市首都机场T3航站楼21-23',
        text3: '8012-44356',
        text4: '北京首都机场蔚蓝书店正式入驻流连O2O',
        text5: '		从即日起，蔚蓝书店北京首都机场T3航站楼店正式入驻流连O2O啦！各位流连会员可凭手中APP于店内进行消费，更可享受多种折扣服务！流连会员积分可以在店内享受与该店会员卡相同等级的折扣，详情请留意店内公告。流连O2O期待为您服务！',
        text6: '商家留言',
        text7: '本店营业时间为：24小时 全年无休',
        text8: '暑期阅读促销火热进行中，总价满200减80。流连会员更可凭积分兑换折扣或免费书籍哦',
        text9: '新上架商品'
      },
      arr: [{
        images:'http://img.ui.cn/data/file/7/7/6/992677.png',
        text1:'1三小时免费体验阅读时间',
        text2:'￥10.00'
        }, {
          images: 'http://img.ui.cn/data/file/7/7/6/992677.png',
          text1: '2三小时免费体验阅读时间',
          text2: '￥20.00'
        }, {
          images: 'http://img.ui.cn/data/file/7/7/6/992677.png',
          text1: '3三小时免费体验阅读时间',
          text2: '￥30.00'
        }]
    },
  },
  
  //轮播图的切换事件
  swiperChange: function (e) {
    console.log(e.detail.current);
    this.setData({
      swiperCurrent: e.detail.current //获取当前轮播图片的下标
    })
  },
  //滑动图片切换
  chuangEvent: function (e) {
    this.setData({
      swiperCurrent: e.currentTarget.id
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

  },
  
})