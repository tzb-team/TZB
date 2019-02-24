<template>
    <div>
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="正在进行" name="first">
          <div class="ChooseBar">
            <el-form v-model="underway_form">
              <el-form-item label="投资金额">
                <el-radio-group v-model="underway_form.money">
                  <el-radio-button label="全部"></el-radio-button>
                  <el-radio-button label="100以下"></el-radio-button>
                  <el-radio-button label="100-500"></el-radio-button>
                  <el-radio-button label="500-1000"></el-radio-button>
                  <el-radio-button label="1000以上"></el-radio-button>
                </el-radio-group>
              </el-form-item>
              <el-form-item label="项目时间">
                <el-radio-group v-model="underway_form.date">
                  <el-radio-button label="全部"></el-radio-button>
                  <el-radio-button label="15天之内"></el-radio-button>
                  <el-radio-button label="1个月之内"></el-radio-button>
                  <el-radio-button label="6个月之内"></el-radio-button>
                  <el-radio-button label="6个月以上"></el-radio-button>
                </el-radio-group>
              </el-form-item>
              <el-form-item label="项目状态">
                <el-radio-group v-model="underway_form.state">
                  <el-radio-button label="全部"></el-radio-button>
                  <el-radio-button label="正在还款"></el-radio-button>
                  <el-radio-button label="转让审核"></el-radio-button>
                </el-radio-group>

              </el-form-item>
            </el-form>

            <hr>

          </div>

          <div class="projectPanel">
            <div class="projectPages">
              <el-table
                :data="tableDataUnderway"
                stripe
                style="width: 100%">
                <el-table-column
                  prop="projectName"
                  align="center"
                  label="项目名称">
                </el-table-column>
                <el-table-column
                  prop="loanFrom"
                  align="center"
                  label="借款人">
                </el-table-column>
                <el-table-column
                  prop="loanDate"
                  align="center"
                  label="项目日期">
                </el-table-column>
                <el-table-column
                  prop="investAmount"
                  align="center"
                  label="投标金额(元)">
                </el-table-column>
                <el-table-column
                  prop="deadline_interest"
                  align="center"
                  label="期限/利率">
                </el-table-column>
                <el-table-column
                  prop="repayAmountMonth"
                  align="center"
                  label="每月还款金额">
                </el-table-column>
                <el-table-column
                  prop="deadlineDate"
                  align="center"
                  label="到期还款日期">
                </el-table-column>
                <el-table-column
                  prop="deadlineAmount"
                  align="center"
                  label="到期还款总金额(元)">
                </el-table-column>
                <el-table-column
                  prop="state"
                  align="center"
                  label="状态">
                </el-table-column>
                <el-table-column label="查看详情" align="center">

                  <template slot-scope="scope">
                    <el-button size="mini"><a href="DoInvesting.vue">查看详情</a></el-button>
                  </template>
                </el-table-column>
              </el-table>
            </div>
            <div class="poj_pagination">
              <div class="block">
                <!--<span class="demonstration">完整功能</span>-->
                <el-pagination
                  @size-change="handleSizeChange"
                  @current-change="handleCurrentChange"
                  :current-page="currentPage1"
                  :page-sizes="[10, 20, 30, 40]"
                  :page-size="10"
                  layout="total, sizes, prev, pager, next, jumper"
                  :total="40">
                </el-pagination>
              </div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="完成项目" name="second">
          <div class="ChooseBar">
            <el-form v-model="complete_form">
              <el-form-item label="投资金额">
                <el-radio-group v-model="complete_form.money">
                  <el-radio-button label="全部"></el-radio-button>
                  <el-radio-button label="100以下"></el-radio-button>
                  <el-radio-button label="100-500"></el-radio-button>
                  <el-radio-button label="500-1000"></el-radio-button>
                  <el-radio-button label="1000以上"></el-radio-button>
                </el-radio-group>
              </el-form-item>

              <el-form-item label="项目时间">
                <el-radio-group v-model="complete_form.date">
                  <el-radio-button label="立刻开始"></el-radio-button>
                  <el-radio-button label="5天之内"></el-radio-button>
                  <el-radio-button label="10天之内"></el-radio-button>
                  <el-radio-button label="10天以上"></el-radio-button>
                </el-radio-group>
              </el-form-item>

              <el-form-item label="项目状态">
                <el-radio-group v-model="complete_form.state">
                  <el-radio-button label="全部"></el-radio-button>
                  <el-radio-button label="正常还款"></el-radio-button>
                  <el-radio-button label="提前还款"></el-radio-button>
                  <el-radio-button label="成功转让"></el-radio-button>
                </el-radio-group>
              </el-form-item>
            </el-form>
          </div>
          <div class="projectPanel">
            <div class="projectPages">
              <el-table
                :data="tableDataDone"
                stripe
                style="width: 100%">
                <el-table-column
                  prop="projectName"
                  align="center"
                  label="项目名称">
                </el-table-column>
                <el-table-column
                  prop="loanFrom"
                  align="center"
                  label="借款人">
                </el-table-column>
                <el-table-column
                  prop="startEndDate"
                  label="筹资起止日期"
                  align="center"
                  width="160">
                </el-table-column>
                <el-table-column
                  prop="investAmount"
                  align="center"
                  label="可投标金额">
                </el-table-column>
                <el-table-column
                  prop="interest"
                  align="center"
                  label="预计年收益率">
                </el-table-column>
                <el-table-column
                  prop="state"
                  align="center"
                  label="状态">
                </el-table-column>
                <el-table-column
                  prop="get"
                  align="center"
                  label="项目收益额(元)">
                </el-table-column>
                <el-table-column label="查看详情" align="center">
                  <template slot-scope="scope">
                    <el-button size="mini"><a href="DoInvesting.vue">查看详情</a></el-button>
                  </template>
                </el-table-column>
              </el-table>
            </div>
            <div class="poj_pagination">
              <div class="block">
                <!--<span class="demonstration">完整功能</span>-->
                <el-pagination
                  @size-change="handleSizeChange"
                  @current-change="handleCurrentChange"
                  :current-page="currentPage1"
                  :page-sizes="[10, 20, 30, 40]"
                  :page-size="10"
                  layout="total, sizes, prev, pager, next, jumper"
                  :total="40">
                </el-pagination>
              </div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="收藏项目" name="third">
          <!--<div class="ChooseBar">
          </div>-->
          <div class="projectPanel">
            <div class="projectPages">
              <el-table
                :data="tableDataFavorite"
                stripe
                :default-sort = "{prop: '', order: 'descending'}"
                style="width: 100%">
                <el-table-column
                  sortable
                  align="center"
                  prop="projectName"
                  label="项目名称">
                </el-table-column>
                <el-table-column
                  sortable
                  align="center"
                  prop="loanFrom"
                  label="借款人">
                </el-table-column>
                <el-table-column
                  sortable
                  align="center"
                  prop="investAmount"
                  label="可投金额(元)">
                </el-table-column>
                <el-table-column
                  sortable
                  prop="startEndDate"
                  label="筹资截止日期">
                </el-table-column>
                <el-table-column
                  sortable
                  align="center"
                  prop="interest"
                  label="预计年收益率">
                </el-table-column>
                <el-table-column
                  sortable
                  align="center"
                  prop="months"
                  label="还款期限(月)">
                </el-table-column>
                <el-table-column
                  sortable
                  align="center"
                  prop="state"
                  label="状态">
                </el-table-column>
                <el-table-column
                  sortable
                  align="center"
                  prop="trust"
                  label="借款人信用分">
                </el-table-column>
                <el-table-column label="查看详情" align="center">
                  <template slot-scope="scope">
                    <el-button size="mini"><a href="DoInvesting.vue">查看详情</a></el-button>
                  </template>
                </el-table-column>
              </el-table>
            </div>
            <div class="poj_pagination">
              <div class="block">
                <!--<span class="demonstration">完整功能</span>-->
                <el-pagination
                  @size-change="handleSizeChange"
                  @current-change="handleCurrentChange"
                  :current-page="currentPage1"
                  :page-sizes="[10, 20, 30, 40]"
                  :page-size="10"
                  layout="total, sizes, prev, pager, next, jumper"
                  :total="40">
                </el-pagination>
              </div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="坏账记录" name="fourth">
          <div class="ChooseBar">
            <el-form v-model="bad_form">
              <el-form-item label="损失金额">
                <el-radio-group v-model="bad_form.money">
                  <el-radio-button label="全部"></el-radio-button>
                  <el-radio-button label="50以下"></el-radio-button>
                  <el-radio-button label="100-500"></el-radio-button>
                  <el-radio-button label="500以上"></el-radio-button>
                </el-radio-group>
              </el-form-item>
              <el-form-item label="项目状态">
                <el-radio-group v-model="bad_form.state">
                  <el-radio-button label="全部"></el-radio-button>
                  <el-radio-button label="正在追回"></el-radio-button>
                  <el-radio-button label="已结束"></el-radio-button>
                </el-radio-group>
              </el-form-item>
            </el-form>
            <hr>
          </div>
          <div class="projectPanel">
            <div class="projectPages">
              <el-table
                :data="tableDataBad"
                stripe
                style="width: 100%">
                <el-table-column
                  prop="projectName"
                  align="center"
                  label="项目名称">
                </el-table-column>
                <el-table-column
                  prop="loanFrom"
                  align="center"
                  label="借款人">
                </el-table-column>
                <el-table-column
                  prop="badStartDate"
                  align="center"
                  label="坏账发生日期">
                </el-table-column>
                <el-table-column
                  prop="investAmount"
                  align="center"
                  label="投标金额(元)">
                </el-table-column>
                <el-table-column
                  prop="lossAmount"
                  align="center"
                  label="损失金额(元)">
                </el-table-column>
                <el-table-column
                  prop="state"
                  align="center"
                  label="状态">
                </el-table-column>
                <el-table-column label="查看详情" align="center">
                  <template slot-scope="scope">
                    <el-button size="mini"><a href="DoInvesting.vue">查看详情</a></el-button>
                  </template>
                </el-table-column>
              </el-table>
            </div>
            <div class="poj_pagination">
              <div class="block">
                <!--<span class="demonstration">完整功能</span>-->
                <el-pagination
                  @size-change="handleSizeChange"
                  @current-change="handleCurrentChange"
                  :current-page="currentPage1"
                  :page-sizes="[10, 20, 30, 40]"
                  :page-size="10"
                  layout="total, sizes, prev, pager, next, jumper"
                  :total="40">
                </el-pagination>
              </div>
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
</template>

<script>

    import loanTopBar from "./loanTopBar";
    export default {
        name: "invest-info-tabs",
        components: {loanTopBar},
        data() {
        return {
          currentPage1: 1,
          activeName: 'first',

          underway_form:{
            money:'',
            options:[{
              value:'any',
              label:'不限'
            },{
              value:'small_loan',
              label:'小额短期借款'
            },{
              value:'large_loan',
              label:'大额长期借款'
            }],
            value_class:'any',
            date:'',
            state:''
          },
          complete_form:{
            money:'',
            date:'',
            state:''
          },
          bad_form:{
            money:'',
            state:''
          },


          formInline: {
            user: '',
            region: ''
          },
          value_radio1: '上海',
          value_radio2: '上海',
          value_radio3: '上海',

          tableDataUnderway: [{
            projectName: '考托福',
            loanFrom: '南一号',
            loanDate: '2018/1/11',
            investAmount: 300,
            deadline_interest: '3个月/1.03%',
            repayAmountMonth:27.25,
            deadlineDate:'2019/1/11',
            deadlineAmount:327,
            state:'转让审核中',
          },{
            projectName: '考会计',
            loanFrom: '南二号',
            loanDate: '2018/3/4',
            investAmount: 300,
            deadline_interest: '3个月/9%',
            repayAmountMonth:45,
            deadlineDate:'2019/9/4',
            deadlineAmount:540,
            state:'正常还款'
          }, {
            projectName: '考CAAC',
            loanFrom: '南三号',
            loanDate: '2018/8/9',
            investAmount: 400,
            deadline_interest: '3个月/8%',
            repayAmountMonth:45,
            deadlineDate:2019/3/4,
            deadlineAmount:540,
            state:'正常还款'
          },],

          tableDataDone: [{projectName: '买IPAD', loanFrom: '南四号', startEndDate: '2018/1/1-2018/5/31',
            investAmount: 300, interest: '10%', state:'已转让', get:0
          },{projectName: '买相机', loanFrom: '南五号', startEndDate: '2018/3/4-2018/6/30',
            investAmount: 500, interest: '8.5%', state:'已结束', get:10.62
          },{projectName: '出国交流', loanFrom: '南一号', startEndDate: '2018/3/1-2018/6/30',
            investAmount: 700, interest: '9.5%', state:'已结束', get:66.5
          },{projectName: '看演唱会', loanFrom: '南四号', startEndDate: '2018/7/1-2018/12/1',
            investAmount: 400, interest: '5.9%', state:'已结束', get:23.6
          },],

          tableDataFavorite: [{projectName: '看舞剧', loanFrom: '南四号', startEndDate: '2018/9/30',
            investAmount: 300, interest: '10%',months:7, state:'筹资中', trust:'90(AA)'
          },{projectName: '旅游', loanFrom: '南五号', startEndDate: '2018/9/2',
            investAmount: 200, interest: '9.2%',months:8, state:'已结束', trust:'91(AA)'
          },{projectName: '考FRM', loanFrom: '南六号', startEndDate: '2018/11/2',
            investAmount: 600, interest: '8.2%', months:8,state:'筹资中', trust:'95(AA)'
          }],

          tableDataBad: [{projectName: '买iPhone', loanFrom: '南九号', badStartDate: '2018/1/1',
            investAmount: 300, lossAmount: 100, state:'正在追回'
          },{projectName: '考GRE', loanFrom: '南十号', badStartDate: '2018/3/4',
            investAmount: 500, lossAmount: 100, state:'已结束'
          }],
        };
      },
        methods:{
        handleClick(tab, event) {
          console.log(tab, event);
        },
        onSubmit() {
          console.log('submit!');
        },
        handleSizeChange(val) {
          console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
          console.log(`当前页: ${val}`);
        },
      }
    }
</script>

<style scoped>

  .poj_pagination{
    text-align: center;
    margin-top: 30px;
    margin-bottom: 20px;
  }

  .ChooseBar{
    min-height: 150px;
    /*background-color: ghostwhite;*/
  }

</style>

<style>
  .el-tabs__item{
    font-size: 18px !important;
  }

  #leftII { color: dodgerblue !important}
  #mainpanel { min-height: 400px !important}
</style>
