<template>
  <div class="UserList">
    <adminNavi></adminNavi>
    <img src="/static/pic/Investing.png" class="img-responsive"
         alt="Cinque Terre" style="opacity:0.7;top: 0;z-index: -1;width:100%;height: 650px">
    <div class="mytable">
      <div class="tableBackground">
        <table class="usertable">
          <tbody class="usertablebody">
          <tr>
            <th style="border: 1px solid black;text-align:center;">编号</th>
            <td style="border: 1px solid black ;text-align:center;">{{subject.id}}</td>
            <th style="border: 1px solid black;text-align:center;">用户名</th>
            <td style="border: 1px solid black ;text-align:center;">{{subject.name}}</td>
            <th style="border: 1px solid black;text-align:center;">拆借起始时间</th>
            <td style="border: 1px solid black ;text-align:center;">{{subject.beginTime}}</td>
          </tr>
          <tr>
            <th style="border: 1px solid black;text-align:center;">金额</th>
            <td style="border: 1px solid black ;text-align:center;">{{subject.money}}</td>
            <th style="border: 1px solid black;text-align:center;">以筹集金额</th>
            <td style="border: 1px solid black ;text-align:center;">{{subject.money - subject.remainMoney}}</td>
            <th style="border: 1px solid black;text-align:center;">标的状态</th>
            <td style="border: 1px solid black ;text-align:center;">{{subject.state}}</td>
          </tr>
          <tr>
            <th style="border: 1px solid black;text-align:center;">收益情况</th>
            <td style="border: 1px solid black ;text-align:center;">{{subject.profit}}</td>
            <th style="border: 1px solid black;text-align:center;">项目风险评级</th>
            <td style="border: 1px solid black ;text-align:center;">{{subject.range}}</td>
            <th style="border: 1px solid black;text-align:center;">还款方案</th>
            <td style="border: 1px solid black ;text-align:center;">{{subject.solution}}</td>
          </tr>
          </tbody>
        </table>
        <table class="usertable" style="margin-top:11.4%;">
          <tbody class="usertablebody">
          <tr>
            <th style="border: 1px solid black;text-align:center;width:15.6%;">项目说明  </th>
            <td style="border: 1px solid black ;text-align:center;">{{subject.description}}</td><br><br><br><br>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
    <footerBar></footerBar>

  </div>
</template>

<script>
  import footerBar from '@/components/footerBar.vue';
  import adminNavi from '@/components/adminNavi.vue';
  export default {
    name: "subjectManageDetail",
    components:{adminNavi,footerBar},
    data () {
      return {
        subject:{id:"0001",name:"王刚",beginTime:"2018.9.1",
        endTime:"2018.10.1",money:1000,remainMoney:800,description:"想要报名托福学习课程，无奈费用太高，想请有缘人帮助",
        state:"运行中",profit:"5.55%",range:"A",solution:"每月10%",other:"无"},
      }
    },
  }
</script>


<style scoped>
  .mytable{
    min-width: 400px;
    min-height: 500px;
    padding: 0px 0px;
    line-height: 3px;
    background-color:transparent;
    color: black;
    border: none;
    font-size: 16px;
    font-family: "Microsoft YaHei UI";
    top:100px;
    width:100%;
    left: 0%;
    position: absolute;
    letter-spacing: 2px;
  }
  .tableBackground{
    background-color:transparent;
    min-height: 480px;
    padding:20px;
  }
  .usertable{
    min-width: 400px;
    padding: 240px 0px;
    line-height: 50px;
    color: black;
    border-collapse: collapse;
    border: none;
    font-size: 16px;
    font-family: "Microsoft YaHei UI";
    width:80%;
    left: 10%;
    height: 70%;
    position: absolute;
    letter-spacing: 2px;
  }
  .status-picker select {
    border-radius: 5px;
    width: 200px;
    float: left;
    height: 37px;
    margin-bottom: -13px;
    border: 1px solid rgba(34, 36, 38, .15);
    padding: 0 10px;
  }
</style>

