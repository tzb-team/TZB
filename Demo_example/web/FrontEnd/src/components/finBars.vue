<template>
  <div id="bar_template">
    <div>
      <!--<p>您选中了{{ monthBarStart }} 到 {{ monthBarEnd }}</p>-->
    </div>
    <div>
      <el-row :gutter="20">
        <el-col :span="5">
          <span>请选择您所要查看的指标</span>
        </el-col>
        <el-col :span="19">
          <div id="selectBar_id">
            <el-radio-group v-model="selectBar" size="mini">
              <el-radio label="收入" v-bind:title="'顾名思义，收入就是收入'"></el-radio>
              <el-radio label="支出" v-bind:title="'顾名思义，支出就是支出'"></el-radio>
              <el-radio label="刚性支出" v-bind:title="'“必需品”性质的支出\n'"></el-radio>
              <el-radio label="可调支出" v-bind:title="'可调整的支出'"></el-radio>
              <el-radio label="投资额结余" v-bind:title="'顾名思义，结余就是剩下的资金'"></el-radio>
              <el-radio label="负债" v-bind:title="'负债'"></el-radio>
              <el-radio label="净资产" v-bind:title="'结余—负债\n'"></el-radio>
            </el-radio-group>
          </div>
        </el-col>
      </el-row>
    </div><!--Bar选择指标-->
    <hr/>
    <div v-show="selectBar=='收入'">
      <div v-if="selectBar=='收入'">
        <h4><b>您这段时间的收入总额为：<i class="el-icon-goods"></i>&nbsp {{ user.income }} 元, 每月变化情况如下</b></h4>
      </div>
      <div id="myIncomeBar" :style="{width: '600px', height: '450px'}"></div>
    </div>
    <div v-show="selectBar=='支出'">
      <div v-if="selectBar=='支出'">
        <h4><b>您这段时间的支出总额为：<i class="el-icon-tickets"></i>&nbsp {{ user.outcome }} 元, 每月变化情况如下</b></h4>
      </div>
      <div id="myOutcomeBar" :style="{width: '600px', height: '450px'}"></div>
    </div>
    <div v-show="selectBar=='刚性支出'">
      <div v-if="selectBar=='刚性支出'">
        <h4><b>您这段时间的刚性支出总额为：<i class="el-icon-sold-out"></i>&nbsp {{ user.rigid }} 元, 每月变化情况如下</b></h4>
      </div>
      <div id="myRigidBar" :style="{width: '600px', height: '450px'}"></div>
    </div>
    <div v-show="selectBar=='可调支出'">
      <div v-if="selectBar=='可调支出'">
        <h4><b>您这段时间的可调支出总额为：<i class="el-icon-document"></i>&nbsp {{ user.adjust }} 元, 每月变化情况如下</b></h4>
      </div>
      <div id="myAdjustBar" :style="{width: '600px', height: '450px'}"></div>
    </div>
    <div v-show="selectBar=='投资额结余'">
      <div v-if="selectBar=='投资额结余'">
        <h4><b>您这段时间的投资额结余总额为：<i class="el-icon-edit"></i>&nbsp {{ user.surplus }} 元, 每月变化情况如下</b></h4>
      </div>
      <div id="myInvestBar" :style="{width: '600px', height: '450px'}"></div>
    </div>
    <div v-show="selectBar=='负债'">
      <div v-if="selectBar=='负债'">
        <h4><b>您的负债总额为：<i class="el-icon-edit-outline"></i>&nbsp {{ user.debt }} 元, 每月变化情况如下</b></h4>
      </div>
      <div id="myDebtBar" :style="{width: '600px', height: '450px'}"></div>
    </div>
    <div v-show="selectBar=='净资产'">
      <div v-if="selectBar=='净资产'">
        <h4><b>您的净资产总额为：<i class="el-icon-tickets"></i>&nbsp {{ user.asset }} 元, 每月变化情况如下</b></h4>
      </div>
      <div id="myNetAssetsBar" :style="{width: '600px', height: '450px'}"></div>
    </div>
  </div>
</template>


<script>
  // 引入基本模板
  let echarts = require('echarts/lib/echarts')
  // 引入柱状图组件
  require('echarts/lib/chart/bar')
  // 引入提示框和title组件
  require('echarts/lib/component/tooltip')
  require('echarts/lib/component/title')
  //
  require('echarts/theme/macarons')
  require('echarts/theme/shine')

  export default {
    name: 'finbars',
    data() {
      return{
        user:{
          income: 67070, //结余
          outcome: 62220,
          rigid: 48000,
          adjust: 14220,
          surplus: 3140,
          debt: 1390,
          asset: 1750
        },
        selectBar:'收入',
      }
    },
    mounted() {
      this.drawIncomeBar();
      this.drawOutcomeBar();
      this.drawRigidBar();
      this.drawAdjustBar();
      this.drawInvestBar();
      this.drawDebtBar();
      this.drawNetAssetsBar();
    },
    methods: {
      //柱状图集合
      drawIncomeBar() {
        // 基于准备好的dom，初始化echarts实例
        let myIncomeBar = echarts.init(document.getElementById('myIncomeBar'))
        // 绘制图表
        myIncomeBar.setOption({
          // title: { text: '您本月的收入变化' },
          tooltip: {
            trigger: 'axis',
            axisPointer:{
              type : 'shadow'
            }
          },
          grid:{
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: {
            // name: '时间',
            type: 'category',
            data: ["1月", "2月", "3月", "4月", "5月", "6月","7月","8月", "9月", "10月", "11月", "12月"],
            axisTick: {
              alignWithLabel: true
            }
          },
          yAxis: {
            name: '收入',
            type: 'value'
          },
          series: [{
            color: '#409EFF',
            name: '收入情况',
            type: 'bar',
            barWidth: '60%',
            data: [3000, 3100, 12000, 4900, 5100, 4800, 3000, 3090, 13000, 4780, 5000, 5300]
          }]
        });
      },
      drawOutcomeBar() {
        // 基于准备好的dom，初始化echarts实例
        let myOutcomeBar = echarts.init(document.getElementById('myOutcomeBar'))
        // 绘制图表
        myOutcomeBar.setOption({
          // title: { text: '您本月的支出变化' },
          tooltip: {
            trigger: 'axis',
            axisPointer:{
              type : 'shadow'
            }
          },
          grid:{
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: {
            // name: '时间',
            type: 'category',
            data: ["1月", "2月", "3月", "4月", "5月", "6月","7月","8月", "9月", "10月", "11月", "12月"],
            axisTick: {
              alignWithLabel: true
            }
          },
          yAxis: {
            name: '支出',
            type: 'value'
          },
          series: [{
            color: '#409EFF',
            name: '支出情况',
            type: 'bar',
            barWidth: '60%',
            data: [2500, 2700, 11000, 4790, 4900, 4700, 2800, 2500, 12040, 4500, 4700, 5090]
          }]
        });
      },
      drawRigidBar() {
        // 基于准备好的dom，初始化echarts实例
        let myRigidBar = echarts.init(document.getElementById('myRigidBar'))
        // 绘制图表
        myRigidBar.setOption({
          // title: { text: '您本月的支出变化' },
          tooltip: {
            trigger: 'axis',
            axisPointer:{
              type : 'shadow'
            }
          },
          grid:{
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: {
            // name: '时间',
            type: 'category',
            data: ["1月", "2月", "3月", "4月", "5月", "6月","7月","8月", "9月", "10月", "11月", "12月"],
            axisTick: {
              alignWithLabel: true
            }
          },
          yAxis: {
            name: '刚性支出',
            type: 'value'
          },
          series: [{
            color: '#409EFF',
            name: '刚性支出',
            type: 'bar',
            barWidth: '60%',
            data: [1500, 1500, 10000, 3500, 3500, 3500, 1500, 1500, 11000, 3500, 3500, 3500]
          }]
        });
      },
      drawAdjustBar() {
        // 基于准备好的dom，初始化echarts实例
        let myAdjustBar = echarts.init(document.getElementById('myAdjustBar'))
        // 绘制图表
        myAdjustBar.setOption({
          // title: { text: '您本月的支出变化' },
          tooltip: {
            trigger: 'axis',
            axisPointer:{
              type : 'shadow'
            }
          },
          grid:{
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: {
            // name: '时间',
            type: 'category',
            data: ["1月", "2月", "3月", "4月", "5月", "6月","7月","8月", "9月", "10月", "11月", "12月"],
            axisTick: {
              alignWithLabel: true
            }
          },
          yAxis: {
            name: '支出',
            type: 'value'
          },
          series: [{
            color: '#409EFF',
            name: '可调支出',
            type: 'bar',
            barWidth: '60%',
            data: [1000, 1200, 1000, 1290, 1400, 1200, 1300, 1000, 1040, 1000, 1200, 1590]
          }]
        });
      },
      drawInvestBar() {
        // 基于准备好的dom，初始化echarts实例
        let myInvestBar = echarts.init(document.getElementById('myInvestBar'))
        // 绘制图表
        myInvestBar.setOption({
          // title: { text: '您本月的支出变化' },
          tooltip: {
            trigger: 'axis',
            axisPointer:{
              type : 'shadow'
            }
          },
          grid:{
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: {
            // name: '时间',
            type: 'category',
            data: ["1月", "2月", "3月", "4月", "5月", "6月","7月","8月", "9月", "10月", "11月", "12月"],
            axisTick: {
              alignWithLabel: true
            }
          },
          yAxis: {
            name: '结余',
            type: 'value'
          },
          series: [{
            color: '#409EFF',
            name: '每月结余',
            type: 'bar',
            barWidth: '60%',
            data: [300, 100, 200, 100, 100, 50, 100, 300, 100, 100, 150, 110]
          }]
        });
      },
      drawDebtBar() {
        // 基于准备好的dom，初始化echarts实例
        let myDebtBar = echarts.init(document.getElementById('myDebtBar'))
        // 绘制图表
        myDebtBar.setOption({
          // title: { text: '您本月的支出变化' },
          tooltip: {
            trigger: 'axis',
            axisPointer:{
              type : 'shadow'
            }
          },
          grid:{
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: {
            // name: '时间',
            type: 'category',
            data: ["1月", "2月", "3月", "4月", "5月", "6月","7月","8月", "9月", "10月", "11月", "12月"],
            axisTick: {
              alignWithLabel: true
            }
          },
          yAxis: {
            name: '负债',
            type: 'value'
          },
          series: [{
            color: '#409EFF',
            name: '负债情况',
            type: 'bar',
            barWidth: '60%',
            data: [100, 200, 200, 90, 100, 100, 100, 100, 100, 100, 100, 100]
          }]
        });
      },
      drawNetAssetsBar() {
        // 基于准备好的dom，初始化echarts实例
        let myNetAssetsBar = echarts.init(document.getElementById('myNetAssetsBar'))
        // 绘制图表
        myNetAssetsBar.setOption({
          // title: { text: '您本月的支出变化' },
          tooltip: {
            trigger: 'axis',
            axisPointer:{
              type : 'shadow'
            }
          },
          grid:{
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: {
            // name: '时间',
            type: 'category',
            data: ["1月", "2月", "3月", "4月", "5月", "6月","7月","8月", "9月", "10月", "11月", "12月"],
            axisTick: {
              alignWithLabel: true
            }
          },
          yAxis: {
            name: '净资产',
            type: 'value'
          },
          series: [{
            color: '#409EFF',
            name: '净资产情况',
            type: 'bar',
            barWidth: '60%',
            data: [100, 100, 600, -80, 0, -50, 0, 190, 760, 80, 50, 0]
          }]
        });
      },
    },
    props:['monthBarStart','monthBarEnd']
  }
</script>

<style scoped>

  #bar_template i{
    color: #409EFF;
  }

</style>
