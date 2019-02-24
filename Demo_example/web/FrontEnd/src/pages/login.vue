<template>
  <div class="container">
    <a href='/'><img src="/static/pic/logo1_white.png" style="width:12%;position:absolute;top:15px;left: 6%;" align=center></a><br>
    <div class="mainbox">
    <img id="ad" src="/static/pic/loginPic.png" style="width:32%;display: inline-block;margin-left: 16%">

      <el-card class="box-card loginbody">
        <h3 style="float: top;" align="center">登录</h3>
        <el-input id="account" class="loginInput" style="margin-top: 6%;" placeholder="账户/邮箱"></el-input>
        <el-input id="password" type="password" class="loginInput" style="margin-top: 8%;" align="center" placeholder="请输入密码"></el-input><br>
        <el-checkbox id="remember" style="margin-top: 3%;margin-left: 8%"></el-checkbox>
        <p style="display: inline;">记住密码</p>
        <a href="/findPassword" style="float: right;margin-right: 8%;display: inline;margin-top: 3%">忘记密码？</a>
        <el-button type="primary" id="login" v-on:click="login()" round>登录</el-button>
        <div style="width: 100%;text-align: center;margin-top: 20px">
          <a href="/signup" style="font-size: 16px;color: lightskyblue;">即刻注册</a>
        </div>
      </el-card>


      <!--<div style="text-align: center; color: white;text-align: center;font-size: 20px; margin-top: 2%">-->
        <!--<span style="color: white;text-align: center;font-size: 22px;font-family: 'Microsoft YaHei UI'">Trust,让你的大学生活更美好</span><br>-->
        <!--<p style="color: white;text-align: center;display: block;padding-top: 40px">@怎么码都码不队</p>-->
        <!--<div style="margin-top: 0;" class="bott">-->
          <!--<a>关于我们</a>|<a>联系我们</a>|<a>微博</a>-->
        <!--</div>-->
      <!--</div>-->

    </div>
    <footer-bar style="margin-top: calc(50% - 430px)"></footer-bar>
  </div>


</template>

<script>

  import footerBar from '@/components/footerBar.vue';
  import store from '../vuex/store'
  import * as types from '../vuex/types'
    export default {
      name: "login",
      components: {footerBar},
      methods: {
        login: function () {
          var ac=document.getElementById('account').value;
          var pw=document.getElementById('password').value;
          this.$axios.post('/user/signin', {"username": ac, "password": pw}).then(
            res => {
              store.commit(types.LOGIN, res.data['accessToken']);
              if(res.data.result==true){
                localStorage.ifLogin=1;
                localStorage.ifUnread=res.data.ifUnread;
                localStorage.photoSrc=res.data.photoSrc;
                localStorage.account=ac;
                this.$router.replace('/');
              }else{
                alert("账户或密码错误");
              }
            }).catch(err => {
            console.log(err)
          });
        }
      }
    }

</script>

<style scoped>
  .container {
    width:100%;
    background: #222;
    background-image:url('/static/pic/loginBackground.jpg');
    background-size: cover;
    background-attachment:fixed;
    background-position: center center;
    background-repeat: no-repeat;
    padding: 0;
  }

  .mainbox{
    margin-top: 100px;
    height: 330px;
  }

  .loginbody{
    width: 32%;
    height: 360px;
    position: relative;
    margin: auto;
    right: 100px;
    float: right;
  }

  .loginInput{
    width: 84%;
    margin-left: 8%;
  }

  button{
    width:84%;
    height:40px;
    font-size: 18px;
    margin-left: 8%;
    margin-top: 3%;
  }

  .bott a{
    color: lightyellow;
  }

  .el-carousel__item{
    background-size: cover;
    background-attachment:fixed;
    background-position: center center;
    background-repeat: no-repeat;
  }

  .el-carousel__item:nth-child(3) {
    background-image:url('/static/pic/loginBackground1.png');
  }
  .el-carousel__item:nth-child(4) {
     background-image:url('/static/pic/signupBackground.png');
   }

  .el-carousel__item:nth-child(5) {
    background-image:url('/static/pic/library.jpg');
  }




</style>
