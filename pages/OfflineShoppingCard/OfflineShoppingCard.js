// pages/OfflineShoppingCard/OfflineShoppingCard.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    lists: [],
    goodsid:'',
    iscart: false,
    cart: [], //数据
    count: 1,   //商品数量默认是1
    total: 0,    //总金额
    goodsCount: 0, //数量
    actions: [
      {
        name: '删除',
        color: '#fff',
        fontsize: '20',
        width: 80,
        icon: 'trash',
        background: '#06BEBD',
      }
    ],
    shoppingCardData: {
      title: "",
      lists: [],
      ShoppingList: [
       
      ]
    }
  },

  //添加消费记录扫描二维码 成功或失败
  toSweepOrder: function () {
    var that = this;
    var show;

    wx.scanCode({
      success: (res) => {
        //console.log('ss', res.result)
        //var oneList = res.result;
        // console.log('shuzu',getApp().aglobalDada.goodsList)
        // var arr = getApp().aglobalDada.goodsList

        // var a = {
        //   goodsId: '9',
        //   goodsName: '特别长特别长特别长特别长特别长的耳机',
        //   goodsImg: 'http://img.ui.cn/data/file/7/7/6/992677.png',
        //   goodsPrice: 9,
        //   goodsNum: 1,
        // }

        var a = {
          goodsId: '9',
          goodsName: '特别长特别长特别长特别长特别长的耳机',
          goodsImg: 'http://img.ui.cn/data/file/7/7/6/992677.png',
          goodsPrice: 9,
          goodsnumx: 1,
        } 

        this.setData({
          goodsid:'3233'
        })

        var list = getApp().globalData.goodsList
        
        var exist = getApp().globalData.goodsList.find(function (el) {
        
         // console.log('goodsIda', el.goodsId)
         // console.log('goodsIdb', getApp().globalData.goodsList[0].goodsId)
          for (let i = 0; i < getApp().globalData.goodsList.length; i++) {
           // console.log('qqq', el.goodsId === getApp().globalData.goodsList[i].goodsId)
            return el.goodsId === getApp().globalData.goodsList[i].goodsId
          }


          // console.log(el.goodsId == q)
          // return [el.shopgoodsId*1] == getApp().globalData.goodsList.map(function (item, index) { item.shopgoodsId * 1 })
        })

        //加数据
        //console.log('ex',exist)
        if (exist) {
           //console.log( getApp().globalData.goodsList,7777777)
          if (exist.num == exist.goodsnumx){
          } else {
            exist.goodsnumx = parseInt(exist.goodsnumx) + 1    
          }
        } else {
         
          //list.push(a)
      
         
         this.getaddgoods(this.data.goodsid)
         
        }

        //list.push(a)



        that.setData({
          'shoppingCardData.ShoppingList': list
        })


        that.getsumTotal()

        
        wx.showToast({
          title: '成功',
          icon: 'success',
          duration: 2000
        })
        // wx.navigateTo({
        //   url: '../QRCodePayment/QRCodePayment',

        // })

      },
      fail: (res) => {
        wx.showToast({
          title: '失败',
          icon: 'loading',
          duration: 2000
        })
      },
      complete: (res) => {
      }
    })
  },
  // ShoppingListDetails: function (e) {
  gotoGoodsDetails: function (e) {
    //console.log('eeee',e)
  //  console.log('1', e.currentTarget.dataset.barcode)
    wx.navigateTo({
      url: "../goodsDetails/goodsDetails?shopid=" + e.currentTarget.dataset.shopid + "&goodsnumx=" + e.currentTarget.dataset.goodsnumx + "&index=" + e.currentTarget.dataset.index + '&barcode=' + e.currentTarget.dataset.barcode,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(this.data.shoppingCardData.ShoppingList)
    // var arr = getApp().aglobalDada.goodsList

    //this.getsumTotal()
    // let that = this
    // that.setData({
    //   'shoppingCardData.ShoppingList': getApp().globalData.goodsList
    // })
    //console.log('options', options.shopName)
    this.setData({
      'shoppingCardData.title': options.shopName
      
    })
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
    // var that = this
    // that.setData({
    //   'shoppingCardData.ShoppingList': getApp().globalData.goodsList
    // })
    //console.log("总", this.data.shoppingCardData.ShoppingList)

    //that.getsumTotal()
    //console.log('[]',this.data.shoppingCardData.ShoppingList)

    let that = this
    getApp().globalData.goodsList
    this.setData({
      'shoppingCardData.ShoppingList': getApp().globalData.goodsList
    })
    // var cartItems = getApp().globalData.goodsList[that.data.getData.listindex]
    that.getsumTotal()  
    console.log("DDDD", getApp().globalData.goodsList)

    // console.log("DDDD", getApp().globalData.goodsList)
    // // console.log('11', this.data.getData)
    // // console.log('22', cartItems)

    // that.setData({
    //   'shoppingCardData.shopCommodity': cartItems
    // })


  },
  // ===================================================== 删除
  sss: function (e) {
    var that = this
    e.prevent;
    // console.log('2222', e.currentTarget.dataset.index)
    let curIndex = e.currentTarget.dataset.index
    this.data.shoppingCardData.ShoppingList.splice(curIndex, 1);
    this.setData({
      'shoppingCardData.ShoppingList': this.data.shoppingCardData.ShoppingList,
    })
    that.getsumTotal()
  },
  // gotoGoodsDetails: function () {
  //   console.log('跳页gotoGoodsDetails');

  // },
  // 防止 点击编辑数量时 跳转事件
  prevent: function (e) {
    e.prevent;
  },
  // 修改数量

  addNumber(e) {
    //  console.log("+",e)
    var that = this
    //  console.log('ww', e);
    let curNum = 'shoppingCardData.ShoppingList[' + e.currentTarget.dataset.index + '].goodsnumx';
    //  console.log(e.detail.value,)
    this.setData({
      [curNum]: e.detail.value,
    })

    console.log("XX总", getApp().globalData.goodsList)

    that.getsumTotal()


  },
  // 提交付款
  gotoRetailOrderConfirm: function () {
    //  console.log('222跳页')
    wx.navigateTo({
      url: '../OfflineOrderConfirm/OfflineOrderConfirm',
    })
  },
 


  getsumTotal: function () {
    var sum = 0
    var that = this
  
    if (this.data.shoppingCardData.ShoppingList) {
      for (var i = 0; i < that.data.shoppingCardData.ShoppingList.length; i++) {
        // console.log("第一次")
        // console.log("arr", that.data.shoppingCardData.ShoppingList[i].goodsPrice)
        // console.log("arr", that.data.shoppingCardData.ShoppingList[i].goodsNum)
        sum += that.data.shoppingCardData.ShoppingList[i].goodsPrice * that.data.shoppingCardData.ShoppingList[i].goodsnumx * 100
        
      }
    }


    //更新数据
    that.setData({
      total: sum,
    })
  },

  getaddgoods: function (shopId) {
    const that = this;
    app.Ajax(
      'Shop',
      'POST',
      'GetShopGoodsDetails',
      { barcode: shopId },
      function (json) {
       // console.log('shopIdjson', json);
        if (json.success) {
          json.data.goodsnumx=1
          // console.log('xxxgoodsnum', json.data)
          // that.setData({
          //   'shoppingCardData.ShoppingList': [json.data],
          //  // 'app.globalData.goodsList': [json.data]
          // })
          
          app.globalData.goodsList.push(json.data)
          that.setData({
            'shoppingCardData.ShoppingList': app.globalData.goodsList,
           
          })
          that.getsumTotal()
          console.log('oklist', app.globalData.goodsList)
          // console.log('getaddgoods', that.data.shoppingCardData.ShoppingList)
        } else {
          app.Toast('', 'none', 3000, json.msg.code);
  
        }
      }
    )
  },
})