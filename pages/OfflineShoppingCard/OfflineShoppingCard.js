// pages/OfflineShoppingCard/OfflineShoppingCard.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    lists: [],
    a:{
      goodsId: '9',
      goodsName: '特别长特别长特别长特别长特别长的耳机',
      goodsImg: 'http://img.ui.cn/data/file/7/7/6/992677.png',
      goodsPrice: 9,
      goodsNum: 1,
    },
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
      title: "首都机场零售店",
      lists:[],
      ShoppingList: [
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
        // }, 
        // {
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
        
        var a = {
          goodsId: '9',
          goodsName: '特别长特别长特别长特别长特别长的耳机',
          goodsImg: 'http://img.ui.cn/data/file/7/7/6/992677.png',
          goodsPrice: 9,
          goodsNum: 1,
        }
       
        // var lists = this.data.lists;
        // var newData = { n1: 1, n2: 2 };
        // lists.push(newData);//实质是添加lists数组内容，使for循环多一次
        // this.setData({
        //   lists: lists,
        // })  
        // that.data.shoppingCardData.lists = arr
        
        // var list = getApp().globalData.goodsList
        // console.log(list)
        // list.push(a)
        // that.setData({
        //   'shoppingCardData.ShoppingList': list
        // })
        
        var list = getApp().globalData.goodsList
        console.log(list)
        console.log('a', that.data.a)
        list.push(a)
        that.setData({
          'shoppingCardData.ShoppingList': list
        })

        // for (var i in list) {
        //   // 列表中某一项item的id == 点击事件传递过来的id。则是被点击的项
        //   if (list[i].goodsId == list[i].goodsId) {
        //     // 给goodsList数组的当前项添加count元素，值为1，用于记录添加到购物车的数量
        //     this.data.a.count = 1;
        //     //console.log(this.data.goodslist[i].count)
        //     // 获取购物车的缓存数组（没有数据，则赋予一个空数组）
        //     //var arr = wx.getStorageSync('cart') || [];
        //     var arr = this.data.shoppingCardData.ShoppingList
        //     //wx.setStorageSync('token', json.data.token);
        //     // 如果购物车有数据
        //     if (arr.length > 0) {
        //       // 遍历购物车数组
        //       for (var j in arr) {
        //         // 判断购物车内的item的id，和事件传递过来的id，是否相等
        //         // console.log(arr[j].id)
        //         if (arr[j].goodsId == list[i].goodsId) {
        //           // 相等的话，给count+1（即再次添加入购物车，数量+1）
        //           arr[j].count = arr[j].count + 1;
        //           // 最后，把购物车数据，存放入缓存（此处不用再给购物车数组push元素进去，因为这个是购物车有的，直接更新当前数组即可）
        //           return;
        //         }
        //       }
        //       // 遍历完购物车后，没有对应的item项，把goodslist的当前项放入购物车数组
        //       // var a = arr.push(this.data.list[i]);
        //       var a = list.push(that.data.a)
        //     }
        //     // 购物车没有数据，把item项push放入当前数据（第一次存放时）
        //     else {
        //       //arr.push(list);
        //       list.push(that.data.a)
        //       that.setData({
        //         'shoppingCardData.ShoppingList': list
        //       })
        //     }
        //   }
        // }






        //console.log('add', this.data.shoppingCardData.ShoppingList)






        // var arr = getApp().aglobalDada.goodsList
        // getApp().aglobalDada.goodsList.push(a)
        // console.log('ok', getApp().aglobalDada.goodsList)
        // that.setData({
        //   ShoppingList: getApp().aglobalDada.goodsList.push(a)
        // })




        // that.data.shoppingCardData.lists = arr
        // console.log('ok', that.data.shoppingCardData.lists)
        // this.show = "结果:" + res.result + "二维码类型:" + res.scanType + "字符集:" + res.charSet + "路径:" + res.path;
        // that.setData({
        //   show: this.show
        // })
        // wx.showToast({
        //   title: '成功',
        //   icon: 'success',
        //   duration: 2000
        // })
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

  ShoppingListDetails: function(e){
    //console.log(e.detail.current)
    console.log('id',e.currentTarget.dataset.shopid);
    //console.log(getApp().aglobalDada.goodsList)
    console.log('num',e.currentTarget.dataset.goodsnum);
    console.log('e', e.currentTarget);
    //console.log(e)
    wx.navigateTo({
      //url: '../goodsDetails/goodsDetails?goodsNum=' + e.currentTarget.dataset.goodsNum,
      url: "../goodsDetails/goodsDetails?shopid=" + e.currentTarget.dataset.shopid + "&goodsnum=" + e.currentTarget.dataset.goodsnum + "&index=" + e.currentTarget.dataset.index,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(this.data.shoppingCardData.ShoppingList)
    // var arr = getApp().aglobalDada.goodsList
    
   
    
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
    var that = this
    that.setData({
      'shoppingCardData.ShoppingList': getApp().globalData.goodsList
    })
    //console.log('okok', this.data.shoppingCardData.ShoppingList)
    // var arr = this.data.shoppingCardData.ShoppingList
    // //console.log(arr)
    // if (arr.length > 0) {
    //   for (var i in arr) {
    //     console.log('for',arr[i])
    //     that.data.total += Number(arr[i].goodsPrice) * Number(arr[i].goodsNum) * 100
    //   }
    //   // 更新数据
    //   this.setData({
    //     total: that.data.total,
    //   });
    //   console.log('money',that.data.total,)
    // }

    that.getsumTotal()


    // for (var i in arr) {
    //   that.data.total += Number(arr[i].price) * Number(arr[i].count);
    //   that.data.goodsCount += Number(arr[i].count);
    // }
    // for (var i in arr) {
    //   console.log('i' ,arr[i])
    //   // that.data.total += Number(arr[i].price) * Number(arr[i].count);
    //   // that.data.goodsCount += Number(arr[i].count);
    //   //that.data.total += (arr[i].goodsNum) * (arr[i].goodsPrice)

    //   that.data.total += Number(arr[i].goodsPrice) * Number(arr[i].goodsNum);
    //   //that.data.goodsCount += Number(arr[i].count);
    //   console.log('all', that.data.total)
    // }




  },
  // =====================================================
  sss: function (e) {
    e.prevent;
    //console.log('2222', e.currentTarget.dataset.index)
    let curIndex = e.currentTarget.dataset.index
    this.data.shoppingCardData.ShoppingList.splice(curIndex, 1);
    this.setData({
      'shoppingCardData.ShoppingList': this.data.shoppingCardData.ShoppingList,
    })
  },
  gotoGoodsDetails: function () {
    console.log('跳页gotoGoodsDetails');
    
  },
  // 防止 点击编辑数量时 跳转事件
  prevent: function (e) {
    e.prevent;
  },
  // 修改数量

  addNumber(e) {
    console.log("+",e)
    var that = this
    console.log('ww', e);
    let curNum = 'shoppingCardData.ShoppingList[' + e.currentTarget.dataset.index + '].goodsNum';
    console.log(e.detail.value,)
    this.setData({
      [curNum]: e.detail.value,
    })
    
    that.getsumTotal()
    // var arr = this.data.shoppingCardData.ShoppingList
    // //console.log(arr)
    // if (arr.length > 0) {
    //   for (var i in arr) {
    //     console.log('for', arr[i])
    //     that.data.total += Number(arr[i].goodsPrice) * Number(arr[i].goodsNum) * 100
    //   }
    //   // 更新数据
    //   this.setData({
    //     total: that.data.total,
    //   });
    //   console.log('money', that.data.total, )
    // }

    


  },
  // 提交付款
  gotoRetailOrderConfirm: function () {
    console.log('跳页')
    wx.navigateTo({
      url: '../OfflineOrderConfirm/OfflineOrderConfirm',
    })
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
  getsumTotal: function () {
    var that = this
    var arr = this.data.shoppingCardData.ShoppingList

    for (var i = 0; i < arr.length; i++) {
      that.data.total += Number(arr[i].goodsPrice) * Number(arr[i].goodsNum) * 100

    }
    //更新数据
    that.setData({
      total: that.data.total,
    })
  }
})