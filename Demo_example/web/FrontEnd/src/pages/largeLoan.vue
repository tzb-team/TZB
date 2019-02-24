<template>
  <div id="app">
    <navi></navi>
    <!--<img src="/static/pic/Investing.png" class="img-responsive"
         alt="Cinque Terre" style="opacity:0.7;top: 0;z-index: -1;width:100%;height: 950px">-->

    <el-form class="back">

      <div>
        <right-bar></right-bar>
      </div>

      <!-- <div style="width: 100%;" align="center">

       </div>-->


      <div id="sheet" class="sheet">

        <div style="border:2px #d6d6d6 solid;border-radius:10px;background-color: white;margin-top: 20px;padding-top:15px;padding-left:30px;width: 860px">
          <el-steps :active="active" style="width: 800px">
            <el-step class="test" title="项目信息" icon="el-icon-edit" align-center></el-step>
            <el-step title="信息披露层级" icon="el-icon-document" align-center></el-step>
            <el-step title="关于贷款" icon="el-icon-success" align-center></el-step>
          </el-steps>
        </div>

        <div class="primary_panel" style="margin-top: 20px">

          <el-form id="primary" ref="form1" :model="form1" label-width="100px" class="primary_info " >
            <div class="title">基本信息</div>

            <el-form-item label="项目名称">
              <div>
                <el-input placeholder="请填写项目名称" v-model="form1.name"></el-input>
                <div style="color:red;font-size: 12px;">*项目名称不超过20字 例：2018年9月16号Jessie J演唱会</div>
              </div>

            </el-form-item>

            <el-form-item label="开始日期">
              <div>
                <el-date-picker type="date" placeholder="选择开始日期" v-model="form1.date1" style="width: 100%;"></el-date-picker>
                <div style="color:red;font-size: 12px;">*标的审核通过后的发布时间</div>
              </div>

            </el-form-item>
            <el-form-item label="截止日期">
              <div>
                <el-date-picker type="date" placeholder="选择截止日期" v-model="form1.date2" style="width: 100%;"></el-date-picker>
                <div style="color:red;font-size: 12px;">*标的发布后筹资结束时间</div>
              </div>

            </el-form-item>

            <el-form-item label="最低达标率">
              <div>
                <el-input placeholder="请填写项目最低达标率" v-model="form1.least_rate"></el-input>
                <div style="color:red;font-size: 12px;">*截止日期时，标的已筹金额占目标金额的最低比率</div>
              </div>

            </el-form-item>

            <hr>

            <div class="title">资金去向</div>
            <el-form-item label="资金用途分类">
              <el-cascader
                expand-trigger="hover"
                :options="options"
                v-model="selectedOptions2"
                @change="handleChange">
              </el-cascader>

            </el-form-item>

            <el-form-item label="资金用途详述">
              <div>
                <el-input
                  type="textarea"
                  :rows="4"
                  placeholder="请输入内容"
                  v-model="form2.textarea1">
                </el-input>
                <div style="color:red;font-size: 12px;">*不超过100字</div>
                <div>
                  <el-button type="primary" size="small" style="margin-top: -10px">上传凭证<i class="el-icon-upload el-icon--right"></i></el-button>
                </div>
              </div>
            </el-form-item>

          </el-form>

          <el-form id="information" ref="form2" :model="form2" label-width="140px" class="primary_info" style="display: none">
            <div class="title">信息披露层级</div>

            <el-form-item label="选择信息披露层级">
              <el-button type="primary" plain @click="get_layer(4)">第四层级</el-button>&nbsp&nbsp>
              <el-button type="primary" plain @click="get_layer(3)">第三层级</el-button>&nbsp&nbsp>
              <el-button type="primary" plain @click="get_layer(2)">第二层级</el-button>&nbsp&nbsp>
              <el-button type="primary" plain @click="get_layer(1)">第一层级</el-button>
            </el-form-item>

            <el-form style="width: 700px;">

              <div style="padding-left: 20px">

                <el-form-item v-if="form2.layer4">
                  <div>
                    <el-button type="primary" size="mini">偿债能力</el-button>
                    <el-button type="primary" size="mini">杠杆比例</el-button>
                    <el-button type="primary" size="mini">消费比率</el-button>
                    <el-button type="primary" size="mini">储蓄比率</el-button>
                    <el-button type="primary" size="mini">刚性比率</el-button>
                    <el-button type="primary" size="mini">恩格尔系数</el-button>
                    <el-button type="primary" size="mini">资产负债率</el-button>
                  </div>
                  <div>
                    <el-button type="primary" size="mini">受教育情况</el-button>
                    <el-button type="primary" size="mini">信用评级指标</el-button>
                    <el-button type="primary" size="mini">学生的经济来源</el-button>
                    <el-button type="primary" size="mini">学生成绩</el-button>
                  </div>


                </el-form-item>

                <el-form-item v-if="form2.layer3&&form2.layer4">
                  <div>
                    <el-button type="success" size="mini">月收入</el-button>
                    <el-button type="success" size="mini">月支出</el-button>
                    <el-button type="success" size="mini">结余</el-button>
                    <el-button type="success" size="mini">负债</el-button>
                    <el-button type="success" size="mini">净资产</el-button>
                    <el-button type="success" size="mini">总收入</el-button>
                    <el-button type="success" size="mini">总支出</el-button>
                    <el-button type="success" size="mini">刚性支出</el-button>
                  </div>
                  <div>
                    <el-button type="success" size="mini">可调支出</el-button>
                  </div>


                </el-form-item>

                <el-form-item v-if="form2.layer2&&form2.layer3&&form2.layer4">
                  <div>
                    <el-button type="info" size="mini">月投资额</el-button>
                    <el-button type="info" size="mini">总投资额</el-button>
                    <el-button type="info" size="mini">各支出占总支出比率</el-button>
                    <el-button type="info" size="mini">各月支出占总支出比率</el-button>
                    <el-button type="info" size="mini">奖学金情况</el-button>
                  </div>
                  <div>
                    <el-button type="info" size="mini">科研竞赛获奖</el-button>
                    <el-button type="info" size="mini">学生工作（社团等）</el-button>
                    <el-button type="info" size="mini">志愿时长</el-button>
                  </div>
                </el-form-item>

                <el-form-item v-if="form2.layer1&&form2.layer2&&form2.layer3&&form2.layer4">
                  <el-button type="warning" size="mini">姓名</el-button>
                  <el-button type="warning" size="mini">身份证号</el-button>
                  <el-button type="warning" size="mini">月各支出</el-button>
                  <el-button type="warning" size="mini">总各支出</el-button>
                  <el-button type="warning" size="mini">月学习支出</el-button>
                  <el-button type="warning" size="mini">总学习支出</el-button>
                </el-form-item>
              </div>
            </el-form>



          </el-form>

          <div id="test" style="display: flex">
            <el-form id="small_loan" ref="form3" :model="form3" label-width="100px" class="primary_info" style="display: none">
              <div class="title">关于贷款</div>
              <el-form-item label="拆借金额">
                <div>
                  <el-input placeholder="请填写拆借金额" v-model="form3.money"></el-input>
                  <div style="color:red;font-size: 12px;">*借款额度剩余{{limit}}</div>
                </div>
              </el-form-item>
              <el-form-item label="还款期数">
                <div>
                  <el-input placeholder="请填写还款期数" v-model="form3.period"></el-input>
                  <div style="color:red;font-size: 12px;">*小额贷款最长期限为1年，建议范围为[N1,N2]</div>
                </div>

              </el-form-item>
              <el-form-item label="基准还款利率">
                <div>
                  <el-input placeholder="请设置还款利率" v-model="form3.rate"></el-input>
                  <div style="color:red;font-size: 12px;">*利率上下限为[M1,M2],建议设置为M0</div>
                </div>
              </el-form-item>

              <el-form-item label="还款方式">
                <el-collapse v-model="form3.activeName" accordion>

                  <div @click="get_scheme(1)">
                    <el-collapse-item title="等额本息" name="1">
                      <div>每月偿还等同数额的贷款；</div>
                      <div>还款期限内压力平分，总利息高于等额本金。</div>
                    </el-collapse-item>
                  </div>

                  <div @click="get_scheme(2)">
                    <el-collapse-item title="等额本金" name="2" >
                      <div>贷款数总额等分，每月的还款本金额固定，利息越来越少；</div>
                      <div>起初还款压力较大，但是随着时间的推移每月的还款数也越来越少。</div>
                    </el-collapse-item>
                  </div>

                  <div @click="get_scheme(3)">
                    <el-collapse-item title="一次性还本付息" name="3">
                      <div>贷款到期后一次性归还本金和利息；</div>
                      <div>还款期压力大，操作间大，借款人资金调整弹性大，资金利用时间长</div>
                    </el-collapse-item>
                  </div>

                  <div @click="get_scheme(4)">
                    <el-collapse-item title="先息后本" name="4">
                      <div>每月只需支付利息，期末还清本金；</div>
                      <div>资金利用时间长。</div>
                    </el-collapse-item>
                  </div>

                </el-collapse>
              </el-form-item>

              <!--<el-form-item>
                <div v-if="this.form3.activeName==='1'">
                  <evaluate :scheme="scheme"></evaluate>
                </div>
                <div v-else-if="this.form3.activeName==='2'">
                  <evaluate :scheme="scheme"></evaluate>
                </div>
                <div v-else-if="this.form3.activeName==='3'">
                  C
                </div>
                <div v-else-if="this.form3.activeName==='4'">
                  <evaluate :scheme="scheme"></evaluate>
                </div>
              </el-form-item>-->

              <div style="padding-top: 30px">
                <el-form-item style="padding-left: 20%;">
                  <el-button type="primary" @click="onSubmit">确定贷款</el-button>
                  <el-button @click="clean_form3">清空重写</el-button>
                </el-form-item>
              </div>

            </el-form>
            <el-form id="evaluate" class="evaluate" style="background-color: white">
              <evaluate  :scheme="scheme" ></evaluate>
            </el-form>
          </div>
        </div>

        <div style="padding-top: 40px;padding-bottom: 20px">
          <el-button-group style="position:absolute;left: 43%;">
            <el-button type="primary" icon="el-icon-arrow-left" @click="last">上一步</el-button>
            <el-button type="primary" @click="next">下一步<i class="el-icon-arrow-right el-icon--right"></i></el-button>
          </el-button-group>
        </div>


        <div>

        </div>
      </div>

    </el-form>
    <footerBar style="float: bottom"></footerBar>
  </div>
</template>

<script>
  import navi from '@/components/navi.vue';
  import ElCard from "element-ui/packages/card/src/main";
  import footerBar from '@/components/footerBar.vue';
  import rightBar from '@/components/rightBar.vue';
  import evaluate from '@/components/evaluate.vue';
  import checkList from '@/components/checkList.vue';
  import scrollReveal from 'scrollreveal'

  export default {
    name: "large-loan",
    components:{
      ElCard,
      navi,
      footerBar,
      rightBar,
      evaluate,
      checkList
    },
    beforeCreate:function(){
      localStorage.route = "#loan";
    },
    methods:{

      onSubmit(){
        console.log("确认贷款："+this.form3.activeName);
      },
      clean_form3(){
        this.form3.activeName = '';
      },

      get_scheme(num){
        document.getElementById('small_loan').className+=' animation_left';
        document.getElementById('small_loan').setAttribute('width','550px');
        document.getElementById('evaluate').style.display = 'block';
        this.show_evaluate = true;
        //this.$refs.form3.style.width = '550px';
        console.log(num);
        console.log("等额本金");
        this.scheme.capital = 20000;
        this.scheme.interest = 4000;
        this.scheme.sum = 24000;
        this.scheme.count = 10;
        this.scheme.months = [1,2,4,5,6,7,8,10,11,12];
      },

      get_average_capital(num){
        document.getElementById('small_loan').className+=' animation_left';
        document.getElementById('small_loan').setAttribute('width','550px');
        document.getElementById('evaluate').style.display = 'block';
        this.show_evaluate = true;
        //this.$refs.form3.style.width = '550px';
        console.log(num);
        console.log("等额本金");
        this.scheme.capital = 20000;
        this.scheme.interest = 4000;
        this.scheme.sum = 24000;
      },

      get_average_capital_plus_interest(){

        document.getElementById('small_loan').className+=' animation_left';
        document.getElementById('evaluate').style.display = 'block';
        //this.$refs.form3.style.width = '550px';
        console.log("等额本息");
        this.scheme.capital = 20000;
        this.scheme.interest = 5000;
        this.scheme.sum = 25000;
      },

      get_one_off(){
        console.log("一次性还本付息")
      },

      get_interest_first(){
        console.log("先息后本")
      },

      last() {
        if(this.active>0){
          this.active--;
        }

        if(this.active===0){
          document.getElementById("primary").style.display = "block";
          document.getElementById("information").style.display = "none";
          document.getElementById("small_loan").style.display = "none";
          document.getElementById("evaluate").style.display = "none";
        }else if(this.active===1){
          document.getElementById("primary").style.display = "none";
          document.getElementById("information").style.display = "block";
          document.getElementById("small_loan").style.display = "none";
          document.getElementById("evaluate").style.display = "none";
        }else if(this.active===2){
          document.getElementById("primary").style.display = "none";
          document.getElementById("information").style.display = "none";
          document.getElementById("small_loan").style.display = "block";
        }
        //document.getElementById('small_loan').style.width = '550px';
        //document.getElementById('small_loan').setAttribute('width','550px');
        // this.$refs.form3.style.width = '550px';
      },

      next() {
        if (this.active<2){
          this.active++;
        }

        if(this.active===0){
          document.getElementById("primary").style.display = "block";
          document.getElementById("information").style.display = "none";
          document.getElementById("small_loan").style.display = "none";
        }else if(this.active===1){
          document.getElementById("primary").style.display = "none";
          document.getElementById("information").style.display = "block";
          document.getElementById("small_loan").style.display = "none";
        }else if(this.active===2){
          document.getElementById("primary").style.display = "none";
          document.getElementById("information").style.display = "none";
          document.getElementById("small_loan").style.display = "block";
          if(this.show_evaluate){
            document.getElementById("evaluate").style.display = "block";
          }
        }

      },
      get_layer(num){
        console.log(num);
        if(num===1){
          this.form2.layer1 = true;
          this.form2.layer2 = true;
          this.form2.layer3 = true;
          this.form2.layer4 = true;
        }else if(num===2){
          this.form2.layer1 = false;
          this.form2.layer2 = true;
          this.form2.layer3 = true;
          this.form2.layer4 = true;
        }else if(num===3){
          this.form2.layer1 = false;
          this.form2.layer2 = false;
          this.form2.layer3 = true;
          this.form2.layer4 = true;
        }else if(num===4){
          this.form2.layer1 = false;
          this.form2.layer2 = false;
          this.form2.layer3 = false;
          this.form2.layer4 = true;
        }
      },
      handleChange(value) {
        console.log(value);
      }

    },

    data(){
      return {
        active: 0,
        pickerOptions1: {
          disabledDate(time) {
            return time.getTime() > Date.now();
          },
        },

        form1:{
          name: '',
          date1: '',
          date2: '',
          least_rate:''
        },
        form2: {
          user: '',
          region: '',
          textarea1:'',
          layer1:false,
          layer2:false,
          layer3:false,
          layer4:false,
        },
        form3:{
          money:'',
          period:'',
          rate:'',
          create:false,
          activeName: '',
        },

        scheme:{
          capital:0,
          interest:0,
          sum:0,
          count:0,
          months:[]
        },

        limit:3000,

        usage_radio: 3,
        textarea2:'',

        options: [{
          value: 'shop',
          label: '购物',
          children: [{
            value: 'clothing',
            label: '鞋帽服饰',
          },{
            value: 'life',
            label: '生活用品'
          }, {
            value: 'make_up',
            label: '护肤美妆'
          }, {
            value: 'game',
            label: '游戏动漫',
          }, {
            value: 'electronics',
            label: '电子产品',
          }]
        }, {
          value: 'study',
          label: '学习',
          children: [{
            value: 'basic',
            label: '学习用品',
          }, {
            value: 'book',
            label: '书籍报刊',
          }, {
            value: 'data',
            label: '培训考证',
          }, {
            value: 'notice',
            label: '校际交换',
          }]
        }, {
          value: 'entertain',
          label: '娱乐',
          children: [{
            value: 'party',
            label: '聚餐轰趴'
          }, {
            value: 'sports',
            label: '运动健身'
          }, {
            value: 'show',
            label: '观看演出'
          }, {
            value: 'travel',
            label: '外出旅游'
          }]
        },{
          value:'medical',
          label:'医疗',
          children:[{
            value:'treatment',
            label:'诊断治疗'
          }, {
            value:'healthy',
            label:'保健养生'
          }]
        }],
        selectedOptions2: [],
        scrollReveal:scrollReveal(),
        show_evaluate:false,

      };//return
    },

    mounted() {
      this.scrollReveal.reveal('.reveal-top', {
        // 动画的时长
        duration: 2000,
        // 延迟时间
        delay: 500,
        // 动画开始的位置，'bottom', 'left', 'top', 'right'
        origin: 'top',
        // 回滚的时候是否再次触发动画
        reset: false,
        // 在移动端是否使用动画
        mobile: false,
        // 滚动的距离，单位可以用%，rem等
        distance: '200px',
        // 其他可用的动画效果
        opacity: 0.001,
        easing: 'linear',
        scale: 0.9,
      });
    }

  }
</script>

<style scoped>

  .back{
    margin-top: 10px;
    background-image:url("/static/pic/loanBack.jpg");
    background-size: 105% 105%;
    width: 100%;
    /* height: 1700px;*/
    display:flex;
    padding-bottom: 50px;
    /*position: absolute;*/
  }

  .sheet{
    margin-top: 100px;
    margin-left:18%;

  }

  /* .return{
     display: flex;
     !*border:1px black solid;*!
     width: 500px;
     height: 200px;
   }*/
  /*.return_label{
    width:100px;
    height: 150px;
    border: 1px black solid;
    margin-right:40px;
  }*/

  .primary_info{
    width:750px;
    margin-top: 50px;
    margin-left: 50px;
    border:2px #d6d6d6 solid;
    border-radius:20px;
    padding:10px 50px 20px 40px;
    position: relative;
    background-color: white;
  }
  .title{
    font-size: 23px;
    color: #6a6a6a;
    padding-bottom: 20px;
  }

  /*.choose{
    display: flex;
    margin-left: 30%;
    width:1000px;
  }
*/
  .animation_left{
    -webkit-animation:move_left 0.5s;
    -webkit-animation-iteration-count:1;
    -webkit-animation-fill-mode:forwards;
  }

  @-webkit-keyframes move_left /* Safari and Chrome */
  {
    0%   {left:0;  width:750px;}
    100% {left:-150px; width:500px;}
  }

  .evaluate{
    display: none;
    margin-top: 50px;
    margin-left: -80px;
    border:2px #d6d6d6 solid;
    border-radius:20px;
    padding:30px 20px 20px 20px;
  }

  .test{
    opacity: 0.5;
  }


</style>
