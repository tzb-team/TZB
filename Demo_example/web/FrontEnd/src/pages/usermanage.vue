<template>
  <div class="UserList" style="float:left">
    <div>
      <adminNavi></adminNavi>
    </div>
    <div class="mytable">
      <div class="base-info" style="padding:50px 0px 0px 30px; font-size:12px;">
        <label style="font-size: 14px;">筛选条件:</label>
        <label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
        <label>用户名称：</label>
        <form style="display:inline-block;color:black">
          <input type="text" name="username" value="" v-model="input_username"/><!--<input type="text" v-model="input_username" />-->
        </form>
        <label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
        <label>信用评级：</label>
        <form style="display:inline-block;color:black">
          <input type="text" name="level" value="" v-model="input_level"/>
        </form>
        <label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
        <label >电话：</label>
        <form style="display:inline-block;color:black">
          <input type="text" name="tel" value="" v-model="input_tel"/>
        </form>
        <label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
        <label>邮箱：</label>
        <form style="display:inline-block;color:black">
          <input type="text" name="email" value="" v-model="input_email">
        </form>
        <label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
        <!--选择过滤条件-->
        <label>借款状态：</label>
        <select name="state" type="hidden" v-model.lazy="state" style="color:black;">
          <option value="">所有</option>
          <option value="无借款">无借款</option>
          <option value="待还款">待还款</option>
          <option value="逾期">逾期</option>
        </select>

      </div>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      <div class="tableBackground">
        <table class="usertable">
          <tbody class="usertablebody">
          <tr>
            <th style="border: 1px solid black;text-align:center;">用户名称</th>
            <th style="border: 1px solid black;text-align:center;">信用评级</th>
            <th style="border: 1px solid black;text-align:center;">电话</th>
            <th style="border: 1px solid black;text-align:center;">邮箱</th>
            <th style="border: 1px solid black;text-align:center;">借款状态</th>
            <th style="border: 1px solid black;text-align:center;">操作</th>
          </tr>
          <tr v-for="user in filteredUsers" @click="showModel" >
            <td style="border: 1px solid black ;text-align:center;">{{ user.username }}</td>
            <td style="border: 1px solid black ;text-align:center;">{{ user.level }}</td>
            <td style="border: 1px solid black ;text-align:center;">{{ user.tel }}</td>
            <td style="border: 1px solid black ;text-align:center;">{{ user.email }}</td>
            <td style="border: 1px solid black ;text-align:center;">{{ user.state }}</td>
            <td style="border: 1px solid black ;text-align:center;">
              <a href="/userdetail">
                <button class="checkDetailButton" style="min-width: 200px;">查看投资/借款/个人财务</button>
              </a>
            </td>
          </tr>
          </tbody>
          <tfoot class="full-width">
          <tr>
            <th></th>
            <th colspan="4" style="text-align:center;">
              <button class="pageButton" @click="turnPage(-1)">Prev</button>
              <span>共 {{ totalPage }} 页，当前第 {{ currentPage+1 }} 页</span>
              <button class="pageButton" @click="turnPage(1)">Next</button>
              <span>跳转到第</span>
              <input type="text" v-model="jPage" @keyup.enter="jumpToPage" style="width:50px;height:25px;color:black;">
              <span>页</span>
            </th>
          </tr>
          </tfoot>
        </table>
      </div>
    </div>
    <div>
      <footerBar></footerBar>
    </div>
  </div>



</template>

<script>
  import footerBar from '@/components/footerBar.vue';
  import adminNavi from '@/components/adminNavi.vue';
  var mockUsers = [
    {username: '王刚',state:'待还款',
    level: 'B',
    tel: '13258449922',
    email: '134456745@qq.com',},
    {username: '李艺璇',state:'待还款',
      level: 'A',
      tel: '14423945566',
      email: 'lyxnju@163.com',},
    {username: '张一帆',state:'待还款',
      level: 'C',
      tel: '18628993345',
      email: 'zyf12345@126.com',},
    {username: '刘浩',state:'待还款',
      level: 'B',
      tel: '13293334853',
      email: 'liuhao@126.com',},
    {username: '吴欣怡',state:'待还款',
      level: 'B',
      tel: '18312348534',
      email: 'xinyiwu12@163.com',},
    {username: '陈文博',state:'无借款',
      level: 'AA',
      tel: '13329483758',
      email: 'studywb@126.com',},
    {username: '付贺然',state:'无借款',
      level: 'C',
      tel: '18756763899',
      email: '865428373@qq.com',},
    {username: '罗子俊',state:'无借款',
      level: 'A',
      tel: '18188829384',
      email: 'lzjhappy1@163.com',},
    {username: '王桐',state:'逾期',
      level: 'D',
      tel: '13211238753',
      email: 'wangtong22@126.com',}];
  var STORAGE_KEY = 'users';
  var userStorage = {
    fetch: function () {
      return JSON.parse(localStorage.getItem(STORAGE_KEY)) || mockUsers
    },
    save: function (data) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
    }
  };

  export default {
    name: "usermanage",
    components:{adminNavi,footerBar},
    data () {
      return {
        users: userStorage.fetch(), // users 数据
        selectedUsers: [], // 保存选中的 users 数组
        selectedUser: {}, // 选中 user
        input_username: '', // 过滤 username 的关键字
        input_level:'',// 过滤 level 的关键字
        input_tel:'',// 过滤 tel 的关键字
        input_email:'',// 过滤 email 的关键字
        name: '', // 上一次过滤的 name 关键字，初始化为''
        state: '', // 过滤 state 的关键字
        //audit: '', // 上一次过滤的 audit关键字，初始化为''
        limit: 9, // 每页显示行数
        totalPage: 0, // 总页数
        currentPage: 0, // 当前页
        jPage: 1, // 跳转到某页


      }
    },
    // watch
    watch: {
      users: {
        handler () {
          userStorage.save(this.users)
        },
        deep: true
      }
    },
    // computed properties
    computed: {
      filteredUsers () {
        let fUsers = this.queryFilter('username', this.input_username, this.users)
        fUsers = this.queryFilter('state', this.state, fUsers)
        fUsers = this.queryFilter('level',this.input_level,fUsers)
        fUsers = this.queryFilter('tel',this.input_tel,fUsers)
        fUsers = this.queryFilter('email',this.input_email,fUsers)
        return this.paginate(fUsers)
      }
    },
    mounted:function(){
        this.$axios.get('/adminUser/manage', {
          params: {
            page:1,
            pageSize:20,
            keyword: "",
            type:"无借款",
          }
        }).then(function (response) {
          alert("success!");
          console.log(response);
        }).catch(function (error) {
          alert("error!")
          console.log(error);
        });
    },
    methods: {
      addUser() {
        this.users.push(this.user)
      },
      queryFilter(prop, key, arr) {
        // none query string, return arr
        if (!key) {
          return arr
        }
        // filtering
        arr = arr.filter((user) => {
          if (user[prop].toString().indexOf(key) !== -1) {
            return true
          }
        })
        // if it's a new filter query, research and turn to page one
        if (key !== this[prop]) {
          this.currentPage = 0
          // save last filter query
          this[prop] = key
        }
        return arr
      },

      paginate(arr) {
        // totalPage
        this.totalPage = Math.ceil(arr.length / this.limit)
        let page = this.currentPage
        let curLimit = this.limit
        // 返回指定条数的数组
        arr = arr.slice(curLimit * page, curLimit * (page + 1))
        return arr
      },
      turnPage(num) {
        if (num === 1) {
          if (this.currentPage === this.totalPage - 1) {
            return
          } else {
            this.currentPage++
          }
        } else {
          if (this.currentPage === 0) {
            return
          } else {
            this.currentPage--
          }
        }
      },
      jumpToPage() {
        let jPage = this.jPage - 1
        if (jPage < 0 || jPage > this.totalPage) {
          alert('page out of range')
        } else {
          this.currentPage = jPage
        }
      },

      /*doAudit(newAudit, user) {
        // user 可指定，为 0 时指选中用户，为 -1 时指全部用户
        let users = []
        if (user === 0) {
          users = this.selectedUsers
        } else if (user === -1) {
          this.filteredUsers.forEach((v) => {
            users.push(v)
          })
        } else {
          users.push(user)
        }
        this.setAuditId(users, newAudit)
      },
      setAuditId(users, aId) {
        users.forEach((user) => {
          user.audit = aId
        })
      },*/
      showModel(e) {
        let target = e.target
        if (target.nodeName.toLowerCase() === 'td') {
          $('.ui.modal').modal('show')
        }
        let index = $(target.parentNode).index()
        this.selectedUser = this.filteredUsers[index]
      }
    }
  }
</script>


<style scoped>
  .mytable{
    min-width: 400px;
    min-height: 580px;
    padding: 50px 0px;
    line-height: 3px;
    background-image: url("/static/pic/Investing.png");
    background-size: 110% 110% ;
    color: black;
    border: none;
    font-size: 16px;
    font-family: "Microsoft YaHei UI";
    width:100%;
    left: 0%;
    letter-spacing: 2px;
  }
  .tableBackground{
    background-color:transparent;
    padding:20px;
  }
  .usertable{
    min-width: 400px;
    padding: 240px 0px;
    line-height: 40px;
    color: black;
    border-collapse: collapse;
    border: none;
    font-size: 16px;
    font-family: "Microsoft YaHei UI";
    width:80%;
    left: 10%;
    height: 70%;
    position: relative;
    letter-spacing: 2px;
  }
  .sureButton,.checkDetailButton,.pageButton{
    border-radius: 30px;
    min-width: 80px;
    min-height: 28px;
    padding: 0px 0px;
    line-height: 18px;
    background-color:rgba(173,210,250,0.8);
    color: black;
    border: none;
    font-size: 14px;
    font-family: "Microsoft YaHei UI";
    top: 550px;
    width: 10%;
    left: 43%;
    letter-spacing: 2px;
  }


  .status-picker select {
    border-radius: 5px;
    width: 200px;
    float: left;
    height: 37px;
    margin-bottom: -13px;
    border: 1px solid rgba(34, 36, 38, .15);
    padding: 0 10px;
  }

  .jtp {
    color:black;
  }

</style>

