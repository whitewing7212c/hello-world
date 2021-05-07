// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    var thats = this;
    // 登录
    wx.login({
      success: function (res) {
        wx.request({
          url:"https://a-one.jianshankeji.com:8000/api/WeiXin/WXLogin",
          data: {
            code: res.code
          },
          success: function (res) {
            thats.globalData.openid = res.data.result.openId;
            thats.globalData.session_key = res.data.result.sessionId;
            thats.globalData.hasAuthorityBrowse=res.data.result.hasAuthorityBrowse;
            if (res.data.result.success){
              wx.setStorageSync("session_key", res.data.result.sessionId);
              thats.getUserInfoReq();
            }else{
              thats.getUserInfoReq();
            }
          }          
        })
      }
    })
  },
  userlogin:function(callback){
    var thats = this;
    // 登录
    wx.login({
      success: function (res) {
        wx.request({
          url:"https://a-one.jianshankeji.com:8000/api/WeiXin/WXLogin",
          data: {
            code: res.code
          },
          success: function (res) {
            thats.globalData.openid = res.data.result.openId;
            thats.globalData.session_key = res.data.result.sessionId;
            thats.globalData.hasAuthorityBrowse=res.data.result.hasAuthorityBrowse;
            if (res.data.result.success){
              wx.setStorageSync("session_key", res.data.result.sessionId);
              thats.getUserInfoReq();
            }
            // if(!res.data.result.hasAuthorityBrowse){
            //   callback?callback():'';
            //   wx.redirectTo({
            //     url: '/pages/apply/index',
            //   })
            // }else{
            //   thats.globalData.applyvalue=true;
            // }
          }         
        })
      },
      fail: function (res) {
        console.log("登陆失败")
      }
    })
  },
  getUserInfoReq: function () {   
    // 获取用户信息
    wx.getSetting({
      success: res => { 
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            lang: "zh_CN",
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo;
              wx.request({
                url: 'https://a-one.jianshankeji.com:8000/api/WeiXin/DecodeEncryptedData',
                method: "post",
                header: { "Content-Type": "application/x-www-form-urlencoded" },
                data: { 
                  type: "USERINFO",
                  sessionId: wx.getStorageSync('session_key'),
                  encryptedData: res.encryptedData,
                  iv: res.iv,
                  consultantOpenId:this.globalData.shareopenid?this.globalData.shareopenid:''
                 }

              })
              //debugger;
              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
       // }
      }
    })
  },
    //获取用户信息或手机号
    DecodeEncryptedData:function(type,isessionid,iencrypteddata,iiv){
      wx.request({
        url: 'https://a-one.jianshankeji.com:8000/api/WeiXin/DecodeEncryptedData',
        method:"POST",
        data:{
          type:type,//getuerinfo或手机号
          sessionId:isessionid,
          encryptedData:iencrypteddata,
          iv:iiv
        },
        success (res) {
          console.log(res.data)
        }
      })
    },
    //获取手机号：
    GetPhoneNumber:function(encryptedData,iv){
      var that=this;     
      wx.request({
        url: 'https://a-one.jianshankeji.com:8000/api/WeiXin/DecodeEncryptedData',
        method:"POST",
        data:{
          type:"PHONENUMBER",
          sessionId:wx.getStorageSync('session_key'),
          encryptedData:encryptedData,
          iv:iv
        },
        header: { "Content-Type": "application/x-www-form-urlencoded" },
        success (res) {
          console.log(res);
          console.log(res.data.success);
        }
      })
    },
  globalData: {
    userInfo: null,
    userCode: "",
    systemType:"",
    openid:"",
    session_key:"",
    hasAuthorityBrowse:false,
    shareopenid:""
  }
})
