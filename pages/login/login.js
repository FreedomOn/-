Page({
  data:{
      username:'',
      password:'',
      canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  onLoad(){
     // 查看是否授权
     wx.getSetting({
      success (res){
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          wx.getUserInfo({
            success: function(res) {
              getApp().globalData.userInfo = res.userInfo;
              console.log(res.userInfo)
            }
          })
        }
      }
    })
  },
  toRegister:function(e){
    wx.navigateTo({
      url: '/pages/register/register',
    })
  },
  // 获取用户信息  授权登录
  bindGetUserInfo(e){
    console.log('授权登录')
    // console.log(e)
    console.log(e.detail.userInfo)
    
    if(e.detail.userInfo == undefined){
    }else{
      wx.switchTab({
        url: '/pages/square/square',
      })
    }
    wx.login({
      success:(res)=>{
        console.log(res)
        //获取登录的临时凭证
        let code = res.code;
        // 调用后端获取微信的session-key
      }
    })
  },
  userInput:function(e){
    this.data.username = e.detail.value;
  },
  psdInput:function(e){
    this.data.password = e.detail.value;
  },
  login:function(){
      console.log(this.data.username)
      console.log(this.data.password)
      wx.switchTab({
        url: '/pages/square/square',
      })
  }
})