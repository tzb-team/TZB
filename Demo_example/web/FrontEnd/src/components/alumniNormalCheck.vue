<template>

  <el-tabs type="border-card" style="min-height: 600px;">
    <el-tab-pane label="基本资料" style="padding:20px">
      <el-form ref="base_form" :rules="base_rules" :model="base_form" label-width="100px">
        <el-form-item label="姓名" prop="name">
          <el-input style="width:267px;" v-model="base_form.name"></el-input>
        </el-form-item>
        <el-form-item label="性别" prop="gender">
          <template>
            <el-radio v-model="base_form.gender" label="男">男</el-radio>
            <el-radio v-model="base_form.gender" label="女">女</el-radio>
          </template>
        </el-form-item>
        <el-form-item label="出生日期" prop="date">
          <el-col :span="11">
            <el-date-picker type="date" placeholder="选择日期" v-model="base_form.date" style="width: 100%;"></el-date-picker>
          </el-col>
        </el-form-item>
        <el-form-item label="身份证号" prop="id_card">
          <el-input class="inputs" v-model="base_form.id_card"></el-input>
        </el-form-item>
        <div style="display:flex;">
          <el-form-item label="学历" prop="university">
            <el-input class="inputs" v-model="base_form.university"></el-input>
          </el-form-item>
          <label>&nbsp;&nbsp;&nbsp;&nbsp;</label>
          <el-upload
            class="upload-demo"
            action="https://jsonplaceholder.typicode.com/posts/"
            :on-change="handleChange"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :before-remove="beforeRemove"
          >
            <el-button type="primary">点击上传</el-button>
            <label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
            <slot type="tip">请上传您的毕业证书，仅限jpg与png文件</slot>
          </el-upload>
        </div>
        <el-form-item label="工作单位" prop="institution">
          <el-input class="inputs" v-model="base_form.institution"></el-input>
        </el-form-item>
        <div style="display:flex;">
          <el-form-item label="职务" prop="major">
            <el-input class="inputs" v-model="base_form.major"></el-input>
          </el-form-item>
          <label>&nbsp;&nbsp;&nbsp;&nbsp;</label>
          <el-upload
            class="upload-demo"
            action="https://jsonplaceholder.typicode.com/posts/"
            :on-change="handleChange"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :before-remove="beforeRemove"
          >
            <el-button type="primary">点击上传</el-button>
            <label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
            <slot type="tip">请上传您的工作单位证，仅限jpg与png文件</slot>
          </el-upload>
        </div>
        <div style="display:flex;">
          <el-form-item label="年收入" prop="year_income">
            <el-input class="inputs" v-model="base_form.year_income"></el-input>
          </el-form-item>
          <label>&nbsp;&nbsp;&nbsp;&nbsp;</label>
          <el-upload
            class="upload-demo"
            action="https://jsonplaceholder.typicode.com/posts/"
            :on-change="handleChange"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :before-remove="beforeRemove"
          >
            <el-button type="primary">点击上传</el-button>
            <label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
            <slot type="tip">请上传您的收入证明，仅限jpg与png文件</slot>
          </el-upload>
        </div>
        <el-form-item label="现居住地" prop="living_place">
          <el-input class="inputs" v-model="base_form.living_place"></el-input>
        </el-form-item>

        <el-form-item style="float:right;">
          <el-button type="primary" @click="submitForm('base_form')">立即创建</el-button>
          <el-button @click="resetForm('base_form')">重置</el-button>
        </el-form-item>
      </el-form>



    </el-tab-pane>
  </el-tabs>

</template>

<script>
    export default {
      name: "alumniNormalCheck",
      data() {
        return {
          count:0,
          base_form: {
            name: '',
            gender: '男',
            date: '',
            id_card:'',
            university:'',
            major:'',
            institution:'',
            year_income:'',
            living_place:'',
          },
          base_rules:{
            name:[
              {required:true, message:'请输入您的姓名',trigger:'blur'},
              {min:1,max:6, message:'长度在1-6之间', trigger:'blur'}
            ],
            gender:[
              {required:true}
            ],
            date:[
              {type:'date', required:true, message:'请选择出生日期', trigger:'change'}
            ],
            id_card:[
              {required:true, message:'请输入您的身份证',trigger:'blur'},
              {min:15,max:18, message:'长度为15或18', trigger:'blur'}
            ],
            university:[
              {required:true, message:'请输入您的大学',trigger:'blur'}
            ],
            major:[
              {required:true, message:'请输入您的专业',trigger:'blur'}
            ],
            institution:[
              {required:true, message:'请输入您的学院',trigger:'blur'}
            ],
            year_income:[
              {required:true, message:'请输入您的年收入',trigger:'blur'}
            ],
            living_place:[
              {required:true, message:'请输入您的居住地信息',trigger:'blur'}
            ]
          },
          selfinfo_form:{
            fail:'',
            report_cards: [],
            income:[false,false,false,false,false,false],
            income_description:'',
            volunteer:'',
            school_rewards: [{
              value: '',
              file:'',
            }],
            city_rewards: [{
              value: '',
              file:'',
            }],
            province_rewards: [{
              value: '',
              file:'',
            }],
            country_rewards: [{
              value: '',
              file:'',
            }],
            self_qualifications: [{
              value: '',
              file:'',
            }],
          },
          selfinfo_rules:{
            fail:[
              {required:true,type: 'number', message: '必须为数字值'}
            ],
            volunteer:[
              {required:true,type: 'number', message: '必须为数字值'}
            ],
            income:[
              {required:true, message: '收入来源不能为空'}
            ],
            income_description:[
              {required:true, message: '描述不能为空'}
            ]
          },
          //img

        }
      },
      methods: {
        submitForm(formName) {
          this.$refs[formName].validate((valid) => {
            if (valid) {
              alert('submit!');
            } else {
              console.log('error submit!!');
              return false;
            }
          });
        },
        otherway(){
          this.count++;
        },
        resetForm(formName) {
          this.$refs[formName].resetFields();
        },
        add_school_reward() {
          this.selfinfo_form.school_rewards.push({
            value: '',
            key: Date.now()
          });
        },
        remove_school_reward(item) {
          var index = this.selfinfo_form.school_rewards.indexOf(item)
          if (index !== -1) {
            this.selfinfo_form.school_rewards.splice(index, 1)
          }
        },
        add_city_reward() {
          this.selfinfo_form.city_rewards.push({
            value: '',
            key: Date.now()
          });
        },
        remove_city_reward(item) {
          var index = this.selfinfo_form.city_rewards.indexOf(item)
          if (index !== -1) {
            this.selfinfo_form.city_rewards.splice(index, 1)
          }
        },
        add_province_reward() {
          this.selfinfo_form.province_rewards.push({
            value: '',
            key: Date.now()
          });
        },
        remove_province_reward(item) {
          var index = this.selfinfo_form.province_rewards.indexOf(item)
          if (index !== -1) {
            this.selfinfo_form.province_rewards.splice(index, 1)
          }
        },
        add_country_reward() {
          this.selfinfo_form.country_rewards.push({
            value: '',
            key: Date.now()
          });
        },
        remove_country_reward(item) {
          var index = this.selfinfo_form.country_rewards.indexOf(item)
          if (index !== -1) {
            this.selfinfo_form.country_rewards.splice(index, 1)
          }
        },
        add_self_qualification() {
          this.selfinfo_form.self_qualifications.push({
            value: '',
            key: Date.now()
          });
        },
        remove_self_qualification(item) {
          var index = this.selfinfo_form.self_qualifications.indexOf(item)
          if (index !== -1) {
            this.selfinfo_form.self_qualifications.splice(index, 1)
          }
        },
        handleRemove(file, fileList) {
          console.log(file, fileList);
        },
        handlePreview(file) {
          console.log(file);
        },
        handleExceed(files, fileList) {
          this.$message.warning(`当前限制选择 16 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
        },
        beforeRemove(file, fileList) {
          return this.$confirm(`确定移除 ${ file.name }？`);
        },
        handleChange(file, fileList) {
          this.selfinfo_form.report_cards = fileList.slice(-3);
        }
      },
    }
</script>

<style scoped>
  .info_input{
    width:400px;
  }
  .inputs{
    width:520px;
  }

</style>
