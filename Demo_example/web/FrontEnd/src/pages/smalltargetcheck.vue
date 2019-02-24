<template>
  <check-center paneltitle="小额标的审核">
    <div id="check" class="sheet">
      <el-table
        :data="tableData"
        max-height="500"
        :default-sort = "{prop: 'time', order: 'descending'}"
        style="width:80%;margin-left:5%;">
        <el-table-column
          prop="time"
          label="提交时间"
          align="center"
          sortable
          width="150">
        </el-table-column>
        <el-table-column
          prop="name"
          label="标的名称"
          align="center"
          width="300">
        </el-table-column>
        <el-table-column
          prop="state"
          label="当前状态"
          align="center"
          width="150">
          <template slot-scope="scope">
            <el-tag :type="scope.row.state | statusFilter">{{scope.row.state | formatStata}}</el-tag>
          </template>
        </el-table-column>
        <el-table-column
          label="操作"
          width="100%">
          <template slot-scope="scope">
            <i class="el-icon-view"></i>
            <el-button type="text" @click="dialogFormVisible = check(scope.$index)">审核</el-button>
            <el-dialog title="小额标的审核"
                       :lock-scroll="false"
                       :visible.sync="dialogFormVisible">
              <el-steps :active="active" finfish-status="success">
                <el-step title="第一部分" description="用户基本信息"></el-step>
                <el-step title="第二部分" description="项目基本信息"></el-step>
                <el-step title="第三部分" description="资金去向"></el-step>
                <el-step title="第四部分" description="关于贷款"></el-step>
              </el-steps>

              <br/><br/>
              <el-form v-show="control.part1"
                       style="margin-left:30%">
                <el-form-item label="用户名">{{ tableData[tempindex].username}}</el-form-item>
                <br/>
                <el-form-item label="风险评级">{{ tableData[tempindex].risk }}</el-form-item>
                <br/>
                <el-form-item label="非结构化信息审核情况">{{ tableData[tempindex].userstate }}</el-form-item>
              </el-form>
              <el-button style="margin-top: 12px;margin-left:45%;" type="primary" size="mini" v-show="control.part1" @click="next(control)">下一步</el-button>

              <el-form style="margin-left:30%"
                       v-show="control.part2" >
                <el-form-item label="项目编号"><span>{{ tableData[tempindex].projectid}}</span></el-form-item>
                <el-form-item label="项目名称">{{ tableData[tempindex].name }}</el-form-item>
                <el-form-item label="开始时间">{{ tableData[tempindex].startTime }}</el-form-item>
                <el-form-item label="结束时间">{{ tableData[tempindex].endTime }}</el-form-item>
              </el-form>
              <el-button style="margin-top: 12px;margin-left:35%;"type="primary" size="mini" v-show="control.part2" @click="last(control)">上一步</el-button>
              <el-button style="margin-top: 12px;margin-left:5%;" type="primary" size="mini"v-show="control.part2" @click="next(control)">下一步</el-button>

              <el-form   v-show="control.part3"
                         style="margin-left:5%;margin-right:5%">
                <el-form-item label="资金用途分类"><span>{{ tableData[tempindex].classify}}</span></el-form-item>
                <el-form-item label="资金用途详述">{{ tableData[tempindex].desc }}</el-form-item>
                <el-form-item label="凭证">
                  <template>
                    <img v-bind:src=tableData[tempindex].pics  class="pics"/>
                  </template>
                </el-form-item>
              </el-form>
              <el-button style="margin-top: 12px;margin-left:35%;" type="primary" size="mini"v-show="control.part3"@click="last(control)">上一步</el-button>
              <el-button style="margin-top: 12px;margin-left:5%;"type="primary" size="mini" v-show="control.part3"@click="next(control)">下一步</el-button>

              <el-form   v-show="control.part4"
                         style="margin-left:30%">
                <el-form-item label="拆借金额"><span>{{ tableData[tempindex].money}}</span></el-form-item>
                <el-form-item label="还款利率">{{ tableData[tempindex].rate }}</el-form-item>
                <el-form-item label="还款日期">{{ tableData[tempindex].repayDate }}</el-form-item>
                <el-form-item label="还款方式">{{ tableData[tempindex].returntype }}</el-form-item>
              </el-form>
              <el-button style="margin-top: 12px;margin-left:45%;"type="primary" size="mini" v-show="control.part4"@click="last(control)">上一步</el-button>

              <div slot="footer" class="dialog-footer">
                <el-button
                  v-show="control.part4" type="primary" @click="dialogFormVisible = send1()">确 定</el-button>
              </div>
            </el-dialog>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </check-center>
</template>

<script>
  import CheckCenter from '../components/CheckCenter'
  export default {
    name: "smalltargetcheck",
    components:{CheckCenter},
    methods:{
      check: function(index){
        this.tempindex = index;
        //console.log(index);
        return true;
      },
      last(control){
        console.log(this.active);
        if (this.active === 2){
          this.active = this.active - 1;
          control.part1 = true;
          control.part2 = false;
        }
        else if(this.active === 3){
          this.active = this.active - 1;
          control.part3 = false;
          control.part2 = true;
        }
        else{
          this.active = this.active - 1;
          control.part4 = false;
          control.part3 = true;
        }
      },
      next(control){
        console.log(this.active);
        if(this.active === 1){
          control.part1 = false;
          control.part2 = true;
        }
        else if (this.active === 2){
          control.part2 = false;
          control.part3 = true;
        }
        else if (this.active === 3){
          control.part3 = false;
          control.part4 = true;
        }
        if(this.active++ > 4) {
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
        this.tableData.splice(this.tempindex, 1);
        this.active = 1;
        this.control.part1=true;
        this.control.part2=false;
        this.control.part3=false;
        this.control.part4=false;
        //this.$router.replace('/UserSpace/CrossCheck');
        return false;
      },
    },
    filters: {
      // el-tag类型转换
      statusFilter(status) {
        const statusMap = {
          1: '',
          2: 'warning',
        }
        return statusMap[status]
      },
      // 状态显示转换
      formatStata(status) {
        const statusMap = {
          1: '待审核',
          2: '初审未通过',
        }
        return statusMap[status]
      }
    },
    data(){
      return {
        pickerOptions1: {
          disabledDate(time) {
            return time.getTime() > Date.now();
          },
        },
        dialogFormVisible: false,
        active:1,
        control:{
          part1:true,
          part2:false,
          part3:false,
          part4:false,
        },
        tempindex:0,
        date1: '',
        date2: '',
        date3: '',
        usage_radio: 3,
        textarea1: '',
        formInline: {
          user: '',
          region: ''
        },

        tableData: [{
          time:'2018-08-06',
          name: '看音乐剧',
          state: 1,
          action:'',
          username:'刘一凡',
          risk:'A',
          userstate:'已通过',
          projectid:'mu3424581',
          startTime: '2018-8-25',
          endTime:'2018-12-25',
          classify:'日常开销',
          desc: '近期有一部音乐剧《猫》上映，真的很想去看！但是这个月的生活费有点吃紧，所以跪求借款200元，谢谢大家啦！拜托拜托！！！',
          pics:'',
          money:200,
          rate: '10%',
          repayDate:'2018-9-25',
          returntype: '等额本息',
          pics: '../../static/pic/小额1.png',
        }, {
          time:'2018-09-08',
          name: '十一出游住宿',
          state: 1,
          action:'',
          username:'吴畅',
          risk:'B',
          userstate:'已通过',
          projectid:'mu3425271',
          startTime: '2018-9-15',
          endTime:'2018-12-15',
          classify:'日常开销',
          desc: '十一想去香港玩几天，大概是和别人一起拼房，想住3天，所以共需要1200元，我自己手上有一点点钱啦，拜托大家可怜可怜，再借我800元吧！！！',
          pics:'',
          money:800,
          rate: '13.4%',
          repayDate:'2018-10-15',
          returntype: '等额本息',
          pics: '../../static/pic/小额2.png',
        }, {
          time:'2018-08-13',
          name: '购买游戏装备',
          state: 2,
          action:'',
          username:'吴畅',
          risk:'B',
          userstate:'已通过',
          projectid:'mu3425271',
          startTime: '2018-9-15',
          endTime:'2018-12-15',
          classify:'日常开销',
          desc: '十一想去香港玩几天，大概是和别人一起拼房，想住3天，所以共需要1200元，我自己手上有一点点钱啦，拜托大家可怜可怜，再借我800元吧！！！',
          pics:'',
          money:800,
          rate: '13.4%',
          repayDate:'2018-10-15',
          returntype: '等额本息',
          pics:'',
        },{
          time:'2018-09-06',
          name: '社团活动费用',
          state: 1,
          action:'',
          username:'吴畅',
          risk:'B',
          userstate:'已通过',
          projectid:'mu3425271',
          startTime: '2018-9-15',
          endTime:'2018-12-15',
          classify:'日常开销',
          desc: '十一想去香港玩几天，大概是和别人一起拼房，想住3天，所以共需要1200元，我自己手上有一点点钱啦，拜托大家可怜可怜，再借我800元吧！！！',
          pics:'',
          money:800,
          rate: '13.4%',
          repayDate:'2018-10-15',
          returntype: '等额本息',
          pics:'',
        },{
          time:'2018-09-04',
          name: '求资金买耳机',
          state: 1,
          action:'',
          username:'吴畅',
          risk:'B',
          userstate:'已通过',
          projectid:'mu3425271',
          startTime: '2018-9-15',
          endTime:'2018-12-15',
          classify:'日常开销',
          desc: '十一想去香港玩几天，大概是和别人一起拼房，想住3天，所以共需要1200元，我自己手上有一点点钱啦，拜托大家可怜可怜，再借我800元吧！！！',
          pics:'',
          money:800,
          rate: '13.4%',
          repayDate:'2018-10-15',
          returntype: '等额本息',
          pics:'',
        }, {
          time:'2018-08-31',
          name: '新学期添置学习用品',
          state: 1,
          action:'',
          username:'吴畅',
          risk:'B',
          userstate:'已通过',
          projectid:'mu3425271',
          startTime: '2018-9-15',
          endTime:'2018-12-15',
          classify:'日常开销',
          desc: '十一想去香港玩几天，大概是和别人一起拼房，想住3天，所以共需要1200元，我自己手上有一点点钱啦，拜托大家可怜可怜，再借我800元吧！！！',
          pics:'',
          money:800,
          rate: '13.4%',
          repayDate:'2018-10-15',
          returntype: '等额本息',
          pics:'',
        }]
      };
    },
  }
</script>

<style scoped>
  .sheet{
    margin-top: 5%;
    margin-left:8%;

  }
</style>
<style>
  #leftB { color: dodgerblue !important}
</style>
