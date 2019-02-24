<template>
  <personalCenter paneltitle="项目信息">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="正在进行" name="first">
        <loanTopBar></loanTopBar>
        <loanUnderway></loanUnderway>
      </el-tab-pane>
      <el-tab-pane label="完成项目" name="second">
        <loanTopBar></loanTopBar>
        <loanComplete></loanComplete>
      </el-tab-pane>
      <el-tab-pane label="已发布项目" name="third">
        <loanTopBar></loanTopBar>
        <loanLaunched></loanLaunched>
      </el-tab-pane>
      <el-tab-pane label="违约记录" name="fourth">
        <loanTopBar></loanTopBar>
        <loanUnbelievable></loanUnbelievable>
      </el-tab-pane>
    </el-tabs>

   <!-- <div class="projectPanel">
      <div class="projectPages">

      </div>
      <div id="poj_pagination">
        <div class="block">
          &lt;!&ndash;<span class="demonstration">完整功能</span>&ndash;&gt;
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

    </div>-->

  </personalCenter>
</template>

<script>
  import personalCenter from "../components/personalCenter";
  import loanTopBar from "../components/loanTopBar";
  import loanUnderway from "../components/loanUnderway"
  import loanComplete from "../components/loanComplete"
  import loanLaunched from "../components/loanLaunched"
  import loanUnbelievable from "../components/loanUnbelievable"

  export default {
    name:"loaninformation",
    components: {personalCenter,loanTopBar,loanUnderway,loanComplete,loanLaunched,loanUnbelievable},
   /* methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
    },*/
    data() {
      return {
        currentPage1: 2,
        activeName: 'first',
      };
    },
    methods:{
      handleClick(tab, event) {
        console.log(tab, event);
      },
    }
  }

</script>

<style scoped>
  /*#poj_pagination{
    text-align: center;
    margin-top: 30px;
    margin-bottom: 20px;
  }*/

  .type_choose_btn{
    padding-left: 50px;
    padding-right: 50px;
  }

</style>

<style>
  .el-tabs__item{
    font-size: 18px !important;
  }
</style>

<style>
  /*#leftOV,#leftFS,#leftSP,#leftBI,#leftLS,#leftII,#leftIE,#leftNC,#leftAC,#leftCC{ color: #777777 !important; }*/
  #leftLI { color: dodgerblue !important}
</style>
