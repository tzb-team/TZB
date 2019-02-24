<template>
  <div class="rightBarContainer">
    <div id="share">
      <div class="rightItem">
        <i class="el-icon-share"></i>
      </div>
      <div id="shareContainer">
        <img src="../../static/pic/qq.png" class="shareChoice" v-on:click="qqShare"/>
        <img src="/static/pic/wechat.png" class="shareChoice"/>
        <img src="/static/pic/sina.png" class="shareChoice"/>
      </div>
    </div>
    <div class="rightItem" id="favourite">
      <i class="el-icon-star-off"></i>
    </div>
    <div class="rightItem">
      <a>意见反馈</a>
      <img class="img-responsive" src="/static/pic/advice.png" style="width: 72%;margin-left: 14%;margin-top: 8px" />
    </div>
    <div class="rightItem" id="backTop">
      <a>返回顶部</a>
      <img class="img-responsive" src="/static/pic/backTop.png" style="width: 60%;margin-left: 20%;margin-top: 10px" />
    </div>
    <div></div>
  </div>
</template>

<script>
  var title="安全理财，轻松借款，即刻加入trust平台";
  var url="http://www.baidu.com";
  var picurl="http://101.37.19.32:10080/161250119/DaZuoYe/raw/master/doc/code/SSSL/Client/src/presentation/resource/images/%E6%B3%A8%E5%86%8C%E7%95%8C%E9%9D%A2.jpg";

    export default {
        name: "rightBar",
        mounted: function () {
          var backButton=$('#backTop');

          backButton.on("click",function(){
            $('html,body').animate({
              scrollTop: 0
            }, 500);
          });

          $(window).on('scroll', function () {/*当滚动条的垂直位置大于浏览器所能看到的页面的那部分的高度时，回到顶部按钮就显示 */
            if ($(window).scrollTop() > $(window).height() )
              backButton.fadeIn();
            else
              backButton.fadeOut();
          });
          $(window).trigger('scroll');

          $("#favourite").click(function() {
            var ctrl = (navigator.userAgent.toLowerCase()).indexOf('mac') != -1 ? 'Command/Cmd': 'CTRL';
            if (document.all) {
              window.external.addFavorite('http://localhost:8080', 'trust平台')
            } else if (window.sidebar) {
              window.sidebar.addPanel('trust平台', 'http://localhost:8080', "")
            } else {
              alert('您可以尝试通过快捷键' + ctrl + ' + D 加入到收藏夹~')
            }
          })

          $('#share').hover(function(){
            $('#shareContainer').animate({width:'toggle'},350);
          });
        },

      methods:{
          qqShare : function () {
            var shareString='http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?summary='+
              encodeURIComponent(title)+'&url='+encodeURIComponent(url||document.location)+'&pics='+encodeURIComponent(picurl);
            window.open(shareString,'newwindow','height=400,width=400,top=100,left=100');
          },

        sinaShare : function () {
          var shareString='http://v.t.sina.com.cn/share/share.php?title='+
            encodeURIComponent(title)+'&url='+encodeURIComponent(url||document.location)+'&pics='+encodeURIComponent(picurl);
          window.open(shareString,'newwindow','height=400,width=400,top=100,left=100');
        },

        wechatShare : function () {
          var shareString='http://v.t.sina.com.cn/share/share.php?title='+
            encodeURIComponent(title)+'&url='+encodeURIComponent(url||document.location)+'&pics='+encodeURIComponent(picurl);
          window.open(shareString,'newwindow','height=400,width=400,top=100,left=100');
        },
      }
    }
</script>

<style scoped>
  .rightBarContainer{
    float: right;
    position: fixed;
    top: 180px;
    z-index: 5;
    right: 5px;
  }

  .rightItem{
    max-height: 66px;
    min-height: 55px;
    height: 58px;
    width: 58px;
    display: block;
    position: relative;
    text-align: center;
    background: hsla(0,0%,100%,.9);
    margin-top: 6px;
    -webkit-box-shadow: 0 0 0 0 #ccc;
    box-shadow: 0 0 0 0 #ccc;
    border: 1px solid #e6e6e6;
    border-radius: 2px;
    cursor: pointer;
  }

  .rightItem a{
    color:white;
    width: 100%;
    height: 100%;
    text-align: center;
    padding: 10px;
    display: none;
    text-decoration: none;
  }

  .rightItem i{
    padding-top: 13px;
    font-size: 32px;
  }

  .rightItem:hover{
    background-color: lightskyblue;
  }

  .rightItem:hover a{
    display: inherit;
  }

  .rightItem:hover i{
    color: white;
  }



  .rightItem:hover img{
    display: none;
  }

  #shareContainer{
    padding: 6px 0;
    background: #fff;
    border-bottom-left-radius: 5px;
    border-top-left-radius: 5px;
    position: absolute;
    right: 58px;
    margin-top: -56px;
    width: 140px;
    height: 54px;
    display: none;
  }

  .shareChoice{
    height: 44px;
    width: 44px;
    border-radius: 22px;
    float: right;
    padding: 5px;
    cursor: pointer;
    display: inline-block;
  }

  #share:hover .rightItem{
    background-color: lightskyblue;
  }

  #share:hover .rightItem i{
    color: white;
  }

</style>
