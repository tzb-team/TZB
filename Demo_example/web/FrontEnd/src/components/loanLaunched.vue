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
          label="借款金额(元)"
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
          prop="launch_date"
          label="发布时间"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="state"
          label="项目状态"
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
        name: "loan-launched",
        data(){
          return{
            currentPage1: 2,
            tableData:[{
              name:'购买天文望远镜',
              money:2000,
              year_rate:'4.9%',
              launch_date:'2018/6/23',
              state:'审核通过待处理'
            }, {
              name:'日常生活费',
              money:1500,
              year_rate:'3.0%',
              launch_date:'2018/8/17',
              state:'已取消'
            }, {
              name:'钢琴课程费',
              money:1000,
              year_rate:'2.6%',
              launch_date:'2018/9/11',
              state:'正在融资'
            }, {
              name:'伯克利交换',
              money:20000,
              year_rate:'5.12',
              launch_date:'2018/9/15',
              state:'审核通过待处理'
            }],
          }// end return
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
