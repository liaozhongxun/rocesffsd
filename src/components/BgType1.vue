<template>
  <div class="BgType1">
      <!-- <div class="smBg"></div>
      <div class="smBg"></div>
      <div class="smBg"></div>
      <div class="smBg"></div> -->
      <div class="up">
          {{title}}
      </div>
      <div class="center"></div>
      <div class="down"></div>
  </div>
</template>

<script>
export default {
  name: 'BgType1',
  props: {
    msg: String,
    title:String
  }
}
</script>

<style scoped lang="scss">
.BgType1{
    display:flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    border-radius: 0.03rem;overflow: hidden;


    .up{
        color: #fff;
        font-size: .2rem;
        padding-left: .42rem;
        padding-top: .05rem;
        height: 1.33rem;
        background: url("../assets/images/up5.png") center /cover  no-repeat;
    }
    .center{
        flex: 1;
        background: url("../assets/images/center2.png") repeat;
        background-size:contain;
    }
    .down{
        height: 0.67rem;
        background: url("../assets/images/down1.png") center /cover  no-repeat;
    }
}
</style>
