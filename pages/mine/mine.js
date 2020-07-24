// pages/mine/mine.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    avatarurl:'',
    username:'',
    dataList:[
      {
        id:0,
        content:'在别的游戏里，像我这么帅的一般都是主角哦！',
        time:new Date().toLocaleDateString(),
        zanurl:'/images/zan.png',
        num:11,
      },{
        id:1,
        content:'唔，大部分人都会打飞机，这对飞机来说很不公平！',
        time:new Date().toLocaleDateString(),
        zanurl:'/images/zan.png',
        num:333,
      },{
        id:2,
        content:'是的，只要998，就能让你爽到不能呼吸。',
        time:new Date().toLocaleDateString(),
        zanurl:'/images/zan.png',
        num:1,
      },{
        id:3,
        content:'时间 不在于你拥有多少 而在于你 怎样使用',
        time:new Date().toLocaleDateString(),
        zanurl:'/images/zan.png',
        num:222,
      }
    ]
  },
  loginout(){
    wx.navigateTo({
      url: '/pages/login/login',
    })
  },
  delete:function(e){
    let that = this;
    console.log(e)
    // console.log(ind)
    console.log(e.currentTarget.dataset.index);
    let index = e.currentTarget.dataset.index;
    let arr = that.data.dataList;
    // console.log(arr)
   
    wx.showModal({
      title: '',
      content: '是否确认删除',
      success (res) {
        if (res.confirm) {
          console.log('用户点击确定')
          arr.splice(index,1)
          console.log(arr,'arr')
          that.setData({
            dataList:arr
          })
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(getApp().globalData.userInfo)
    let avatar = getApp().globalData.userInfo.avatarUrl;
    let name =  getApp().globalData.userInfo.nickName;
    this.setData({
      username:name,
      avatarurl:avatar
    })
    console.log( this.data.username,this.data.avatarurl)
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

  }
})