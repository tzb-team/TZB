<template>
  <check-center paneltitle="非结构化信息">
    <div id="check" class="sheet">
      <template>
        <el-table
          :data="tableData6"
          border
          style="width: 95.6%">
          <el-table-column
            prop="classify"
            label="条目类别"
            :filters="[{text: '证书或证明截图', value: '证书或证明截图'}, {text: '教务网截图', value: '教务网截图'},{text:'查找政府公示',value:'查找政府公示'},{text:'学生综合服务平台截图',value:'学生综合服务平台截图'},{text:'银行信息截图',value:'银行信息截图'},{text:'图书馆信息截图',value:'图书馆信息截图'}]"
            :filter-method="filterHandler"
            width="180">
          </el-table-column>
          <el-table-column
            prop="name"
            label="条目名称"
            width="180">
          </el-table-column>
          <el-table-column
            prop="mess"
            width="200"
            label="条目信息">
          </el-table-column>
          <el-table-column
            width="200"
            label="条目证明">
            <template slot-scope="scope">
              <img v-bind:src=scope.row.pics alt="pics" style="width:200px;height:200px;"/>
            </template>
          </el-table-column>
          <el-table-column
            label="操作"
            width="100">
            <template slot-scope="scope">
              <div v-if="scope.row.state !== '审核通过' && scope.row.state !== '审核未通过'">
                <el-button
                  size="mini"
                  type="text"
                  @click="qualified(scope.row)">合格</el-button>
                <el-button
                  size="mini"
                  type="text"
                  @click="unqualified(scope.row)">不合格</el-button>
              </div>
              <div v-else>
                {{ scope.row.state}}
              </div>
            </template>
          </el-table-column>
        </el-table>
      </template>
      <br/>
      <br/>
      <br/>
      <div>
        <el-button size="mini"
                   type="primary"
                   style="position:relative;left:700px;"
                   @click="clear()"
        >审核其他用户
        </el-button>
      </div>
      <br/>
    </div>
  </check-center>
</template>

<script>
  import CheckCenter from '../components/CheckCenter'
  let changenum = 0;
  let new_changenum = 0;
  let count;
  let new_count;
  let certi = ['每年平均志愿活动时长','学生工作','奖励信息','科研竞赛获奖情况','奖学金'];
  let stu = ['学校分类','所在专业情况','受教育情况','挂科数','学习成绩'];
  let gov = ['是否为失信人员'];
  let ser = ['违纪或治安处罚等不良信息','学费及住宿费缴纳情况','考试作弊'];
  let bank = ['贷款偿还'];
  let lib = ['图书馆借阅还书情况'];
  var certi_list = [],stu_list = [],gov_list=[],ser_list=[],bank_list=[],lib_list=[];

  export default {
    name: "userverify",
    components:{CheckCenter},
    methods:{
      test:function(){
        new_count = this.tableData6.length;
        new_changenum = 0;
        count = 0;
        changenum = 0;
        this.tempData.flag = false;
        let certi_pic = this.tableData5[0].certi_pic;
        if (certi_pic !== 0 && certi_pic !== 1){
          count = count + 1;
        }
        let stu_pic = this.tableData5[0].stu_pic;
        if (stu_pic !== 0 && stu_pic !== 1){
          count = count + 1;
        }
        let gov_pic = this.tableData5[0].gov_pic;
        if (gov_pic !== 0 && gov_pic !== 1){
          count = count + 1;
        }
        let bank_pic = this.tableData5[0].bank_pic;
        if (bank_pic !== 0 && bank_pic !== 1){
          count = count + 1;
        }
        let ser_pic = this.tableData5[0].ser_pic;
        if (ser_pic !== 0 && ser_pic !== 1){
          count = count + 1;
        }
        console.log(count);
        console.log(changenum);

        //分组显示
        var list = this.tableData6;
        console.log(certi);
        for (var i=0;i < list.length;i++){
          var flag = false;
          for(var j = 0;j < certi.length;j++){
            if (list[i].name === certi[j]){
              console.log('可以判断了！');
              certi_list.push(list[i]);
              list[i].classify = '证书或证明截图';
              flag = true;
              break;
            }
          }
          if (!flag){
            console.log(list[i].name);
            for(var j = 0;j < gov.length;j++){
              if (list[i].name === gov[j]){
                gov_list.push(list[i]);
                list[i].classify = '查找政府公示';
                flag = true;
                break;
              }
            }

          }
          if (!flag){
            console.log(list[i].name);
            for(var j = 0;j < ser.length;j++){
              if (list[i].name === ser[j]){
                ser_list.push(list[i]);
                list[i].classify = '学生综合服务平台截图';
                flag = true;
                break;
              }
            }

          }
          if (!flag){
            console.log(list[i].name);
            for(var j = 0;j < bank.length;j++){
              if (list[i].name === bank[j]){
                bank_list.push(list[i]);
                list[i].classify = '银行信息截图';
                flag = true;
                break;
              }
            }

          }
          if (!flag){
            console.log(list[i].name);
            for(var j = 0;j < stu.length;j++){
              if (list[i].name === stu[j]){
                stu_list.push(list[i]);
                list[i].classify = '教务网截图';
                flag = true;
                break;
              }
            }

          }
          if (!flag){
            console.log(list[i].name);
            for(var j = 0;j < lib.length;j++){
              if (list[i].name === lib[j]){
                lib_list.push(list[i]);
                list[i].classify = '图书馆信息截图';
                flag = true;
                break;
              }
            }
          }
        }
        console.log(certi_list);
      },
      change:function(temp){
        changenum = changenum + 1;
        document.getElementById(temp).innerHTML='审核通过';
        console.log(count);
        console.log(changenum);
        if(changenum === count){
          this.tempData.flag = true;
          console.log(this.tempData.flag);
        }
      },
      clear:function(){
        count = 0;
        changenum = 0;
        if(new_count !== new_changenum){
          this.$confirm('当前用户相关信息还没有审核完成，是否跳转?(已完成的数据会保留)', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            this.$message({
              type: 'success',
              message: '您将开始审核其他用户！',
            });
            this.$router.push('/EnterVerify');
          }).catch(() => {
            this.$message({
              type: 'info',
              message: '您将继续审核当前用户！'
            });
          });
        }
        else{
          this.$router.push('/EnterVerify');
        }
      },
      filterHandler(value, row, column) {
        const property = column['property'];
        return row[property] === value;
      },
      qualified:function(temp){
        new_changenum = new_changenum + 1;
        temp.state = '审核通过';
      },
      unqualified:function(temp){
        new_changenum = new_changenum + 1;
        temp.state = '审核未通过';
      },
    },
    computed:{
      typeList:function(){
        var certi_list = [];
        var list = this.list;
        for (var i=0;i < list.length;i++){
          if (list[i].name in certi){
            certi_list.append(list[i]);
          }
        }
      }
    },
    filters: {
      // el-tag类型转换
      statusFilter(status) {
        const statusMap = {
          1: 'info',
          2: 'danger',
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
    data() {
      return {
        tableData5: [{
          username: '小红',
          state: 1,
          desc: '暂无',
          certi_pic: '好多张图片',
          stu_pic: 0,
          gov_pic: 1,
          ser_pic: '图片',
          bank_pic: '图片',
          lib_pic: 0,
        }],
        tempData: {
          count: 0,
          flag: false,
        },
        //状态栏，0表示未审核，1表示已审核，2表示需要审核
        tableData6: [{
          classify: 0,
          name: '每年平均志愿活动时长',
          state: 0,
          mess: '志愿时长超过100小时',
          pics: '../../static/pic/志愿时长.png',
        }, {
          classify: 0,
          name: '所在专业情况',
          state: 1,
          mess: '所在院系：工程管理学院',
          pics: '../../static/pic/所在专业.png',
        }, {
          classify: 0,
          name: '图书馆借阅还书情况',
          state: 1,
          mess: '无逾期未还书情况',
          pics: '../../static/pic/图书借阅.png',
        }, {
          classify: 0,
          name: '学费及住宿费缴纳情况',
          state: 1,
          mess: '正常缴纳，没有逾期情况发生',
          pics: '../../static/pic/费用缴纳.png',
        }],
      }
    },
    created:function(){
      this.test();
    },
  }
</script>

<style scoped>
  .sheet{
    margin-top: 5%;
    margin-left:6%;
  }
</style>
<style>
  #leftA { color: dodgerblue !important}
</style>
