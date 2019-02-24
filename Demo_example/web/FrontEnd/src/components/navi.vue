<template>
  <div class="whole" id="navi" style="width:100%;">
    <a href="/"><img src="/static/pic/logo_silverBlue.png" id="naviLogo" class="img-responsive logo" alt="Cinque Terre"></a>

    <nav class="navbar navbar-inverse wholeNav">
      <div class="container-fluid" style="width: 100%">
        <div class="collapse navbar-collapse" id="myNavbar" style="display: inline-block;font-size: 16px;width: 100%">
          <ul class="nav navbar-nav" id="nav" style="width: 100%">
            <li><a id="invest" href="/enterInvest">投资大厅</a></li>
            <li><a id="loan" href="/enterLoan">我要借款</a></li>
            <li><a id="trade" href="/trade">南大鱼塘</a></li>
            <li><a id="notice" href="/notice/found">失物/寻物</a></li>
            <li><a id="guide" href="/guide">平台指南</a></li>
            <li id="last" style="float: right;min-width: 8%;"><a id="signup" href="/signup">注册</a></li>
            <li id="secondLast" style="float: right;min-width: 8%;"><a id="login" href="/login">登录</a></li>
          </ul>
        </div>
      </div>
    </nav>
    <div id="manageAccount">
      <button style="background-color: lightskyblue">用户模式</button>
      <a href="./usermanage" id="admin"><button>管理模式</button></a>
      <a href="./EnterVerify" id="EnterVerify"><button>审核模式</button></a>
      <button v-on:click="logout">退出</button>
    </div>
  </div>
</template>

<script>
export default {
  inject:['reload'],
  name: 'navi',
  mounted: function () {
    $(localStorage.route).css("color","dodgerblue");
    if(localStorage.route=="#homepage"){
      document.getElementById("naviLogo").src="/static/pic/logo1_white.png";
    }
    //localStorage.ifAdmin=0;
    var ifAdmin=localStorage.ifAdmin;
    if(ifAdmin==0){
      $("#admin").remove();
    }
    //localStorage.ifExamine=0;
    var ifExamine=localStorage.ifAdmin;
    if(ifExamine==0){
      $("#examine").remove();
    }



    // localStorage.ifLogin = true;
    // localStorage.ifUnread = true;
    // localStorage.photoSrc = '/static/pic/photo.jpg';
    // localStorage.account="test";

    $("#manageAccount").css('display','none');
    if (localStorage.ifLogin==1){
      document.getElementById('last').removeChild(document.getElementById('signup'));
      document.getElementById('secondLast').removeChild(document.getElementById('login'));
      var personalCenter = document.createElement('a');
      personalCenter.innerText = '个人中心';
      personalCenter.href = '/userSpace';
      personalCenter.id='userSpace';
      var newLi = document.createElement('li');
      newLi.style.cssFloat = 'right';
      $('#nav').append(newLi);
      newLi.appendChild(personalCenter);

      var message = document.createElement('img');
      message.className = 'message';
      message.id = 'message';
      message.src = '/static/pic/message_white.png';
      var mes=document.createElement('a');
      mes.href="/messageList";
      mes.appendChild(message);
      mes.style.border="none";
      mes.style.paddingBottom="5px";
      mes.style.paddingTop="12px";
      document.getElementById('secondLast').appendChild(mes);

      if (localStorage.ifUnread==1){
        message.src = '/static/pic/message_yellow.png';
      }

      $('#last').hover(
        function(){
          $('#last').css('border-bottom','3px solid transparent');
          $('#last').css('border-top','3px solid transparent');
        },
        function(){
          $('#last').css('border-bottom','3px solid transparent');
          $('#last').css('border-top','3px solid transparent');
        }
      );
      $('#secondLast').hover(
        function(){
          $('#secondLast').css('border-bottom','3px solid transparent');
          $('#secondLast').css('border-top','3px solid transparent');
        },
        function(){
          $('#secondLast').css('border-bottom','3px solid transparent');
          $('#secondLast').css('border-top','3px solid transparent');
        }
      );
      $('.message').hover(
        function(){
          message.src = '/static/pic/message_blue.png';
        },
        function(){
          if(localStorage.ifUnread==1){
            message.src = '/static/pic/message_yellow.png';
          }else{
            message.src = '/static/pic/message_white.png';
          }
        }
      );

      var photo = document.createElement('img');
      photo.id="photo";
      photo.className = 'photo';
      photo.src = localStorage.photoSrc;
      document.getElementById('last').appendChild(photo);
      photo.onmouseover=function(e){
        $("#manageAccount").css('display','inherit');
        $(navi).mouseleave(function (e) {
          $("#manageAccount").css('display','none');
        })
      }
    }
  },

  methods: {
    logout: function () {
      localStorage.ifLogin = 0;
      this.$router.replace("/");
      this.reload();
      this.$axios.get("/logout", {"account": localStorage.account}).then(res => {

      });
    },

  }
}
</script>



<style scoped>
  .whole{
    padding: 0;
    position: absolute;
    background-color: black;
    z-index: 1;
  }


  .wholeNav{
    border-color: transparent;
    display: inline-block;
    width: 84%;
    min-width: 80%;
    min-height: 30px;
    margin-top: 5px;
    margin-bottom: 0;
    background-color: black;
  }



</style>

<style>
  #naviLogo{
    max-width: 9%;
    display: inline-block;
    margin-left: 6%;
    margin-top: -48px;
  }

  #nav li{
    min-width: 10%;
    text-align: center;
    border-top:3px solid transparent;
    border-bottom:3px solid transparent;
  }

  #nav li:hover{
    border-top:3px solid dodgerblue;
    border-bottom:3px solid dodgerblue;
  }

  #nav li:hover a{
    color:dodgerblue;
  }

  .message{
    height:25px;
    width: auto;
    margin-top: 0px;
    cursor: pointer;
  }

  .message:hover{
    height:25px;
    width: auto;
  }

  .photo{
    margin-top: 4px;
    width: 40px;
    height: 40px;
    border-radius: 20px;
    cursor: pointer;
  }

  #nav li a{
    color: white;
  }

  #manageAccount{
    background-color: ghostwhite;
    border-color: #efefef;
    position: absolute;
    top:51px;
    right: 4%;
    width: 10%;
    display: none;
    z-index: 2;
  }

  #manageAccount button{
    background-color: ghostwhite;
    border: 0.5px #efefef solid;
    width: 100%;
  }

  #manageAccount button:hover{
    background-color: lightblue;
    border: 0.5px #efefef solid;
    width: 100%;
  }

</style>
