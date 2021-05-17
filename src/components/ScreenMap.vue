<template>
    <div class="mapwarp">
        <div class="showdow"></div>
        <div class="ScreenMap" id="ScreenMap"></div>
    </div>
</template>

<script>
export default {
    name: "ScreenMap",
    props: {
        msg: String,
        title: String,
        // MarkerData:Object
        MarkerData: {
            type: Array,
            default() {
                return [];
            }
        }
    },
    watch: {
        MarkerData() {
            console.log(this.MarkerData);
            this.addMarker();
        }
    },
    methods: {
        init() {
            // 创建地图
            let that = this;
            window.onLoad = function() {
                that.map = new AMap.Map("ScreenMap", {
                    mapStyle: "amap://styles/3b706b3a0416225a341dd5425a883023",
                    zoom: 13
                });
            };
            var url =
                "https://webapi.amap.com/maps?v=1.4.15&key=a06c2b0ed24bf613654f7747c5c3db05&callback=onLoad";
            var jsapi = document.createElement("script");
            jsapi.charset = "utf-8";
            jsapi.src = url;
            document.head.appendChild(jsapi);
        },
        addMarker() {
            let that = this;
            try {
                that.map.clearMap();
            } catch (error) {}
            // new AMap.Icon({
            //     size: new AMap.Size(25, 30), // 图标尺寸
            //     image: require("../assets/images/map_mark.png"), // Icon的图像
            //     imageSize: new AMap.Size(25, 30)
            // });
            let markers = []
            that.MarkerData.map(item => {
                let marker = null;

                let icon = new AMap.Icon({
                    size: new AMap.Size(36, 32), // 图标尺寸
                    image: require("../assets/images/map_mark.png"), // Icon的图像
                    imageSize: new AMap.Size(36, 32),
                    type:1
                })

                let activeicon = new AMap.Icon({
                    size: new AMap.Size(36, 32), // 图标尺寸
                    image: require("../assets/images/map_mark2.png"), // Icon的图像
                    imageSize: new AMap.Size(36, 32),
                    type:2
                })
     
                marker = new AMap.Marker({
                    position: new AMap.LngLat(
                        item.longitude,
                        item.latitude
                    ), // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
                    // title: "北京",
                    icon: icon
                });

                this.markers.push(marker)
            

                var clickHandle = AMap.event.addListener(marker, 'click', function(e) {
                    if(e.target.De.icon.De.type == 1){
                        e.target.setIcon(activeicon)
                    }else{
                        e.target.setIcon(icon)
                    }
                    //得到的数据
                });
                that.map.add(marker);
            });
        }
    },
    mounted() {
        this.init();
        console.log(this.MarkerData);
    }
};
</script>

<style scoped lang="scss">
.ScreenMap {
    height: 100%;
    width: 100%;
}
.mapwarp {
    width: 100%;
    height: 100%;
    position: relative;
}
.showdow {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    pointer-events: none;
    //box-shadow: 0px 0px 0.47rem rgba(73, 162, 245, 0.5) inset;
    //box-shadow: 0px 0px 0.47rem rgba(20,179,188,.1) inset;
    box-shadow: 0px 0px 0.47rem rgba(17, 123, 165, 0.6) inset;
}
</style>
