<template>
    <div class="warp">
        <div class="BgType2">
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
    </div>
</template>

<script>
export default {
    name: "BgType2",
    props: {
        msg: String,
        title: String
    }
};
</script>

<style scoped lang="scss">
.warp {
    width: 100%;
    height: 100%;
    position: relative;
}
.slotcenter {
    position: absolute;
    height: 110%;
    width: 100%;
    padding:.5rem .3rem 0 .3rem;
    left: 0;
    top: 0;
    opacity: .99;
}
.BgType2 {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    border-radius: 0.03rem;
    overflow: hidden;
    position: relative;

    .up {
        height: 1.13rem;
        color: #fff;
        font-size: 0.2rem;
        padding-left: 0.45rem;
        padding-top: 0.08rem;
        background: url("../assets/images/map_up.png") center / cover no-repeat;
    }
    .center {
        flex: 1;
        background: url("../assets/images/map_center.png") repeat;
        background-size: contain;
    }
    .down {
        height: 0.43rem;
        background: url("../assets/images/map_bottom.png") center / cover
            no-repeat;
    }
}
</style>
