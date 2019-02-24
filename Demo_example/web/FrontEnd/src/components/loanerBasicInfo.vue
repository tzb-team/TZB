<template>
    <div id="userinformation" style="padding:50px 0px 0px 0px;">
      <div class="col-xs-12 col-md-12">
        <div class="col-xs-12 col-sm-9 placeholder">
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
        <div class="col-xs-6 col-sm-3 placeholder">
          <br>
          <img src="/static/pic/photo.jpg" width="200" height="200" class="img-responsive" alt="User_pic">
          <!--<div style="display: none;">-->
          <!--<h4>{{ userName.name }}</h4>-->
          <!--<span class="text-muted">{{ userName.level }}</span>-->
          <!--</div>-->
        </div>
      </div>
    </div>
</template>

<script>
  // 引入基本模板

    export default {
      name: "loanerBasicInfo",
      data() {
        return {
          userName: {
            name: '李世民',
            sex: '男',
            age: '18',
            level: '高级账户',
            stuNum: '161220000',
            grade: '大二',
            major: '临床医学',
            phone: '13055644123',
            alipay: '13175050438',
            email: '135782468@126.com',
            workaddr: '华为技术有限公司',
            address: '江苏省南京市栖霞区仙林大道163号'
          },
        }
      }


    }
</script>

<style scoped>

</style>
