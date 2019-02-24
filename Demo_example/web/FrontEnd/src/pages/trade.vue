<template>
  <div id="app">
    <!--顶栏 -->
    <div class="col-xs-12 col-md-12" style="padding: 0;position: relative;background-color: black;">
      <navi style="position: relative"></navi>
    </div>
    <div class="col-xs-12 col-md-12" style="padding: 0;position:relative;">
      <div class="myspace">
        <h2 class="myspace">闲置市场</h2>
        <p style="color: #777777;">欢迎来这里，让您的闲置创造价值！</p>
      </div>
    </div>

    <!--左边栏-->
    <div>
      <leftTradeBar></leftTradeBar>
    </div>

    <!--正文-->
    <div class="back">

    <div class="mesboxborder">
      <!---走马灯部分--->
      <div style="position:relative;top:20px;margin-left:3%;margin-right:3%;">
        <el-tabs type="border-card">
          <el-tab-pane >
            <span slot="label" style="font-size:19px;"><i class="el-icon-message"></i>&nbsp;&nbsp;鱼塘上新</span>
            <div style="position:relative;top:20px;margin-left:5%;margin-right:5%;">
              <template>
                <el-carousel :interval="3000" type="card" height="250px">
                  <el-carousel-item v-for="i in topData.length" :key="i">
                    <div >
                      <img v-bind:src=topData[i-1].pic style="width:360px;height:230px;margin-top:9px;margin-left:13px;" class="picbox" alt="User_pic">
                    </div>
                  </el-carousel-item>
                </el-carousel>
              </template>
              <!----
              <div style="margin-left:70%;margin-top:-1%;margin-bottom: 1%;">
                <span style="font-size:10px;">*点击图片快速查看详细信息</span>
              </div>
              --->

            </div>
          </el-tab-pane>
        </el-tabs>
      </div>

      <!---筛选+搜索 --->
      <div style="position:relative;top:20px;margin-left:3%;margin-right:3%;">
        <hr/>
        <el-tabs type="border-card" >
          <el-tab-pane >
                <span slot="label" style="font-size:19px;"><i class="el-icon-search"></i>&nbsp;&nbsp;分类检索</span>
            <el-row :gutter="20">
              <el-col :span="16"><template>
                <div style="margin-top: 20px">
                  <span><strong>类别筛选</strong></span>
                  <br/>
                  <el-checkbox v-for="type in types" :key="type" :label="type" style="margin-left:2%;">{{ type }}</el-checkbox>

                </div>
              </template></el-col>
              <el-col :span="8"><div style="margin-top: 15px;">
                <el-input placeholder="范围搜索" class="input-with-select">
                  <el-select  slot="prepend" placeholder="请选择">
                    <el-option label="名称" value="1"></el-option>
                    <el-option label="类别" value="2"></el-option>
                    <el-option label="描述" value="3"></el-option>
                  </el-select>
                  <el-button slot="append" icon="el-icon-search"></el-button>
                </el-input>
              </div></el-col>
            </el-row>
            <el-row :gutter="5" v-for="r in 2" :key="r" style="position:relative;top:20px;">
              <br/>
              <el-col :span="7" v-for="(o, index) in 3" :key="o" :offset="index > 0 ? 1 : 0"style="position:relative;top:20px;">
                <el-card :body-style="{ padding: '5px' }">
                  <img v-bind:src=commData[(r-1)*3+o-1].pic class="image" style="height:200px;">
                  <div style="padding: 14px;">
                    <strong style="font-size: 18px;">{{commData[(r-1)*3+o-1].name}}</strong>
                    <el-collapse v-model="activeName" accordion >
                      <el-collapse-item  name="1">
                        <span slot="title" style="font-size: 17px;">详细信息</span>
                        <div style="position:relative;top:3px;">
                          <i class="el-icon-menu"></i><strong style="font-size: 14px;">种类</strong>
                          <span style="position:relative;left:20px;">{{commData[(r-1)*3+o-1].type}}</span>
                        </div>
                        <div style="position:relative;top:3px;">

                          <i class="el-icon-phone"></i><strong style="font-size: 15px;">电话</strong>
                          <span style="position:relative;left:20px;">{{commData[(r-1)*3+o-1].contact}}</span>
                        </div>
                        <div style="position:relative;top:3px;">
                          <i class="el-icon-document"></i><strong style="font-size: 15px;">详细描述</strong>
                        <span style="position:relative;left:0px;right:20px;">{{commData[(r-1)*3+o-1].description}}</span>
                        </div>
                      </el-collapse-item>

                    </el-collapse>
                    <div class="bottom clearfix">
                      <i class="el-icon-goods" style='font-size:25px;'></i>
                        <strong style="position:relative;left:20px;font-size: 17px;">{{commData[(r-1)*3+o-1].price}}元</strong>
                      <el-button type="primary" class="button" icon="el-icon-star-off">收藏</el-button>
                    </div>
                  </div>
                </el-card>
              </el-col>
            </el-row>
          </el-tab-pane>
        <br/><br/><br/><br/>
          <el-pagination
            background
            layout="prev, pager, next"
            style="position:relative;left:350px;"
            :total="30">
          </el-pagination>

        </el-tabs>
        <hr/>

      </div>
    <br/>




      <!-- 卡片展示

      <div v-for="i in commData.length" :key="i">
        <el-row>
          <el-col :span="8" v-for="(o, index) in 2" :key="o" :offset="index > 0 ? 2 : 0">
            <el-card :body-style="{ padding: '5px' }">
              <img src="https://placekitten.com/380/200" class="image">
              <div style="padding: 14px;">
                <strong style="font-size: 18px;">一只猫猫</strong>
                <el-collapse v-model="activeName" accordion>
                  <el-collapse-item title="详细信息" name="1">
                    <div style="position:relative;top:3px;">
                      <strong style="font-size: 15px;color: #999;">种类</strong>
                      <span style="position:relative;left:20px;">其他</span>
                    </div>
                    <div style="position:relative;top:3px;">
                      <strong style="font-size: 15px;color: #999;">电话</strong>
                      <span style="position:relative;left:20px;">233333345</span>
                    </div>
                    <div style="position:relative;top:3px;">
                      <strong style="font-size: 15px;color: #999;">详细描述</strong>
                    </div>
                    <span style="position:relative;left:0px;right:20px;">非常可爱的喵喵~o( =∩ω∩= )m，召之即来，来之可撸，萌萌萌。</span>
                  </el-collapse-item>

                </el-collapse>
                <div style="position:relative;top:3px;">
                  <strong style="font-size: 15px;">目标价格</strong>
                  <span style="position:relative;left:20px;">100元</span>
                </div>
                <div class="bottom clearfix">
                  <time class="time">{{ currentDate }}</time>
                  <el-button type="primary" class="button" icon="el-icon-star-off">收藏</el-button>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
          </div>
      -->
    </div>
    </div>
    <!--右边栏-->
    <div>
      <right-bar></right-bar>
    </div>

    <!--底栏-->
    <div class="col-sm-12 col-md-12" style="float:bottom; padding:0;margin-top:100px;">
      <footerBar></footerBar>
    </div>

  </div>
</template>

<script>
  import navi from '@/components/navi.vue';
  import footerBar from '@/components/footerBar.vue';
  import rightBar from '@/components/rightBar.vue';
  import leftTradeBar from "@/components/leftTradeBar.vue";
  const typeOptions = ['数码零件', '影音家电', '鞋服配饰', '化妆洗漱','图书教材','其他'];
  export default {
    name: "trade",
    components:{ leftTradeBar, navi, footerBar, rightBar},
    types:typeOptions,
   data() {
      return {
        options4: [],
        value9: [],
        list: [],
        loading: false,
        types:typeOptions,

        checkboxGroup:['数码零件'],
        //<el-option label="数码零件" value="家居日用"></el-option>
        //<el-option label="影音家电" value="影音家电"></el-option>
        //<el-option label="鞋服配饰" value="运动器材"></el-option>
        //<el-option label="化妆洗漱" value="化妆洗漱"></el-option>
        //<el-option label="图书教材" value="图书教材"></el-option>
        //<el-option label="其他" value="其他"></el-option>
        topData:[{
          num:'000001',
          type:'化妆洗漱',
          name:'DHC橄榄润唇膏',
          description:'日本 大国药妆店购入 全新未拆封',
          price:'50',
          contact:'123456',
          pic:"../../static/pic/dhc.jpeg",
          date:"2018/06/04",
          state: true
        },
          {
            num:'000002',
            type:'化妆洗漱',
            name:'无印良品卸妆啫喱',
            description:'日本 大国药妆店购入 全新未拆封',
            price:'70',
            contact:'13329048392',
            pic:'../../static/pic/wylp.jpeg',
            date:"2018/05/02",
            state: true
          },
          {
            num:'000003',
            type:'影音家电',
            name:'铁三角msr',
            description:'自用一年，音质良好。',
            price:'750',
            contact:'1997939399',
            pic:'../../static/pic/msr.jpg',
            date:"2018/8/12",
            state: true
          },
          {
            num:'000004',
            type:'化妆洗漱',
            name:'YSL粉底液B10色号',
            description:'因为皮肤偏干，这款比较哑光，不适合我，仅用过一次',
            price:'300',
            contact:'1997939399',
            pic:'../../static/pic/ysl.JPG',
            date:"2018/5/12",
            state: true
          },
          {
            num:'000005',
            type:'影音家电',
            name:'Acer宏碁572G-528R',
            description:'自用2年半，硬件全原装，第四代i5标压版 8g(ddr3) gtx840m2g 120g（三星固态，自己加的，根据需求另卖）+1000g。',
            price:'2500',
            contact:'1997939399',
            pic:'../../static/pic/acer.jpg',
            date:"2018/6/13",
            state: true
          }

        ],
        commData:[{
          num:'000000',
          type:'鞋服配饰',
          name:'名创优品粉红顽皮帽子',
          description:'名创优品39.9入 带过一次 可小刀',
          price:'35',
          contact:'13323389923',
          pic:"../../static/pic/hat.jpg",
          state: true
        },
          {
            num:'000001',
            type:'化妆洗漱',
            name:'DHC橄榄润唇膏',
            description:'日本 大国药妆店购入 全新未拆封',
            price:'50',
            contact:'123456',
            pic:"../../static/pic/dhc.jpeg",
            state: true
          },
          {
            num:'000002',
            type:'化妆洗漱',
            name:'无印良品卸妆啫喱',
            description:'日本 大国药妆店购入 全新未拆封',
            price:'70',
            contact:'13329048392',
            pic:'../../static/pic/wylp.jpeg',
            state: true
          },
          {
            num:'000003',
            type:'影音家电',
            name:'铁三角msr',
            description:'自用一年，音质良好。',
            price:'750',
            contact:'1997939399',
            pic:'../../static/pic/msr.jpg',
            state: true
          },
          {
            num:'000004',
            type:'化妆洗漱',
            name:'YSL粉底液B10色号',
            description:'因为皮肤偏干，这款比较哑光，不适合我，仅用过一次',
            price:'300',
            contact:'1997939399',
            pic:'../../static/pic/ysl.JPG',
            state: true
          },
          {
            num:'000005',
            type:'影音家电',
            name:'Acer宏碁572G-528R',
            description:'自用2年半，硬件全原装，第四代i5标压版 8g(ddr3) gtx840m2g 120g（三星固态，自己加的，根据需求另卖）+1000g。',
            price:'2500',
            contact:'1997939399',
            pic:'../../static/pic/acer.jpg',
            state: true
          }
        ],

      }
    },
    mounted() {
      this.list = this.states.map(item => {
        return { value: item, label: item };
      });
    },
    methods: {
      test:function(){
      },
      remoteMethod(query) {
        if (query !== '') {
          this.loading = true;
          setTimeout(() => {
            this.loading = false;
            this.options4 = this.list.filter(item => {
              return item.label.toLowerCase()
                .indexOf(query.toLowerCase()) > -1;
            });
          }, 200);
        } else {
          this.options4 = [];
        }
      }
    },
    created:function(){
      this.test();
    },
  }
</script>

<style scoped>
  .back{
    /*background-color: rgba(173,216,230,0.5);*/
    width: 100%;
    height:1200px;
    padding-bottom: 20px;
    display:flex;
  }

  .input-with-select .el-input-group__prepend {
    background-color: #fff;
  }

  div.myspace{
    /*个人中心*/
    text-indent:6.3%;
    color: black;
    background-color: white;
    margin: 0px;
    border: 0px;
    padding: 5px;
    box-shadow:
      0 1px 6px 0 rgba(0,0,0, .12),
      0 1px 6px 0 rgba(0,0,0, .12);
    border-radius: 3px;
  }
  .myspace p{
    font-size: 15px;
    color: #505050;
  }

  /*消息框*/
  .mesboxborder{
    width:950px;
    margin-right: 10%;
    border-radius: 3px;
    position:absolute;top:222px;
    margin-left: 24%;
    background:white;
    border:1px solid #e4e4e4;
    box-shadow:
      0 1px 6px 0 rgba(0,0,0, .12),
      0 1px 6px 0 rgba(0,0,0, .12);
    border-radius: 3px;
  }

  .textitem{
    position:relative;
    left:180px;
    top:-150px;

  }

  .picbox{
    box-shadow:
      0 1px 6px 0 rgba(0,0,0, .12),
      0 1px 6px 0 rgba(0,0,0, .12);
    border-radius: 3px;

  }

  /*卡片样式*/
  .box-card {
    border-top:3px solid dodgerblue;
    border-radius: 5px;
    box-shadow:
      0 1px 6px 0 rgba(0,0,0, .12),
      0 1px 6px 0 rgba(0,0,0, .12);
    margin: 0px;
  }
  .box-card:hover{
    background:#D1EEEE;
  }
  .time {
    font-size: 13px;
    color: #999;
  }

  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 5px;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
    data-ratio:"16:9";
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }

  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
