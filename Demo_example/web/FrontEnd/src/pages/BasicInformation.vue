<template>
  <personalCenter paneltitle="基本信息">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="个人资料" name="first">
        <div id="userinformation">
          <div class="col-xs-12 col-md-12">
            <div class="col-xs-12 col-sm-8 placeholder">
              <div class="user_info">
                <div class="table-responsive">
                  <table class="table" style="border: 0px solid transparent">
                    <tbody>
                    <tr>
                      <th>用户名</th>
                      <td> {{ userName.name }} </td>
                    </tr>
                    <tr>
                      <th>性别</th>
                      <td> {{ userName.sex }} </td>
                    </tr>
                    <tr>
                      <th>年龄</th>
                      <td> {{ userName.age }} </td>
                    </tr>
                    <tr>
                      <th>账户等级</th>
                      <td> {{ userName.level }} </td>
                    </tr>
                    <tr v-if="true">
                      <th>学号</th>
                      <td> {{ userName.stuNum }} </td>
                    </tr>
                    <tr v-if="true">
                      <th>年级</th>
                      <td> {{ userName.grade }} </td>
                    </tr>
                    <tr v-if="true">
                      <th>专业</th>
                      <td> {{ userName.major }} </td>
                    </tr>
                    <tr>
                      <th>手机号</th>
                      <td> {{ userName.phone }} </td>
                    </tr>
                    <tr>
                      <th>支付宝账号</th>
                      <td> {{ userName.alipay }} </td>
                    </tr>
                    <tr>
                      <th>邮箱</th>
                      <td> {{ userName.email }} </td>
                    </tr>
                    <tr v-if="true">
                      <th>工作单位</th>
                      <td> {{ userName.workaddr }} </td>
                    </tr>
                    <tr>
                      <th>现居地</th>
                      <td colspan="3" rowspan="2">{{ userName.address }}</td>
                    </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div class="col-xs-6 col-sm-4 placeholder">
              <br>
              <img src="/static/pic/nju_user.jpg" width="200" height="200" class="img-responsive img-thumbnail" alt="User_pic" >
              <!--<div style="display: none;">-->
                <!--<h4>{{ userName.name }}</h4>-->
                <!--<span class="text-muted">{{ userName.level }}</span>-->
              <!--</div>-->
            </div>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="修改资料" name="second">
        <div style="padding-left: 60px;padding-right: 200px">
          <br/>
          <el-form ref="userName"  :model="userName" label-width="80px" :label-position="labelPosition">
            <el-form-item label="用户名" prop="name">
              <el-input v-model="userName.name"></el-input>
            </el-form-item>
            <el-form-item label="性别" prop="sex">
              <template>
                <el-radio v-model="userName.sex" label="男">男</el-radio>
                <el-radio v-model="userName.sex" label="女">女</el-radio>
              </template>
            </el-form-item>
            <el-form-item label="年龄" prop="age">
              <el-input v-model="userName.age"></el-input>
            </el-form-item>
            <el-form-item label="工作单位" prop="workaddr">
              <el-input v-model="userName.workaddr"></el-input>
            </el-form-item>
            <el-form-item label="现居地" prop="address">
              <el-input v-model="userName.address"></el-input>
            </el-form-item>
            <el-form-item style="float:right;">
              <el-button type="primary" @click="submitForm('revice')">提交</el-button>
              <el-button @click="resetForm('revice')">重置</el-button>
            </el-form-item>
          </el-form>

        </div>
      </el-tab-pane>
      <el-tab-pane label="安全服务" name="third">
        <div class="user_sec">
          <div class="chooseButton">
            <el-radio v-model="secService" label="1" >修改密码</el-radio>
            <el-radio v-model="secService" label="2" >修改绑定邮箱</el-radio>
            <el-radio v-model="secService" label="3" >修改绑定手机</el-radio>
            <el-radio v-model="secService" label="4"  >设置密保问题</el-radio>
          </div><hr/><br/>
          <div v-show="secService=='1'">
            <changepassword></changepassword>
          </div>
          <div v-show="secService=='2'">
            <modifymailbox></modifymailbox>
          </div>
          <div v-show="secService=='3'">
            <modifyphone></modifyphone>
          </div>
          <div v-show="secService=='4'">
            <set-password-protection></set-password-protection>
          </div>
        </div>

      </el-tab-pane>
    </el-tabs>
  </personalCenter>
</template>

<script>
  import personalCenter from "../components/personalCenter";
  import Changepassword from "../components/changePassword";
  import OrdinaryNormalCheck from "../components/ordinaryNormalCheck";
  import Modifymailbox from "../components/modifyMailBox";
  import Modifyphone from "../components/modifyPhone";
  import SetPasswordProtection from "../components/setPasswordProtection";

  export default {
    name:"basicinformation",
    components: {SetPasswordProtection, Modifyphone, Modifymailbox, OrdinaryNormalCheck, Changepassword, personalCenter},
    data() {
      return {
        activeName: 'first',
        userName: {
          name: '南小紫',
          sex: '女',
          age: '20',
          level: '高级账户',
          stuNum: '161090000',
          grade: '大二',
          major: '金融学',
          phone: '13055644123',
          alipay: '13055644123',
          email: 'lovetrust@trust.com',
          workaddr: '南京大学',
          address: '江苏省南京市栖霞区仙林大道163号南京大学仙林校区'
        },
        secService: '1',
        labelPosition: 'right',
        // revice: {
        //   name: '李世民',
        //   sex: '男',
        //   age: '18',
        //   level: '高级账户',
        //   stuNum: '161220000',
        //   grade: '大二',
        //   major: '临床医学',
        //   phone: '13055644123',
        //   alipay: '13175050438',
        //   email: '135782468@126.com',
        //   workaddr: '华为技术有限公司',
        //   address: '江苏省南京市栖霞区仙林大道163号'
        // }
      };
    },
    methods: {
      handleClick(tab, event) {
        if(activeName == 'second')
        {
          alert('修改密码');
        }
        else
        {
          alert('hhh');
        }
        console.log(tab, event);
      },
    }
  }

</script>

<style scoped>

  /*----------用户信息查看-------------*/
  div.user_info{
    margin-top: 2%;
    margin-left: 6%;
    margin-right: 6%;
    text-align: left;
    font-size: 16px;
    color: #505050;
    min-height: 550px;
  }

  div.user_sec{
    margin-top: 2%;
    margin-left: 6%;
    margin-right: 6%;
    text-align: left;
  }

  .user_info .table>tbody>tr>td{
    border:0px;
  }

  .user_info .table>tbody>tr>th{
    border:0px;
    min-width: 110px;
  }

  .user_credit caption>b{
    color: #333333;
    font-size: large;
  }

  .user_info_title{
    color: #505050;
  }

</style>

<style>
  .el-tabs__item{
    font-size: 18px !important;
  }
</style>

<style>
  /*#leftOV,#leftFS,#leftSP,#leftLI,#leftLS,#leftII,#leftIE,#leftNC,#leftAC,#leftCC{ color: #777777 !important; }*/
  #leftBI { color: dodgerblue !important}
</style>
