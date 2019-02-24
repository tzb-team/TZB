<template>
  <div>
    <el-steps :active="active">
      <el-step title="输入绑定邮箱"></el-step>
      <el-step title="输入邮箱验证码"></el-step>
      <el-step title="输入新手机号"></el-step>
      <el-step title="输入手机验证码"></el-step>
    </el-steps>

    <br/><br/>
    <div style="padding-right: 400px">
      <el-form :label-position="labelPosition" label-width="80px">
        <el-form-item label="请输入您绑定的邮箱" v-if="active==0">
          <el-input v-model="mailAddr"></el-input>
        </el-form-item>
        <el-form-item label="请输入您邮箱收到的验证码" v-if="active==1">
          <el-input v-model="verificationCode"></el-input>
        </el-form-item>
        <el-form-item label="请输入您的新手机号码" v-if="active==2">
          <el-input v-model="phoneNumber"></el-input>
        </el-form-item>
        <el-form-item label="请输入您手机收到的验证码" v-if="active==3">
          <el-input v-model="verificationCode2"></el-input>
        </el-form-item>
      </el-form>
    </div>

    <br>
    <div v-if="active==4">
      <label style="font-size: 18px">您已成功绑定手机号 {{ phoneNumber }}</label>
    </div>
    <div v-show="active<4">
      <el-button style="margin-top: 12px;" @click="last">上一步</el-button>
      <el-button style="margin-top: 12px;" @click="next">下一步</el-button>
    </div>


  </div>
</template>

<script>
  export default {
    name: "modifyphone",
    data() {
      return {
        active: 0,
        labelPosition: 'top',
        phoneNumber: '',
        verificationCode: '',
        mailAddr:'',
        verificationCode2:''
      };
    },
    methods: {
      next() {
        if (this.active++ > 3) this.active = 0;
      },
      last() {
        if(this.active > 0) this.active--;
      }
    }
  }
</script>

<style scoped>

</style>
