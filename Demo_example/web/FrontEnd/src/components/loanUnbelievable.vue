<template>
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
          prop="money"
          label="借款金额"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="service_money"
          label="违约服务费(元)"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="occurrence_date"
          label="违约发生日期"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="days"
          label="违约天数"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="details"
          label="违约详情"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="state"
          label="当前状态"
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
        name: "loan-unbelievable",
        data(){
          return{
            currentPage1: 2,
            tableData:[{
              name:'ACCA考试借款项目',
              money:3600,
              service_money:0.144,
              occurrence_date:'2018/9/27',
              days:2,
              details:'逾期',
              state:'已处理'
            }]
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
