require([
        "esri/Map",
        "esri/layers/GeoJSONLayer",
        "esri/views/MapView"
      ], function (Map, GeoJSONLayer, MapView) {

       document.getElementById(
              "budongchanbtn").addEventListener("click", budongchan);

        function budongchan() {
            //声明不动产图层存放位置
            const url =
                "https://chengzeeyo-1302743114.cos.ap-chongqing.myqcloud.com/budongchan.geojson";

            // 声明弹出属性内容
            const template = {
                title: "Earthquake Info",
                content: "Magnitude {mag} {type} hit {place} on {time}",
                fieldInfos: [
                    {
                        fieldName: "time",
                        format: {
                            dateFormat: "short-date-short-time"
                        }
                    }
                ]
            };

            //声明渲染内容
            const renderer = {
                type: "simple",
                field: "mag",
                symbol: {
                    type: "simple-fill",
                    color: "orange",
                    outline: {
                        color: "white"
                    }
                },
                visualVariables: [
                    {
                        type: "size",
                        field: "mag",
                        stops: [
                            {
                                value: 2.5,
                                size: "4px"
                            },
                            {
                                value: 8,
                                size: "40px"
                            }
                        ]
                    }
                ]
            };

            // 声明geojson图层
            const geojsonLayer = new GeoJSONLayer({
                url: url,
                copyright: "五峰土家族自治县自然资源和规划局",
                popupTemplate: template,
                renderer: renderer //optional
            });

            // 声明map图层,地图为卫星地图
            const map = new Map({
                basemap: "satellite",
            });

            map.add(geojsonLayer);

            // 声明显示内容,坐标,显示界别
            const view = new MapView({
                container: "viewDiv",
                center: [110.6748, 30.19856],
                zoom: 13,
                map: map
            });
        }


      });