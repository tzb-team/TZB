<template>
  <div class="leftsidenav" >
    <div style="position:relative;top:30px;">
    <div class="left_menus">
      <p class="left_head"  ><b>用户信息</b></p><hr/>
      <ul class="left_ul">
        <li><a href="/EnterVerify" id="leftA" >非结构化信息</a></li>
      </ul>
      <hr/>
    </div>
    <div class="left_menus">
      <p class="left_head"><b>借款申请</b></p><hr/>
      <ul class="left_ul">
        <li><a href="/smalltargetcheck" id="leftB">小额标的</a></li>
        <li><a href="/largetargetcheck" id="leftC">大额标的</a></li>
      </ul>
    </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "leftCheckBar",
    methods: {
  }
  }
</script>

<style scoped>
  /*----------左侧导航栏样式-------------*/
  div.leftsidenav{
    background:white;
    border:1px solid #e4e4e4;
    border-top:5px solid dodgerblue;
    height:450px;
    //width:230px;
    /*margin-right: 10%;*/
    margin-left: 25%;
    box-shadow:
      0 1px 6px 0 rgba(0,0,0, .12),
      0 1px 6px 0 rgba(0,0,0, .12);
    border-radius: 3px;
  }
  /*----------左侧导航栏修正----------*/
  .left_menus ul{
    list-style: none;
    position: relative;
  }

  .left_head {
    font-size: 16px;
    color: #48576a;
    text-indent: 8%;
    margin-top: -3%;
    margin-bottom: -3%;
  }

  .left_ul li{
    margin: 3%;
    padding: 0;
    min-width: 80px;
    font-size: 15px;
  }

  .left_ul li a{
    color: #777777;
    text-decoration:none;
  }

  .left_ul li a:hover{
    color: dodgerblue;
  }

  .left_ul li a:active{
    color: dodgerblue;
  }
</style>
