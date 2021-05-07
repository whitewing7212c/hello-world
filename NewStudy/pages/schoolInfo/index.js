// pages/schoolInfo/index.js
const plugin = requirePlugin("DimensionalShow")
var QQMapWX = require('../../utils/qqmap-wx-jssdk.min.js');
let qqmapsdk = new QQMapWX({
  key: 'RQQBZ-JU5CQ-WIO5G-GIQA2-TIEJ7-JTBNB'
});
Page({
  /**
   * 页面的初始数据
   */
  data: {
    btnCurrentId:0,
    currentMap:"",
    areaType:[
      {"AreaName":"中央法务区","AreaId":0,"AreaBtn":"http://api.jianshankeji.com/models/img/botton_zhongyangfawuyuan_nor@3x.png"},
      {"AreaName":"科学城","AreaId":1,"AreaBtn":"http://api.jianshankeji.com/models/img/botton_kexuecheng_nor@3x.png"},
      {"AreaName":"天府文创城","AreaId":2,"AreaBtn":"http://api.jianshankeji.com/models/img/botton_tianfuwenchuangcheng_nor@3x.png"},
      {"AreaName":"其它1","AreaId":3,"AreaBtn":"http://api.jianshankeji.com/models/img/botton_zhanweiwenzi_nor@3x.png"},
      {"AreaName":"其它2","AreaId":4,"AreaBtn":"http://api.jianshankeji.com/models/img/botton_zhanweiwenzi_nor@3x.png"},
      {"AreaName":"其它3","AreaId":5,"AreaBtn":"http://api.jianshankeji.com/models/img/botton_zhanweiwenzi_nor@3x.png"}
    ],
    areaData:[
      {
        "type":0,
        "areaMap":"http://api.jianshankeji.com/models/img/zygy_area.png",
        "InitSchool":[
          {
            "modelUrl":"qizhong",
            "schoolVideo":"http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400",
            "schoolName":"成都天府七中",
            "schoolAname":"天七、天府七中",
            "schoolType":"民办",
            "schoolCost":"39800",
            "schoolClass":"设计办学规模不超过84个班，总人数不超过3200人",
            "schoolClassIMP":"",
            "schoolFeature":"学校采用分层分类，选课走班育人模式；",
            "schoolFeatureIMP":"",
            "schoolAreaIcon":"http://api.jianshankeji.com/models/img/school_FW_07.png",
            "schoolpW":217,
            "schoolpH":109,
            "Left":200,
            "Top":280
          },
          {
            "modelUrl":"sizhong",
            "schoolVideo":"http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4",
            "schoolName":"成都天府四中",
            "schoolAname":"四中、天府四中",
            "schoolType":"民办",
            "schoolCost":"49800",
            "schoolClass":"设计办学规模不超过84个班，总人数不超过5200人",
            "schoolClassIMP":"",
            "schoolFeature":"天府四中学校采用分层分类，选课走班育人模式；",
            "schoolFeatureIMP":"",
            "schoolAreaIcon":"http://api.jianshankeji.com/models/img/school_FW_07.png",
            "schoolpW":217,
            "schoolpH":109,
            "Left":100,
            "Top":120
          }
        ]
      },
      {
        "type":1,
        "areaMap":"http://api.jianshankeji.com/models/img/lxh_area.png",
        "InitSchool":[
          {
            "modelUrl":"chengdujiaoke",
            "schoolVideo":"http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400",
            "schoolName":"成都教科院附属学校",
            "schoolAname":"成都教科院附属",
            "schoolType":"公办",
            "schoolCost":"39800/年，住宿费1200/年；伙食费：10000/年；代管费：6000/年",
            "schoolClass":"设计办学规模不超过84个班，总人数不超过6200人",
            "schoolClassIMP":"",
            "schoolFeature":"学校采用分层分类，选课走班育人模式；",
            "schoolFeatureIMP":"",
            "schoolAreaIcon":"http://api.jianshankeji.com/models/img/school_KXC_01.png",
            "schoolpW":360,
            "schoolpH":109,
            "Left":280,
            "Top":350
          }
        ]
      }
    ],
    picRote:1,
    currentSchoolInfo:null,
    InitSchool:[],
    pics: [
      "https://images.jianshankeji.com/010000.png?v=3",
      "https://images.jianshankeji.com/010001.png?v=3",
      "https://images.jianshankeji.com/010002.png?v=3",
      "https://images.jianshankeji.com/010003.png?v=3",
      "https://images.jianshankeji.com/010004.png?v=3",
      "https://images.jianshankeji.com/010005.png?v=3",
      "https://images.jianshankeji.com/010006.png?v=3",
      "https://images.jianshankeji.com/010007.png?v=3",
      "https://images.jianshankeji.com/010008.png?v=3",
      "https://images.jianshankeji.com/010009.png?v=3",
      "https://images.jianshankeji.com/010010.png?v=3",
      "https://images.jianshankeji.com/010011.png?v=3",
      "https://images.jianshankeji.com/010012.png?v=3",
      "https://images.jianshankeji.com/010013.png?v=3",
      "https://images.jianshankeji.com/010014.png?v=3",
      "https://images.jianshankeji.com/010015.png?v=3",
      "https://images.jianshankeji.com/010016.png?v=3",
      "https://images.jianshankeji.com/010017.png?v=3",
      "https://images.jianshankeji.com/010018.png?v=3",
      "https://images.jianshankeji.com/010019.png?v=3",
      "https://images.jianshankeji.com/010020.png?v=3",
      "https://images.jianshankeji.com/010021.png?v=3",
      "https://images.jianshankeji.com/010022.png?v=3",
      "https://images.jianshankeji.com/010023.png?v=3",
      "https://images.jianshankeji.com/010024.png?v=3",
      "https://images.jianshankeji.com/010025.png?v=3",
      "https://images.jianshankeji.com/010026.png?v=3",
      "https://images.jianshankeji.com/010027.png?v=3",
      "https://images.jianshankeji.com/010028.png?v=3",
      "https://images.jianshankeji.com/010029.png?v=3",
      "https://images.jianshankeji.com/010030.png?v=3",
      "https://images.jianshankeji.com/010031.png?v=3",
      "https://images.jianshankeji.com/010032.png?v=3",
      "https://images.jianshankeji.com/010033.png?v=3",
      "https://images.jianshankeji.com/010034.png?v=3",
      "https://images.jianshankeji.com/010035.png?v=3",
      "https://images.jianshankeji.com/010036.png?v=3",
      "https://images.jianshankeji.com/010037.png?v=3",
      "https://images.jianshankeji.com/010038.png?v=3",
      "https://images.jianshankeji.com/010039.png?v=3",
      "https://images.jianshankeji.com/010040.png?v=3"
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //初始化渲染第一个片区下学校
    this.setData({
      currentMap:this.data.areaData[0].areaMap,
      currentSchoolInfo:this.data.areaData[0].InitSchool[0],
      InitSchool:this.data.areaData[0].InitSchool
    })
  },
  setSchoolInfo:function(e){  
    let schoolid=e.currentTarget.dataset.id;
    let _this=this;
    let btnid=this.data.btnCurrentId;
    this.setData({
      currentSchoolInfo:_this.data.areaData[btnid].InitSchool[schoolid],
    })
  },
  imageLoad(ev) {
    let  pwidth = ev.detail.width;
    var query = wx.createSelectorQuery();
    var that = this;
    query.select('.mapPic').boundingClientRect(function (rect) {
       that.setData({
        picRote:rect.width/pwidth
       })
    }).exec();
  },
  getarea(e){
    this.setData({
      InitSchool:[]
    })
    let this_=this;
    let currentid=e.currentTarget.dataset.id;
    this.setData({
      btnCurrentId:currentid,
      currentMap:this_.data.areaData[currentid].areaMap
    })
    let picschool=this.data.areaData[currentid];
    this_.setData({
      InitSchool:picschool.InitSchool
    });
  },
  geturl(e){
    let myurl=e.currentTarget.dataset.url;
    wx.navigateTo({
      url:'../models/index?type='+myurl
    })
  },
  bitcon(){
    console.log("xxx");
  },
	touchStart(e) {
		console.log('canvas', e)
		THREE.global.touchEventHandlerFactory('canvas', 'touchstart')(e)
	},
	touchMove(e) {
		console.log('canvas', e)
		THREE.global.touchEventHandlerFactory('canvas', 'touchmove')(e)
	},
	touchEnd(e) {
		console.log('canvas', e)
		THREE.global.touchEventHandlerFactory('canvas', 'touchend')(e)
	},
	touchCancel(e) {
		// console.log('canvas', e)
	},
	longTap(e) {
		// console.log('canvas', e)
	},
	tap(e) {
		// console.log('canvas', e)
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