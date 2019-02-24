<template>
  <div class="col-xs-12 col-md-12 back" :style="back" style="padding: 0;background-color: #fff;">
    <div style="width: 100%;float: top;">
      <navi></navi>
    </div>
    <div>
      <right-bar></right-bar>
    </div>
    <div style="margin: 20px 40px 20px 40px;">
      <el-row>
        <el-col span="16">
          <el-tabs type="border-card" style="margin-left:7%;"><!--左侧留白7%-->
              <div class="form">
                <el-form :inline="true" label-width="100px">
                  <el-form-item label="标的分类">
                    <el-radio-group v-model="filter_radio">
                      <el-radio-button label="交换生" ></el-radio-button>
                      <el-radio-button label="GMAT"></el-radio-button>
                      <el-radio-button label="TOFEL"></el-radio-button>
                      <el-radio-button label="IELTS"></el-radio-button>
                      <el-radio-button label="大额考证"></el-radio-button>
                    </el-radio-group>
                  </el-form-item>
                  <el-form-item label="用户信用等级">
                    <el-select multiple placeholder="请选择">
                      <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                      </el-option>
                    </el-select>
                  </el-form-item>
                  <el-form-item label="利率">
                    <input type="number" class="selectInput" style="width:70px;"/>
                    <p style="display: inline;margin-left:5px;margin-right:5px;">-</p>
                    <input type="number" class="selectInput" style="width:70px;"/>
                  </el-form-item>
                  <el-form-item label="项目风险评级">
                    <el-select multiple placeholder="请选择">
                      <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                      </el-option>
                    </el-select>
                  </el-form-item>
                  <el-form-item label="投资金额">
                    <input type="number" class="selectInput" style="width:100px;"/>
                    <p style="display: inline;margin-left:5px;margin-right:5px;">-</p>
                    <input type="number" class="selectInput" style="width:100px;"/>
                  </el-form-item>
                  <el-form-item label="还款期限">
                    <input type="number" class="selectInput" style="width:83px;"/>
                    <p style="display: inline;margin-left:5px;margin-right:5px;">-</p>
                    <input type="number" class="selectInput" style="width:83px;"/>
                    <p style="display: inline;margin-left:5px;margin-right:5px;">天</p>
                  </el-form-item>
                  <el-form-item label="开始时间">
                    <input type="date" class="selectInput" style="width:120px;"/>
                    <p style="display: inline;margin-left:5px;margin-right:5px;">-</p>
                    <input type="date" class="selectInput" style="width:120px;"/>
                  </el-form-item>
                </el-form>
              </div>
              <div style="margin-top: 10px;">
                <el-radio-group v-model="value_radio">
                  <el-radio-button label="标的金额" ></el-radio-button>
                  <el-radio-button label="开始时间"></el-radio-button>
                  <el-radio-button label="利率"></el-radio-button>
                  <el-radio-button label="用户信用分数"></el-radio-button>
                  <el-radio-button label="项目风险评级"></el-radio-button>
                </el-radio-group>
                <div style="float:right;">
                  <el-autocomplete
                    popper-class="my-autocomplete"
                    placeholder="请输入内容" >
                    <i class="el-icon-edit el-input__icon"
                       slot="suffix"
                       @click="handleIconClick">
                    </i>
                    <!--<template slot-scope="{ item }">-->
                    <!--<div class="name">{{ item.value }}</div>-->
                    <!--<span class="addr">{{ item.address }}</span>-->
                    <!--</template>-->
                  </el-autocomplete>
                </div>
              </div>
              <invest-list
                v-for="item in investInformation"
                v-bind:investList="item"
                v-bind:key="item.id"
              ></invest-list>
          </el-tabs>
        </el-col>
        <el-col span="8">
          <el-card shadow="hover" style="margin-left: 10px;margin-right: 9%"><!--右侧留白9%-->
            <el-tabs>
              <el-tab-pane label="标的推荐" >
                <el-form>
                  <el-form-item label="投资金额">
                    <el-input placeholder="请输入内容"></el-input>
                  </el-form-item>
                  <el-form-item label="利率">
                    <el-input placeholder="请输入内容"></el-input>
                  </el-form-item>
                  <el-form-item>
                    <template slot-scope="scope">
                      <router-link to="/recommend">
                        <el-button type="primary">个性推荐</el-button>
                      </router-link>
                    </template>
                  </el-form-item>
                </el-form>
              </el-tab-pane>
            </el-tabs>
            <el-tabs>
              <el-tab-pane label="标的比较" >
                <el-form :inline="true">
                  <el-form-item label="编号">
                    <el-input placeholder="" style="width: 80px"></el-input>
                  </el-form-item>
                  <el-form-item label="编号" style="margin-left: 20px;">
                    <el-input placeholder="" style="width: 80px"></el-input>
                  </el-form-item>
                  <el-form-item>
                    <div id="myradar" style="width: 310px;height: 350px;margin-left:3%;"></div>
                  </el-form-item>
                  <el-form-item>
                    <el-button type="primary">
                      标的比较
                    </el-button>
                  </el-form-item>
                </el-form>
              </el-tab-pane>
            </el-tabs>
          </el-card>
        </el-col>
      </el-row>
    </div>
    <div class="col-sm-12 col-md-12" style="float:bottom; padding:0;margin-top:100px;">
      <footerBar></footerBar>
    </div>
  </div>
</template>

<script>
  import navi from '@/components/navi.vue';
  import footerBar from '@/components/footerBar.vue';
  import rightBar from '@/components/rightBar.vue'
  import investList from '@/components/investList.vue'
  import ProjectList from "../components/projectList";
  import investList2 from "../components/investList2";
  // 引入基本模板
  let echarts = require('echarts/lib/echarts')
  // 引入柱状图组件
  require('echarts/lib/chart/radar')
  // 引入提示框和title组件
  require('echarts/lib/component/tooltip')
  require('echarts/lib/component/title')

  //引入主题
  require('echarts/theme/infographic')
  export default {
    name: "invest",
    components:{navi, footerBar, rightBar,investList,ProjectList,investList2},
    mounted() {
      this.drawRadar();
    },
    data(){
      return{
        /* 未成交数据*/
        investInformation: [
          {id:"0001", beginTime:"2018.09.01", endTime:"2018.10.08", name:"AJ13熊猫", type:"SHOES", profit:"5.55%", money:"1800", remainMoney:"360", finishProgress:0.8,range:"AA"},
          {id:"0002", beginTime:"2018.09.14", endTime:"2018.10.03", name:"炉石砰砰计划", type:"GAME", profit:"9.99%", money:"388", remainMoney:"88", finishProgress:0.7731,range:"AA"},
          {id:"0003", beginTime:"2018.09.17", endTime:"2018.10.28", name:"国庆省内", type:"TRAVEL", profit:"6.73%", money:"2000", remainMoney:"400", finishProgress:0.8,range:"A"},
          {id:"0004", beginTime:"2018.10.12", endTime:"2018.10.25", name:"托福考试", type:"EXAM", profit:"5.85%", money:"1800", remainMoney:"360", finishProgress:0.8,range:"A"},
          {id:"0005", beginTime:"2018.10.15", endTime:"2018.11.20", name:"方大同演唱会", type:"CONCERT", profit:"7.67%", money:"1000", remainMoney:"470", finishProgress:0.53,range:"A"},
          {id:"0006", beginTime:"2018.10.22", endTime:"2018.11.21", name:"d'zzit地素连衣裙", type:"CLOTH", profit:"7.06%", money:"1300", remainMoney:"741", finishProgress:0.43,range:"B"},
          {id:"0007", beginTime:"2018.10.26", endTime:"2018.11.22", name:"预购", type:"GAME", profit:"6.45%", money:"1800", remainMoney:"1116", finishProgress:0.38,range:"B"},
          {id:"0008", beginTime:"2018.10.30", endTime:"2018.11.23", name:"生活费周转", type:"TURNOVER", profit:"5.27%", money:"1000", remainMoney:"140", finishProgress:0.86,range:"C"},
          {id:"0009", beginTime:"2018.11.03", endTime:"2018.12.01", name:"Chanel香水", type:"CONSMETIC", profit:"8.56%", money:"800", remainMoney:"320", finishProgress:0.6,range:"C"},
        ],
        /* 待转让数据*/
        investInformation2: [
          {id:"0002", beginTime:"2018.09.14", endTime:"2018.10.03", name:"炉石砰砰计划", type:"GAME", profit:"9.99%", money:"388", remainMoney:"88", finishProgress:0.7731,range:"AA"},
          {id:"0003", beginTime:"2018.09.17", endTime:"2018.10.28", name:"国庆省内", type:"TRAVEL", profit:"6.73%", money:"2000", remainMoney:"400", finishProgress:0.8,range:"A"},
          {id:"0004", beginTime:"2018.10.12", endTime:"2018.10.25", name:"托福考试", type:"EXAM", profit:"5.85%", money:"1800", remainMoney:"360", finishProgress:0.8,range:"A"},
          {id:"0005", beginTime:"2018.10.15", endTime:"2018.11.20", name:"方大同演唱会", type:"CONCERT", profit:"7.67%", money:"1000", remainMoney:"470", finishProgress:0.53,range:"A"},
          {id:"0006", beginTime:"2018.10.22", endTime:"2018.11.21", name:"d'zzit地素连衣裙", type:"CLOTH", profit:"7.06%", money:"1300", remainMoney:"741", finishProgress:0.43,range:"B"},
          {id:"0007", beginTime:"2018.10.26", endTime:"2018.11.22", name:"预购", type:"GAME", profit:"6.45%", money:"1800", remainMoney:"1116", finishProgress:0.38,range:"B"},
          {id:"0008", beginTime:"2018.10.30", endTime:"2018.11.23", name:"生活费周转", type:"TURNOVER", profit:"5.27%", money:"1000", remainMoney:"140", finishProgress:0.86,range:"C"},
          {id:"0009", beginTime:"2018.11.03", endTime:"2018.12.01", name:"Chanel香水", type:"CONSMETIC", profit:"8.56%", money:"800", remainMoney:"320", finishProgress:0.6,range:"C"},
        ],
        /* 投资页面背景图片 */
        back:{
          backgroundImage:"url(" + require("../../static/pic/investListBack.jpg") + ")",
          backgroundRepeat:"no-repeat",
          backgroundAttachment:"fixed",
          backgroundSize:"100% auto",
          backgroundPosition: "0% 0%",
        },
        /*单选按钮默认值及样式*/
        value_radio: '标的金额',
        filter_radio:'交换生',
      };
    },
    beforeCreate:function(){
      localStorage.route = "#invest";
    },
    methods:{
      /* 绘制雷达图*/
      drawRadar() {
        let myChart = echarts.init(document.getElementById('myradar'),'infographic')
        myChart.setOption({
          title: {
            text: '比较'
          },
          tooltip: {},
          legend: {
            data: ['A', 'B']
          },
          radar: {
            // shape: 'circle',
            name: {
              textStyle: {
                color: '#fff',
                backgroundColor: '#999',
                borderRadius: 3,
                padding: [3, 5],
              }
            },
            indicator: [
              { name: '金额', max: 100},
              { name: '期限', max: 100},
              { name: '成功借款次数', max: 100},
              { name: '信用等级', max: 100},
              { name: '利率', max: 100}
            ]
          },
          series: [{
            name: '两个标的比较',
            type: 'radar',
            data : [
              {
                value : [80, 76, 65, 89, 77, 66],
                name : 'A'
              },
              {
                value : [60, 70, 45, 80, 85, 27],
                name : 'B'
              }
            ]
          }]
        });
      },
    }
  }
</script>

<style scoped>
  .selectInput{
    display: inline;
    width:70px;
    height:40px;
    border:1px solid #DCDEE0;
    color:#B6B7B8;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    border-radius: 3px;
    text-align: center;
  }
  .form {
    padding-top: 20px;
    padding-left: 20px;
    border:0.5px #c7defa solid;
  }
</style>
