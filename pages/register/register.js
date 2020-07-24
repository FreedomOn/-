// pages/register/register.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username:'',
    phoneNumber:'',
    password:'',
    checkPsd:''
  },
  usernameInput:function(e){
    console.log(e.detail.value)
    this.data.username = e.detail.value;
  },
  phoneNumberInput:function(e){
    this.data.phoneNumber = e.detail.value;
  },
  passwordInput:function(e){
    this.data.password = e.detail.value;
  },
  checkPsdInput:function(e){
    this.data.checkPsd = e.detail.value;
  },
  tologin:function(){
    wx.navigateTo({
      url: '/pages/login/login',
    })
  },
  register:function(e){
    let reg = /^1(3|4|5|6|7|8|9)\d{9}$/;
    let that = this;
    if(this.data.username == ""){
      wx.showModal({
        title: '提示',
        content: '请输入用户名',
        showCancel:false,
      })
    }else if(this.data.phoneNumber == ""){
      wx.showModal({
        title: '提示',
        content: '请输入手机号',
        showCancel:false,
      })
    }else if(this.data.phoneNumber.length != 11){
      wx.showModal({
        title: '提示',
        content: '手机号长度有误，请重新输入',
        showCancel:false,
      })
    }else if(!reg.test(that.data.phoneNumber)){
      wx.showModal({
        title: '提示',
        content: '手机格式不正确，请重新输入',
        showCancel:false,
      })
    }else if(this.data.password == ""){
      wx.showModal({
        title: '提示',
        content: '请输入密码',
        showCancel:false,
      })
    }else if(this.data.checkPsd == ""){
      wx.showModal({
        title: '提示',
        content: '请确认密码',
        showCancel:false,
      })
    }else if(this.data.password !==this.data.checkPsd){
      wx.showModal({
        title: '提示',
        content: '两次密码输入不一致',
        showCancel:false,
      })
    }else{
      wx.showModal({
        title: '恭喜',
        content: '注册成功',
        showCancel:false,
        // 无论成功或失败都会执行 是先显示提示再执行
        complete:function(res){
            wx.reLaunch({
              // 注册成功之后跳转到登录页面
              url: '/pages/login/login',
            })
        }
      });
      
      console.log('success')
    }
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

  }
})