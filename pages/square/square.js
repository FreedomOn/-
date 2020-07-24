// pages/square/square.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    zanimg:'/images/zan1.png',
    dataList:[]
  },
  changeImg:function(e){
      let that = this;
      console.log(e.target.dataset.index)
      let index = e.target.dataset.index
      let arr = that.data.dataList;
      console.log(arr)
      if(arr[index].islike == 1){
        // wx.showModal({
        //   title:'提示',
        //   content:'已经点过赞了哦',
        //   showCancel:false
        // })
        arr[index].num--;
        arr[index].islike = 0
        that.setData({
          dataList:arr
        })

      }else{
        arr[index].num++;
        arr[index].islike = 1
        that.setData({
          dataList:arr
        })
      }
      
      // arr[index].zanurl = that.data.zanimg
      

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      dataList:getApp().globalData.publicList
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
    this.setData({
      dataList:getApp().globalData.publicList
    })
    console.log(getApp().globalData.publicList,'广场11')
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