
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
   
    nums:'',
    getData: {
      list: [{
        
      }],
      information: {
        consignee: '',
        phone: '',
        addr: '',
        relname: '',
        idcard: '',
      },
      subtotal: {

      },
      useer:{},
      ordertype:'1',
      shopId:''
    },
  },
  
  consignee:function(e){
    this.setData({
      "getData.information.consignee": e.detail.value,
    })
  },

  relname: function (e) {
    this.setData({
      "getData.information.relname": e.detail.value,
    })
  },
  idcard: function (e) {
    this.setData({
      "getData.information.idcard": e.detail.value,
    })
  },
  phone: function (e) {
    this.setData({
      "getData.information.phone": e.detail.value,
    })
  },
  addr: function (e) {
    this.setData({
      "getData.information.addr": e.detail.value,
    })
  },
 
  getmap: function (e) {
    console.log(e.detail.value)
    if (wx.chooseAddress) {
      let that = this
      wx.chooseAddress({
        success: function (res) {
          console.log('JSON', JSON.stringify(res))
          console.log('JSON.res', res.userName)

          that.setData({
            "getData.information.consignee": res.userName,
            "getData.information.relname": res.userName,
            "getData.information.phone": res.telNumber,
            "getData.information.addr": res.provinceName + res.cityName + res.countyName + res.detailInfo
          })
        },
        fail: function (err) {
          console.log(JSON.stringify(err))
        }
      })
    } else {
      console.log('当前微信版本不支持chooseAddress');
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('options', options)
    //console.log('goodslist', JSON.pares(options.goodsList))
    const params = JSON.parse(options.goodsList)
    //console.log('asdadsads', params)
    console.log('asdadsads', getApp().globalData.goodsList)

    this.getPriceInfo(options.price * 0.01)
    console.log(getApp().globalData.goodsList)

    console.log(111111)
    console.log('true',!!wx.getStorageSync('consignee'))

    if (!!wx.getStorageSync('consignee') ){
      console.log('222222222', wx.getStorageSync('consignee'))
      console.log('222222222', wx.getStorageSync('consignee'))


     // app.globalData.shopid = 1
      this.setData({
        'getData.list': getApp().globalData.goodsList,
        'getData.userId': wx.getStorageSync('userId'),
        'getData.shopid': getApp().globalData.shopid,
        "getData.information.consignee": wx.getStorageSync('consignee'),
        "getData.information.idcard": wx.getStorageSync('idcard'),
        "getData.information.addr": wx.getStorageSync('addr'),
        "getData.information.phone": wx.getStorageSync('phone'),
        "getData.information.relname": wx.getStorageSync('relname'),
      })
      console.log('ffff', this.data.getData.list)
    }
    
    
    
   
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  //
  formSubmit: function (e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
    var ccc = e.detail.value;
    // console.log(111, e.detail.value)
    console.log(1222, this.data.getData)
    // console.log(1222222222, e.detail.value)
    


    if (ccc.consignee && ccc.phone && ccc.relname && ccc.idcard && ccc.addr  ) {
      wx.setStorageSync('consignee', ccc.consignee)
      wx.setStorageSync('phone', ccc.phone)
      wx.setStorageSync('relname', ccc.relname)
      wx.setStorageSync('idcard', ccc.idcard)
      wx.setStorageSync('addr', ccc.addr)

      this.sendOut()
      console.log('aaaonShow', this.data.getData)  
    } else {
      // console.log("请添必填项")
      wx.showModal({
        title: "注意",
        content: "请输入完整信息",
        showCancel: false,
        confirmText: "确定"
      })
    }
    
    app.globalData.goodsList = []
    
  },


  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
   // console.log('onShow',this.data.getData)     
  
  },

  getPriceInfo: function (shopId) {
    const that = this;
    app.Ajax(
      'Order',
      'POST',
      'GetConfirmOrder',
      {
        price: shopId, ...app.globalData.goodsList},
      function (json) {
         console.log('shopIdjson', json);
        if (json.success) {
          that.setData({
            'getData.subtotal': json.data
          })
          console.log('getData', that.data.getData)
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


  sendOut: function (shopId) {
    const that = this;
    app.Ajax(
      'Order',
      'POST',
      'ConfirmOrder',
      {
        list: this.data.getData.list, 
        ...this.data.getData.information, 
        ...this.data.getData.subtotal, 
        ordertype: this.data.getData.ordertype,
        userId: this.data.getData.userId,
        shopid: this.data.getData.shopid,
      },
      function (json) {
        console.log('shopIdjson', json);
        if (json.success) {
          // that.setData({
          //   'All.list': json.data
          // })
          console.log('getData', that.data.getData)
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

})