<template>
    <div class="ScreenIndex">
        <div class="Mask">
            <div class="Main">
                <div class="header">
                    <div class="h_left">
                        <el-select
                            v-model="townListValue"
                            placeholder="请选择"
                            @change="changeTownList"
                        >
                            <el-option
                                v-for="item in townListData"
                                :key="item.townCode"
                                :label="item.townName"
                                :value="item.townCode"
                            >
                            </el-option>
                        </el-select>
                    </div>
                    <div class="h_name">
                        <img src="../assets/images/04.png" />
                    </div>
                    <div class="h_right"></div>
                </div>
                <div class="body">
                    <div class="b_center">
                        <div class="b_left">
                            <div class="blocks blocks1">
                                <div class="title">
                                    <div class="ico"></div>
                                    投放时间
                                </div>
                                <div class="times">
                                    <div class="zs">
                                        <div class="font">早上</div>
                                        <div class="font tim">
                                            {{ BuildingInfo.amTime }}
                                        </div>
                                    </div>
                                    <div class="br"></div>
                                    <div class="zs">
                                        <div class="font">晚上</div>
                                        <div class="font tim">
                                            {{ BuildingInfo.pmTime }}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="blocks blocks2">
                                <div class="title">{{ titles[3] }}</div>
                                <div class="bl2Info">
                                    <div
                                        class="itemLine"
                                        :class="{ two: !item.status }"
                                        v-for="(item, index) in bl2infoData"
                                        :key="index"
                                    >
                                        <div class="key">{{ item.key }}</div>
                                        <div class="val">{{ item.value }}</div>
                                    </div>
                                </div>
                            </div>
                            <div class="blocks blocks3">
                                <BgType1 :title="titles[0]">
                                    <div slot="center" class="tabs">
                                        <div class="tables">
                                            <div class="line thead">
                                                <div class="td">社区</div>
                                                <div class="td">分类屋(个)</div>
                                                <div class="td">督导员(位)</div>
                                                <div class="td">回收员(位)</div>
                                            </div>
                                            <div class="tbody">
                                                <div
                                                    class="line"
                                                    :class="{
                                                        bg: index % 2 == 1
                                                    }"
                                                    v-for="(item,
                                                    index) in tabsData"
                                                    :key="index"
                                                >
                                                    <div class="td">
                                                        {{ item.communityName }}
                                                    </div>
                                                    <div class="td">
                                                        {{ item.housesNumber }}
                                                    </div>
                                                    <div class="td">
                                                        {{ item.auditorNumber }}
                                                    </div>
                                                    <div class="td">
                                                        {{
                                                            item.collectorNumber
                                                        }}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </BgType1>
                            </div>
                        </div>
                        <div class="b_ce">
                            <div class="bc_top">
                                <div class="blocks blocks4">
                                    <div class="upfont">
                                        今日收集量
                                    </div>
                                    <div class="downvalue">
                                        <div class="val">
                                            {{
                                                BuildingInfo.dayRubbishNumer[0]
                                            }}
                                        </div>
                                        <div class="val">
                                            {{
                                                BuildingInfo.dayRubbishNumer[1]
                                            }}
                                        </div>
                                        <div class="val">
                                            {{
                                                BuildingInfo.dayRubbishNumer[2]
                                            }}
                                        </div>
                                        <div class="val">
                                            {{
                                                BuildingInfo.dayRubbishNumer[3]
                                            }}
                                        </div>
                                        <span class="unit">kg</span>
                                    </div>
                                </div>
                                <div class="blocks blocks4">
                                    <div class="upfont">
                                        累计收集量
                                    </div>
                                    <div class="downvalue">
                                        <div class="val">
                                            {{
                                                BuildingInfo.sumRubbishNumer[0]
                                            }}
                                        </div>
                                        <div class="val">
                                            {{
                                                BuildingInfo.sumRubbishNumer[1]
                                            }}
                                        </div>
                                        <div class="val">
                                            {{
                                                BuildingInfo.sumRubbishNumer[2]
                                            }}
                                        </div>
                                        <div class="val">
                                            {{
                                                BuildingInfo.sumRubbishNumer[3]
                                            }}
                                        </div>
                                        <span class="unit">kg</span>
                                    </div>
                                </div>
                            </div>
                            <div class="bc_bottom">
                                <BgType2 :title="titles[4]">
                                    <div
                                        style="width:100%;height:100%"
                                        slot="center"
                                    >
                                        <ScreenMap
                                            :MarkerData="addressList"
                                        ></ScreenMap>
                                    </div>
                                </BgType2>
                                <el-select
                                    v-model="townBuildValue"
                                    placeholder="请选择"
                                    @change="changeBuildList"
                                >
                                    <el-option
                                        v-for="item in townBuildData"
                                        :key="item.buildingCode"
                                        :label="item.buildingName"
                                        :value="item.buildingCode"
                                    >
                                    </el-option>
                                </el-select>
                                <div class="blocks blocks7">
                                    <div class="bl7warp">
                                        <div class="item">
                                            <div class="upval">
                                                {{
                                                    BuildingInfo.registerNumber
                                                }}/<span class="small">{{
                                                    BuildingInfo.sumNumber
                                                }}</span>
                                            </div>
                                            <div class="downval">
                                                已注册数/总数
                                            </div>
                                        </div>
                                        <div class="item">
                                            <div class="upval">
                                                {{ BuildingInfo.dayPutNumber }}
                                            </div>
                                            <div class="downval">
                                                今日参与投放人次
                                            </div>
                                        </div>
                                        <div class="item">
                                            <div class="upval">
                                                {{
                                                    BuildingInfo.dayAccuracyNumber
                                                }}%
                                            </div>
                                            <div class="downval">
                                                今日抽样准确率
                                            </div>
                                        </div>
                                        <div class="item">
                                            <div class="upval">
                                                {{
                                                    BuildingInfo.dayMissentNumber
                                                }}
                                            </div>
                                            <div class="downval">
                                                今日误投警报
                                            </div>
                                        </div>
                                        <div class="item">
                                            <div class="upval">
                                                {{
                                                    BuildingInfo.sumMissentNumber
                                                }}
                                            </div>
                                            <div class="downval">
                                                累计误投工单数
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="b_right">
                            <div class="blocks blocks5">
                                <div class="title">{{ titles[2] }}</div>
                                <div class="flzb_echarts">
                                    <div id="flzb_echarts"></div>
                                </div>
                            </div>
                            <div class="blocks blocks6">
                                <BgType1 :title="titles[1]">
                                    <div slot="center" class="tdph_echarts">
                                        <!-- <div id="tdph_echarts"></div> -->
                                        <div class="titletag">
                                            <div class="item">
                                                <div class="colors c1"></div>
                                                <div class="font">可回收</div>
                                            </div>
                                            <div class="item">
                                                <div class="colors c2"></div>
                                                <div class="font">厨余</div>
                                            </div>
                                            <div class="item">
                                                <div class="colors c3"></div>
                                                <div class="font">有害</div>
                                            </div>
                                            <div class="item">
                                                <div class="colors c4"></div>
                                                <div class="font">其他</div>
                                            </div>
                                        </div>
                                        <div class="chartlist">
                                            <ul class="tdphList">
                                                <li
                                                    class="item"
                                                    v-for="item in tdphData"
                                                    :key="item.rowNumber"
                                                >
                                                    <div class="index">
                                                        {{ item.rowNumber }}
                                                    </div>
                                                    <div class="name">
                                                        {{ item.buildingName }}
                                                    </div>
                                                    <div class="colors">
                                                        <div
                                                            class="c1"
                                                            :style="{
                                                                width: colorwidth(
                                                                    item,
                                                                    'recoverableWeight'
                                                                )
                                                            }"
                                                        ></div>
                                                        <div
                                                            class="c2"
                                                            :style="{
                                                                width: colorwidth(
                                                                    item,
                                                                    'foodWasteWeight'
                                                                )
                                                            }"
                                                        ></div>
                                                        <div
                                                            class="c3"
                                                            :style="{
                                                                width: colorwidth(
                                                                    item,
                                                                    'harmfulWasteWeight'
                                                                )
                                                            }"
                                                        ></div>
                                                        <div
                                                            class="c4"
                                                            :style="{
                                                                width: colorwidth(
                                                                    item,
                                                                    'elseWasteWeight'
                                                                )
                                                            }"
                                                        ></div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </BgType1>
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
import ScreenMap from "../components/ScreenMap";
import * as echarts from "echarts";
import screenfull from "screenfull";
export default {
    name: "ScreenIndex",
    data() {
        return {
            titles: [
                "社区分离监督概览",
                "投递排行",
                "分类占比",
                "垃圾屋信息",
                "雪品垃圾屋区域分布地图"
            ],
            bl2infoData: [
                { key: "分类管理员", value: "张翠平" },
                { key: "主管、街道长", value: "眭华翠" },
                { key: "社区党组织负责人", value: "陈飞" },
                { key: "小区业委会负责人", value: "林鹤" },
                { key: "小区物业负责人", value: "阮文琦" },
                { key: "街道包片负责人", value: "张胜利" },
                {
                    key: "垃圾分类中标企业",
                    value: "福州雪品环境科技有限公司",
                    status: true
                }
            ],
            townListData: [],
            townBuildData: [],
            townBuildValue: "",
            townListValue: "",
            value: "",
            tdph_myChart: null,
            flzb_myChart: null,
            tabsData: [],
            tdphData: [],
            addressList: [], //小区点标记数据
            BuildingInfo: {
                dayRubbishNumer: "0000",
                sumRubbishNumer: "0000",
                amTime: "00-00",
                pmTime: "00-00",
                registerNumber: 0,
                sumNumber: 0,
                dayPutNumber: 0,
                dayAccuracyNumber: 0,
                dayMissentNumber: 0,
                sumMissentNumber: 0
            } //小区其他信息
        };
    },
    methods: {
        colorwidth(item, type) {
            return (item[type]/(
                item.recoverableWeight +
                item.foodWasteWeight +
                item.harmfulWasteWeight +
                item.elseWasteWeight
            ))*100 + '%'
            
        },
        changeTownList(data) {
            this.townListValue = data;
            this.getBuildingdata();
            this.getScreenDataTownInfo();
        },
        changeBuildList(data) {
            this.townBuildValue = data;
            this.getScreenDataBuildingInfo();
        },
        getTowndata() {
            //获取街道
            API.POST("/screenApi/screenData/selectTownList", {}).then(res => {
                this.townListData = res.object;
                this.townListValue = this.townListData[0].townCode;
                this.getBuildingdata();
                this.getScreenDataTownInfo();
            });
        },
        getBuildingdata() {
            //获取小区下拉
            API.POST("/screenApi/screenData/selectBuildingList", {}).then(
                res => {
                    this.townBuildData = res.object;
                    this.townBuildValue = this.townBuildData[0].buildingCode;
                    this.getScreenDataBuildingInfo();
                }
            );
        },
        getScreenDataTownInfo() {
            //街道信息
            API.POST("/screenApi/screenData/getScreenDataTownInfo", {
                townCode: this.townListValue
            }).then(res => {
                this.tabsData = res.object.streetList;
                this.tdphData = res.object.rankingList;
                // this.tdph_echarts();
            });
        },
        getScreenDataBuildingInfo() {
            //小区信息
            API.POST("/screenApi/screenData/getScreenDataBuildingInfo", {
                townCode: this.townListValue,
                buildingCode: this.townBuildValue
            }).then(res => {
                this.addressList = res.object.addressList;
                this.BuildingInfo = Object.assign({}, res.object);
                this.BuildingInfo.dayRubbishNumer = this.fullLeng(
                    this.BuildingInfo.dayRubbishNumer
                );
                this.BuildingInfo.sumRubbishNumer = this.fullLeng(
                    this.BuildingInfo.sumRubbishNumer
                );
                console.log(this.BuildingInfo);
                this.bl2infoData[0].value = this.BuildingInfo.managerName;
                this.bl2infoData[1].value = this.BuildingInfo.streetName;
                this.bl2infoData[2].value = this.BuildingInfo.communityHeadName;
                this.bl2infoData[3].value = this.BuildingInfo.industryAuthorityName;
                this.bl2infoData[4].value = this.BuildingInfo.propertyHeadName;
                this.bl2infoData[5].value = this.BuildingInfo.streetHeadName;
                this.bl2infoData[6].value = this.BuildingInfo.companyName;

                // console.log(res.object)
                // console.log(JSON.stringify(res.object) == "{}")

                if (JSON.stringify(res.object) == "{}") {
                    this.BuildingInfo = {
                        dayRubbishNumer: "0000",
                        sumRubbishNumer: "0000",
                        amTime: "00-00",
                        pmTime: "00-00",
                        registerNumber: 0,
                        sumNumber: 0,
                        dayPutNumber: 0,
                        dayAccuracyNumber: 0,
                        dayMissentNumber: 0,
                        sumMissentNumber: 0
                    }; //小区其他信息
                }

                this.flzb_echarts();
            });
        },
        fullLeng(val) {
            if (Number(val)) {
                val = val + "";
                if (val.length == 1) {
                    val = "000" + val;
                } else if (val.length == 2) {
                    val = "00" + val;
                } else if (val.length == 3) {
                    val = "0" + val;
                }
                return val.split("");
            } else {
                return "0000";
            }
        },
        tdph_echarts() {
            let yAxisData = [];
            let seriesDataKhs = [];
            let seriesDataQt = [];
            let seriesDataYh = [];
            let seriesDataCy = [];
            this.tdph_myChart = echarts.init(
                document.getElementById("tdph_echarts")
            );

            this.tdphData.map(item => {
                yAxisData.push(item.buildingName);
                seriesDataKhs.push(item.recoverableWeight);
                seriesDataQt.push(item.elseWasteWeight);
                seriesDataYh.push(item.harmfulWasteWeight);
                seriesDataCy.push(item.foodWasteWeight);
            });
            let option = {
                tooltip: {
                    trigger: "axis",
                    axisPointer: {
                        // Use axis to trigger tooltip
                        type: "shadow" // 'shadow' as default; can also be 'line' or 'shadow'
                    }
                },
                legend: {
                    textStyle: {
                        color: "#fff"
                    },
                    data: ["可回收", "厨余", "有害", "其他"]
                },
                grid: {
                    left: "3%",
                    right: "4%",
                    bottom: "6%",
                    top: "14%",
                    containLabel: true
                },

                xAxis: {
                    type: "value",
                    splitLine: {
                        show: false
                    },
                    axisLine: {
                        lineStyle: {
                            color: "#fff",
                            width: 1 //这里是为了突出显示加上的
                        }
                    }
                },
                yAxis: {
                    type: "category",
                    data: yAxisData,
                    axisLine: {
                        lineStyle: {
                            color: "#fff",
                            width: 1 //这里是为了突出显示加上的
                        }
                    }
                },
                series: [
                    {
                        name: "可回收",
                        type: "bar",
                        stack: "total",

                        emphasis: {
                            focus: "series"
                        },
                        data: seriesDataKhs
                    },
                    {
                        name: "厨余",
                        type: "bar",
                        stack: "total",

                        emphasis: {
                            focus: "series"
                        },
                        data: seriesDataCy
                    },
                    {
                        name: "有害",
                        type: "bar",
                        stack: "total",

                        emphasis: {
                            focus: "series"
                        },
                        data: seriesDataYh
                    },
                    {
                        name: "其他",
                        type: "bar",
                        stack: "total",

                        emphasis: {
                            focus: "series"
                        },
                        data: seriesDataQt
                    }
                ]
            };

            // 绘制图表
            this.tdph_myChart.setOption(option);
        },
        flzb_echarts() {
            let that = this;
            // 基于准备好的dom，初始化echarts实例
            this.flzb_myChart = echarts.init(
                document.getElementById("flzb_echarts")
            );
            // 绘制图表
            this.flzb_myChart.setOption({
                tooltip: {
                    trigger: "item"
                },
                legend: {
                    bottom: "0%",
                    left: "center",
                    textStyle: {
                        color: "#fff"
                    }
                    // data: [
                    //     {
                    //         name: "其他垃圾",
                    //         color:"red",
                    //         textStyle: {
                    //             color: "red"
                    //         }
                    //     }
                    // ]
                },
                series: [
                    {
                        name: "类型",
                        type: "pie",
                        radius: ["40%", "70%"],
                        avoidLabelOverlap: false,
                        label: {
                            show: false,
                            position: "center"
                        },
                        emphasis: {
                            label: {
                                show: true,
                                fontSize: "40",
                                fontWeight: "bold"
                            }
                        },
                        labelLine: {
                            show: false
                        },
                        grid: {
                            left: "3%",
                            right: "8%",
                            // bottom: "3%",
                            top: "1%"
                        },
                        data: [
                            {
                                value: that.BuildingInfo.elseWasteWeight,
                                name: "其他"
                            },
                            {
                                value: that.BuildingInfo.recoverableWeight,
                                name: "可回收"
                            },
                            {
                                value: that.BuildingInfo.foodWasteWeight,
                                name: "厨余"
                            },
                            {
                                value: that.BuildingInfo.harmfulWasteWeight,
                                name: "有害"
                            }
                        ]
                    }
                ]
            });
        }
    },
    components: {
        BgType1,
        BgType2,
        ScreenMap
    },
    created() {
        this.getTowndata();
    },
    mounted() {
        window.onresize = () => {
            //窗口变化自适应
            return (() => {
                this.flzb_myChart.resize();
                // this.tdph_myChart.resize();
            })();
        };
        // setTimeout(() => {
        //     if (!screenfull.enabled) {
        //         // 如果不允许进入全屏，发出不允许提示
        //         // this.setCanvasBg('canvasbigbg');
        //         this.$message({
        //             message: "不支持全屏",
        //             type: "warning"
        //         });
        //         return false;
        //     }
        //     screenfull.toggle();
        // }, 1000);
        // document.addEventListener("fullscreenchange", function(event) {
        //     if (document.fullscreenElement) {
        //         console.log("进入全屏");
        //     } else {
        //         console.log("退出全屏");
        //     }
        // });
    }
};
</script>

<style lang="scss" scoped>
ul li {
    list-style: none;
}
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
            .el-select {
                padding-top: 0.4rem;
                padding-left: 0.5rem;
            }
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
                .bc_top {
                    height: 1.82rem;
                    width: 100%;
                    margin-bottom: 0.2rem;
                    display: flex;
                    .blocks {
                        &:nth-child(1) {
                            margin-right: 0.72rem;
                        }
                        &.blocks4 {
                            width: 3.54rem;
                            height: 100%;
                            background: url("../assets/images/w_4.png") center /
                                cover no-repeat;
                            .upfont {
                                width: 1.5rem;
                                border-bottom: 0.01rem solid #1cc8e2;
                                height: 0.58rem;
                                line-height: 0.58rem;
                                margin: 0 auto;
                                margin-top: 0.13rem;
                                font-size: 0.2rem;
                                color: #fff;
                                text-align: center;
                            }
                            .downvalue {
                                margin-top: 0.3rem;
                                padding-left: 0.03rem;
                                display: flex;
                                .val {
                                    margin-left: 0.2rem;
                                    width: 0.56rem;
                                    height: 0.56rem;
                                    border: 0.01rem solid #064f92;
                                    background: #0e2459;
                                    display: flex;
                                    justify-content: center;
                                    align-items: center;
                                    color: #ffe535;
                                    font-size: 0.36rem;
                                    box-shadow: 0px 0px 0.37rem
                                        rgba(255, 255, 255, 0.28) inset;
                                }
                                .unit {
                                    color: #ffe535;
                                    margin-left: 0.07rem;
                                    line-height: 0.76rem;
                                    font-size: 0.2rem;
                                }
                            }
                        }
                    }
                }
                .bc_bottom {
                    flex: 1;
                    width: 100%;
                    position: relative;
                    .el-select {
                        position: absolute;
                        left: 0.45rem;
                        top: 0.65rem;
                    }
                    .blocks7 {
                        position: absolute;
                        left: 0;
                        bottom: 0;
                        height: 1.26rem;
                        width: 100%;
                        background: url("../assets/images/map_bo.png") center /
                            cover no-repeat;
                        // background: #f00;
                        .bl7warp {
                            display: flex;
                            padding-left: 0.1rem;
                            // &:nth-child(1){
                            //     width: 1.75rem;
                            // }
                            & > div {
                                flex: 1;
                                padding-top: 0.2rem;
                                .small {
                                    font-size: 0.28rem;
                                }
                                .upval {
                                    font-size: 0.35rem;
                                    color: #99eff4;
                                    text-align: center;
                                }
                                .downval {
                                    color: #d4d4d4;
                                    font-size: 0.16rem;
                                    text-align: center;
                                }
                            }
                        }
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
                        display: flex;
                        position: relative;
                        .ico {
                            height: 100%;
                            width: 0.3rem;
                            background: url("../assets/images/arrar.png")
                                center/.15rem no-repeat;
                            position: absolute;
                            left: 0.1rem;
                        }
                        .title {
                            width: 1.35rem;
                            height: 100%;
                            display: flex;
                            align-items: center;
                            padding: 0 0 0 0.4rem;
                        }
                        .times {
                            flex: 1;
                            display: flex;
                            color: #fff;
                            font-size: 0.18rem;
                            text-align: center;
                            .br {
                                width: 0.4rem;
                                height: 0.03rem;
                                background: #142a44;
                                margin: 0.64rem 0.05rem 0 0.05rem;
                            }
                            .zs {
                                .font {
                                    margin-bottom: 0.08rem;
                                    &.tim {
                                        background: #142a44;
                                        padding: 0.04rem 0;
                                        border-radius: 0.05rem;
                                    }
                                }
                                width: 1.45rem;
                                padding-top: 0.2rem;
                            }
                        }
                    }
                    &.blocks2 {
                        width: 100%;
                        height: 3.11rem;
                        margin-bottom: 0.2rem;
                        background: url("../assets/images/w_2.png") center /
                            cover no-repeat;
                        display: flex;
                        flex-direction: column;
                        .bl2Info {
                            flex: 1;
                            padding: 0.2rem;

                            display: flex;
                            flex-wrap: wrap;
                            .itemLine {
                                width: 100%;
                                margin-bottom: 0.02rem;
                                margin-right: 0.02rem;
                                height: 0.5rem;
                                display: flex;
                                line-height: 0.5rem;
                                .key {
                                    font-size: 0.16rem;
                                    color: #fff;
                                    margin-right: 0.15rem;
                                }
                                .val {
                                    flex: 1;
                                    font-size: 0.22rem;
                                    color: #09eff4;
                                }
                                &.two {
                                    width: 49%;
                                }
                            }
                        }
                    }
                    &.blocks3 {
                        width: 100%;
                        flex: 1;
                        .tabs {
                            width: 100%;
                            height: 100%;
                            padding-bottom: 0.2rem;
                        }
                        .tables {
                            width: 100%;
                            height: 100%;
                            overflow: auto;
                            .line {
                                width: 100%;
                                height: 0.4rem;
                                line-height: 0.4rem;
                                display: flex;
                                padding-left: 0.1rem;
                                letter-spacing: 0.5;
                                .td {
                                    flex: 2;
                                    text-align: center;
                                    color: #fff;
                                    font-size: 0.15rem;
                                    &:nth-child(1) {
                                        flex: 3;
                                    }
                                    overflow: hidden;
                                    text-overflow: ellipsis;
                                    white-space: nowrap;
                                }
                            }
                            .thead {
                                background: rgba(20, 179, 188, 0.6);
                            }
                            .line.bg {
                                background: rgba(20, 179, 188, 0.6);
                            }
                        }
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
                        display: flex;
                        flex-direction: column;
                        .flzb_echarts {
                            width: 100%;
                            flex: 1;
                            margin-top: 15px;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            position: relative;

                            #flzb_echarts {
                                width: 90%;
                                height: 90%;
                                position: absolute;
                                top: -0.2rem;
                            }
                        }
                    }

                    &.blocks6 {
                        width: 100%;
                        flex: 1;
                        // background: url('../assets/images/w_3.png') center /cover no-repeat;
                        .tdph_echarts {
                            width: 100%;
                            height: 96%;
                            position: relative;
                            #tdph_echarts {
                                width: 100%;
                                height: 100%;
                                position: absolute;
                            }
                            display: flex;
                            flex-direction: column;
                            //style2
                            .titletag {
                                width: 100%;
                                padding: 0.1rem 0;
                                display: flex;
                                height: 0.4rem;
                                .item {
                                    flex: 1;
                                    height: 100%;
                                    display: flex;
                                    .colors {
                                        width: 0.5rem;
                                        height: 100%;
                                        &.c1 {
                                            background: -webkit-linear-gradient(
                                                left,
                                                rgba(0, 0, 0, 0),
                                                rgb(35, 93, 201)
                                            );
                                        }
                                        &.c2 {
                                            background: -webkit-linear-gradient(
                                                left,
                                                rgba(0, 0, 0, 0),
                                                rgb(3, 133, 65)
                                            );
                                        }
                                        &.c3 {
                                            background: -webkit-linear-gradient(
                                                left,
                                                rgba(0, 0, 0, 0),
                                                rgb(215, 5, 8)
                                            );
                                        }
                                        &.c4 {
                                            background: -webkit-linear-gradient(
                                                left,
                                                rgba(0, 0, 0, 0),
                                                rgb(84, 92, 94)
                                            );
                                        }
                                    }
                                    .font {
                                        color: #fff;
                                        font-size: 0.15rem;
                                        line-height: 0.2rem;
                                        margin-left: 0.03rem;
                                    }
                                }
                            }
                            .chartlist {
                                width: 100%;
                                height: 100%;
                                flex: 1;
                                overflow: auto;
                                .tdphList {
                                    padding: 0.2rem 0;
                                    width: 100%;
                                    .item {
                                        display: flex;
                                        height: 0.5rem;
                                        justify-content: center;
                                        align-items: center;
                                        .index {
                                            color: #fff;
                                            width: 0.5rem;
                                            text-align: center;
                                            line-height: 0.5rem;
                                        }
                                        .name {
                                            line-height: 0.5rem;
                                            font-size: 0.18rem;
                                            color: #fff;
                                            margin-right: 0.1rem;
                                        }
                                        .colors {
                                            flex: 1;
                                            height: 0.2rem;
                                            display: flex;
                                            .c1 {
                                                height: 100%;
                                                background: -webkit-linear-gradient(
                                                    left,
                                                    rgba(0, 0, 0, 0),
                                                    rgb(35, 93, 201)
                                                );
                                            }
                                            .c2 {
                                                background: -webkit-linear-gradient(
                                                    left,
                                                    rgba(0, 0, 0, 0),
                                                    rgb(3, 133, 65)
                                                );
                                            }
                                            .c3 {
                                                background: -webkit-linear-gradient(
                                                    left,
                                                    rgba(0, 0, 0, 0),
                                                    rgb(215, 5, 8)
                                                );
                                            }
                                            .c4 {
                                                background: -webkit-linear-gradient(
                                                    left,
                                                    rgba(0, 0, 0, 0),
                                                    rgb(84, 92, 94)
                                                );
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
.blocks {
    position: relative;
    .title {
        font-size: 0.2rem;
        padding-left: 0.42rem;
        padding-top: 0.07rem;
        color: #fff;
    }
}

/*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/
::-webkit-scrollbar {
    width: 5px;
    height: 5px;
    background-color: #e2e2e2;
    display: none;
}

/*定义滚动条轨道 内阴影+圆角*/
::-webkit-scrollbar-track {
    /*	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
*/
    border-radius: 10px;
    background-color: #fcfcfc;
}

/*定义滑块 内阴影+圆角*/
::-webkit-scrollbar-thumb {
    border-radius: 10px;
    /*	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
*/
    background-color: rgb(92, 97, 115);
}
</style>
