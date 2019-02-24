<template>
  <div id="app">
    <adminNavi></adminNavi>
    <div>
      <right-bar></right-bar>
    </div>
    <el-form class="back">
      <div class="left">
        <div class="left_label look_label" @click="change11">
          后台数据统计—基础数据
        </div>
        <div class="left_label ask_label" @click="change22">
          后台数据统计—违约信息
        </div>
      </div>

      <div id="basic_data" style="margin-top: 100px; display: none;">
        <el-table
          :data="tableData"
          style="margin-left: 30%">
          <el-table-column
            prop="total"
            label="总额"
            width="140"
            align="center">
          </el-table-column>
          <el-table-column
            prop="total_num"
            label=""
            width="140"
            align="center">
          </el-table-column>
          <el-table-column
            prop="average"
            label="人均统计"
            width="140">
          </el-table-column>
          <el-table-column
            prop="average_num"
            label=""
            width="140">
          </el-table-column>
          <el-table-column
            prop="other"
            label="其他统计"
            width="200">
          </el-table-column>
          <el-table-column
            prop="other_num"
            label=""
            width="140">
          </el-table-column>
        </el-table>

      </div>
      <div id="default_info" style="margin-top: 100px;">
        <el-table
          :data="tableData2"
          style="margin-left: 30%">
          <el-table-column
            prop="default_name1"
            label="违约统计"
            width="140"
            align="center">
          </el-table-column>
          <el-table-column
            prop="default_num1"
            label=""
            width="140"
            align="center">
          </el-table-column>
          <el-table-column
            prop="default_name2"
            label=""
            width="140">
          </el-table-column>
          <el-table-column
            prop="default_num2"
            label=""
            width="140">
          </el-table-column>
          <el-table-column
            prop="default_name3"
            label=""
            width="140">
          </el-table-column>
          <el-table-column
            prop="default_num3"
            label=""
            width="140">
          </el-table-column>
        </el-table>
      </div>

    </el-form>
    <footerBar style="float: bottom"></footerBar>
  </div>
  <!--<footerBar style="float: bottom"></footerBar>-->
</template>

<script>
  import adminNavi from '@/components/adminNavi.vue';
  import ElCard from "element-ui/packages/card/src/main";
  import footerBar from '@/components/footerBar.vue';
  import rightBar from '@/components/rightBar.vue';
  import evaluate from '@/components/evaluate.vue';

  export default {
    name: "backAdmin",
    components:{
      ElCard,
      adminNavi,
      footerBar,
      rightBar,
      evaluate
    },
    beforeCreate:function(){
      localStorage.route = "";
    },
    methods:{
      change11(){
        document.getElementById("default_info").style.display = "none";
        document.getElementById("basic_data").style.display = "inline";
      },
      change22(){
        document.getElementById("default_info").style.display = "inline";
        document.getElementById("basic_data").style.display = "none";
      },
    },

    data(){
      return {
        pickerOptions1: {
          disabledDate(time) {
            return time.getTime() > Date.now();
          },
        },
        tableData: [{
          total: '交易总额',
          total_num: '25600',
          average: '人均累计借贷额度',
          average_num:'610',
          other:'最大单客户借款余额占比',
          other_num:'12%'
        }, {
          total: '交易总笔数',
          total_num: '42',
          average: '笔均借款额度',
          average_num:'610',
          other:'最大10户借款余额占比',
          other_num:'57%'
        }, {
          total: '借款人数量',
          total_num: '42',
          average: '人均累计投资额度',
          average_num:'406',
          other:'平均满标时间',
          other_num:'21天'
        },{
          total: '投资人数量',
          total_num: '63',
          average: '',
          average_num:'',
          other:'',
          other_num:''
        }],

        tableData2: [{
          default_name1: '累计违约率',
          default_num1: '4.76%',
          default_name2: '逾期项目数',
          default_num2:'2',
          default_name3:'项目逾期率',
          default_num3:'0'
        },
          {
            default_name1: '近三月项目逾期率',
            default_num1: '4.76%',
            default_name2: '借款逾期金额',
            default_num2:'800',
            default_name3:'待偿金额',
            default_num3:'0'
          },
          {
            default_name1: '借贷金额逾期率',
            default_num1: '4.76%',
            default_name2: '借贷坏账率',
            default_num2:'930',
            default_name3:'客户投诉情况',
            default_num3:'0'
          }],

        formInline:{
          money:'',
          category:'any',
          return_date:''
        }
      };
    },

  }
</script>

<style scoped>

  .left_label{
    width:200px;
    height:50px;
    /*margin-top: 20px;*/
    /* border: 1px black solid;*/
    text-align:center;
    padding-top: 17px;
    font-size: 16px;
  }

  .look_label{
    background-color: lightskyblue;
    opacity:0.5;
  }

  .ask_label{
    background-color: rgba(17, 17, 17, 0.17);
    opacity:0.5;
  }


  .back{
    /*background-color: rgba(173,216,230,0.5);*/
    width: 100%;
    /* height: 1700px;*/
    display:flex;
    margin-bottom: 50px;
  }
  .left{
    /*border:1px black solid;*/
    width:200px;
    height: 150px;
    margin-top: 120px;
    padding-top: 20px;
    position: fixed;
  }


</style>
