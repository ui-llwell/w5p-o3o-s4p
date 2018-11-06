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
    getData:{
      imglog:'http://llwell-wxapp.oss-cn-beijing.aliyuncs.com/O2OShop/copyright@3x.png',
      unpayData:{
         orderList:[
          {
          id:0,
          payType:0,
          orderTtle:'机场书店',
          orderNum:'7863478YTJU',
          orderType: 0, //0 -零售 1-o2o
          totalNum:'2',
          totalPrice:'4',
          freight:'9',
          details:'查看详情',
          cancelL:'取消订单',
          payment:'立即付款',
          logistics: '查看物流',
          goodsList:[{
            goodsSrc:'http://img.ui.cn/data/file/7/7/6/992677.png',
            goodsName:'丑娃娃身丑娃娃身上的丑娃娃身丑娃娃身上的还是丑娃娃身上的还是丑娃娃身上的还是丑娃娃身上的还是丑娃娃身上的还是丑娃娃身上的还是上的还是丑娃娃身丑娃娃身上的还是丑娃娃身上的还是丑娃娃身上的还是丑娃娃身上的还是丑娃娃身上的还是丑娃娃身上的还是上的还是还是丑娃娃身上的还是丑娃娃身上的还是丑娃娃身上的还是丑娃娃身上的还是丑娃娃身上的还是上的还是',
            goodsPrice:'123',
            goodsNum: '1'
          },{
              goodsSrc: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1539685745806&di=e57bfede68f06cca9d72b2df1005e7f3&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fpic%2F9%2F44%2Fb6869a0cc5_250_350.jpg',
              goodsName: '丑娃娃身上的还是',
              goodsPrice: '123',
              goodsNum: '1'
          }],
        },{
            id: 1,
            payType: 0,
            orderTtle: '机场书店2',
            orderNum: '786df3478YTJU',
            orderType: 1, //0 -零售 1-o2o
            totalNum: '3',
            totalPrice: '6',
            freight: '9',
            details: '查看详情',
            cancelL: '取消订单',
            payment: '立即付款',
            logistics: '查看物流',
            goodsList: [{
              goodsSrc: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1539685745806&di=e57bfede68f06cca9d72b2df1005e7f3&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fpic%2F9%2F44%2Fb6869a0cc5_250_350.jpg',
              goodsName: '丑娃娃身上的还是2',
              goodsPrice: '123345',
              goodsNum: '1'
            }, {
                goodsSrc: 'http://img.ui.cn/data/file/7/7/6/992677.png',
              goodsName: '丑娃娃身上的还是2',
              goodsPrice: '123788',
              goodsNum: '1'
            }],
        }
        ]
      },
      payData:{
        orderList: [
          {
          id: 0,
          payType: 0,
          orderTtle: '机场书店',
          orderNum: '7863478YTJU',
          orderType: 0, //0 -零售 1-o2o
          totalNum: '2',
          totalPrice: '4',
          freight: '9',
          details: '查看详情',
          cancelL: '取消订单',
          payment: '立即付款',
          logistics: '查看物流',
          goodsList: [{
            goodsSrc: 'http://img.ui.cn/data/file/7/7/6/992677.png',
            goodsName: '丑娃娃身上的还是',
            goodsPrice: '123',
            sale: '申请售后',
            goodsNum: '1'
          }, {
            goodsSrc: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1539685745806&di=e57bfede68f06cca9d72b2df1005e7f3&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fpic%2F9%2F44%2Fb6869a0cc5_250_350.jpg',
            goodsName: '丑娃娃身上的还是',
            goodsPrice: '123',
            sale: '申请售后',
            goodsNum: '1'
          }],
        }, {
          id: 1,
          payType: 0,
          orderTtle: '机场书店2',
          orderNum: '786df3478YTJU',
          orderType: 1, //0 -零售 1-o2o
          totalNum: '3',
          totalPrice: '6',
          freight: '9',
          details: '查看详情',
          cancelL: '取消订单',
          payment: '立即付款',
          logistics: '查看物流',
          goodsList: [{
            goodsSrc: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1539685745806&di=e57bfede68f06cca9d72b2df1005e7f3&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fpic%2F9%2F44%2Fb6869a0cc5_250_350.jpg',
            goodsName: '丑娃娃身上的还是2',
            goodsPrice: '123345',
            sale: '申请售后',
            goodsNum: '1'
          }, {
            goodsSrc: 'http://img.ui.cn/data/file/7/7/6/992677.png',
            goodsName: '丑娃娃身上的还是2',
            goodsPrice: '123788',
            sale: '申请售后',
            goodsNum: '1'
          }],
        }
        ]
      },
      deliverGoods: {
        orderList: [ 
          {
          id: 1,
          payType: 0,
          orderTtle: '机场书店2',
          orderNum: '786df3478YTJU',
          orderType: 1, //0 -零售 1-o2o
          totalNum: '3',
          totalPrice: '6',
          freight: '9',
          details: '查看详情',
          cancelL: '取消订单',
          payment: '立即付款',
          logistics: '查看物流',
          goodsList: [{
            goodsSrc: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1539685745806&di=e57bfede68f06cca9d72b2df1005e7f3&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fpic%2F9%2F44%2Fb6869a0cc5_250_350.jpg',
            goodsName: '丑娃娃身上的还是1',
            goodsPrice: '123345',
            sale: '申请售后',
            goodsNum: '1'
          }, {
            goodsSrc: 'http://img.ui.cn/data/file/7/7/6/992677.png',
            goodsName: '丑娃娃身上的还是2',
            goodsPrice: '123788',
            sale: '申请售后',
            goodsNum: '1'
          }],
        }
        ]
      },
      shipData:{},
      finishData:{
        orderList: [
          {
            id: 0,
            payType: 0,
            orderTtle: '机场书店',
            orderNum: '7863478YTJU',
            orderType: 0, //0 -零售 1-o2o
            totalNum: '2',
            totalPrice: '4',
            freight: '9',
            details: '查看详情',
            cancelL: '取消订单',
            payment: '立即付款',
            logistics: '查看物流',
            goodsList: [{
              goodsSrc: 'http://img.ui.cn/data/file/7/7/6/992677.png',
              goodsName: '丑娃娃身上的还是',
              goodsPrice: '123',
              sale: '申请售后',
              goodsNum: '1'
            }, {
              goodsSrc: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1539685745806&di=e57bfede68f06cca9d72b2df1005e7f3&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fpic%2F9%2F44%2Fb6869a0cc5_250_350.jpg',
              goodsName: '丑娃娃身上的还是',
              goodsPrice: '123',
              sale: '申请售后',
              goodsNum: '1'
            }],
          }, {
            id: 1,
            payType: 0,
            orderTtle: '机场书店2',
            orderNum: '786df3478YTJU',
            orderType: 1, //0 -零售 1-o2o
            totalNum: '3',
            totalPrice: '6',
            freight: '9',
            details: '查看详情',
            cancelL: '取消订单',
            payment: '立即付款',
            logistics: '查看物流',
            goodsList: [{
              goodsSrc: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1539685745806&di=e57bfede68f06cca9d72b2df1005e7f3&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fpic%2F9%2F44%2Fb6869a0cc5_250_350.jpg',
              goodsName: '丑娃娃身上的还是2',
              goodsPrice: '123345',
              sale: '申请售后',
              goodsNum: '1'
            }, {
              goodsSrc: 'http://img.ui.cn/data/file/7/7/6/992677.png',
              goodsName: '丑娃娃身上的还是2',
              goodsPrice: '123788',
              sale: '申请售后',
              goodsNum: '1'
            }],
          }
        ]
      }
    },
    
  },
  logistics:function(){
    wx.navigateTo({
      url: '../OfflineOrderLogistics/OfflineOrderLogistics',
    })
  },
  cancel: function(){
    console.log('取消订单')
  },
  details: function(){
    wx.navigateTo({
      url: '../OfflineOrderDetails/OfflineOrderDetails',
    })
  },
  retail: function(){
    wx.navigateTo({
      url: '../RetailOrderDetails/RetailOrderDetails',
    })
  },

  sale: function(){
    wx.navigateTo({
      url: '../mineAfterSale/mineAfterSale',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 选项卡
    //console.log(options)
    this.setData({
      activeIndex: options.num
    })
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
  onShow: function (options) {
    
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