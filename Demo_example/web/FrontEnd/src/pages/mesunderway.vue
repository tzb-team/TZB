<template>
  <div id="app">
    <!--顶栏 -->
    <div class="col-xs-12 col-md-12" style="padding: 0;position: relative;background-color: black;">
      <navi style="position: relative"></navi>
    </div>
    <div class="col-xs-12 col-md-12" style="padding: 0;position:relative;">
      <div class="myspace">
        <h2 class="myspace">信息发布平台 -- 正在进行</h2>
        <p style="color: #777777;">欢迎访问这个帮你找东西的神奇平台！</p>
      </div>
    </div>

    <!--正文-->
    <div class="back">
      <leftInformationbar></leftInformationbar>
      <div class="mesboxborder" >
      <el-tabs v-model="activeName2" type="card" @tab-click="handleClick" style="position:relative;top:35px;left:77px;width:800px;">
        <el-tab-pane label="失物招领" name="first">
          <div v-for="i in mesdata.length" :key="i">
            <!--<span>{{ i }}</span>
            <span>{{ mesdata[i-1].mestype }}</span>-->
            <div v-if="mesdata[i-1].mestype === '失物招领'"
                 v-show="mesdata[i-1].state">
              <el-card class="box-card">
                <div>
                  <img src="../../static/pic/mestest.png" style="width:200px;height:200px;position:relative;top:3px;left:15px;" class="picbox" alt="User_pic">
                </div>
                <div class="textitem">
                  <div>
                    <strong style="font-size: 15px;">物品类别</strong>
                    <span style="position:relative;left:20px;">{{ mesdata[i-1].itemtype}}</span>
                    <strong style="font-size: 15px;position:relative;left:60px;">物品名称</strong>
                    <span style="position:relative;left:80px;">{{ mesdata[i-1].name}}</span>
                  </div>
                  <div style="position:relative;top:3px;">
                    <strong style="font-size: 15px;">发布时间</strong>
                    <span style="position:relative;left:20px;">{{ mesdata[i-1].time}}</span>
                  </div>
                  <div style="position:relative;top:3px;">
                    <strong style="font-size: 15px;">联系方式</strong>
                    <span style="position:relative;left:20px;">{{ mesdata[i-1].phone}}</span>
                  </div>
                  <div style="position:relative;top:3px;width:400px;">
                    <strong style="font-size: 15px;">详细信息</strong>
                    <span style="position:relative;left:20px;">{{ mesdata[i-1].dec}}</span>
                  </div>
                  <el-button type="success"
                             round size="small"
                             @click="dialogFormVisible = true"
                             style="position:absolute;left:300px;top:150px;">确认完成</el-button>
                  <el-dialog title="确认完成"
                             width="40%"
                             :visible.sync="dialogFormVisible">
                    <el-form :model="form" >
                      <el-form-item label="对方用户名" :label-width="formLabelWidth">
                        <el-input v-model="form.name"
                                  style="width:330px;"
                                  auto-complete="off"></el-input>
                      </el-form-item>
                    </el-form>
                    <div slot="footer" class="dialog-footer">
                      <el-button @click="dialogFormVisible = false">取 消</el-button>
                      <el-button type="primary" @click="dialogFormVisible=done(mesdata[i-1])">确 定</el-button>
                    </div>
                  </el-dialog>

                </div>
              </el-card>
            </div>
          </div>
        </el-tab-pane>

        <el-tab-pane label="寻物启事" name="second">
          <div v-for="i in mesdata.length" :key="i">
            <!--<span>{{ i }}</span>
            <span>{{ mesdata[i-1].mestype }}</span>-->
            <div v-if="mesdata[i-1].mestype === '寻物启事'"
                 v-show="mesdata[i-1].state">
              <el-card class="box-card">
                <div>
                  <img src="../../static/pic/mestest2.png" style="width:200px;height:200px;position:relative;top:3px;left:15px;" class="picbox" alt="User_pic">
                </div>
                <div class="textitem">
                  <div>
                    <strong style="font-size: 15px;">物品类别</strong>
                    <span style="position:relative;left:20px;">{{ mesdata[i-1].itemtype}}</span>
                    <strong style="font-size: 15px;position:relative;left:60px;">物品名称</strong>
                    <span style="position:relative;left:80px;">{{ mesdata[i-1].name}}</span>
                  </div>
                  <div style="position:relative;top:3px;">
                    <strong style="font-size: 15px;">发布时间</strong>
                    <span style="position:relative;left:20px;">{{ mesdata[i-1].time}}</span>
                  </div>
                  <div style="position:relative;top:3px;">
                    <strong style="font-size: 15px;">联系方式</strong>
                    <span style="position:relative;left:20px;">{{ mesdata[i-1].phone}}</span>
                  </div>
                  <div style="position:relative;top:3px;width:400px;">
                    <strong style="font-size: 15px;">详细信息</strong>
                    <span style="position:relative;left:20px;">{{ mesdata[i-1].dec}}</span>
                  </div>
                  <el-button type="success"
                             round size="small"
                             @click="dialogFormVisible = true"
                             style="position:absolute;left:300px;top:150px;">确认完成</el-button>
                  <el-dialog title="确认完成"
                             width="40%"
                             :visible.sync="dialogFormVisible">
                    <el-form :model="form" >
                      <el-form-item label="对方用户名" :label-width="formLabelWidth" prop="name">
                        <el-input v-model="form.name"
                                  style="width:330px;"
                                  auto-complete="off"></el-input>
                      </el-form-item>
                    </el-form>
                    <div slot="footer" class="dialog-footer">
                      <el-button @click="dialogFormVisible = false">取 消</el-button>
                      <el-button type="primary" @click="dialogFormVisible=done(mesdata[i-1])">确 定</el-button>
                    </div>
                  </el-dialog>

                </div>
              </el-card>
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
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
  let dialogFormVisible;

  export default {
    name: "mesunderway",
    components:{leftInformationbar, navi, footerBar, rightBar},
    data() {
      return {
        mesdata:[
          {
            mestype:'失物招领',
            itemtype:'其他',
            name:'杯子',
            phone:'13834712391',
            dec:'下午在仙I-221上课的时候捡到的一个杯子，放到仙I的保卫处了。（P.s.竟然和我的杯子是同款）',
            pic:'传上来的图片',
            state:true,
            time:'2018-08-24',
          },
          {
            mestype:'寻物启事',
            itemtype:'其他',
            name:'雨伞',
            phone:'13834712391',
            dec:'啊啊啊啊啊已经是今年丢的第四把伞了，大概长左边酱……中午骑小蓝去九食，应该是落在车筐里面了。捡到的童鞋可以联系我一下嘛，我可以请你喝奶茶啊~',
            pic:'传上来的图片',
            state:true,
            time:'2018-09-04',
          }
        ],
        activeName2: 'first',
        dialogFormVisible: false,
        form: {
          name: '',
        },
        rules:{
          name:[ {required: true, message: '请输入活动名称', trigger: 'blur'} ]
        },
        formLabelWidth: '120px',
      }
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      },
      done :function(vis,formName){
        console.log(vis);
        vis.state=false;
        console.log('进来了！');
        return false;
      },
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
    min-height:1000px;
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
    height:800px;
    box-shadow:
      0 1px 6px 0 rgba(0,0,0, .12),
      0 1px 6px 0 rgba(0,0,0, .12);
    border-radius: 3px;
  }
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }
.textitem{
  position:relative;
  left:300px;
  top:-180px;
}

.picbox{
  box-shadow:
    0 1px 6px 0 rgba(0,0,0, .12),
    0 1px 6px 0 rgba(0,0,0, .12);
  border-radius: 3px;

}

/*卡片样式*/
  .box-card {
    width: 800px;
    height: 250px;
    border-radius: 5px;
    box-shadow:
      0 1px 6px 0 rgba(0,0,0, .12),
      0 1px 6px 0 rgba(0,0,0, .12);
    margin: 0px;
    padding: 5px;
  }

  .label{
    font-size: 15px;

  }
</style>
