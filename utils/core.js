var core = {
  baseUrl: 'http://kpdh.kop360.com',

  post: function(httpUrl, params, options){
    options.onSuccess = function(result){};
    options.onFail = function(result){};
    options.onComplete = function (result) {};

    wx.request({
      url: core.baseUrl + httpUrl,
      data: params,
      header: {
        'content-type': 'application/json'
      },
      method: 'post',
      success: function(res){
        typeof options.onSuccess == 'function' && options.onSuccess(res);
      },
      fail: function(res){
        typeof options.onFail == 'function' && options.onFail(res);
      },
      complete: function (res) {
        typeof options.onComplete == 'function' && options.onComplete(res);
      }
    })
  }
}

if(module){
  module.exports = core;
}