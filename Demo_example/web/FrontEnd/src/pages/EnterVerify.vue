<template>
  <check-center paneltitle="用户选择">
    <div id="check" class="sheet" >
      <el-table
        :data="tableData"
        max-height="500"
        :default-sort = "{prop: 'time', order: 'descending'}"
        style="width: 85%">
        <el-table-column
          prop="time"
          label="提交时间"
          sortable
          width="200">
        </el-table-column>
        <el-table-column
          prop="name"
          label="用户名称"
          width="200">
        </el-table-column>
        <el-table-column
          prop="state"
          label="当前状态"
          width="150">
          <template slot-scope="scope">
            <el-tag :type="scope.row.state | statusFilter">{{scope.row.state | formatStata}}</el-tag>
          </template>
        </el-table-column>
        <el-table-column
          prop="action"
          label="操作"
          width="150">
          <template slot-scope="scope">
            <router-link to="/userverify">
              <i class="el-icon-view"></i>
              <el-button  type="text">审核
              </el-button>
            </router-link>
            <!--
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)">删除</el-button>-->
          </template>
        </el-table-column>
      </el-table>
    </div>
  </check-center>
</template>

<script>
  import CheckCenter from '../components/CheckCenter'
  export default {
    name: "EnterVerify",
    components:{CheckCenter},
    methods:{

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
      filterTag(value, row) {
        return row.state === value;
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
          name: '马俊豪',
          state: 1,
          action:''
        }, {
          time:'2018-08-13',
          name: '彦志',
          state: 1,
          action:''
        }, {
          time:'2018-08-24',
          name: '付闫博',
          state: 1,
          action:''
        },{
          time:'2018-09-08',
          name: '刘美璇',
          state: 2,
          action:''
        }]
      };
    },
  }
</script>

<style scoped>
  .sheet{
    margin-top: 5%;
    margin-left:15%;

  }
</style>

<style>
  #leftA { color: dodgerblue !important}
</style>
