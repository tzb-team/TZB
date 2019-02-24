<template>
  <el-tabs v-model="activeParent" @tab-click="handleClick" >
    <div class="Parent">

      <el-tab-pane label="项目信息" name="two">
        <div id="loan_id">
          <el-tabs v-model="activeChild" @tab-click="handleClick">
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
        </div>
      </el-tab-pane>
      <el-tab-pane label="基本资料" name="three">
        <loanerBasicInfo></loanerBasicInfo>
      </el-tab-pane>
      <el-tab-pane label="学业表现" name = "four">
      </el-tab-pane>
      <div v-if="showGraph">
        <academicPerformance></academicPerformance>
      </div>
      <el-tab-pane label="财务分析" name="one">
        <fin-analysis></fin-analysis>
      </el-tab-pane>
    </div>

  </el-tabs>
</template>

<script>
    import FinAnalysis from "./finAnalysis";
    import loanTopBar from "../components/loanTopBar";
    import loanUnderway from "../components/loanUnderway";
    import loanComplete from "../components/loanComplete";
    import loanLaunched from "../components/loanLaunched";
    import loanUnbelievable from "../components/loanUnbelievable";
    import loanerBasicInfo from "../components/loanerBasicInfo";
    import academicPerformance from "../components/academicPerformance";


    export default {
      name: "doInvestingLoanerInfo",
      components: {FinAnalysis,loanTopBar,loanUnderway,loanComplete,loanLaunched,loanUnbelievable,loanerBasicInfo,academicPerformance},
      data(){
        return{
          activeParent: 'three',
          activeChild:'first',
          showGraph:false,
        }
      },
      mounted() {

      },
      methods: {
        handleClick(tab, event) {
          if(this.activeParent=="four"){
            this.showGraph = true;
          }else{
            this.showGraph = false;
          }
        },
      }
    }

</script>



<style scoped>
  .Parent >>>.el-tabs__item{
    font-size: 15px;
    width:220px;
  }
</style>
