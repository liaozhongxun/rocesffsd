<template>
    <div class="warp">
        <div class="BgType2">
            <!-- <div class="smBg"></div>
      <div class="smBg"></div>
      <div class="smBg"></div>
      <div class="smBg"></div> -->
            <div class="rtbg"></div>
            <div class="up">
                {{ title }}
            </div>
            <div class="center"></div>
            <div class="down"></div>
            <div class="slotcenter">
                <!-- <div class="boxshow"></div> -->
                <slot name="center"></slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "BgType2",
    props:['msg','title']
    // props: {
    //     msg: String,
    //     title: String
    // }
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
    padding:0rem .0rem 0 .0rem;
    left: 0;
    top: 0;
    opacity: .99;
}

// .boxshow{
//     position: absolute;
//     width: 100%;
//     height: 90%;
//     background: #f00;
//     left:0;
//     bottom:0;
//     z-index: 1;

// }
.BgType2 {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    border-radius: 0.03rem;
    overflow: hidden;
    position: relative;
    .rtbg{
        height: .34rem;
        width: 3.45rem;
        background: #000;
        top:0;
        right: 0;
        position: absolute;
        z-index: 221;
        transform: skewX(39deg);
        box-shadow: 0px 0px 0.40rem rgba(17, 123, 165, 0.6);
        border-radius: 0 0 0 .02rem;
    }

    .up {
        height: .3rem;
        color: #fff;
        font-size: 0.2rem;
        padding-left: 0.45rem;
        padding-top: 0.08rem;
        background: url("../assets/images/map_title.png") top / 100% no-repeat;
        position: relative;
        z-index: 222;
    }
    .center {
        flex: 1;
        // background: url("../assets/images/map_center.png") repeat;
        background-size: contain;
    }
    .down {
        height: 0.43rem;
        // background: url("../assets/images/map_bottom.png") center / cover
        //     no-repeat;
    }
}
</style>
