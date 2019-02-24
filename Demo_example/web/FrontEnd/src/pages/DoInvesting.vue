<template>
  <div id="Investing">
    <navi></navi>
    <rightBar></rightBar>
    <img src="http://bigwords-books.com/wp-content/uploads/2016/03/open-book-on-table-red-ml.jpg" class="img-responsive gray" alt="Cinque Terre" style="opacity:0.7;top: 0;z-index: -1;width:100%;height: 400px;position: absolute">
    <div class="overview" style="padding: 100px 60px 40px 40px;font-size:18px;height: 400px">
      <el-row>
        <el-col :span="12">
          <div style="padding-left: 70px;padding-right: 70px">
          <div style="color: white;text-align: center">
            <span style="color: aquamarine;font-size: 60px">{{percentage}}</span><label>%已完成</label>
            <br/>
            <vm-progress :percentage="percentage" :text-inside="true" :stroke-width="18" strokeColor="info" :striped="true">.</vm-progress>
          </div>
            <br/>
            <br/>
          <el-row>
            <el-col :span="8">
              <div style="padding:0px 40px 0px 0px;text-align: center">
              <span class="keypoint">{{revenueRate}}</span><label class="small"> %</label><br/>
              <label class="small">预期年化收益率</label>
            </div></el-col>
            <el-col :span="8"> <div style="padding:0px 40px 0px 0px;text-align: center">
              <span class="keypoint">{{lifeOfLoan}}</span><br/>
              <label class="small">借款期限</label>
            </div></el-col>
            <el-col :span="8">   <div style="padding:0px 40px 0px 0px;text-align: center">
              <span class="keypoint">{{totalLoan}}</span><label class="small"> 元</label><br/>
              <label class="small">总额度</label>
            </div></el-col>
          </el-row>
          </div>
        </el-col>
        <el-col :span="12">
            <div style="color: white; ">
              <countdown :time="2 * 24 * 60 * 60 * 1000">
                <template slot-scope="props">剩余时间：<span class="keypoint">{{ props.days }}</span> 天 <span class="keypoint">{{ props.hours }}</span> 小时 <span class="keypoint">{{ props.minutes }}</span> 分钟 <span class="keypoint">{{ props.seconds }}</span> 秒</template>
              </countdown>
              <!--<label>剩余时间：{{leftTime}}</label>-->
              <br>
              <label>还需投资：{{leftNeeds}} 元</label>
              <br/>
              <label>您的余额为：{{userMoney}} 元</label>
              <br/>
              <br/>
              <label>投资金额： </label>
              <div class="block">
                <el-slider
                  v-model="num1"
                  :format-tooltip="formatTooltip"
                  show-input>
                </el-slider>
              </div>
              <br/>
              <el-button type="primary" round="true">我要投资</el-button>
            </div>
            <!--<div style="padding:10px 40px 0px 0px">-->
            <!--<el-input-number v-model="num1" @change="handleChange" :min="1"label="描述文字"></el-input-number>-->
            <!--</div>-->
            <!--<div style="padding:10px 40px 0px 0px">-->
            <!--&lt;!&ndash;<el-button type="primary" round>{{DoInvest}}</el-button>&ndash;&gt;-->
            <!---->
            <!--</div>-->
        </el-col>
      </el-row>



      <!--<div class="total" style="position:absolute;left:8%;top:20%;font-size:18px;width:300px;text-align:left;">-->
        <!--<div style="color: white;text-align: center">-->
          <!--<span style="color: aquamarine;font-size: 60px">{{percentage}}</span><label>%已完成</label>-->
          <!--<br/>-->
          <!--<vm-progress :percentage="percentage" :text-inside="true" :stroke-width="18" strokeColor="info" :striped="true">.</vm-progress>-->
        <!--</div>-->

      <!--</div>-->
      <!--<div class="selfmoney" style="position:absolute;padding: 20px 20px 0px 600px; top:15%;font-size:20px;">-->
        <!--<div style="padding:0px 30px 0px 0px;color: white;float: left; ">-->
          <!--<countdown :time="2 * 24 * 60 * 60 * 1000">-->
            <!--<template slot-scope="props">剩余时间：<span class="keypoint">{{ props.days }}</span> 天 <span class="keypoint">{{ props.hours }}</span> 小时 <span class="keypoint">{{ props.minutes }}</span> 分钟 <span class="keypoint">{{ props.seconds }}</span> 秒</template>-->
          <!--</countdown>-->
          <!--&lt;!&ndash;<label>剩余时间：{{leftTime}}</label>&ndash;&gt;-->
          <!--<br>-->
          <!--<label>还需投资：{{leftNeeds}} 元</label>-->
          <!--<br/>-->
          <!--<label>您的余额为：{{userMoney}} 元</label>-->
          <!--<br/>-->
          <!--<br/>-->
          <!--<label>投资金额： </label>-->
        <!--</div>-->
        <!--&lt;!&ndash;<div style="padding:10px 40px 0px 0px">&ndash;&gt;-->
        <!--&lt;!&ndash;<el-input-number v-model="num1" @change="handleChange" :min="1"label="描述文字"></el-input-number>&ndash;&gt;-->
        <!--&lt;!&ndash;</div>&ndash;&gt;-->
        <!--&lt;!&ndash;<div style="padding:10px 40px 0px 0px">&ndash;&gt;-->
        <!--&lt;!&ndash;&lt;!&ndash;<el-button type="primary" round>{{DoInvest}}</el-button>&ndash;&gt;&ndash;&gt;-->
        <!--&lt;!&ndash;&ndash;&gt;-->
        <!--&lt;!&ndash;</div>&ndash;&gt;-->

      <!--</div>-->
      <!--<div style="position: absolute;left: 48%;width: 600px; top: 50%;">-->
        <!--<div class="block">-->
          <!--<el-slider-->
            <!--v-model="num1"-->
            <!--:format-tooltip="formatTooltip"-->
            <!--show-input>-->
          <!--</el-slider>-->
        <!--</div>-->
        <!--<br/>-->
        <!--<el-button type="primary" round="true">我要投资</el-button>-->

      <!--</div>-->
      <!--&lt;!&ndash;<div  style="position: absolute;left: 70%;width: 600px; top: 65%;">&ndash;&gt;-->
      <!--&lt;!&ndash;<div class="wrapper">&ndash;&gt;-->
        <!--&lt;!&ndash;<a href="#" class="button">我要投资</a>&ndash;&gt;-->
      <!--&lt;!&ndash;</div>&ndash;&gt;-->
      <!--&lt;!&ndash;</div>&ndash;&gt;-->
      <!--<div style="height:120px;width:100%;position:absolute;top:43%;">-->
        <!--<div style="position:absolute;left:5%;padding:15px 0px 0px 0px;display: flex;text-align: center">-->
          <!--<div style="padding:0px 40px 0px 0px">-->
            <!--<span class="keypoint">{{revenueRate}}</span><label class="small"> %</label><br/>-->
            <!--<label class="small">预期年化收益率</label>-->
          <!--</div>-->
          <!--<div style="padding:0px 40px 0px 0px">-->
            <!--<span class="keypoint">{{lifeOfLoan}}</span><br/>-->
            <!--<label class="small">借款期限</label>-->
          <!--</div>-->
          <!--<div style="padding:0px 40px 0px 0px">-->
            <!--<span class="keypoint">{{totalLoan}}</span><label class="small"> 元</label><br/>-->
            <!--<label class="small">总额度</label>-->
          <!--</div>-->
        <!--</div>-->
      <!--</div>-->
    </div>
    <div style="display:flex;min-height:800px;border: 1px solid lightgrey;">
      <div class="market_out" style="height:100%;width:100%;">
        <el-tabs :tab-position="tabPostion" style="height:100%;">
          <el-tab-pane label="产品概要"
                        style="padding:60px 60px 10px 30px;font-size:18px;line-height: 30px;">
            <div style="display: flex;">
                <div style="padding:5px;">
                  <img src="../../static/pic/TOEFL.jpg" style="width:400px;"/>
                  <label style="font-size:16px;font-style: oblique;text-align: center;font-weight: normal;color:grey">此图为用户上传的项目说明</label>
                </div>
                <div style="padding:5px;width:500px;">
                  <el-card class="box-card" style="width:430px;">
                    <div slot="header" class="clearfix">
                      <strong><span style="font-size: 20px;">借款项目简介</span></strong>
                    </div>
                    <div>
                      <div>{{payWay}}</div>
                      <div>{{useWay}}</div>
                      <div>{{monthInterest}}</div>
                      <div>{{payAll}}</div>
                      <div>{{PS}}</div>
                    </div>
                    <hr/>
                    <div>
                      <label>用户信用评级：</label>
                      <label class="level">A</label>
                      <br/>
                      <label>项目风险评级:</label>
                      <label class="level">AA</label>
                      <br/>
                      <label>信用等级排序说明：</label>
                      <label class="level">AA</label>
                      <label>></label>
                      <label class="level">A</label>
                      <label >></label>
                      <label class="level">B</label>
                      <label>></label>
                      <label class="level">C</label>
                      <label>></label>
                      <label class="level">D</label>
                    </div>
                  </el-card>

                </div>

              </div>



          </el-tab-pane>
          <el-tab-pane label="借款人信息" style="padding:60px 60px 10px 30px;font-size:18px;line-height: 30px;">
            <doInvestingLoanerInfo></doInvestingLoanerInfo>
          </el-tab-pane>
          <el-tab-pane label="投标记录" style="padding:80px 60px 10px 30px;font-size:18px;line-height: 30px;">
            <el-table
              :data="tableData"
              height="290"
              border
              style="width: 100%">
              <el-table-column
                prop="date"
                label="日期"
                width="180">
              </el-table-column>
              <el-table-column
                prop="name"
                label="姓名"
                width="180">
              </el-table-column>
              <el-table-column
                prop="money"
                label="金额">
              </el-table-column>
            </el-table>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>

  </div>
</template>

<script>
    import navi from '@/components/navi.vue';
    import rightBar from '@/components/rightBar.vue';
    import doInvestingLoanerInfo from '@/components/doInvestingLoanerInfo.vue';
    export default {
      name: "DoInvesting",
      components:{navi,rightBar,doInvestingLoanerInfo},
      data(){
        return{
          tableData:[
            {date: '2018-05-03',
            name: '陈文博',
            money: '5000'
            },
            {date: '2018-06-13',
              name: '罗子俊',
              money: '500'
            },
            {date: '2018-08-08',
              name: '付贺然',
              money: '100'
            },
            {date: '2018-08-20',
              name: '吴欣怡',
              money: '400'
            },
            {date: '2018-08-29',
              name: '王刚',
              money: '400'
            },
          ],
          target_id:"723972",
          percentage:80,
          leftTime:"31天9小时50分04秒",
          revenueRate:8.0,
          lifeOfLoan:"2年",
          totalLoan:8000,
          leftNeeds:1600,
          userMoney:1000,
          num1: 100,
          tabPostion:"left",
          DoInvest:"确认投资",

          payWay:"还款方式：付息还本",
          useWay:"借款用途：托福培训",
          monthInterest:  "月还本息：180.32",
          payAll: "到期需还本金：8000",
          PS: "说明：在投资期限届满前，投资人不可以转让或赎回",

          //产品概要
          InvestInfo:"XXXXXXXXXXXX",
        }
      },
      methods: {
        formatTooltip(val) {
          return val;
        },
        handleChange(value) {
          console.log(value);
        }
      }
    }
</script>

<style scoped>
  .keypoint{
    font-size:40px;
    color: aquamarine;
  }
  .market_out{
    word-wrap: break-word;
    word-break: normal;
  }
  .level{
    font-size: 30px;color:deepskyblue;
    font-style:oblique;
    font-family:"Times New Roman";
  }
</style>
<style scoped>
  .market_out >>> .el-tabs__item{
    font-size: 20px;
    padding: 40px 20px 30px 20px;
    width:250px;
    text-align: left;
  }
  .gray {
    -webkit-filter: brightness(80%);
    filter: brightness(80%);
  }
  .small {
    color: white;
    font-size: 15px
  }






  @-webkit-keyframes sheen {
    0% {
      -webkit-transform: skewY(-45deg) translateX(0);
      transform: skewY(-45deg) translateX(0);
    }
    100% {
      -webkit-transform: skewY(-45deg) translateX(12.5em);
      transform: skewY(-45deg) translateX(12.5em);
    }
  }
  @keyframes sheen {
    0% {
      -webkit-transform: skewY(-45deg) translateX(0);
      transform: skewY(-45deg) translateX(0);
    }
    100% {
      -webkit-transform: skewY(-45deg) translateX(12.5em);
      transform: skewY(-45deg) translateX(12.5em);
    }
  }
  .wrapper {
    display: block;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }

  .button {
    padding: 0.5em 1.5em;
    text-align: center;
    text-decoration: none;
    color: #2194E0;
    border: 2px solid #2194E0;
    font-size: 18px;
    display: inline-block;
    border-radius: 0.3em;
    transition: all 0.2s ease-in-out;
    position: relative;
    overflow: hidden;
  }
  .button:before {
    content: "";
    background-color: rgba(255, 255, 255, 0.5);
    height: 100%;
    width: 3em;
    display: block;
    position: absolute;
    top: 0;
    left: -4.5em;
    -webkit-transform: skewX(-45deg) translateX(0);
    transform: skewX(-45deg) translateX(0);
    transition: none;
  }
  .button:hover {
    background-color: #2194E0;
    color: #fff;
    border-bottom: 4px solid #1977b5;
  }
  .button:hover:before {
    -webkit-transform: skewX(-45deg) translateX(13.5em);
    transform: skewX(-45deg) translateX(13.5em);
    transition: all 0.5s ease-in-out;
  }


</style>
<!--<style lang="scss" scoped>

  @import '../scss/element-variables.scss';

</style>-->
<!--
<style>
  .ruzhu-mess .el-form-item__label{
    font-size:16px!important;
  }
  .zhuanye-mess .el-form-item__label,.zhuanye-mess .color-t{
    font-size:16px!important;
    color:#606266;
  }
</style>
<style lang="scss" scoped>

  @import '../../../assets/scss/pages/organizationUserCenter1.scss';

</style>
-->




