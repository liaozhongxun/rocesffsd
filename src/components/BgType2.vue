<template>
  <div class="BgType2">
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
  name: 'BgType2',
  props: {
    msg: String,
    title:String
  }
}
</script>

<style scoped lang="scss">
.BgType2{
    display:flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    border-radius: 0.03rem;overflow: hidden;


    .up{
        height: 1.13rem;
        color: #fff;
        font-size: .2rem;
        padding-left: .45rem;
        padding-top: .08rem;
        background: url("../assets/images/map_up.png") center /cover  no-repeat;
    }
    .center{
        flex: 1;
        background: url("../assets/images/map_center.png") repeat;
        background-size:contain;
    }
    .down{
        height: 0.43rem;
        background: url("../assets/images/map_bottom.png") center /cover  no-repeat;
    }
}
</style>
