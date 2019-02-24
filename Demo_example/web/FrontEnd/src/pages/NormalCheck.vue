<template>
  <personalCenter paneltitle="校园验证">
    <div style="background-image: url('/static/pic/decoration.png');">
      <div class="MidUsrInstruction" id="mid_info" style="margin-top: 10px;margin-bottom: 10px">
        <h3 style="text-indent: 0px">校园验证</h3>
        <p class="lead" style="font-size:18px;">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;完善校园信息，您将体验更加多样的服务，尽享便携金融。
        </p>
      </div>
      <hr/>

      <div class="NormalCheckModule">
        <div v-if="test">
          <alumniNormalCheck></alumniNormalCheck>
        </div>
        <div v-else>
          <ordinaryNormalCheck></ordinaryNormalCheck>
        </div>
      </div>



      <hr/>


    </div>
  </personalCenter>
</template>

<script>
  import personalCenter from "../components/personalCenter";
  import alumniNormalCheck from "../components/alumniNormalCheck"
  import ordinaryNormalCheck from "../components/ordinaryNormalCheck"
  export default {
    name:"normalcheck",
    components: {personalCenter,alumniNormalCheck,ordinaryNormalCheck},
    data(){
      return{
        test:false,
      }
    }

  }

</script>



<style>
  /*#leftOV,#leftFS,#leftSP,#leftLI,#leftLS,#leftII,#leftIE,#leftBI,#leftAC,#leftCC{ color: #777777 !important; }*/
  #leftNC { color: dodgerblue !important}
  .el-upload__input{
    display: none !important;
  }
</style>
