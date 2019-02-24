<template>
  <personalCenter paneltitle="关系验证">
    <el-tabs v-model="activeName" @tab-click="handleClick" >
      <el-tab-pane  name="first">
        <span slot="label" style="font-size:19px;">我的网络</span>
        <div v-if="userstate === 0" >
          <br/><br/>
          <h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 您已经完成关系网络检验，您的关系检验总评分是：
            <span class="grade">{{ grade }}&nbsp;分</span>
          </h3>
        </div>
        <div v-else-if="userstate === 1" >
          <br/>
          <p class="lead">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            您的关系检验尚未完成。请您选择三名用户（同时平台将挑选七名与您同专业的用户）发放关系检验问卷，以进一步验证您的信用状况。</p>
          <br/><br/>
          <el-form :inline="true"
                   :rules="rules"
                   :model="formInline"
                   class="userbox" >
            <el-form-item label="用户一" prop="depart">
              <el-select v-model="formInline.opt1"
                         filterable
                         default-first-option
                         placeholder="选择用户院系">
                <el-option
                  v-for="item in departmentoptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="" prop="num">
              <el-input v-model="formInline.user1" placeholder="填写用户学号"></el-input>
            </el-form-item>
            <br/>
            <el-form-item label="用户二" prop="depart">
              <el-select v-model="formInline.opt2"
                         filterable
                         allow-create
                         default-first-option
                         placeholder="选择用户院系">
                <el-option
                  v-for="item in departmentoptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="" prop="num">
              <el-input v-model="formInline.user2" placeholder="填写用户学号"></el-input>
            </el-form-item>
            <br/>
            <el-form-item label="用户三" prop="depart">
              <el-select v-model="formInline.opt3"
                         filterable
                         allow-create
                         default-first-option
                         placeholder="选择用户院系">
                <el-option
                  v-for="item in departmentoptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="" prop="num">
              <el-input v-model="formInline.user3" placeholder="填写用户学号"></el-input>
            </el-form-item>
            <br/>
            <el-form-item>
              <el-button type="primary" @click="send(userstate)" style="position:relative;left:200px;">提交</el-button>
              <!--<el-dialog
                title="提示"
                :visible.sync="dialogVisible"
                width="30%">
                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;您的用户选择已提交。</span>
                <br/>
                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;系统将及时发送问卷至相应用户邮箱。</span>
                <span slot="footer" class="dialog-footer">
                  <el-button type="primary" @click="dialogVisible = send(userstate)">确 定</el-button>
                </span>
              </el-dialog>-->

            </el-form-item>
          </el-form>
        </div>
        <div v-else-if="userstate === 2">
          <br/><br/>
          <h3>
            &nbsp;&nbsp;&nbsp;&nbsp;您的问卷已发送至用户邮箱中，相关用户正在填写。 进度：
            <span class="grade">{{ done }}</span>&nbsp;/&nbsp;10
          </h3>
        </div>
        <div v-else-if="userstate === 3">
          <br/>
          <p class="lead">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;您选择的以下用户未在指定时间内填写问卷，请重新选择用户进行填写。</p>
          <template>
            <el-table
              :data="delaylist"
              style="width: 60%;left:200px;">
              <el-table-column
                prop="depart"
                label="院系"
                width="180">
              </el-table-column>
              <el-table-column
                prop="num"
                label="学号"
                width="180">
              </el-table-column>
              <el-table-column
                prop="name"
                label="姓名">
              </el-table-column>
            </el-table>
          </template>
          <br/><br/>
          <el-form :inline="true"
                   :rules="rules"
                   :model="formInline"
                   class="userbox" >
            <el-form-item label="用户一" prop="depart">
              <el-select v-model="formInline.opt1"
                         filterable
                         default-first-option
                         placeholder="选择用户院系">
                <el-option
                  v-for="item in departmentoptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="" prop="num">
              <el-input v-model="formInline.user1" placeholder="填写用户学号"></el-input>
            </el-form-item>
            <br/>
            <el-form-item v-if="delaylist.length >= 2" label="用户二" prop="depart">
              <el-select v-model="formInline.opt2"
                         filterable
                         allow-create
                         default-first-option
                         placeholder="选择用户院系">
                <el-option
                  v-for="item in departmentoptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item v-if="delaylist.length >= 2" label="" prop="num">
              <el-input v-model="formInline.user2" placeholder="填写用户学号"></el-input>
            </el-form-item>
            <br/>
            <el-form-item v-if="delaylist.length > 2" label="用户三" prop="depart">
              <el-select v-model="formInline.opt3"
                         filterable
                         allow-create
                         default-first-option
                         placeholder="选择用户院系">
                <el-option
                  v-for="item in departmentoptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item v-if="delaylist.length > 2" label="" prop="num">
              <el-input v-model="formInline.user3" placeholder="填写用户学号"></el-input>
            </el-form-item>
            <br/>
            <el-form-item>
              <el-button type="primary" @click="send(userstate)" style="position:relative;left:200px;">提交</el-button>
              <!--<el-dialog
                title="提示"
                :visible.sync="dialogVisible"
                width="30%">
                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;您的用户选择已提交。</span>
                <br/>
                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;系统将及时发送问卷至相应用户邮箱。</span>
                <span slot="footer" class="dialog-footer">
                  <el-button type="primary" @click="dialogVisible = send(userstate)">确 定</el-button>
                </span>
              </el-dialog>-->

            </el-form-item>
          </el-form>
        </div>
      </el-tab-pane>
      <el-tab-pane  name="second">
        <span slot="label" style="font-size:19px;">待填问卷</span>
        <div class="AluUsrInstruction"  style="display: inline;margin-top: 10px;margin-bottom: 10px">
          <h3 style="text-indent: 0px">待填问卷</h3>
        </div>
        <template>
          <el-table
            :data="pendingQuestion"
            max-height="400"
            style="width: 640px;position:relative;left:120px;">
            <el-table-column
              prop="type"
              label="问卷类型"
              :filters="[{text:'用户选择',value:'用户选择'},{text:'系统随机',value:'系统随机'}]"
              :filter-method="filterHandler"
              width="180">
            </el-table-column>
            <el-table-column
              prop="depart"
              label="院系"
              width="180">
            </el-table-column>
            <el-table-column
              prop="num"
              label="学号"
              width="180">
            </el-table-column>
            <el-table-column
              label="操作"
              width="100">
              <template slot-scope="scope">
                <el-button @click="dialogFormVisible = write(scope.$index)" icon="el-icon-edit" type="primary" size="small"></el-button>
                <el-dialog title="检验问卷"
                           :lock-scroll="false"
                           :visible.sync="dialogFormVisible">
                  <el-steps :active="active" finfish-status="success">
                    <el-step title="第一部分"></el-step>
                    <el-step title="第二部分"></el-step>
                    <el-step title="第三部分"></el-step>
                  </el-steps>

                  <el-form :model="form"  v-show="form.form1">
                    <el-form-item><strong>1.你和小明同学平时关系如何？</strong></el-form-item>
                    <el-form-item label="">
                      <el-radio-group v-model="form.relationship">
                        <el-radio label="很好"></el-radio>
                        <el-radio label="有接触过"></el-radio>
                        <el-radio label="一般同学"></el-radio>
                        <el-radio label="排斥"></el-radio>
                      </el-radio-group>
                    </el-form-item>

                    <el-form-item><strong>2.你曾经有和小明同学小组合作完成项目/组织活动的经历吗？</strong></el-form-item>
                    <el-form-item label="">
                      <el-radio-group v-model="form.judge1">
                        <el-radio label="是"></el-radio>
                        <el-radio label="否"></el-radio>
                      </el-radio-group>
                    </el-form-item>

                    <el-form-item><strong>3.在你眼中，在项目/组织活动的经历中，小明同学扮演了怎样的角色？</strong></el-form-item>
                    <el-form-item label="">
                      <el-radio-group v-model="form.roles">
                        <el-radio label="组织者"></el-radio>
                        <el-radio label="积极参与"></el-radio>
                        <el-radio label="完成本分工作"></el-radio>
                        <el-radio label="不太愿意承担费力费时的工作"></el-radio>
                        <el-radio label="不清楚"></el-radio>
                      </el-radio-group>
                    </el-form-item>

                  </el-form>
                  <el-button style="margin-top: 12px;" v-show="form.form1"@click="next(form)">下一步</el-button>
                  <el-form :model="form"  v-show="form.form2">
                    <el-form-item><strong>4.你愿意与小明同学在今后继续合作完成项目/组织活动吗？</strong></el-form-item>
                    <el-form-item label="">
                      <el-radio-group v-model="form.desire">
                        <el-radio label="愿意"></el-radio>
                        <el-radio label="无所谓"></el-radio>
                        <el-radio label="不愿意"></el-radio>
                      </el-radio-group>
                    </el-form-item>

                    <el-form-item><strong>5.小明同学有向你借过东西的经历吗？</strong></el-form-item>
                    <el-form-item label="">
                      <el-radio-group v-model="form.judge2">
                        <el-radio label="钱"></el-radio>
                        <el-radio label="学习资料"></el-radio>
                        <el-radio label="生活用品"></el-radio>
                        <el-radio label="没借过"></el-radio>
                      </el-radio-group>
                    </el-form-item>

                    <el-form-item><strong>6.借用物品之后的偿还情况？</strong></el-form-item>
                    <el-form-item label="">
                      <el-radio-group v-model="form.returntype">
                        <el-radio label="主动约定偿还日期并及时归还"></el-radio>
                        <el-radio label="没说清楚偿还日期，但在我需要之前就已偿还"></el-radio>
                        <br/>
                        <el-radio label="我询问之后立即偿还"></el-radio>
                        <el-radio label="我询问之后拖延偿还"></el-radio>
                        <el-radio label="询问之后到现在都没有偿还"></el-radio>
                      </el-radio-group>
                    </el-form-item>

                  </el-form>
                  <el-button style="margin-top: 12px;" v-show="form.form2"@click="last(form)">上一步</el-button>
                  <el-button style="margin-top: 12px;" v-show="form.form2"@click="next(form)">下一步</el-button>
                  <el-form :model="form"  v-show="form.form3">
                    <el-form-item><strong>7.请客观评价您自己的信用情况。</strong></el-form-item>
                    <el-form-item label="">
                      <template>
                        <div class="block">
                          <el-slider
                            v-model="form.value1"
                            :max="10"
                            :step="1"
                            show-stops></el-slider>
                        </div>
                      </template>
                    </el-form-item>

                    <el-form-item><strong>8.请客观评价小明同学的信用情况。</strong></el-form-item>
                    <el-form-item label="">
                      <template>
                        <div class="block">
                          <el-slider
                            v-model="form.value2"
                            :max="10"
                            :step="1"
                            show-stops></el-slider>
                        </div>
                      </template>
                    </el-form-item>

                    <el-form-item><strong>9.请客观评价社会平均信用水平。</strong></el-form-item>
                    <el-form-item label="">
                      <template>
                        <div class="block">
                          <el-slider
                            v-model="form.value3"
                            :max="10"
                            :step="1"
                            show-stops></el-slider>
                        </div>
                      </template>
                    </el-form-item>
                  </el-form>
                  <el-button style="margin-top: 12px;" v-show="form.form3"@click="last(form)">上一步</el-button>


                  <div slot="footer" class="dialog-footer">
                    <el-button
                     v-show="form.form3" type="primary" @click="dialogFormVisible = send1()">确 定</el-button>
                  </div>
                </el-dialog>
              </template>
            </el-table-column>

          </el-table>
        </template>
      </el-tab-pane>
      <el-tab-pane  name="third">
        <span slot="label" style="font-size:19px;">过期问卷</span>
        <div class="AluUsrInstruction"  style="display: inline;margin-top: 10px;margin-bottom: 10px">
          <h3 style="text-indent: 0px">过期问卷</h3>
        </div>
        <template>
          <el-table
            :data="delayQuestion"
            max-height="400"
            style="width: 640px;position:relative;left:120px;">
            <el-table-column
              prop="type"
              label="问卷类型"
              :filters="[{text:'用户选择',value:'用户选择'},{text:'系统随机',value:'系统随机'}]"
              :filter-method="filterHandler"
              width="180">
            </el-table-column>
            <el-table-column
              prop="depart"
              label="院系"
              width="180">
            </el-table-column>
            <el-table-column
              prop="num"
              label="学号"
              width="180">
            </el-table-column>
            <el-table-column
              label="操作"
              width="100">
              <template slot-scope="scope">
                <el-button @click.native.prevent="deleteRow(scope.$index, delayQuestion)" type="danger" icon="el-icon-delete" size="small"></el-button>
              </template>
            </el-table-column>

          </el-table>
        </template>
        <br/><br/>
      </el-tab-pane>
    </el-tabs>
  </personalCenter>
</template>

<script>
  import personalCenter from "../components/personalCenter";

  export default {
    name:"crosscheck",
    components: {personalCenter},
    data(){
      return{
        tempindex:'',
        active:1,
        dialogVisible: false,
        activeName: 'first',
        dialogFormVisible: false,
        form:{
          form1:true,
          form2:false,
          form3:false,
          relationship:'',
          judge1:'',
          roles:'',
          desire:'',
          judge2:'',
          returntype:'',
          value1:0,
          value2:0,
          value3:0,
        },
        formInline:{
          user1:'',
          user2:'',
          user3:'',
          opt1:'',
          opt2:'',
          opt3:'',
        },
        rules:{
          depart:[{required:true,message:'请选择用户院系',trigger: 'blur'}],
          num:[{required:true,message:'请填写用户学号',trigger: 'blur'}],
        },
        userstate:3,          //这里有四种状态：0 已完成、1 未完成、2 还待填写、3 等待时间过长还没填完
        grade:90,             //总评分
        done:3,
        pendingQuestion:[
          {type:'用户选择',depart:'工程管理学院',num:161270000},
          {type:'系统随机',depart:'软件学院',num:161200000},
          {type:'系统随机',depart:'软件学院',num:161200000},
          {type:'用户选择',depart:'计算机科学与技术系',num:161220000},
          {type:'系统随机',depart:'工程管理学院',num:161270000},
          {type:'系统随机',depart:'软件学院',num:161200000},
          {type:'系统随机',depart:'计算机科学与技术系',num:161220000},
        ],
        delayQuestion:[
          {type:'用户选择',depart:'工程管理学院',num:161270000},
          {type:'系统随机',depart:'软件学院',num:161200000},
          {type:'系统随机',depart:'软件学院',num:161200000},
          {type:'用户选择',depart:'计算机科学与技术系',num:161220000},
          {type:'系统随机',depart:'工程管理学院',num:161270000},
          {type:'系统随机',depart:'软件学院',num:161200000},
          {type:'系统随机',depart:'计算机科学与技术系',num:161220000},
        ],

        delaylist:[
          {depart:'计算机科学与技术系',num:161220000,name:'小明'},
          {depart:'工程管理学院',num:161270000,name:'小红'},
        ],
        departmentoptions:[{
          value: '选项1',
          label: '计算机科学与技术系'
        }, {
          value: '选项2',
          label: '工程管理学院'
        }, {
          value: '选项3',
          label: '软件学院'
        }, {
          value: '选项4',
          label: '文学院'
        }, {
          value: '选项5',
          label: '环境学院'
        },{
          value: '选项6',
          label: '历史学院'
        },{
          value: '选项7',
          label: '法学院'
        },{
          value: '选项8',
          label: '哲学系'
        },{
          value: '选项9',
          label: '新闻传播学院'
        },{
          value: '选项10',
          label: '政府管理学院'
        },{
          value: '选项11',
          label: '信息管理学院'
        },{
          value: '选项12',
          label: '社会学院'
        },{
          value: '选项13',
          label: '商学院'
        },{
          value: '选项14',
          label: '外国语学院'
        },{
          value: '选项15',
          label: '数学系'
        },{
          value: '选项16',
          label: '物理学院'
        },{
          value: '选项17',
          label: '化学化工学院'
        },{
          value: '选项18',
          label: '生命科学学院'
        },
          {
            value: '选项19',
            label: '地球科学与工程学院'
          },
          {
            value: '选项20',
            label: '地理与海洋科学学院'
          },{
            value: '选项21',
            label: '大气科学学院'
          },
          {
            value: '选项22',
            label: '电子科学与工程学院'
          },{
            value: '选项23',
            label: '现代工程与应用科学学院'
          },{
            value: '选项24',
            label: '天文与空间科学学院'
          },{
            value: '选项25',
            label: '医学院'
          },{
            value: '选项26',
            label: '匡亚明学院'
          },{
            value: '选项27',
            label: '海外教育学院'
          },{
            value: '选项28',
            label: '建筑与城市规划学院'
          },{
            value: '选项29',
            label: '人工智能学院'
          },
          ],
      }
    },

    methods: {
      last(form){
        console.log(this.active);
        if (this.active === 2){
          this.active = this.active - 1;
          form.form1 = true;
          form.form2 = false;
        }
        else{
          this.active = this.active - 1;
          form.form3 = false;
          form.form2 = true;
        }
      },
      next(form){
        if(this.active === 1){
          form.form1 = false;
          form.form2 = true;
        }
        else if (this.active === 2){
          form.form2 = false;
          form.form3 = true;
        }
        if(this.active++ > 3) {
          this.active = 0;
        }
      },
      send: function (userstate) {
        //这里会将状态改变传给后端，重新加载页面的时候状态就会传过来，自动跳转到状态2的情况
        console.log(userstate);
        this.$confirm('您的用户选择已提交。系统将及时发送问卷至相应用户邮箱。', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '发送成功!'
          });
          this.$router.push('/UserSpace/CrossCheck');
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消'
          });
        });
        return false;

      },
      send1: function () {
        //这里会将状态改变传给后端，重新加载页面的时候状态就会传过来，自动跳转到状态2的情况
        this.$message({
          message:'提交成功',
          type:'success',
        });
        this.pendingQuestion.splice(this.tempindex, 1);
        this.active = 1;
        this.form.form1=true;
        this.form.form2=false;
        this.form.form3=false;
        this.form.relationship='';
        this.form.judge1='';
        this.form.roles='';
        this.form.desire='';
        this.form.judge2='';
        this.form.returntype='';
        this.form.value1=0;
        this.form.value2=0;
        this.form.value3=0;
        //this.$router.replace('/UserSpace/CrossCheck');
        return false;
      },
      handleClick(tab, event) {
        //this.$router.push('/UserSpace/questionnaires');
        console.log(tab, event);
      },
      filterHandler(value, row, column) {
        const property = column['property'];
        return row[property] === value;
      },
      write: function(index){
        this.tempindex = index;
        //rows.splice(index, 1);
        return true;
      },
      deleteRow(index, rows) {
        this.$message({
          type: 'success',
          message: '删除成功!'
        });
        rows.splice(index, 1);
      },
    }
  }

</script>

<style scoped>


</style>

<style>
  /*#leftOV,#leftFS,#leftSP,#leftLI,#leftLS,#leftII,#leftIE,#leftNC,#leftAC,#leftBI{ color: #777777 !important; }*/
  #leftCC { color: dodgerblue !important}

  .grade{
    font-size:50px;
    color:#409eff !important;
  }

  .userbox{
    position:relative;
    left:180px;
  }
</style>
