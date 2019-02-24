<template>
  <personalCenter paneltitle="财务验证">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="高级账户验证" name="first">
        <div>
          <div class="AdUsrInstruction" id="ad_info" style="display: inline;margin-top: 10px;margin-bottom: 10px">
            <h3 style="text-indent: 0px">高级账号校验</h3>
            <p class="lead" style="font-size: 16px;">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;您即将成为拥有Trust平台高级账户的用户，较之中级账户只能查看日常校园卡消费统计数据，高级账户可以查看个人完整消费财务分析和针对借款生成的消费修正建议；较之中级账户高级账户只能进行标的投资和查看项目信息，高级账户增加了发布资金需求的功能。而成为高级账户，只需在此页面您导入银行卡和支付宝数据并在下一页面完成个性信息的填写。
            </p>
          </div>
          <hr/>
          <div style="min-height: 300px">
            <div class="ad_checkpanel" id="ad_checkid" style="margin-top: 30px;margin-bottom: 30px;display: inline;" >
              <div style="position: relative">
                <div class="col-xs-12 col-sm-6 placeholder" style="min-height: 200px">
                  <label>请导入银行卡数据</label><br>
                  <el-upload
                    class="upload-demo"
                    drag
                    action="https://jsonplaceholder.typicode.com/posts/"
                    multiple>
                    <i class="el-icon-upload"></i>
                    <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                    <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
                    <div class="el-upload__tip" slot="tip">银行卡正面照片，需能看清卡号</div>
                  </el-upload>
                </div>
                <div class="col-xs-12 col-sm-6 placeholder" style="min-height: 200px">
                  <label>请导入支付宝数据</label><br>
                  <el-upload
                    class="upload-demo"
                    drag
                    action="https://jsonplaceholder.typicode.com/posts/"
                    multiple>
                    <i class="el-icon-upload"></i>
                    <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                    <div class="el-upload__tip" slot="tip">上传支付宝的消费记录，且不超过500kb</div>
                    <div class="el-upload__tip" slot="tip">会进行脱敏处理，不会泄露个人隐私</div>
                  </el-upload>
                </div>
              </div>
            </div>
          </div>
          <hr/>
          <div style="text-align: justify;float:right;">
            <el-button type="primary" round>&nbsp;提交&nbsp;</el-button>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="个性信息" style="padding:20px;">
        <el-form ref="selfinfo_form" :rules="selfinfo_rules" :model="selfinfo_form" label-width="130px">
          <div class="fail_subject" style="display:flex;">
            <el-form-item class="info_input" label="挂科数目" prop="fail">
              <el-input class="inputs" v-model.number="selfinfo_form.fail"></el-input>
            </el-form-item>
            <label>&nbsp;&nbsp;&nbsp;&nbsp;</label>
            <el-upload
              class="upload-demo"
              action="https://jsonplaceholder.typicode.com/posts/"
              :on-change="handleChange"
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              :before-remove="beforeRemove"
              multiple
              :limit="16"
              :on-exceed="handleExceed"
              :file-list="selfinfo_form.report_cards" prop="fail_img">
              <el-button size="small" type="primary">点击上传</el-button>
              <div slot="tip" class="el-upload__tip">仅限jpg/png文件（不超过500kb）</div>
            </el-upload>
          </div>
          <div class="reward" style="width:600px">
            <el-form-item class="info_input" label="获奖情况" style="width:650px">
              <!--school-->
              <div class="school" style="padding: 0px 0px 10px 0px;">
                <el-form-item
                  v-for="(school_reward, index) in selfinfo_form.school_rewards"
                  :label="'校级奖项名称'"
                  :key="school_reward.key"
                  :prop="'school_rewards.' + index + '.value'"
                  :rules="{
                  required: true, message: '校级奖项名称不能为空', trigger: 'blur'
                  }" >
                  <div style="display: flex;width:400px;padding:0px 0px 10px 0px">
                    <el-input class="inputs" v-model="school_reward.value"></el-input>
                    <label>&nbsp;&nbsp;&nbsp;&nbsp;</label>
                    <el-upload
                      class="upload-demo"
                      action="https://jsonplaceholder.typicode.com/posts/"
                      :on-change="handleChange"
                      :on-preview="handlePreview"
                      :on-remove="handleRemove"
                      :before-remove="beforeRemove"
                    >
                      <el-button size="small" type="primary">点击上传</el-button>
                    </el-upload>
                    <label>&nbsp;&nbsp;&nbsp;&nbsp;</label>
                    <el-button @click.prevent="remove_school_reward(school_reward)" type="danger" icon="el-icon-delete" circle></el-button>
                  </div>
                </el-form-item>
                <el-form-item style="float:left;" >
                  <el-button @click="add_school_reward">新增校级奖项名称</el-button>
                </el-form-item>
                <br/>
              </div>

              <!--city-->
              <div class="city" style="padding: 0px 0px 10px 0px;">
                <el-form-item
                  v-for="(city_reward, index) in selfinfo_form.city_rewards"
                  :label="'市级奖项名称'"
                  :key="city_reward.key"
                  :prop="'city_rewards.' + index + '.value'"
                  :rules="{
                  required: true, message: '市级奖项名称不能为空', trigger: 'blur'
                  }" >
                  <div style="display: flex;width:400px;padding:0px 0px 10px 0px">
                    <el-input class="inputs" v-model="city_reward.value"></el-input>
                    <label>&nbsp;&nbsp;&nbsp;&nbsp;</label>
                    <el-upload
                      class="upload-demo"
                      action="https://jsonplaceholder.typicode.com/posts/"
                      :on-change="handleChange"
                      :on-preview="handlePreview"
                      :on-remove="handleRemove"
                      :before-remove="beforeRemove"
                    >
                      <el-button size="small" type="primary">点击上传</el-button>
                    </el-upload>
                    <label>&nbsp;&nbsp;&nbsp;&nbsp;</label>
                    <el-button @click.prevent="remove_city_reward(city_reward)"  type="danger" icon="el-icon-delete" circle></el-button>
                  </div>
                </el-form-item>
                <el-form-item style="float:left;">
                  <el-button @click="add_city_reward">新增市级奖项名称</el-button>
                </el-form-item>
                <br/>
              </div>

              <!--province-->
              <div class="province" style="padding:0px 0px 10px 0px;">
                <el-form-item
                  v-for="(province_reward, index) in selfinfo_form.province_rewards"
                  :label="'省级奖项名称'"
                  :key="province_reward.key"
                  :prop="'province_rewards.' + index + '.value'"
                  :rules="{
                  required: true, message: '省级奖项名称不能为空', trigger: 'blur'
                  }" >
                  <div style="display: flex;width:400px;padding:0px 0px 10px 0px">
                    <el-input class="inputs" v-model="province_reward.value"></el-input>
                    <label>&nbsp;&nbsp;&nbsp;&nbsp;</label>
                    <el-upload
                      class="upload-demo"
                      action="https://jsonplaceholder.typicode.com/posts/"
                      :on-change="handleChange"
                      :on-preview="handlePreview"
                      :on-remove="handleRemove"
                      :before-remove="beforeRemove"
                    >
                      <el-button size="small" type="primary">点击上传</el-button>
                    </el-upload>
                    <label>&nbsp;&nbsp;&nbsp;&nbsp;</label>
                    <el-button @click.prevent="remove_province_reward(province_reward)"  type="danger" icon="el-icon-delete" circle></el-button>
                  </div>
                </el-form-item>
                <el-form-item style="float:left;">
                  <el-button @click="add_province_reward">新增省级奖项名称</el-button>
                </el-form-item>
                <br/>
              </div>

              <!--country-->
              <div class="country" style="padding:0px 0px 10px 0px;">
                <el-form-item
                  v-for="(country_reward, index) in selfinfo_form.country_rewards"
                  :label="'国家级奖项名称'"
                  :key="country_reward.key"
                  :prop="'country_rewards.' + index + '.value'"
                  :rules="{
                  required: true, message: '国家级奖项名称不能为空', trigger: 'blur'
                  }" >
                  <div style="display: flex;width:400px;padding:0px 0px 10px 0px">
                    <el-input class="inputs" v-model="country_reward.value"></el-input>
                    <label>&nbsp;&nbsp;&nbsp;&nbsp;</label>
                    <el-upload
                      class="upload-demo"
                      action="https://jsonplaceholder.typicode.com/posts/"
                      :on-change="handleChange"
                      :on-preview="handlePreview"
                      :on-remove="handleRemove"
                      :before-remove="beforeRemove"
                    >
                      <el-button size="small" type="primary">点击上传</el-button>
                    </el-upload>
                    <label>&nbsp;&nbsp;&nbsp;&nbsp;</label>
                    <el-button @click.prevent="remove_country_reward(country_reward)"  type="danger" icon="el-icon-delete" circle></el-button>
                  </div>
                </el-form-item>
                <el-form-item style="float:left;">
                  <el-button @click="add_country_reward">新增国家级奖项名称</el-button>
                </el-form-item>
                <br/>
              </div>


            </el-form-item>
          </div>
          <el-form-item label="收入来源" prop="income">
            <el-checkbox-group v-model="selfinfo_form.income" style="width:600px;">
              <el-checkbox label="家庭供给" name="type"></el-checkbox>
              <el-checkbox label="助学贷款" name="type"></el-checkbox>
              <el-checkbox label="奖学金" name="type"></el-checkbox>
              <el-checkbox label="兼职收入" name="type"></el-checkbox>
              <el-checkbox label="投资偶然获得" name="type"></el-checkbox>
              <div @click="otherway">
                <el-checkbox label="其他方式" name="type"></el-checkbox>
              </div>
            </el-checkbox-group>
            <el-form-item class="info_input" v-if="count%4!=0" prop="income_description">
              <el-input class="inputs" type="textarea" v-model="selfinfo_form.income_description" style="width:400px"></el-input>
            </el-form-item>
          </el-form-item>
          <el-form-item class="info_input" label="志愿时长：小时" prop="volunteer">
            <el-input class="inputs" v-model.number="selfinfo_form.volunteer"></el-input>
          </el-form-item>
          <div class="qualifications" >
            <el-form-item class="info_input" label="获得证书" style="width:640px">
              <!--qualifications-->
              <div class="qualifications" style="padding:0px 0px 10px 0px;">
                <el-form-item
                  v-for="(self_qualification, index) in selfinfo_form.self_qualifications"
                  :label="'获得证书名称'"
                  :key="self_qualification.key"
                  :prop="'self_qualifications.' + index + '.value'"
                  :rules="{
                  required: true, message: '证书名称不能为空', trigger: 'blur'
                  }" >
                  <div style="display: flex;width:400px;padding:0px 0px 10px 0px">
                    <el-input class="inputs" v-model="self_qualification.value"></el-input>
                    <label>&nbsp;&nbsp;&nbsp;&nbsp;</label>
                    <el-upload
                      class="upload-demo"
                      action="https://jsonplaceholder.typicode.com/posts/"
                      :on-change="handleChange"
                      :on-preview="handlePreview"
                      :on-remove="handleRemove"
                      :before-remove="beforeRemove"
                    >
                      <el-button size="small" type="primary">点击上传</el-button>
                    </el-upload>
                    <label>&nbsp;&nbsp;&nbsp;&nbsp;</label>
                    <el-button @click.prevent="remove_self_qualification(self_qualification)" type="danger" icon="el-icon-delete" circle></el-button>
                  </div>
                </el-form-item>
                <el-form-item style="float:left;">
                  <el-button @click="add_self_qualification">新增证书名称</el-button>
                </el-form-item>
                <br/>
              </div>
            </el-form-item>
          </div>
          <div style="text-align: justify;float:right;">
            <el-button type="primary" round>提交</el-button>
          </div>

        </el-form>
      </el-tab-pane>
    </el-tabs>
  </personalCenter>
</template>

<script>
  import personalCenter from "../components/personalCenter";

  export default {
    name:"advancedcheck",
    components: {personalCenter},
    data() {
      return {
        count:0,
        activeName: 'first',
        activeNames: ['1'],
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
        };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      },
      handleChange(val) {
        console.log(val);
      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
      otherway(){
        this.count++;
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
    }
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

<style>
  .el-tabs__item{
    font-size: 18px !important;
  }
</style>

<style>
  /*#leftOV,#leftFS,#leftSP,#leftLI,#leftLS,#leftII,#leftIE,#leftNC,#leftBI,#leftCC{ color: #777777 !important; }*/
  #leftAC{ color: dodgerblue !important}
  .el-upload__input{
    display: none !important;
  }
</style>
