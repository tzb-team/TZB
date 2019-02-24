<template>
    <el-form class="main_panel">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="等额本息" name="first">

        </el-tab-pane>
        <el-tab-pane label="等额本金" name="second"></el-tab-pane>
        <el-tab-pane label="一次性还本付息" name="third"></el-tab-pane>
        <el-tab-pane label="先息后本" name="fourth"></el-tab-pane>
      </el-tabs>
      <!--<div style="display: flex;padding-bottom: 20px">

        <div class="scheme_type" style="color: #ff6445">
          等额本息
          <div style="border: 1px solid #ff6445"></div>
        </div>
        <div class="scheme_type">
          等额本金
        </div>
        <div class="scheme_type">
          一次性还本付息
        </div>
        <div class="scheme_type">
          先息后本
        </div>
      </div>-->
      <el-card>
        <evaluateTopPane :scheme="scheme"></evaluateTopPane>
        <!--<div class="top_panel">
          <div>
            <div style="padding-left: 30px">
              还款难度：
              <i class="el-icon-star-on"></i>
              <i class="el-icon-star-on"></i>
              <i class="el-icon-star-on"></i>
              <i class="el-icon-star-on"></i>
              <el-tooltip class="item" effect="dark" content="点击查看借款难度算法" placement="bottom-start">
                <i class="el-icon-question pointer" style="color: #409EFF"></i>
              </el-tooltip>

            </div>
            <div style="padding-left: 50px">
              <span style="font-size: 25px;font-weight:bold;color: #cd5f33;padding-top: 20px;padding-left: 15px">654.44</span>
              <br>
              <span style="color: #acacac;padding-top: -20px">每月还款金额(元)</span>
            </div>
            <div ></div>
          </div>
          <div style="margin-left: 100px">
            贷款金额&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp <span style="font-weight: bold" v-model="scheme">{{scheme.capital}}</span>元
            <div style="border: 1px #b7b7b7 solid"></div>
            利息总额&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp <span style="font-weight: bold;color: red">{{scheme.interest}}</span>元
            <div style="border: 1px #b7b7b7 solid"></div>
            还款总额&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp <span style="font-weight: bold;color: red">{{scheme.sum}}</span>元
          </div>
        </div>-->
      </el-card>

      <el-card id="myChart" align="center" style="width: 500px;height: 300px;margin-top: 20px"></el-card>
      <!--<div id="myChart" style="width: 450px;height: 300px;margin-top: 50px;margin-left: 40px">
      </div>-->
      <el-card style="margin-top: 20px;font-size: 15px">
        <div style="font-size: 22px;margin-top: 5px;margin-bottom: 10px">贷款建议:</div>
        <p id="enough" style="color: #31d09f" v-if="enough">根据预测，您足以支付每期还款</p>
        <p id="not_enough" v-if="enough==false">在您的还款期内，根据历史消费记录预测，有 <span style="color:#409EFF;font-size: 20px">{{scheme.count}}</span>个月（<span v-for="month in scheme.months"><span style="color:#409EFF;font-size: 20px" >{{month}}</span>,</span>）应还金额超出当月预测结余，如果选择该方案，请<span style="color: #ffa5a4;font-size: 18px">酌情调整</span>这些月份的消费</p>
        <p id="can_change" v-if="change" style="padding-top: 10px">对于上述需调整的月份，根据您的历史消费数据预测，您额可调整支出分类占比为：衣物饰品 <span style="color: #409EFF;font-size: 20px">56.60%</span> 饮食<span style="color: #409EFF;font-size: 20px">27.30%</span> 住宿<span style="color: #409EFF;font-size: 20px">14.30%</span> 娱乐消费<span style="color: #409EFF;font-size: 20px">5.40%</span>.您可以<span style="color: #ffa5a4;font-size: 18px">根据自身需求</span>调整这些消费</p>
        <p id="cannot_change" v-if="change==false">根据您的历史消费，有X月（a,b,c,d)应还金额还需要其他资金收入，您可以考虑还款期内是否有以下的收入：奖学金、到期理财产品、兼职等，<span style="color: red">如果没有，请酌情调整所选贷款方案</span></p>
      </el-card>
    </el-form>
</template>

<script>


  import ElCard from "element-ui/packages/card/src/main";
  import evaluateTopPane from './evaluateTopPane'

  // 引入基本模板
  let echarts = require('echarts/lib/echarts')
  // 引入柱状图组件
  require('echarts/lib/chart/bar')
  require('echarts/lib/chart/line')
  require('echarts/lib/chart/pie')
  // 引入提示框和title组件
  require('echarts/lib/component/tooltip')
  require('echarts/lib/component/title')
  //
  require('echarts/theme/macarons')
  /*require('echarts/theme/shine')*/

    export default {
      components: {ElCard,evaluateTopPane},
      name: "evaluate",
      props:['scheme','plan_table'],
      mounted() {
        this.drawLine();
      },
      data() {
        return {

          /*scheme:{
            capital:0,
            interest:0,
            sum:0
          },*/
          activeName:'first',
          enough:false,
          change:true,
          tableData: [{
            id:'1',
            sum:'',
            capital:'',
            interest:'',
            else:''
          }, {
            id:'2',
            sum:'',
            capital:'',
            interest:'',
            else:''
          }, {
            id:'3',
            sum:'',
            capital:'',
            interest:'',
            else:''
          }, {
            id:'4',
            sum:'',
            capital:'',
            interest:'',
            else:''
          }],
          myChart: null,
          option:[]/*{
            title : {
              text: '未来一周气温变化',
              subtext: '纯属虚构'
            },
            tooltip : {
              trigger: 'axis'
            },
            legend: {
              data:['最高气温','最低气温']
            },
            toolbox: {
              show : true,
              feature : {
                mark : {show: true},
                dataView : {show: true, readOnly: false},
                magicType : {show: true, type: ['line', 'bar']},
                restore : {show: true},
                saveAsImage : {show: true}
              }
            },
            calculable : true,
            xAxis : [
              {
                type : 'category',
                boundaryGap : false,
                data : ['周一','周二','周三','周四','周五','周六','周日']
              }
            ],
            yAxis : [
              {
                type : 'value',
                axisLabel : {
                  formatter: '{value} °C'
                }
              }
            ],
            series : [
              {
                name:'最高气温',
                type:'line',
                data:[11, 11, 15, 13, 12, 13, 10],
                markPoint : {
                  data : [
                    {type : 'max', name: '最大值'},
                    {type : 'min', name: '最小值'}
                  ]
                },
                markLine : {
                  data : [
                    {type : 'average', name: '平均值'}
                  ]
                }
              },
              {
                name:'最低气温',
                type:'line',
                data:[1, -2, 2, 5, 3, 2, 0],
                markPoint : {
                  data : [
                    {name : '周最低', value : -2, xAxis: 1, yAxis: -1.5}
                  ]
                },
                markLine : {
                  data : [
                    {type : 'average', name : '平均值'}
                  ]
                }
              }
            ]
          }*/,
        } //end return
      },
      methods: {
        drawLine () {
          // 基于准备好的dom，初始化echarts实例
          let myChart = echarts.init(document.getElementById('myChart'),'macarons');
          // 绘制图表
          myChart.setOption({
            title : {
              text: '预期还款',
              /*subtext: '纯属虚构'*/
            },
            tooltip : {
              trigger: 'axis'
            },
            legend: {
              data:['偿还本息','偿还利息']
            },
            toolbox: {
              show : true,
              feature : {
                mark : {show: true},
                dataView : {show: true, readOnly: false},
                magicType : {show: true, type: ['line', 'bar']},
                restore : {show: true},
                saveAsImage : {show: true}
              }
            },
            calculable : true,
            xAxis : [
              {
                type : 'category',
                boundaryGap : false,
                data : ['第一期','第二期','第三期','第四期','第五期']
              }
            ],
            yAxis : [
              {
                type : 'value',
                axisLabel : {
                  formatter: '{value} 元'
                }
              }
            ],
            series : [
              {
                name:'偿还本息',
                type:'line',
                data:[654.4, 654.4, 654.4, 654.4, 654.4],
                markPoint : {
                  data : [
                    {type : 'max', name: '最大值'},
                    {type : 'min', name: '最小值'}
                  ]
                },
                markLine : {
                  data : [
                    {type : 'average', name: '平均值'}
                  ]
                }
              },
              {
                name:'偿还利息',
                type:'line',
                data:[408.33,407.33,406.32,405.31,404.29],
                markPoint : {
                  data : [
                    {type : 'max', name: '最大值'},
                    {type : 'min', name: '最小值'}
                  ]
                },
                markLine : {
                  data : [
                    {type : 'average', name : '平均值'}
                  ]
                }
              }
            ]
          });
        }
      },

    }
</script>

<style scoped>

  .main_panel{
    width:500px;
    background-color: white;
    /*height:600px;*/
  }

  .top_panel{
    display: flex;
  }

  .pointer:hover{
    cursor:pointer;
  }

  .scheme_type{
    margin-left: 30px;
    font-size: 16px;
  }

</style>
