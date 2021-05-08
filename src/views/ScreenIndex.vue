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
                            <div class="blocks"></div>
                        </div>
                        <div class="b_ce"></div>
                        <div class="b_right"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import * as API from "../api/index";
export default {
    name: "ScreenIndex",
    methods: {
        getdata() {
            API.POST("/screenApi/screenData/selectTownList", {}).then(res => {
                console.log(res);
            });
        }
    },
    created() {
        this.getdata();
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
        background: rgba(0, 0, 0, 0.6);
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
            width: 5.3rem;
            display: flex;
            // justify-content: center;
            // align-items: center;

            img {
                margin-top: 0.32rem;
                width: 5.17rem;
                height: 0.62rem;
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
        padding: 0.35rem 0.35rem 0.2rem 0.35rem;
        .b_center {
            height: 100%;
            display: flex;
            .b_ce {
                width: 7.7rem;
                background: #f0f;
                margin-right: 0.25rem;
            }
            .b_left {
                margin-right: 0.25rem;
                height: 100%;
                width: 5rem;
                .blocks {
                    width: 100%;
                    height: 0.96rem;
                    // background: rgba(12, 26, 43, 0.9);
                    border-radius: 0.04rem;
                     background: url('../assets/images/13.png') center /cover no-repeat;
					 background-size: contain;
                    // box-shadow: 0px 0px 0.37rem rgba(107, 189, 194, 0.32) inset;
                }
            }
            .b_right {
                width: 5rem;
                height: 100%;
                background: #00f;
            }
        }
    }
}
</style>
