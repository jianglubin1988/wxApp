// customer.js

var core = require('../../utils/core.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    mobile: '13940598389',
    code: '0'
  },

  goBack: function(){
    wx.navigateBack();
  },

  getCode: function(){
    console.log(core.baseUrl);
    this.setData({
      code: core.baseUrl
    })

    core.post('/admin/register/checkUsername',{'username':'13940598389'},{
      onSuccess: function(result){
        console.log('on success');
      },
      onFail: function(result){
        console.log('on fail');
      },
      onComplete: function(result){
        console.log('on complete');
      }
    })
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