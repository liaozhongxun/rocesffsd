<template>
    <div class="ScreenIndex">
        <div class="Mask">
            <div class="Main">
                <div class="header">
                    <div class="h_left"></div>
                    <div class="h_name">
                        <img src="../assets/images/04.png" />
                    </div>
                    <div class="h_right"></div>
                </div>
                <div class="body">
                    <div class="b_center">
                        <div class="b_left">
                            <div class="blocks blocks1">
                                  <el-button type="primary">主要按钮</el-button>
                            </div>
                            <div class="blocks blocks2">
                                <div class="title">{{titles[3]}}</div>
                            </div>
                            <div class="blocks blocks3">
                                <BgType1 :title="titles[0]"></BgType1>
                            </div>
                        </div>
                        <div class="b_ce">
                            <div class="bc_top">
                                <div class="blocks blocks4">
                                    <div class="upfont">
                                        今日收集量
                                    </div>
                                    <div class="downvalue">
                                        <div class="val">3</div>
                                        <div class="val">7</div>
                                        <div class="val">3</div>
                                        <div class="val">5</div>
                                        <span class="unit">kg</span>
                                    </div>
                                </div>
                                <div class="blocks blocks4">
                                    <div class="upfont">
                                        累计收集量
                                    </div>
                                    <div class="downvalue">
                                        <div class="val">6</div>
                                        <div class="val">8</div>
                                        <div class="val">2</div>
                                        <div class="val">0</div>
                                        <span class="unit">kg</span>
                                    </div>
                                </div>
                            </div>
                            <div class="bc_bottom">
                                <BgType2 :title="titles[4]"></BgType2>
                                <div class="blocks blocks7"></div>
                            </div>
                        </div>
                        <div class="b_right">
                            <div class="blocks blocks5">
                                <div class="title">{{titles[2]}}</div>
                            </div>
                            <div class="blocks blocks6">
                                <BgType1 :title="titles[1]"></BgType1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import * as API from "../api/index";
import BgType1 from "../components/BgType1";
import BgType2 from "../components/BgType2";
export default {
    name: "ScreenIndex",
    data(){
        return{
            titles:["社区分离监督概览","投递排行","分类占比","垃圾屋信息","雪品垃圾屋区域分布地图"]
        }
    },
    methods: {
        getBuildingdata() {
            API.POST("/screenApi/screenData/selectBuildingList", {}).then(res => {
                console.log(res);
            });
        },
        getTowndata() {
            API.POST("/screenApi/screenData/selectTownList", {}).then(res => {
                console.log(res);
            });
        }
    },
    components: {
        BgType1,
        BgType2
    },
    created() {
        this.getTowndata();
        this.getBuildingdata();
    }
};
</script>

<style lang="scss" scoped>
.ScreenIndex {
    width: 100%;
    height: 100%;
    background: url("../assets/images/bg.jpg") center / cover no-repeat;
    overflow: hidden;
    .Mask {
        width: 100%;
        height: 100%;
        // background: rgba(0, 0, 0, 0.6);
    }
}
.Main {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    .header {
        height: 1.02rem;
        width: 100%;
        display: flex;
        & > div {
            height: 100%;
        }
        .h_left {
            flex: 1;
            background: url("../assets/images/01.png") left bottom no-repeat;
            background-size: contain;
        }
        .h_name {
            width: 5.28rem;
            display: flex;
            // justify-content: center;
            // align-items: center;
            align-items: center;
            justify-content: center;

            img {
                margin-top: 0.32rem;
                width: 4.95rem;
                height: 0.62rem;
                margin-left: 0.03rem;
            }
        }
        .h_right {
            flex: 1;
            background: url("../assets/images/03.png") right bottom no-repeat;
            background-size: contain;
        }
    }
    .body {
        flex: 1;
        padding: 0.42rem 0.44rem 0.3rem 0.56rem;
        .b_center {
            height: 100%;
            display: flex;
            .b_ce {
                width: 7.7rem;
                margin-right: 0.3rem;
                display: flex;
                flex-direction: column;
                .bc_top{
                    height: 1.82rem;
                    width: 100%;
                    margin-bottom: 0.2rem;
                    display: flex;
                    .blocks{
                        &:nth-child(1){
                            margin-right: 0.72rem;

                        }
                        &.blocks4{
                            width: 3.54rem;
                            height: 100%;
                            background: url("../assets/images/w_4.png") center /
                            cover no-repeat;
                            .upfont{
                                width: 1.5rem;
                                border-bottom: .01rem solid #1cc8e2;
                                height: .58rem;
                                line-height:.58rem;
                                margin: 0 auto;
                                margin-top: .13rem;
                                font-size: .20rem;
                                color:#fff;
                                text-align: center;
                            }
                            .downvalue{
                                margin-top: .3rem;
                                padding-left: .03rem;
                                display: flex;
                                .val{
                                    margin-left: .2rem;
                                    width: .56rem;
                                    height: .56rem;
                                    border: .01rem solid #064f92;
                                    background: #0e2459;
                                    display: flex;
                                    justify-content: center;
                                    align-items: center;
                                    color:#ffe535;
                                    font-size: .36rem;
                                }
                                .unit{
                                    color:#ffe535;
                                    margin-left: .07rem;
                                    line-height: .76rem;
                                    font-size: .2rem;
                                }
                            }
                        }
                    }

                }
                .bc_bottom{
                    flex: 1;
                    width: 100%;
                    position: relative;
                    .blocks7{
                        position: absolute;
                        left:0;
                        bottom: 0;
                        height: 1.26rem;
                        width: 100%;
                        background: url("../assets/images/map_bo.png") center /
                            cover no-repeat;
                        // background: #f00;
                    }
                }
                // .blocks {
                //     width: 100%;
                //     &.blocks4 {
                //         width: 100%;
                //         height: 3.46rem;
                //         margin-bottom: 0.2rem;
                //         background: url("../assets/images/w_5.png") center /
                //             cover no-repeat;
                //     }
                // }
            }
            .b_left {
                margin-right: 0.3rem;
                height: 100%;
                width: 4.96rem;
                display: flex;
                flex-direction: column;

                .blocks {
                    width: 100%;
                    // height: 0.96rem;
                    // background: rgba(12, 26, 43, 0.9);
                    // border-radius: 0.04rem;
                    //  background: url('../assets/images/up2.png') center /cover no-repeat;
                    //  background-size: contain;
                    // box-shadow: 0px 0px 0.37rem rgba(107, 189, 194, 0.32) inset;
                    &.blocks1 {
                        width: 100%;
                        height: 0.98rem;
                        margin-bottom: 0.2rem;
                        background: url("../assets/images/w_1.png") center /
                            cover no-repeat;
                    }
                    &.blocks2 {
                        width: 100%;
                        height: 3.11rem;
                        margin-bottom: 0.2rem;
                        background: url("../assets/images/w_2.png") center /
                            cover no-repeat;
                    }
                    &.blocks3 {
                        width: 100%;
                        flex: 1;
                        // background: url('../assets/images/w_3.png') center /cover no-repeat;
                    }
                }
            }
            .b_right {
                width: 4.96rem;
                height: 100%;
                display: flex;
                flex-direction: column;
                .blocks {
                    width: 100%;
                    &.blocks5 {
                        width: 100%;
                        height: 3.44rem;
                        margin-bottom: 0.2rem;
                        background: url("../assets/images/w_5.png") center /
                            cover no-repeat;
                    }

                    &.blocks6 {
                        width: 100%;
                        flex: 1;
                        // background: url('../assets/images/w_3.png') center /cover no-repeat;
                    }
                }
            }
        }
    }
}
.blocks{
    position: relative;
    .title{
        font-size: .2rem;
        padding-left: .42rem;
        padding-top: .07rem;
        color:#fff;
    }
}
</style>
