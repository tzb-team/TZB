<template>
  <div>
    <!--顶栏-->
    <div class="col-xs-12 col-md-12" style="padding: 0;position: relative;background-color: black;">
      <navi style="position: relative"></navi>
    </div>
    <!--简介-->
    <div class="col-xs-12 col-md-12" style="padding: 0;position: relative;">
      <div class="myspace">
        <h2 class="myspace" style="margin-left:2%;">审核中心</h2>
        <p style="color: #777777;margin-left:2%;" >平台人工审核用户非结构化信息及各类标的请求</p>
      </div>
    </div>

    <!--正文-->
    <div style="background-color: #D9F3FB;">
      <div class="container-fluid">
        <div class="row">
          <div class="col-xs-12 col-sm-3 col-md-3" style="margin-top:50px;">
            <left-check-bar></left-check-bar>
          </div>
          <div class="col-xs-12 col-sm-9 col-md-9" id ="mainbody" style="margin-top:50px;">
            <div class="panel-group">
              <div class="panel panel-default" id="mainpanel" style="min-height: 650px">
                <div class="panel-heading">
                  <h4 class="panel-title" id="tmptitle">
                    {{ paneltitle }}
                  </h4>
                </div>
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


    <!--底栏-->
    <div class="col-xs-12 col-md-12" style="padding: 0;position: relative;background-color: black;">
      <footerBar></footerBar>
    </div>

  </div>
    
</template>

<script>
  import navi from "../components/navi";
  import leftCheckBar from "../components/leftCheckBar";
  import footerBar from "../components/footerBar";
  import rightBar from "./leftAlumniBar";

  export default {
    name: "CheckCenter",
    components: {leftCheckBar, footerBar, navi,rightBar},
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
    //margin-left: 3em;
    //margin-right: 3em;
    height: max-content;
  }

</style>
