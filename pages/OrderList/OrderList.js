// pages/OrderList/OrderList.js
var sliderWidth = 35; // 需要设置slider的宽度，用于计算中间位置


Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs: ["待付款", "已付款", "已发货","已完成"],
    activeIndex: 0,
    sliderOffset: 0,
    sliderLeft: 0,
    All: {
      // list: [{
      //   img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1539685745806&di=e57bfede68f06cca9d72b2df1005e7f3&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fpic%2F9%2F44%2Fb6869a0cc5_250_350.jpg',
      //   title: '第四次工业革命 作者：李登辉',
      //   money: '798.00'
      // }, {
      //   img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1539685745806&di=e57bfede68f06cca9d72b2df1005e7f3&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fpic%2F9%2F44%2Fb6869a0cc5_250_350.jpg',
      //   title: '第四次工业革命 作者：李登辉',
      //   money: '798.00'
      // }],
      logo: {
        log: 'http://llwell-wxapp.oss-cn-beijing.aliyuncs.com/O2OShop/copyright@3x.png'
      },
      cons:[{
        list: [{
          img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1539685745806&di=e57bfede68f06cca9d72b2df1005e7f3&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fpic%2F9%2F44%2Fb6869a0cc5_250_350.jpg',
          title: '第四次工业革命 作者：李登辉',
          money: '798.00'
        }, {
          img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1539685745806&di=e57bfede68f06cca9d72b2df1005e7f3&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fpic%2F9%2F44%2Fb6869a0cc5_250_350.jpg',
          title: '第四次工业革命 作者：李登辉',
          money: '798.00'
        }],
        text1: '蔚蓝书店北京机场店-零售订单',
        text2: '1',
        text3:'1596.00',
        text4: '查看详情',
        text5: '取消订单',
        text6: '立即付款',
      },
        {
          list: [{
            img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1539685745806&di=e57bfede68f06cca9d72b2df1005e7f3&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fpic%2F9%2F44%2Fb6869a0cc5_250_350.jpg',
            title: '第四次工业革命 作者：李登辉',
            money: '798.00'
          }, {
              img: 'http://img.ui.cn/data/file/7/7/6/992677.png',
            title: '第四次工业革命 作者：李登辉',
            money: '798.00'
          }],
          text1: '蔚蓝书店北京机场店-零售订单',
          text2: '1',
          text3: '1596.00',
          text4: '查看详情',
          text5: '取消订单',
          text6: '立即付款',
        }
      ]
    }   
  },
  details: function(){
    wx.navigateTo({
      url: '../OfflineOrderDetails/OfflineOrderDetails',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 选项卡
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          sliderLeft: (res.windowWidth / that.data.tabs.length - sliderWidth) / 2,
          sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex
        });
      }
    });
    // 选项卡
  },
    // 选项卡
  tabClick: function (e) {
    this.setData({
      sliderOffset: e.currentTarget.offsetLeft,
      activeIndex: e.currentTarget.id
    });
  },
    // 选项卡
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