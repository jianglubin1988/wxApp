//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: '查看启动日志',
    userInfo: {},
    location: {}
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },

  goCustomer: function(){
    wx.navigateTo({
      url: '../customer/customer'
    })
  },



  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
      console.log(userInfo);
    })
  },
  onShow: function(){
    console.log("on show");
    var _this = this;
    app.getLocation(function(location){
      _this.data.location = location;
      console.log(_this.data.location);
    })
    
  },

  onReady: function () {
    console.log("on ready");
  },

  onHide: function () {
    console.log("on hide");
  },

  onUnload: function () {
    console.log("on unload");
  },

  getPosition: function(){
    console.log(this.data.location);
  }


})
