<template>
    <div class="BgType1">
        <!-- <div class="smBg"></div>
      <div class="smBg"></div>
      <div class="smBg"></div>
      <div class="smBg"></div> -->
        <div class="up">
            {{ title }}
        </div>
        <div class="center"></div>
        <div class="down"></div>
        <div class="slotcenter">
            <slot name="center"></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: "BgType1",
    props:['msg','title']
    // props: {
    //     msg: String,
    //     title: String
    // }
};
</script>

<style scoped lang="scss">
.slotcenter {
    position: absolute;
    height: 100%;
    width: 100%;
    padding:.5rem .3rem 0 .3rem;
    left: 0;
    top: 0;
}
.BgType1 {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    border-radius: 0.03rem;
    overflow: hidden;
    position: relative;


    .up {
        color: #fff;
        font-size: 0.2rem;
        padding-left: 0.42rem;
        padding-top: 0.05rem;
        height: 1.33rem;
        background: url("../assets/images/up5.png") center / cover no-repeat;
    }
    .center {
        flex: 1;
        background: url("../assets/images/center2.png") repeat;
        background-size: contain;
    }
    .down {
        height: 0.67rem;
        background: url("../assets/images/down1.png") center / cover no-repeat;
    }
}
</style>
