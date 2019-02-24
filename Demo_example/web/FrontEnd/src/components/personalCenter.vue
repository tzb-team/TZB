<template>
  <div>
    <div class="col-xs-12 col-md-12" style="padding: 0;position: relative;background-color: black;">
      <navi style="position: relative"></navi>
    </div>

    <div class="col-xs-12 col-md-12" style="padding: 0;position: relative;z-index: 1">
      <div class="myspace">
        <div v-if="isStudent">
          <h2 class="myspace">个人中心</h2>
          <!--<p style="color: #777777;">在此处，你可以查看个人财务统计和收藏情况，并进行信用验证</p>-->
        </div>
        <div v-if="!isStudent">
          <h2 class="myspace">个人中心</h2>
          <!--<p style="color: #777777;">在此处，你可以查看个人财务统计并追踪校友投资详情</p>-->
        </div>
        <br/>
      </div>
    </div>
    <!--background-color: #D9F3FB-->
    <div class="col-xs-12 col-md-12" style="padding: 0;position: relative; background-color: #D9F3FB; min-height: 800px">
      <div class="container-fluid">
        <div class="row">
          <div style="height: 50px">
            <!--纯粹占个位置。。-->
          </div>
          <div class="col-xs-12 col-sm-3 col-md-3">
            <left-user-bar v-if="isStudent"></left-user-bar>
            <left-alumni-bar v-if="!isStudent"></left-alumni-bar>
          </div>
          <div class="col-xs-12 col-sm-9 col-md-9" id ="mainbody" >
            <div class="panel-group">
              <div class="panel panel-default" id="mainpanel" style="min-height: 650px">
                <div class="panel-heading">
                  <h4 class="panel-title" id="tmptitle">
                    {{ paneltitle }}
                  </h4>
                </div>
                <div>
                  <div class="panel-body" id="maincontext">
                    <div class="row placeholders">
                      <slot></slot>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xs-12 col-md-12" style="padding: 0;position: relative;background-color: black;">
    <footer-bar></footer-bar>
  </div>
  </div>
</template>

<script>
  import navi from "../components/navi";
  import leftUserBar from "../components/leftUserBar";
  import FooterBar from "../components/footerBar";
  import LeftAlumniBar from "./leftAlumniBar";
  // import userPanel from "../components/userPanel";

  export default {
    name:"personalCenter",
    components: {LeftAlumniBar, FooterBar, leftUserBar, navi},
    data(){
      return {
        isStudent : true,
      }
    },
    props:['paneltitle']
  }

</script>

<style scoped>

  div.myspace{
    /*个人中心*/
    text-indent: 4.5%;
    color: black;
    background-color: white;
    margin: 0px;
    border: 0px;
    padding: 5px;
    box-shadow:
      0 1px 6px 0 rgba(0,0,0, .12),
      0 1px 6px 0 rgba(0,0,0, .12);
    border-radius: 3px;
  }

  .myspace p{
    font-size: 15px;
    color: #505050;
  }

  .panel-group{
    box-shadow:
      0 1px 6px 0 rgba(0,0,0, .12),
      0 1px 6px 0 rgba(0,0,0, .12);
    border-radius: 3px;
    margin-right: 5.2%;

  }

  #mainpanel .panel-heading
  {
    background-color: white;
    border-bottom: 1px solid whitesmoke;
    height: 50px;
  }

  #mainpanel .panel-title
  {
    display: block;
    font-size: 18px;
    font-weight: bold;
    color: #48576a;
    background: white;
    padding-left: 5px;
    padding-top: 5px;
    position: relative;
  }

  #maincontext {
    margin-left: 3em;
    margin-right: 3em;
    height: max-content;
  }

</style>
