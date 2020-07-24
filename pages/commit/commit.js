// pages/commit/commit.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    textarea:'',
  },
  textarerInput:function(e){
    this.setData({
      textarea:e.detail.value
    })
    // this.data.textarea = e.detail.value;
  },
  clearInputEvent:function(){
    this.setData({
      textarea:''
    })
  },
  send:function(){
    let that = this;
    let avatar = getApp().globalData.userInfo.avatarUrl;
    let name =  getApp().globalData.userInfo.nickName;
    let time = new Date().toLocaleDateString()
    let commitobj = {
      headimg:avatar,
      username:name,
      time:time,
      content:that.data.textarea,
      zanurl:'/images/zan.png',
      num:0,
      islike:0
    }
    if(that.data.textarea == null){
      wx.showModal({
        title: '提示',
        content: '请输入内容哦',
        showCancel:false,
      })
    }else{
      getApp().globalData.publicList.unshift(commitobj)
      wx.showLoading({
        title: '加载中',
      })
      console.log(that.data.textarea)
      setTimeout(()=>{
        wx.switchTab({
          url: '/pages/square/square',
        })
        wx.hideLoading()
      },1000)
    }
  
   

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      textarea:''
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // this.setData({
    //   textarea:''
    // })
    // this.clearInputEvent()
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log('显示' ,this.data.textarea)
    // this.clearInputEvent()
    this.setData({
      textarea:''
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log('隐藏')
    this.setData({
      extarea:''
    })
   
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