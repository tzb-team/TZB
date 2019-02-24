<template>
  <div class="leftsidenav" style="position:relative;left:-160px;top:50px;">
    <div style="position:relative;top:30px;">
      <div class="left_menus">
        <p class="left_head"><b>与我相关</b></p><hr/>
        <ul class="left_ul">
          <li><a id="leftFB" href="/notice">发布消息</a></li>
          <li><a id="leftZZ" href="/notice/mesunderway">正在进行</a></li>
          <li><a id="leftYJ" href="/notice/mesdone">已经完成</a></li>
        </ul>
        <hr/>
      </div>
      <div class="left_menus">
        <p class="left_head"><b>消息集散</b></p><hr/>
        <ul class="left_ul">
          <li><a id="leftSX" href="/notice/found">失物/寻物</a></li>
          <!--<li><a href="/notice/lost">寻物启事</a></li>-->
          <li><a id="leftQT" href="/notice/#">其他</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "leftInformationbar"
    }
</script>

<style scoped>
  /*----------左侧导航栏样式-------------*/
  div.leftsidenav{
    background:white;
    border:1px solid #e4e4e4;
    border-top:5px solid dodgerblue;
    height:450px;
    width:200px;
    margin-right: 10%;
    margin-left: 18%;
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
