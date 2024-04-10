 (function() {
var chartDom = document.getElementById('tree');
var myChart = echarts.init(chartDom);
var option;

myChart.showLoading();
$.get('../static/js/try.json', function (data) {
  myChart.hideLoading();
  data.children.forEach(function (datum, index) {
    index % 2 === 0 && (datum.collapsed = true);
  });
  myChart.setOption(
    (option = {
      tooltip: {
        trigger: 'item',
        triggerOn: 'mousemove'
      },
      series: [
        {
          type: 'tree',
          data: [data],
          top: '1%',
          left: '7%',
          bottom: '1%',
          right: '20%',
          symbolSize: 7,
          label: {
            position: 'left',
            verticalAlign: 'middle',
            align: 'right',
            fontSize: 15
          },
              itemStyle: {
                        color: 'lightgreen' // 设置节点图形的颜色为浅绿色
                    },
          leaves: {
            label: {
              position: 'right',
              verticalAlign: 'middle',
              align: 'left'
            }
          },
          emphasis: {
            focus: 'descendant'
          },
          expandAndCollapse: true,
          animationDuration: 550,
          animationDurationUpdate: 750
        }
      ]
    })
  );
});

option && myChart.setOption(option);
})();

(function() {

    //获取到需要添加地图的位置
    var myChart = echarts.init(document.getElementById('maptt'));
    //1.中国地图
    var chinaMap = "../static/json/中国地图.json";
    //2.台湾省地图
    var taiWanMap = "../static/json/台湾省.json";
    //3.海南省地图
    var haiNanMap = "../static/json/海南省.json";
    //4.安徽省地图
    var anHuiMap = "../static/json/安徽省.json";
    //5.江西省地图
    var jiangXiMap = "../static/json/江西省.json";
    //6.湖南省地图
    var huNanMap = "../static/json/湖南省.json";
    //7.云南省地图
    var yunNanMap = "../static/json/云南省.json";
    //8.贵州省地图
    var guiZhouMap = "../static/json/贵州省.json";
    //9.广东省地图
    var guangDongMap = "../static/json/广东省.json";
    //10.福建省地图
    var fuJianMap = "../static/json/福建省.json";
    //11.浙江省地图
    var zheJiangMap = "../static/json/浙江省.json";
    //12.江苏省地图
    var jiangSuMap = "../static/json/江苏省.json";
    //13.四川省地图
    var siChuanMap = "../static/json/四川省.json";
    //14.重庆市市地图
    var chongQingMap = "../static/json/重庆市.json";
    //15.湖北省地图
    var huBeiMap = "../static/json/湖北省.json";
    //16.河南省地图
    var heNanMap = "../static/json/河南省.json";
    //17.山东省地图
    var shanDongMap = "../static/json/山东省.json";
    //18.吉林省地图
    var jiLinMap = "../static/json/吉林省.json";
    //19.辽宁省地图
    var liaoNingMap = "../static/json/辽宁省.json";
    //20.天津市市地图
    var tianJinMap = "../static/json/天津市.json";
    //21.北京市市地图
    var beiJingMap = "../static/json/北京市.json";
    //22.河北省地图
    var heBeiMap = "../static/json/河北省.json";
    //23.山西省地图
    var shanXiMap = "../static/json/山西省.json";
    //24.陕西省地图
    var shanXi2Map = "../static/json/陕西省.json";
    //25.宁夏回族自治区省地图
    var ningXiaMap = "../static/json/宁夏回族自治区.json";
    //26.青海省地图
    var qingHaiMap = "../static/json/青海省.json";
    //27.西藏自治区地图
    var xiZangMap = "../static/json/西藏自治区.json";
    //28.黑龙江省地图
    var heiLongJiangMap = "../static/json/黑龙江省.json";
    //29.内蒙古自治区地图
    var neimengGuMap = "../static/json/内蒙古自治区.json";
    //30.甘肃省地图
    var ganSuMap = "../static/json/甘肃省.json";
    //31.新疆维吾尔自治区省地图
    var xinJiangMap = "../static/json/新疆维吾尔自治区.json";
    //32.广西壮族自治区地图
    var guangxiMap = "../static/json/广西壮族自治区.json";
    //楚雄彝族自治州
    var chuxiongMap = "../static/json/楚雄彝族自治州.json"
    //设置初始地图
    var mapname = chinaMap;
    //设置省份的json 这里注意名字要和中国地图上的名字一致
    var mapdata={

        '楚雄彝族自治州': '../click_detail',
        '南华县': '../click_detail'
        // ... 可以继续添加其他市和对应的链接 ...
    };
    var mapJson = [
        {
            name: "台湾省",
            json: taiWanMap,
        },
        {
            name: "海南省",
            json: haiNanMap,
        },
        {
            name: "安徽省",
            json: anHuiMap,
        },
        {
            name: "江西省",
            json: jiangXiMap,
        },
        {
            name: "湖南省",
            json: huNanMap,
        },
        {
            name: "云南省",
            json: yunNanMap,
        },
        {
            name: "贵州省",
            json: guiZhouMap,
        },
        {
            name: "广东省",
            json: guangDongMap,
        },
        {
            name: "福建省",
            json: fuJianMap,
        },
        {
            name: "浙江省",
            json: zheJiangMap,
        },
        {
            name: "江苏省",
            json: jiangSuMap,
        },
        {
            name: "四川省",
            json: siChuanMap,
        },
        {
            name: "重庆市",
            json: chongQingMap,
        },
        {
            name: "湖北省",
            json: huBeiMap,
        },
        {
            name: "河南省",
            json: heNanMap,
        },
        {
            name: "山东省",
            json: shanDongMap,
        },
        {
            name: "吉林省",
            json: jiLinMap,
        },
        {
            name: "辽宁省",
            json: liaoNingMap,
        },
        {
            name: "天津市",
            json: tianJinMap,
        },
        {
            name: "北京市",
            json: beiJingMap,
        },
        {
            name: "河北省",
            json: heBeiMap,
        },
        {
            name: "山西省",
            json: shanXiMap,
        },
        {
            name: "陕西省",
            json: shanXi2Map,
        },
        {
            name: "宁夏回族自治区",
            json: ningXiaMap,
        },
        {
            name: "青海省",
            json: qingHaiMap,
        },
        {
            name: "西藏自治区",
            json: xiZangMap,
        },
        {
            name: "黑龙江省",
            json: heiLongJiangMap,
        },
        {
            name: "内蒙古自治区",
            json: neimengGuMap,
        },
        {
            name: "甘肃省",
            json: ganSuMap,
        },
        {
            name: "新疆维吾尔自治区",
            json: xinJiangMap,
        },
        {
            name: "广西壮族自治区",
            json: guangxiMap,
        },
        {
            name: "楚雄彝族自治州",
            json: chuxiongMap,
        },
    ];
    var provinceData = {
        '云南省':80,
        '四川省': 45,
        '西藏自治区':30
    };
    //设置每个市的数据
    var citydata = {
        '巴中市': { value: 30, text: '海南省的文本内容' },
        '达州市': { value: 30, text: '海南省的文本内容' },
        '广元市':   { value: 30, text: '海南省的文本内容' },
        '楚雄彝族自治州': { value: 30, text: '海南省的文本内容' },
        '南华县': { value: 30, text: '楚雄拥有丰富的食用菌资源' },
    }
    //加载时的文字提示
    myChart.showLoading({ text: '正在加载数据' });  //增加等待提示

    //点击事件
    myChart.on('click', function (e) {
        var clickedName = e.name;
        var clickedMap = mapJson.find(item => item.name === clickedName);
        if (clickedMap) {
            mapname = clickedMap.json;
            mapInit();
        }
        if (mapdata[clickedName]) {
            window.open(mapdata[clickedName]);
        }
        //添加一个返回按键
        $('<div class="back"><button type="button">返回</button></div>').appendTo($('#maptt'));
        //给返回按键设置样式
        $('.back').css({
            position: 'absolute',//绝对地位
            left: '20px',//设置位置
            top: '20px',//设置位置
            color: 'pink',//设置字体颜色
            'font-size': '20px',//设置字体大小
            cursor: 'pointer',//变小手
        });
        //设置返回按钮的点击事件
        $('.back').click(function () {
            //地图重新设置为中国地图
            mapname = chinaMap;
            //隐藏按钮
            $('.back').css({
                opacity: 0,
            });
            //绘制地图
            mapInit();
            //重新开始定时播放
            timer = setInterval(function () {
                //调用定时播放代码
                timing()
            }, 1500);
        });
    });

    //设置初始化时间
    setTimeout(function () {
        mapInit();
    }, 500);

    //创建地图
    var mapInit = () => {
        //调用中国地图（同步）
        $.getJSON(mapname, function (geoJson) {
            //调用我们通过json对象注册的地图
            echarts.registerMap('China', geoJson);
            //文件加载的动画
            myChart.hideLoading();
            if (mapname === chinaMap) {
                //地图开始
                option = {
                    //设置背景颜色
                    backgroundColor: 'white',
                    series: [{
                        name: '数据',
                        type: 'map',
                        map: 'China',
                        data: Object.keys(provinceData).map(function (key) {
                            return {
                                name: key,
                                value: provinceData[key],
                            };
                        }),
                        label: {
                            show: true,
                        },
                        emphasis: {
                            label: {
                                show: true,
                            },
                        },
                    }],
                    tooltip: {
                        trigger: 'item',
                        formatter: '{b}'
                    },
                     visualMap: {
                        show:false,
                        min: 10,
                        max: 100,
                        text: ['High', 'Low'],
                        realtime: false,
                        calculable: true,
                        inRange: {
                            color: ['lightgreen', 'green']
                        }
                    },
                };
            }else{
                option = {
                    //设置背景颜色
                    backgroundColor: 'white',
                    series: [{
                        name: '数据',
                        type: 'map',
                        map: 'China',
                        data: Object.keys(citydata).map(function (key) {
                            return {
                                name: key,
                                value: citydata[key].value,
                                text: citydata[key].text
                            };
                        }),
                        label: {
                            show: true,
                        },
                        emphasis: {
                            label: {
                                show: true,
                            },
                        },
                    }],
                    tooltip: {
                        trigger: 'item',
                        formatter: function (params) {
                            return params.name + '<br/>' + params.data.text; // 显示文本内容
                        }
                    },

                };

            };
            myChart.setOption(option);
        });
    };

})();
