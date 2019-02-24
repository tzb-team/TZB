<template>
  <div id="app">
    <!--顶栏 -->
    <div class="col-xs-12 col-md-12" style="padding: 0;position: relative;background-color: black;">
      <navi style="position: relative"></navi>
    </div>
    <div class="col-xs-12 col-md-12" style="padding: 0;position:relative;">
      <div class="myspace">
        <h2 class="myspace">信息发布平台 -- 失物招领</h2>
        <p style="color: #777777;">欢迎访问这个帮你找东西的神奇平台！</p>
      </div>
    </div>

    <!--正文-->
    <div class="back">
      <leftInformationbar></leftInformationbar>
      <div class="mesboxborder">
        <div style="position:relative;top:20px;margin-left:3%;margin-right:3%;">
          <el-tabs type="border-card">
            <el-tab-pane >
              <span slot="label" style="font-size:19px;"><i class="el-icon-message"></i>&nbsp;&nbsp;最新消息</span>
              <div style="position:relative;top:10px;margin-left:5%;margin-right:5%;">
                <template>
                  <el-carousel :interval="3000" type="card" height="200px">
                    <el-carousel-item v-for="i in latestmes.length" :key="i">
                        <el-popover
                          placement="left"
                          style="background-color: #DCDFE6;"
                          width="200"
                          trigger="hover">
                          <div >
                                <div style="position:relative;top:3px;">
                                  <span style="position:relative;left:20px;"><i class="el-icon-time"></i>&nbsp;&nbsp;{{ latestmes[i-1].time}}</span>
                                  <br/>
                                  <span style="position:relative;left:20px;"><i class="el-icon-phone"></i>&nbsp;&nbsp;{{ latestmes[i-1].phone}}</span>
                                  <br/>
                                  <span style="position:relative;left:20px;"><i class="el-icon-location"></i>&nbsp;&nbsp;{{ latestmes[i-1].loc}}</span>
                                </div>
                            <hr/>
                                <div style="margin-top:-10%;width:150px;">
                                  <img v-bind:src=latestmes[i-1].headpic style="width:30px;height:30px;position:relative;left:10px;top:-15px;"  alt="User_pic" >
                                  <span style="position:relative;margin-top:-10%;">&nbsp;&nbsp;&nbsp;&nbsp;“{{ latestmes[i-1].dec}}”</span>
                                </div>
                              </div>
                          <el-button slot="reference">
                            <img v-bind:src=latestmes[i-1].pic style="width:360px;height:180px;margin-top:-1%;margin-left:-3%;" class="picbox" alt="User_pic" >
                          </el-button>
                        </el-popover>
                      <!--
                      <div v-if="i === 2">
                        <el-popover
                          placement="left"
                          style="background-color: #DCDFE6;"
                          width="200"
                          trigger="hover">
                          <div class="textitem">
                            <div style="position:relative;top:3px;">
                              <span style="position:relative;left:20px;"><i class="el-icon-time"></i>&nbsp;&nbsp;{{ latestmes[i-1].time}}</span>
                              <br/>
                              <span style="position:relative;left:20px;"><i class="el-icon-phone"></i>&nbsp;&nbsp;{{ latestmes[i-1].phone}}</span>
                              <br/>
                              <span style="position:relative;left:20px;"><i class="el-icon-location"></i>&nbsp;&nbsp;{{ latestmes[i-1].loc}}</span>
                            </div>
                            <hr/>
                            <div style="margin-top:-10%;width:150px;">
                              <img src="../../static/pic/testuserpic2.png" style="width:30px;height:30px;position:relative;left:10px;top:-15px;"  alt="User_pic" >
                              <span style="position:relative;margin-top:-10%;">&nbsp;&nbsp;&nbsp;&nbsp;“{{ latestmes[i-1].dec}}”</span>
                            </div>
                          </div>
                          <el-button slot="reference">
                            <img src="../../static/pic/testusb.png" style="width:360px;height:180px;margin-top:-1%;margin-left:-3%;" class="picbox" alt="User_pic" >
                          </el-button>
                        </el-popover>
                      </div>
                      <div v-if="i === 3">
                        <el-popover
                          placement="left"
                          style="background-color: #DCDFE6;"
                          width="200"
                          trigger="hover">
                          <div class="textitem">
                            <div style="position:relative;top:3px;">
                              <span style="position:relative;left:20px;"><i class="el-icon-time"></i>&nbsp;&nbsp;{{ latestmes[i-1].time}}</span>
                              <br/>
                              <span style="position:relative;left:20px;"><i class="el-icon-phone"></i>&nbsp;&nbsp;{{ latestmes[i-1].phone}}</span>
                              <br/>
                              <span style="position:relative;left:20px;"><i class="el-icon-location"></i>&nbsp;&nbsp;{{ latestmes[i-1].loc}}</span>
                            </div>
                            <hr/>
                            <div style="margin-top:-10%;width:150px;">
                              <img src="../../static/pic/testuserpic3.png" style="width:30px;height:30px;position:relative;left:10px;top:-15px;"  alt="User_pic" >
                              <span style="position:relative;margin-top:-10%;">&nbsp;&nbsp;&nbsp;&nbsp;“{{ latestmes[i-1].dec}}”</span>
                            </div>
                          </div>
                          <el-button slot="reference">
                            <img src="../../static/pic/testcard.png" style="width:360px;height:180px;margin-top:-1%;margin-left:-3%;" class="picbox" alt="User_pic" >
                          </el-button>
                        </el-popover>
                      </div>
                      <div v-if="i === 4">
                        <el-popover
                          placement="left"
                          style="background-color: #DCDFE6;"
                          width="200"
                          trigger="hover">
                          <div class="textitem">
                            <div style="position:relative;top:3px;">
                              <span style="position:relative;left:20px;"><i class="el-icon-time"></i>&nbsp;&nbsp;{{ latestmes[i-1].time}}</span>
                              <br/>
                              <span style="position:relative;left:20px;"><i class="el-icon-phone"></i>&nbsp;&nbsp;{{ latestmes[i-1].phone}}</span>
                              <br/>
                              <span style="position:relative;left:20px;"><i class="el-icon-location"></i>&nbsp;&nbsp;{{ latestmes[i-1].loc}}</span>
                            </div>
                            <hr/>
                            <div style="margin-top:-10%;width:150px;">
                              <img src="../../static/pic/photo.jpg" style="width:30px;height:30px;position:relative;left:10px;top:-15px;"  alt="User_pic" >
                              <span style="position:relative;margin-top:-10%;">&nbsp;&nbsp;&nbsp;&nbsp;“{{ latestmes[i-1].dec}}”</span>
                            </div>
                          </div>
                          <el-button slot="reference">
                            <img src="../../static/pic/testcup.png" style="width:360px;height:180px;margin-top:-1%;margin-left:-3%;" class="picbox" alt="User_pic" >
                          </el-button>
                        </el-popover>
                      </div>-->
                      <!--<div class="textitem">
                        <el-tag type="info"
                                :disable-transitions="true">{{ mesdata[i-1].time}}</el-tag>
                        <div>
                          <strong style="font-size: 15px;">物品类别</strong>
                          <span style="position:relative;left:20px;">{{ mesdata[i-1].itemtype}}</span>
                          <strong style="font-size: 15px;position:relative;left:103px;">物品名称</strong>
                          <span style="position:relative;left:123px;">{{ mesdata[i-1].name}}</span>
                        </div>
                        <div style="position:relative;top:3px;">
                          <strong style="font-size: 15px;">发布时间</strong>
                          <span style="position:relative;left:20px;">{{ mesdata[i-1].time}}</span>
                          <strong style="font-size: 15px;position:relative;left:60px;">联系方式</strong>
                          <span style="position:relative;left:80px;">{{ mesdata[i-1].phone}}</span>
                        </div>
                        <div style="position:relative;top:3px;width:450px;">
                          <strong style="font-size: 15px;">详细信息</strong>
                          <span style="position:relative;left:20px;">{{ mesdata[i-1].dec}}</span>
                        </div>
                      </div>-->
                    </el-carousel-item>
                  </el-carousel>
                </template>
                <div style="margin-left:70%;margin-top:-1%;margin-bottom: 1%;">
                  <span style="font-size:10px;">*点击图片快速查看详细信息</span>
                </div>
              </div>
            </el-tab-pane>
          </el-tabs>
          <hr/>
        </div>

        <div style="position:relative;top:20px;margin-left:3%;margin-right:3%;">
          <el-tabs type="border-card">
            <el-tab-pane >
              <span slot="label" style="font-size:19px;"><i class="el-icon-search"></i>&nbsp;&nbsp;分类检索</span>
              <template>
                <div style="margin-top: 20px">
                  <span><strong>消息性质</strong></span>
                  <el-checkbox style="margin-left:2%;">失物招领</el-checkbox>
                  <el-checkbox style="margin-left:2%;">寻物启事</el-checkbox>
                  <br/>

                  <span><strong>物品分类</strong></span>
                  <el-checkbox v-for="type in types" :key="type" :label="type" style="margin-left:2%;">{{ type }}</el-checkbox>
                  <br/>

                  <span><strong>常见地点</strong></span>
                  <el-checkbox v-for="loc in locs" :key="loc" :label="loc" style="margin-left:2%;">{{ loc }}</el-checkbox>
                  <hr/>
                </div>
              </template>
              <div v-for="j in mesdata.length" :key="j">
              <el-row :gutter="400" >
                <div v-for="i in 2" :key="i">
                  <el-col :span="6">
                    <el-card class="box-card">
                        <div class="grid-content bg-purple">
                          <div style="margin-top:-3%;">
                          <img v-bind:src=mesdata[j-1][i-1].headpic style="width:30px;height:30px;position:relative;left:10px;"  alt="User_pic" >
                          <span style="position:relative;left:20px;">{{ mesdata[j-1][i-1].username}}</span>
                          <span style="position:relative;left:135px;">{{ mesdata[j-1][i-1].time}}</span>
                          </div>
                          <br/>
                          <el-row :gutter="30">
                            <el-col :span="13">
                              <div class="grid-content bg-purple" style="margin-top:-3%;">
                                <span style="position:relative;left:55px;"><i class="el-icon-phone"></i>&nbsp;&nbsp;{{ mesdata[j-1][i-1].phone}}</span>
                                <br/>
                                <span style="position:relative;left:55px;"><i class="el-icon-location"></i>&nbsp;&nbsp;{{ mesdata[j-1][i-1].loc}}</span>
                                <br/>

                                <div style="position:relative;top:3px;width:200px;">
                                  <span style="position:relative;left:20px;">&nbsp;&nbsp;&nbsp;&nbsp;{{ mesdata[j-1][i-1].dec}}</span>
                                </div>
                              </div>
                            </el-col>
                            <el-col :span="10">
                              <div class="grid-content bg-purple" style="margin-top:-9%;">
                                <img v-bind:src=mesdata[j-1][i-1].pic style="width:110px;height:110px;position:relative;left:5px;top:-8px;" class="picbox" alt="User_pic">
                                <br/>
                                <span style="position:relative;"><strong>{{ mesdata[j-1][i-1].mestype}}&nbsp;&nbsp;>></strong></span>
                                <span style="position:relative;left:5px;"><strong>{{ mesdata[j-1][i-1].name}}</strong></span>
                              </div>
                            </el-col>
                          </el-row>
                      </div>
                    </el-card>
                    </el-col>
                  </div>
              </el-row>
              </div>
              <el-pagination
                  background
                  layout="prev, pager, next"
                  style="position:relative;left:350px;"
                  :total="1000">
                </el-pagination>
            </el-tab-pane>
          </el-tabs>
        </div>
        <br/>
        <hr/>

        <!--<div style="position:relative;top:20px;margin-left:5%;margin-right:5%;">
          <template>
          <el-carousel :interval="3000" type="card" height="200px">
            <el-carousel-item v-for="i in 4" :key="i">
              <div>
                <img src="../../static/pic/mestest.png" style="width:180px;height:180px;margin-top:9px;margin-left:5px;" class="picbox" alt="User_pic">
              </div>
              <div class="textitem">
                <el-tag type="info"
                        :disable-transitions="true">{{ mesdata[i-1].time}}</el-tag>
                    <div>
                      <strong style="font-size: 15px;">物品类别</strong>
                      <span style="position:relative;left:20px;">{{ mesdata[i-1].itemtype}}</span>
                      <strong style="font-size: 15px;position:relative;left:103px;">物品名称</strong>
                      <span style="position:relative;left:123px;">{{ mesdata[i-1].name}}</span>
                    </div>
                    <div style="position:relative;top:3px;">
                      <strong style="font-size: 15px;">发布时间</strong>
                      <span style="position:relative;left:20px;">{{ mesdata[i-1].time}}</span>
                      <strong style="font-size: 15px;position:relative;left:60px;">联系方式</strong>
                      <span style="position:relative;left:80px;">{{ mesdata[i-1].phone}}</span>
                    </div>
                    <div style="position:relative;top:3px;width:450px;">
                      <strong style="font-size: 15px;">详细信息</strong>
                      <span style="position:relative;left:20px;">{{ mesdata[i-1].dec}}</span>
                    </div>
                  </div>
            </el-carousel-item>
          </el-carousel>
        </template>
        </div>
        <div style="position:relative;top:20px;margin-left:3%;margin-right:3%;">
          <h3 ><strong>分类检索</strong></h3>
          <hr/>
        </div>-->

        <!--<el-dropdown @command="handleCommand" class="select">
          <span class="el-dropdown-link">类别<i class="el-icon-arrow-down el-icon--right"></i></span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="a">校园卡</el-dropdown-item>
            <el-dropdown-item command="b">钥匙</el-dropdown-item>
            <el-dropdown-item command="c">其他证件</el-dropdown-item>
            <el-dropdown-item command="d" disabled>雨伞</el-dropdown-item>
            <el-dropdown-item command="e" divided>杯子</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>-->




        <!-- 内容-->
        <!--<div v-for="i in mesdata.length" :key="i">
          <div v-if="mesdata[i-1].mestype === '失物招领'"
               v-show="mesdata[i-1].state">
            <el-card class="box-card">
              <div>
                <img src="../../static/pic/mestest.png" style="width:100px;height:100px;position:relative;left:5px;top:-10px;" class="picbox" alt="User_pic">
              </div>

              <div class="textitem">
                <div>
                  <strong style="font-size: 15px;">物品类别</strong>
                  <span style="position:relative;left:20px;">{{ mesdata[i-1].itemtype}}</span>
                  <strong style="font-size: 15px;position:relative;left:103px;">物品名称</strong>
                  <span style="position:relative;left:123px;">{{ mesdata[i-1].name}}</span>
                </div>
                <div style="position:relative;top:3px;">
                  <strong style="font-size: 15px;">发布时间</strong>
                  <span style="position:relative;left:20px;">{{ mesdata[i-1].time}}</span>
                  <strong style="font-size: 15px;position:relative;left:60px;">联系方式</strong>
                  <span style="position:relative;left:80px;">{{ mesdata[i-1].phone}}</span>
                </div>
                <div style="position:relative;top:3px;width:450px;">
                  <strong style="font-size: 15px;">详细信息</strong>
                  <span style="position:relative;left:20px;">{{ mesdata[i-1].dec}}</span>
                </div>
              </div>
            </el-card>
            <hr/>
          </div>
        </div>-->

      </div>
    </div>
    <!--右边栏-->
    <div>
      <right-bar></right-bar>
    </div>

    <!--底栏-->
    <div class="col-xs-12 col-md-12" style="padding: 0;position: relative;background-color: black;">
      <footer-bar></footer-bar>
    </div>

  </div>

</template>

<script>
  import navi from '@/components/navi.vue';
  import footerBar from '@/components/footerBar.vue';
  import rightBar from '@/components/rightBar.vue';
  import leftInformationbar from "@/components/leftInformationbar.vue"
  export default {
    name: "found",
    components:{leftInformationbar, navi, footerBar, rightBar},
    data() {
      return {
        types: ['校园卡', '钥匙', '水杯', '雨伞','其他'],
        locs:['四五六食堂','基础实验楼','仙I','仙II','逸夫楼','九食堂','十食堂','操场'],
        checkboxGroup: [],
        value9: [],
        list: [],
        loading: false,
        mesdata:[
          [{
            mestype:'失物招领',
            itemtype:'钥匙',
            name:'钥匙',
            phone:'13834712391',
            dec:'跑步机旁边捡到的，交给体育馆门口的叔叔了',
            headpic:"../../static/pic/testuserpic1.png",
            pic:"../../static/pic/testkey.png",
            time:'2018-08-24 18:50:35',
            state:true,
            username:'刘一一',
            loc:'方肇周体育馆',
          },{
            mestype:'寻物启事',
            itemtype:'雨伞',
            name:'雨伞',
            phone:'15589210472',
            dec:'落在四食门口的一辆小蓝里了！给了四食超市阿姨。',
            headpic:"../../static/pic/photo.jpg",
            pic:'../../static/pic/testcup.png',
            time:'2018-09-06 09:45:14',
            state:true,
            username:'徐忘',
            loc:'共享单车',
          }],[{
            mestype:'寻物启事',
            itemtype:'校园卡',
            name:'校园卡',
            phone:'15837196710',
            dec:'就在教超阿姨那里',
            headpic:"../../static/pic/testuserpic3.png",
            pic:'../../static/pic/testcard.png',
            time:'2018-09-05 21:59:24',
            state:true,
            username:'孟哲宁',
            loc:'教超',
          },{
            mestype:'失物招领',
            itemtype:'其他',
            name:'U盘',
            phone:'18842957391',
            dec:'明天机房有考试呀，今天落在机房的U盘都收到119了哦',
            headpic:"../../static/pic/testuserpic2.png",
            pic:'../../static/pic/testusb.png',
            time:'2018-09-07 12:34:40',
            state:true,
            username:'唐月',
            loc:'基础实验楼乙124',
          }],[{
            mestype:'失物招领',
            itemtype:'水杯',
            name:'杯子',
            phone:'13878916391',
            dec:'下午在仙I-221上课的时候捡到的一个杯子，放到仙I的保卫处了。（P.s.竟然和我的杯子是同款）',
            headpic:"../../static/pic/testuserpic5.png",
            pic:'../../static/pic/mestest.png',
            time:'2018-09-04 00:12:39',
            state:true,
            username:'王佳昕',
            loc:'仙I-221',
          },{
            mestype:'失物招领',
            itemtype:'校园卡',
            name:'校园卡',
            phone:'18852197520',
            dec:'落在食堂的餐盘里面了！食堂阿姨说差点扔掉，在哪里放的盘子去哪里拿吧！',
            headpic:"../../static/pic/testuserpic6.png",
            pic:'../../static/pic/mestest3.png',
            time:'2018-09-06 12:50:21',
            state:true,
            username:'成帆洁',
            loc:'四五六食堂',
          }]],
        activeName: '1',
        latestmes:[
          {
            headpic:"../../static/pic/testuserpic1.png",
            pic:"../../static/pic/testkey.png",
            phone:'13834712391',
            dec:'跑步机旁边捡到的，交给体育馆门口的叔叔了',
            loc:'方肇周体育馆',
            time:'2018-08-24',
          },{
            headpic:"../../static/pic/testuserpic2.png",
            pic:"../../static/pic/testusb.png",
            phone:'18842957391',
          dec:'明天机房有考试呀，今天落在机房的U盘都收到119了哦',
          loc:'基础实验楼乙124',
          time:'2018-09-07'
          },{
            headpic:"../../static/pic/testuserpic3.png",
            pic:"../../static/pic/testcard.png",
            phone:'15837196710',
            dec:'就在教超阿姨那里',
            loc:'教超',
            time:'2018-09-05'
          },{
            headpic:"../../static/pic/photo.jpg",
            pic:"../../static/pic/testcup.png",
            phone:'15589210472',
            dec:'落在四食门口的一辆小蓝里了！给了四食超市阿姨。',
            loc:'共享单车',
            time:'2018-09-06',}
          ]
      }
    },
    methods: {
      test:function(){
      },
      remoteMethod(query) {
        if (query !== '') {
          this.loading = true;
          setTimeout(() => {
            this.loading = false;
            this.options4 = this.list.filter(item => {
              return item.label.toLowerCase()
                .indexOf(query.toLowerCase()) > -1;
            });
          }, 200);
        } else {
          this.options4 = [];
        }
      },
      dialog: function(){

      },
    },
    created:function(){
      this.test();
    },
    beforeCreate:function(){
      localStorage.route="#notice";
    },

  }
</script>

<style scoped>
  .back{
    /*background-color: rgba(173,216,230,0.5);*/
    width: 100%;
    background-color: #D9F3FB;
    //height:100%;
    height:1350px;
  //height: 200px;
    padding-bottom: 20px;
    display:flex;
  }

  div.myspace{
    /*个人中心*/
    text-indent:6.3%;
    color: black;
    background-color: white;
    margin: 0px;
    border: 0px;
    padding: 5px;
    box-shadow:
      0 1px 6px 0 rgba(0,0,0, .12),
      0 1px 6px 0 rgba(0,0,0, .12);
    border-radius: 3px;
  }
  .myspace p{
    font-size: 15px;
    color: #505050;
  }

  /*消息框*/
  .mesboxborder{
    width:950px;
    margin-right: 10%;
    border-radius: 3px;
    position:absolute;top:222px;
    margin-left: 24%;
    background:white;
    border:1px solid #e4e4e4;
    //height:80px;
    box-shadow:
      0 1px 6px 0 rgba(0,0,0, .12),
      0 1px 6px 0 rgba(0,0,0, .12);
    border-radius: 3px;
  }

  .textitem{
    position:relative;
    //background-color: #d3dce66;
   // left:200px;
    //top:-170px;

  }

  .picbox{
    box-shadow:
      0 1px 6px 0 rgba(0,0,0, .12),
      0 1px 6px 0 rgba(0,0,0, .12);
    border-radius: 3px;

  }

  /*卡片样式*/
  .box-card {
    width: 370px;
    height: 180px;
    //border-top:3px solid dodgerblue;
    border-radius: 5px;
    box-shadow:
      0 1px 6px 0 rgba(0,0,0, .12),
      0 1px 6px 0 rgba(0,0,0, .12);
    position:relative;
    left:40px;
    //top:70px;
  }
  .box-card:hover{
    border-color:#4F94CD;
    border-left:solid #8DB6CD;
    border-top:solid #8DB6CD;

  //background:#D1EEEE;
  }

  .el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }

  .select{
    margin-left:10%;
    margin-top:10%
  }

  .el-carousel__item h3{
    color: ghostwhite;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }


  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

  .carousel{
    position:relative;
    top:10px;
    margin-left:5%;
    margin-top:5%;
  }
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }

  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    margin-left:-3%;
    margin-right:-13%;
    //border-radius: 4px;
    //min-height: 36px;
  }

</style>
