Page({
  data: {
    actions: [
      {
        name: '删除',
        color: '#fff',
        fontsize: '20',
        width: 80,
        icon: 'trash',
        background: '#2d8ff5'
      }
    ],
    getData:{
      cartTotal:'320',
      ShoppingList:[{
        goodsId: '1',
        goodsName: '耳机',
        goodsImg: 'http://img.ui.cn/data/file/7/7/6/992677.png',
        goodsPrice: 30,
        goodsNum: 2,
        checked:false,
        edit: false
      }, {
          goodsId: '2',
          goodsName: '耳机',
          goodsImg: 'http://img.ui.cn/data/file/7/7/6/992677.png',
          goodsPrice: 30,
          goodsNum: 2,
          checked: false,
          edit: false
        }, {
          goodsId: '2',
          goodsName: '耳机',
          goodsImg: 'http://img.ui.cn/data/file/7/7/6/992677.png',
          goodsPrice: 30,
          goodsNum: 2,
          checked: false,
          edit: false
        }, {
          goodsId: '2',
          goodsName: '耳机',
          goodsImg: 'http://img.ui.cn/data/file/7/7/6/992677.png',
          goodsPrice: 30,
          goodsNum: 2,
          checked: false,
          edit: false
        }, {
          goodsId: '2',
          goodsName: '耳机',
          goodsImg: 'http://img.ui.cn/data/file/7/7/6/992677.png',
          goodsPrice: 30,
          goodsNum: 2,
          checked: false,
          edit: false
        }, {
          goodsId: '2',
          goodsName: '耳机',
          goodsImg: 'http://img.ui.cn/data/file/7/7/6/992677.png',
          goodsPrice: 30,
          goodsNum: 2,
          checked: false,
          edit: false
        }, {
          goodsId: '2',
          goodsName: '耳机',
          goodsImg: 'http://img.ui.cn/data/file/7/7/6/992677.png',
          goodsPrice: 30,
          goodsNum: 2,
          checked: false,
          edit: false
        }]
    },

  },
  onLoad: function (options) {
    // 生命周期函数--监听页面加载
    // 调购物车接口
  },
// =====================================================
  gotoGoodsDetails:function(){
    console.log('跳页')
  },
  // 防止 点击编辑数量时 跳转事件
  prevent:function(e){
    e.prevent;
  },
  // 编辑单条数量区显示
  editNum:function(e){
    console.log('e',e)
    let curIndex = 'getData.ShoppingList[' + e.currentTarget.dataset.index + '].edit';
    this.setData({
      [curIndex]: !e.currentTarget.dataset.edit
    })
    // console.log(curIndex)
  },
  // 完成编辑单条数量区隐藏
  editfinish:function(e){
    let curIndex = 'getData.ShoppingList[' + e.currentTarget.dataset.index + '].edit';
    console.log('wdas',curIndex)
    console.log('wdas', e)
    this.setData({
      [curIndex]: !e.currentTarget.dataset.edit
    })
  },
  // 修改数量
  addNumber(e) {
    console.log('ww',e);
    let curNum = 'getData.ShoppingList[' + e.currentTarget.dataset.index + '].goodsNum';
    this.setData({
      [curNum]: e.detail.value,
    })
  },
  // 提交付款
  gotoOrderConfirmation:function(){
    console.log('跳页')
  },
})
