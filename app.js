//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: { 
    user:{},//后台返回用户全部信息
    userInfo: null, //微信获取用户信息
    publicList:[{
      headimg:'/images/add1.png',
      username:'哆啦A梦',
      time:'2020-7-11 22:22:11',
      content:'只有我才能带领我们走向胜利。 听候您的吩咐，主人。 我不是英雄，只是一个拿锤子的班德尔人。 ',
      zanurl:'/images/zan.png',
      num:11,
      islike:0
    },{
      headimg:'/images/add1.png',
      username:'疾风剑豪',
      time:'2020-7-11 22:22:11',
      content:'叫我国王，叫我恶魔，河水会遗忘那些，已经被淹没的名字。 我来让你见识一下真正的魔法吧，召唤师。一日为班德尔炮手，终生为班德尔炮手！  ',
      zanurl:'/images/zan.png',
      num:22,
      islike:1
    }]  //存放树洞广场的list
  }
})