<template>
  <div>
    <div>
      <el-table
        :data="tableData"
        stripe
        style="width: 100%">
        <el-table-column
          prop="name"
          label="项目名称"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="date"
          label="发布时间"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="year_rate"
          label="年利率"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="num"
          label="待还期数"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="principal_and_interest"
          label="待还本息(元)"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="next_return"
          label="下个还款日"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="money"
          label="还款日应还金额(元)"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop=""
          label="项目详情"
          align="center"
        >
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="">查看</el-button>
          </template>
        </el-table-column>

      </el-table>
    </div>

    <div class="projectPanel">
      <div class="projectPages">

      </div>
      <div id="poj_pagination" class="poj_pagination">
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
  </div>

</template>

<script>
    export default {
        name: "loan-underway",
        data(){
          return{
            currentPage1: 2,
            tableData:[{
              name:'托福考试借款项目',
              date:'2018/9/1',
              year_rate:'8%',
              num:9,
              principal_and_interest:2862,
              next_return:'2018/10/1',
              money:318,
            }, {
              name:'CPA考试借款项目',
              date:'2018/6/5',
              year_rate:'8%',
              num:9,
              principal_and_interest:513.33,
              next_return:'2018/10/1',
              money:513.33,
            }, {
              name:'ACCA考试借款项目',
              date:'2018/9/7',
              year_rate:'8%',
              num:12,
              principal_and_interest:3888,
              next_return:'2018/10/7',
              money:324,
            }, ],
          }
        },
      methods: {
        handleSizeChange(val) {
          console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
          console.log(`当前页: ${val}`);
        }
      },
    }
</script>

<style scoped>

  .poj_pagination{
    text-align: center;
    margin-top: 30px;
    margin-bottom: 20px;
  }

</style>
