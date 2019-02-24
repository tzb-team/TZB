<template>
  <div class="col-xs-12 col-md-12 back" :style="back" style="padding: 0;background-color: #D9F3FB;">
    <div style="width: 100%;float: top;">
      <navi></navi>
    </div>
    <div>
      <right-bar></right-bar>
    </div>
    <div class="col-xs-12 col-md-12" style="padding: 0;">
      <el-tabs type="border-card" style="margin-left:20%;margin-right:20%;"><!--左侧留白7%-->
        <div style="margin-bottom: 50px;text-align: center;background: white;">
          <h1>个性推荐</h1>
          <p>Trust平台根据您输入的金额及预期收益率，结合投资风险为您推荐的八个投资标的方案</p>
        </div>
        <div style="margin-left:7%;width:86%;">
          <invest-list
            v-for="item in investInformation"
            v-bind:investList="item"
            v-bind:key="item.id"
          ></invest-list>
        </div>
      </el-tabs>
    </div>
    <div class="col-sm-12 col-md-12" style="float:bottom; padding:0;margin-top:100px;">
      <footerBar></footerBar>
    </div>
  </div>
</template>

<script>
  import investList from '@/components/investList.vue';
  import navi from '@/components/navi.vue';
  import footerBar from '@/components/footerBar.vue';
  import rightBar from '@/components/rightBar.vue';
    export default {
      name: "recommend",
      components:{navi, footerBar, rightBar,investList},
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
            ],
          /* 投资页面背景图片 */
          back:{
            backgroundImage:"url(" + require("../../static/pic/loanBack.jpg") + ")",
            backgroundRepeat:"no-repeat",
            backgroundAttachment:"fixed",
            backgroundSize:"100% auto",
            backgroundPosition: "0% 0%",
          },
        };
      },
  }
</script>

<style scoped>

</style>
