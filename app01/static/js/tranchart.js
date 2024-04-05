(function () {
    var chartDom = document.getElementById('productbar');
var myChart = echarts.init(chartDom);
var option;

option = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      crossStyle: {
        color: '#999'
      }
    }
  },
  toolbox: {
    feature: {
      dataView: { show: true, readOnly: false },
      magicType: { show: true, type: ['line', 'bar'] },
      restore: { show: true },
      saveAsImage: { show: true }
    }
  },
  legend: {
    data: ['云南产量（估计）', '全国产量', '全国增速']
  },
  xAxis: [
    {
      type: 'category',
      data: ['2016', '2017', '2018', '2019', '2020', '2021'],
      axisPointer: {
        type: 'shadow'
      }
    }
  ],
  yAxis: [
    {
      type: 'value',
      name: '全国产量',
      min: 0,
      max: 22000,
      interval: 2000,
      axisLabel: {
        formatter: '{value} 吨'
      }
    },
    {
      type: 'value',
      name: '全国增速',
      min: -10,
      max: 100,
      interval: 10,
      axisLabel: {
        formatter: '{value} %'
      }
    }
  ],
  series: [
    {
      name: '云南产量（估计）',
      type: 'bar',
      tooltip: {
        valueFormatter: function (value) {
          return value + '吨';
        }
      },
      data: [
        3178, 5370, 5048, 6584, 10189, 13299
      ]
    },
    {
      name: '全国产量',
      type: 'bar',
      tooltip: {
        valueFormatter: function (value) {
          return value + '吨';
        }
      },
      data: [
        4332, 7321, 6882, 8975, 13889, 18128
      ]
    },
    {
      name: '全国增速',
      type: 'line',
      yAxisIndex: 1,
      tooltip: {
        valueFormatter: function (value) {
          return value + ' %';
        }
      },
      data: [0, 69, -6, 30.4, 54.7, 30.5]
    }
  ]
};

option && myChart.setOption(option);


})();



(function () {


var chartDom = document.getElementById('exportbar');
var myChart = echarts.init(chartDom);
var option;

setTimeout(function () {
  option = {
    legend: {},
    tooltip: {
      trigger: 'axis',
      showContent: false
    },
    dataset: {
      source: [
        ['product', '2012', '2013', '2014', '2015', '2016', '2017'],
        ['Milk Tea', 56.5, 82.1, 88.7, 70.1, 53.4, 85.1],
        ['Matcha Latte', 51.1, 51.4, 55.1, 53.3, 73.8, 68.7],
        ['Cheese Cocoa', 40.1, 62.2, 69.5, 36.4, 45.2, 32.5],
        ['Walnut Brownie', 25.2, 37.1, 41.2, 18, 33.9, 49.1]
      ]
    },
    xAxis: { type: 'category' },
    yAxis: { gridIndex: 0 },
    grid: { top: '55%' },
    series: [
      {
        type: 'line',
        smooth: true,
        seriesLayoutBy: 'row',
        emphasis: { focus: 'series' }
      },
      {
        type: 'line',
        smooth: true,
        seriesLayoutBy: 'row',
        emphasis: { focus: 'series' }
      },
      {
        type: 'line',
        smooth: true,
        seriesLayoutBy: 'row',
        emphasis: { focus: 'series' }
      },
      {
        type: 'line',
        smooth: true,
        seriesLayoutBy: 'row',
        emphasis: { focus: 'series' }
      },
      {
        type: 'pie',
        id: 'pie',
        radius: '30%',
        center: ['50%', '25%'],
        emphasis: {
          focus: 'self'
        },
        label: {
          formatter: '{b}: {@2012} ({d}%)'
        },
        encode: {
          itemName: 'product',
          value: '2012',
          tooltip: '2012'
        }
      }
    ]
  };
  myChart.on('updateAxisPointer', function (event) {
    const xAxisInfo = event.axesInfo[0];
    if (xAxisInfo) {
      const dimension = xAxisInfo.value + 1;
      myChart.setOption({
        series: {
          id: 'pie',
          label: {
            formatter: '{b}: {@[' + dimension + ']} ({d}%)'
          },
          encode: {
            value: dimension,
            tooltip: dimension
          }
        }
      });
    }
  });
  myChart.setOption(option);
});

option && myChart.setOption(option);

})();
(function () {

  var chartDom = document.getElementById('exportregion');
  var myChart = echarts.init(chartDom);
  var option;
  var myColor = ['#eb2100', '#eb3600', '#d0570e', '#d0a00e', '#34da62', '#00e9db', '#00c0e9', '#0096f3', '#33CCFF', '#33FFCC'];
option = {
    backgroundColor: '#ffffff',
    grid: {
        left: '25%',
        top: '12%',
        right: '25%',
        bottom: '8%',
        containLabel: true
    },
    xAxis: [{
        show: false,
    }],
    yAxis: [{
        axisTick: 'none',
        axisLine: 'none',
        offset: '27',
        axisLabel: {
            textStyle: {
                color: 'black',
                fontSize: '16',
            }
        },
        data: ['南坪', '工贸', '石桥铺', '沙坪坝', '嘉州路', '红旗河沟', '两路口', '观音桥', '光电园', '小什字']
    }, {
        axisTick: 'none',
        axisLine: 'none',
        axisLabel: {
            textStyle: {
                color: '#ffffff',
                fontSize: '0',
            }
        },
        data:[10,9,8,7,6,5,4,3,2,1]
    }, {
        name: '工作地TOP 10',
        nameGap: '30',
        nameTextStyle: {
            color: '#ffffff',
            fontSize: '30',
        },
        axisLine: {
            lineStyle: {
                color: 'rgba(0,0,0,0)'
            }
        },
        data: [],
    }],
    series: [{
            name: '条',
            type: 'bar',
            yAxisIndex: 0,
            data: [6647, 7473, 8190, 8488, 9491, 11726, 12745, 13170, 21319, 24934],
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    textStyle: {
                        color: '#ffffff',
                        fontSize: '16',
                    }
                }
            },
            barWidth: 12,
            itemStyle: {
                normal: {
                    color: function(params) {
                        var num = myColor.length;
                        return myColor[params.dataIndex % num]
                    },
                }
            },
            z: 2
        }, {
            name: '白框',
            type: 'bar',
            yAxisIndex: 1,
            barGap: '-100%',
            data: [99, 99.5, 99.5, 99.5, 99.5, 99.5, 99.5, 99.5, 99.5, 99.5],
            barWidth: 20,
            itemStyle: {
                normal: {
                    color: '#0e2147',
                    barBorderRadius: 5,
                }
            },
            z: 1
        }, {
            name: '外框',
            type: 'bar',
            yAxisIndex: 2,
            barGap: '-100%',
            data: [100, 100, 100, 100, 100, 100, 100, 100, 100, 100],
            barWidth: 24,
            itemStyle: {
                normal: {
                    color: function(params) {
                        var num = myColor.length;
                        return myColor[params.dataIndex % num]
                    },
                    barBorderRadius: 5,
                }
            },
            z: 0
        },
        {
            name: '外圆',
            type: 'scatter',
            hoverAnimation: false,
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            yAxisIndex: 2,
            symbolSize: 35,
            itemStyle: {
                normal: {
                    color: function(params) {
                        var num = myColor.length;
                        return myColor[params.dataIndex % num]
                    },
                    opacity: 1,
                }
            },
            z: 2
        }
    ]
};
myChart.setOption(option);
})();
(function () {
    var chartDom = document.getElementById('tranmap');
var myChart = echarts.init(chartDom);
var option;

 var geoCoordMap = {
     '上海': [121.4648, 31.2891],
     '东莞': [113.8953, 22.901],
     '东营': [118.7073, 37.5513],
     '中山': [113.4229, 22.478],
     '临汾': [111.4783, 36.1615],
     '临沂': [118.3118, 35.2936],
     '丹东': [124.541, 40.4242],
     '丽水': [119.5642, 28.1854],
     '乌鲁木齐': [87.9236, 43.5883],
     '佛山': [112.8955, 23.1097],
     '保定': [115.0488, 39.0948],
     '兰州': [103.5901, 36.3043],
     '包头': [110.3467, 41.4899],
     '北京': [116.4551, 40.2539],
     '北海': [109.314, 21.6211],
     '南京': [118.8062, 31.9208],
     '南宁': [108.479, 23.1152],
     '南昌': [116.0046, 28.6633],
     '南通': [121.1023, 32.1625],
     '厦门': [118.1689, 24.6478],
     '台州': [121.1353, 28.6688],
     '合肥': [117.29, 32.0581],
     '呼和浩特': [111.4124, 40.4901],
     '咸阳': [108.4131, 34.8706],
     '哈尔滨': [127.9688, 45.368],
     '唐山': [118.4766, 39.6826],
     '嘉兴': [120.9155, 30.6354],
     '大同': [113.7854, 39.8035],
     '大连': [122.2229, 39.4409],
     '天津': [117.4219, 39.4189],
     '太原': [112.3352, 37.9413],
     '威海': [121.9482, 37.1393],
     '宁波': [121.5967, 29.6466],
     '宝鸡': [107.1826, 34.3433],
     '宿迁': [118.5535, 33.7775],
     '常州': [119.4543, 31.5582],
     '广州': [113.5107, 23.2196],
     '廊坊': [116.521, 39.0509],
     '延安': [109.1052, 36.4252],
     '张家口': [115.1477, 40.8527],
     '徐州': [117.5208, 34.3268],
     '德州': [116.6858, 37.2107],
     '惠州': [114.6204, 23.1647],
     '成都': [103.9526, 30.7617],
     '扬州': [119.4653, 32.8162],
     '承德': [117.5757, 41.4075],
     '拉萨': [91.1865, 30.1465],
     '无锡': [120.3442, 31.5527],
     '日照': [119.2786, 35.5023],
     '昆明': [102.9199, 25.4663],
     '楚雄彝族自治州': [101.3286, 25.3438],
     '香格里拉市': [99.7008, 27.8297],
     '甘孜藏族自治州': [101.9625, 30.0493],
     '阿坝藏族自治州': [102.2247, 31.8994],
     '林芝': [94.3616, 29.6486],
        '昌都': [97.1722, 31.1409],
     '杭州': [119.5313, 29.8773],
     '枣庄': [117.323, 34.8926],
     '柳州': [109.3799, 24.9774],
     '株洲': [113.5327, 27.0319],
     '武汉': [114.3896, 30.6628],
     '汕头': [117.1692, 23.3405],
     '江门': [112.6318, 22.1484],
     '沈阳': [123.1238, 42.1216],
     '沧州': [116.8286, 38.2104],
     '河源': [114.917, 23.9722],
     '泉州': [118.3228, 25.1147],
     '泰安': [117.0264, 36.0516],
     '泰州': [120.0586, 32.5525],
     '济南': [117.1582, 36.8701],
     '济宁': [116.8286, 35.3375],
     '海口': [110.3893, 19.8516],
     '淄博': [118.0371, 36.6064],
     '淮安': [118.927, 33.4039],
     '深圳': [114.5435, 22.5439],
     '清远': [112.9175, 24.3292],
     '温州': [120.498, 27.8119],
     '渭南': [109.7864, 35.0299],
     '湖州': [119.8608, 30.7782],
     '湘潭': [112.5439, 27.7075],
     '滨州': [117.8174, 37.4963],
     '潍坊': [119.0918, 36.524],
     '烟台': [120.7397, 37.5128],
     '玉溪': [101.9312, 23.8898],
     '珠海': [113.7305, 22.1155],
     '盐城': [120.2234, 33.5577],
     '盘锦': [121.9482, 41.0449],
     '石家庄': [114.4995, 38.1006],
     '福州': [119.4543, 25.9222],
     '秦皇岛': [119.2126, 40.0232],
     '绍兴': [120.564, 29.7565],
     '聊城': [115.9167, 36.4032],
     '肇庆': [112.1265, 23.5822],
     '舟山': [122.2559, 30.2234],
     '苏州': [120.6519, 31.3989],
     '莱芜': [117.6526, 36.2714],
     '菏泽': [115.6201, 35.2057],
     '营口': [122.4316, 40.4297],
     '葫芦岛': [120.1575, 40.578],
     '衡水': [115.8838, 37.7161],
     '衢州': [118.6853, 28.8666],
     '西宁': [101.4038, 36.8207],
     '西安': [109.1162, 34.2004],
     '贵阳': [106.6992, 26.7682],
     '连云港': [119.1248, 34.552],
     '邢台': [114.8071, 37.2821],
     '邯郸': [114.4775, 36.535],
     '郑州': [113.4668, 34.6234],
     '鄂尔多斯': [108.9734, 39.2487],
     '重庆': [107.7539, 30.1904],
     '金华': [120.0037, 29.1028],
     '铜川': [109.0393, 35.1947],
     '银川': [106.3586, 38.1775],
     '镇江': [119.4763, 31.9702],
     '长春': [125.8154, 44.2584],
     '长沙': [113.0823, 28.2568],
     '长治': [112.8625, 36.4746],
     '阳泉': [113.4778, 38.0951],
     '青岛': [120.4651, 36.3373],
     '韶关': [113.7964, 24.7028]
 };
 var dataT = [{
         name: '林芝',
         value: 95
     },
     {
         name: '昌都',
         value: 90
     },
     {
         name: '香格里拉市',
         value: 80
     },
     {
         name: '楚雄彝族自治州',
         value: 80
     }
     ,
     {
         name: '甘孜藏族自治州',
         value: 80
     }
     ,
     {
         name: '阿坝藏族自治州',
         value: 80
     }
 ];

 geoCoordMap['上海'] = [121.4648, 31.2891];



 var GZData = [];
 var tempData = ['上海', GZData];

 dataT.map((item, index) => {
     var arr = [];
     arr.push(item)
     arr.push({
         name: '上海',

     })
     GZData.push(arr)
 });
 dataT.map((item, index) => {
     var arr = [];
     arr.push(item)
     arr.push({
         name: '北京',

     })
     GZData.push(arr)
 });
  dataT.map((item, index) => {
     var arr = [];
     arr.push(item)
     arr.push({
         name: '广州',

     })
     GZData.push(arr)
 });
   dataT.map((item, index) => {
     var arr = [];
     arr.push(item)
     arr.push({
         name: '深圳',

     })
     GZData.push(arr)
 })

 var convertData = function(data) {
     var res = [];
     for (var i = 0; i < data.length; i++) {
         var dataItem = data[i];
         var fromCoord = geoCoordMap[dataItem[0].name];
         var toCoord = geoCoordMap[dataItem[1].name];
         if (fromCoord && toCoord) {
             res.push({
                 fromName: dataItem[0].name,
                 toName: dataItem[1].name,
                 coords: [fromCoord, toCoord],
                 value: dataItem[0].value
             });
         }
     }
     return res;
 };

 var color = ['#00ff78', '#ff971b', '#acff43', '#ff73b7', '#ffff46', '#27bbfe'];
 var series = [{
     type: 'map',
     map: 'china',
     //    width: '100%',
     geoIndex: 1,
     zlevel: 1,
     //    aspectScale: 0.75, //长宽比
     showLegendSymbol: false, // 存在legend时显示
     label: {
         normal: {
             show: false,
         },
         emphasis: {
             show: false,
             textStyle: {
                 color: '#fff'
             }
         }
     },
     roam: false,
     itemStyle: {
         normal: {
             areaColor: 'rgba(128, 128, 128, 0)',
             borderColor: '#49a7d5', //省市边界线00fcff 516a89

         },
         emphasis: {
             areaColor: 'rgba(128, 128, 128, 0)',
         }
     },
     data: [{
         name: '南海诸岛',
         value: 0,
         itemStyle: {
             normal: {
                 opacity: 0,
                 label: {
                     show: false
                 }
             }
         }
     }]
 }, ];

 series.push({
     name: tempData[0],
     type: 'lines',
     zlevel: 3,
     symbol: ['none', 'circle'],
     effect: {
         show: true,
         period: 3, //箭头指向速度，值越小速度越快
         trailLength: 0.01, //特效尾迹长度[0,1]值越大，尾迹越长重
         symbolSize: 3, //图标大小
     },
     lineStyle: {
         normal: {
             opacity: 1,
             curveness: 0.4, //曲线的弯曲程度
             color: '#609fd4'
         }
     },
     data: convertData(tempData[1])
 }, {
     name: tempData[0],
     type: 'scatter',
     coordinateSystem: 'geo',
     zlevel: 2,
     rippleEffect: {
         brushType: 'stroke'
     },
     label: {
         normal: {
             show: true,
             position: 'right',
             formatter: '{b}',

         }
     },
      symbolSize: 10,
     itemStyle: {
         normal: {
             //                fontSize: 80,
         }
     },
     data: tempData[1].map(function(dataItem) {
         return {
             name: dataItem[0].name,
             value: geoCoordMap[dataItem[0].name].concat([dataItem[0].value])
         };
     })
 }, {
     type: 'effectScatter',
     coordinateSystem: 'geo',
     zlevel: 4,
     symbolSize: 10,
     label: {
         normal: {
             show: true,
             position: 'right',
             formatter: '{b}',

             color: 'white'
         }
     },
     itemStyle: {
         normal: {
             color: 'white'
         }
     },
     rippleEffect: {
         scale: 4,
         brushType: 'stroke'
     },
     data: [{
         name: tempData[0],
         value: geoCoordMap[tempData[0]],
         visualMap: false
     }],
 }, {
     type: 'scatter',
     coordinateSystem: 'geo',
     zlevel: 4,
     symbolSize: 10,
     symbol: 'pin',
     itemStyle: {
         normal: {
             color: 'white',
         }
     },
     rippleEffect: {
         //        brushType: 'stroke'
     },
     data: [{
         name: tempData[0],
         value: geoCoordMap[tempData[0]],
         visualMap: false
     }],
 });

 option = {
     tooltip: {
         trigger: 'item',
         formatter: function(params) {
             if (params.seriesType === "scatter" && params.name !== tempData[0]) {
                 return "<br>" + params.seriesName + " ---> " + params.data.name + "<br />数量：" + params.data.value[2];
             } else if (params.seriesType === "lines") {
                 return "<br>" + params.data.fromName + " ---> " + params.data.toName + "<br />数量：" + params.data.value;
             } else {
                 return params.name;
             }
         }
     },
     visualMap: {
         min: 0,
         max: 100,
         calculable: true,
         color: color,
         //            textStyle: {
         //                color: '#fff',
         //            },
         show: false
     },
     geo: {
         map: 'china',
         zoom: 1.2,
         zlevel: 2,
         label: {
             emphasis: {
                 show: false
             },
         },
         roam: false, //是否允许缩放
         itemStyle: {
             normal: {
                 areaColor: '#214278',
                 borderColor: '#195BB9', //省市边界线00fcff 516a89

             },
             emphasis: {
                 color: '#112246' //悬浮背景
             }
         },
     },
     series: series
 };
 option && myChart.setOption(option);

})();
(function (){


var chartDom = document.getElementById('car');
var myChart = echarts.init(chartDom);
var option;

const pathSymbols = {
  plane:
    'path://M1.112,32.559l2.998,1.205l-2.882,2.268l-2.215-0.012L1.112,32.559z M37.803,23.96 c0.158-0.838,0.5-1.509,0.961-1.904c-0.096-0.037-0.205-0.071-0.344-0.071c-0.777-0.005-2.068-0.009-3.047-0.009 c-0.633,0-1.217,0.066-1.754,0.18l2.199,1.804H37.803z M39.738,23.036c-0.111,0-0.377,0.325-0.537,0.924h1.076 C40.115,23.361,39.854,23.036,39.738,23.036z M39.934,39.867c-0.166,0-0.674,0.705-0.674,1.986s0.506,1.986,0.674,1.986 s0.672-0.705,0.672-1.986S40.102,39.867,39.934,39.867z M38.963,38.889c-0.098-0.038-0.209-0.07-0.348-0.073 c-0.082,0-0.174,0-0.268-0.001l-7.127,4.671c0.879,0.821,2.42,1.417,4.348,1.417c0.979,0,2.27-0.006,3.047-0.01 c0.139,0,0.25-0.034,0.348-0.072c-0.646-0.555-1.07-1.643-1.07-2.967C37.891,40.529,38.316,39.441,38.963,38.889z M32.713,23.96 l-12.37-10.116l-4.693-0.004c0,0,4,8.222,4.827,10.121H32.713z M59.311,32.374c-0.248,2.104-5.305,3.172-8.018,3.172H39.629 l-25.325,16.61L9.607,52.16c0,0,6.687-8.479,7.95-10.207c1.17-1.6,3.019-3.699,3.027-6.407h-2.138 c-5.839,0-13.816-3.789-18.472-5.583c-2.818-1.085-2.396-4.04-0.031-4.04h0.039l-3.299-11.371h3.617c0,0,4.352,5.696,5.846,7.5 c2,2.416,4.503,3.678,8.228,3.87h30.727c2.17,0,4.311,0.417,6.252,1.046c3.49,1.175,5.863,2.7,7.199,4.027 C59.145,31.584,59.352,32.025,59.311,32.374z M22.069,30.408c0-0.815-0.661-1.475-1.469-1.475c-0.812,0-1.471,0.66-1.471,1.475 s0.658,1.475,1.471,1.475C21.408,31.883,22.069,31.224,22.069,30.408z M27.06,30.408c0-0.815-0.656-1.478-1.466-1.478 c-0.812,0-1.471,0.662-1.471,1.478s0.658,1.477,1.471,1.477C26.404,31.885,27.06,31.224,27.06,30.408z M32.055,30.408 c0-0.815-0.66-1.475-1.469-1.475c-0.808,0-1.466,0.66-1.466,1.475s0.658,1.475,1.466,1.475 C31.398,31.883,32.055,31.224,32.055,30.408z M37.049,30.408c0-0.815-0.658-1.478-1.467-1.478c-0.812,0-1.469,0.662-1.469,1.478 s0.656,1.477,1.469,1.477C36.389,31.885,37.049,31.224,37.049,30.408z M42.039,30.408c0-0.815-0.656-1.478-1.465-1.478 c-0.811,0-1.469,0.662-1.469,1.478s0.658,1.477,1.469,1.477C41.383,31.885,42.039,31.224,42.039,30.408z M55.479,30.565 c-0.701-0.436-1.568-0.896-2.627-1.347c-0.613,0.289-1.551,0.476-2.73,0.476c-1.527,0-1.639,2.263,0.164,2.316 C52.389,32.074,54.627,31.373,55.479,30.565z',
  train:
    'path://M67.335,33.596L67.335,33.596c-0.002-1.39-1.153-3.183-3.328-4.218h-9.096v-2.07h5.371 c-4.939-2.07-11.199-4.141-14.89-4.141H19.72v12.421v5.176h38.373c4.033,0,8.457-1.035,9.142-5.176h-0.027 c0.076-0.367,0.129-0.751,0.129-1.165L67.335,33.596L67.335,33.596z M27.999,30.413h-3.105v-4.141h3.105V30.413z M35.245,30.413 h-3.104v-4.141h3.104V30.413z M42.491,30.413h-3.104v-4.141h3.104V30.413z M49.736,30.413h-3.104v-4.141h3.104V30.413z  M14.544,40.764c1.143,0,2.07-0.927,2.07-2.07V35.59V25.237c0-1.145-0.928-2.07-2.07-2.07H-9.265c-1.143,0-2.068,0.926-2.068,2.07 v10.351v3.105c0,1.144,0.926,2.07,2.068,2.07H14.544L14.544,40.764z M8.333,26.272h3.105v4.141H8.333V26.272z M1.087,26.272h3.105 v4.141H1.087V26.272z M-6.159,26.272h3.105v4.141h-3.105V26.272z M-9.265,41.798h69.352v1.035H-9.265V41.798z',
  ship: 'path://M16.678,17.086h9.854l-2.703,5.912c5.596,2.428,11.155,5.575,16.711,8.607c3.387,1.847,6.967,3.75,10.541,5.375 v-6.16l-4.197-2.763v-5.318L33.064,12.197h-11.48L20.43,15.24h-4.533l-1.266,3.286l0.781,0.345L16.678,17.086z M49.6,31.84 l0.047,1.273L27.438,20.998l0.799-1.734L49.6,31.84z M33.031,15.1l12.889,8.82l0.027,0.769L32.551,16.1L33.031,15.1z M22.377,14.045 h9.846l-1.539,3.365l-2.287-1.498h1.371l0.721-1.352h-2.023l-0.553,1.037l-0.541-0.357h-0.34l0.359-0.684h-2.025l-0.361,0.684 h-3.473L22.377,14.045z M23.695,20.678l-0.004,0.004h0.004V20.678z M24.828,18.199h-2.031l-0.719,1.358h2.029L24.828,18.199z  M40.385,34.227c-12.85-7.009-25.729-14.667-38.971-12.527c1.26,8.809,9.08,16.201,8.213,24.328 c-0.553,4.062-3.111,0.828-3.303,7.137c15.799,0,32.379,0,48.166,0l0.066-4.195l1.477-7.23 C50.842,39.812,45.393,36.961,40.385,34.227z M13.99,35.954c-1.213,0-2.195-1.353-2.195-3.035c0-1.665,0.98-3.017,2.195-3.017 c1.219,0,2.195,1.352,2.195,3.017C16.186,34.604,15.213,35.954,13.99,35.954z M23.691,20.682h-2.02l-0.588,1.351h2.023 L23.691,20.682z M19.697,18.199l-0.721,1.358h2.025l0.727-1.358H19.697z',
  car: 'path://M49.592,40.883c-0.053,0.354-0.139,0.697-0.268,0.963c-0.232,0.475-0.455,0.519-1.334,0.475 c-1.135-0.053-2.764,0-4.484,0.068c0,0.476,0.018,0.697,0.018,0.697c0.111,1.299,0.697,1.342,0.931,1.342h3.7 c0.326,0,0.628,0,0.861-0.154c0.301-0.196,0.43-0.772,0.543-1.78c0.017-0.146,0.025-0.336,0.033-0.56v-0.01 c0-0.068,0.008-0.154,0.008-0.25V41.58l0,0C49.6,41.348,49.6,41.09,49.592,40.883L49.592,40.883z M6.057,40.883 c0.053,0.354,0.137,0.697,0.268,0.963c0.23,0.475,0.455,0.519,1.334,0.475c1.137-0.053,2.762,0,4.484,0.068 c0,0.476-0.018,0.697-0.018,0.697c-0.111,1.299-0.697,1.342-0.93,1.342h-3.7c-0.328,0-0.602,0-0.861-0.154 c-0.309-0.18-0.43-0.772-0.541-1.78c-0.018-0.146-0.027-0.336-0.035-0.56v-0.01c0-0.068-0.008-0.154-0.008-0.25V41.58l0,0 C6.057,41.348,6.057,41.09,6.057,40.883L6.057,40.883z M49.867,32.766c0-2.642-0.344-5.224-0.482-5.507 c-0.104-0.207-0.766-0.749-2.271-1.773c-1.522-1.042-1.487-0.887-1.766-1.566c0.25-0.078,0.492-0.224,0.639-0.241 c0.326-0.034,0.345,0.274,1.023,0.274c0.68,0,2.152-0.18,2.453-0.48c0.301-0.303,0.396-0.405,0.396-0.672 c0-0.268-0.156-0.818-0.447-1.146c-0.293-0.327-1.541-0.49-2.273-0.585c-0.729-0.095-0.834,0-1.022,0.121 c-0.304,0.189-0.32,1.919-0.32,1.919l-0.713,0.018c-0.465-1.146-1.11-3.452-2.117-5.269c-1.103-1.979-2.256-2.599-2.737-2.754 c-0.474-0.146-0.904-0.249-4.131-0.576c-3.298-0.344-5.922-0.388-8.262-0.388c-2.342,0-4.967,0.052-8.264,0.388 c-3.229,0.336-3.66,0.43-4.133,0.576s-1.633,0.775-2.736,2.754c-1.006,1.816-1.652,4.123-2.117,5.269L9.87,23.109 c0,0-0.008-1.729-0.318-1.919c-0.189-0.121-0.293-0.225-1.023-0.121c-0.732,0.104-1.98,0.258-2.273,0.585 c-0.293,0.327-0.447,0.878-0.447,1.146c0,0.267,0.094,0.379,0.396,0.672c0.301,0.301,1.773,0.48,2.453,0.48 c0.68,0,0.697-0.309,1.023-0.274c0.146,0.018,0.396,0.163,0.637,0.241c-0.283,0.68-0.24,0.524-1.764,1.566 c-1.506,1.033-2.178,1.566-2.271,1.773c-0.139,0.283-0.482,2.865-0.482,5.508s0.189,5.02,0.189,5.86c0,0.354,0,0.976,0.076,1.565 c0.053,0.354,0.129,0.697,0.268,0.966c0.232,0.473,0.447,0.516,1.334,0.473c1.137-0.051,2.779,0,4.477,0.07 c1.135,0.043,2.297,0.086,3.33,0.11c2.582,0.051,1.826-0.379,2.928-0.36c1.102,0.016,5.447,0.196,9.424,0.196 c3.976,0,8.332-0.182,9.423-0.196c1.102-0.019,0.346,0.411,2.926,0.36c1.033-0.018,2.195-0.067,3.332-0.11 c1.695-0.062,3.348-0.121,4.477-0.07c0.886,0.043,1.103,0,1.332-0.473c0.132-0.269,0.218-0.611,0.269-0.966 c0.086-0.592,0.078-1.213,0.078-1.565C49.678,37.793,49.867,35.408,49.867,32.766L49.867,32.766z M13.219,19.735 c0.412-0.964,1.652-2.9,2.256-3.244c0.145-0.087,1.426-0.491,4.637-0.706c2.953-0.198,6.217-0.276,7.73-0.276 c1.513,0,4.777,0.078,7.729,0.276c3.201,0.215,4.502,0.611,4.639,0.706c0.775,0.533,1.842,2.28,2.256,3.244 c0.412,0.965,0.965,2.858,0.861,3.116c-0.104,0.258,0.104,0.388-1.291,0.275c-1.387-0.103-10.088-0.216-14.185-0.216 c-4.088,0-12.789,0.113-14.184,0.216c-1.395,0.104-1.188-0.018-1.291-0.275C12.254,22.593,12.805,20.708,13.219,19.735 L13.219,19.735z M16.385,30.511c-0.619,0.155-0.988,0.491-1.764,0.482c-0.775,0-2.867-0.353-3.314-0.371 c-0.447-0.017-0.842,0.302-1.076,0.362c-0.23,0.06-0.688-0.104-1.377-0.318c-0.688-0.216-1.092-0.155-1.316-1.094 c-0.232-0.93,0-2.264,0-2.264c1.488-0.068,2.928,0.069,5.621,0.826c2.693,0.758,4.191,2.213,4.191,2.213 S17.004,30.357,16.385,30.511L16.385,30.511z M36.629,37.293c-1.23,0.164-6.386,0.207-8.794,0.207c-2.412,0-7.566-0.051-8.799-0.207 c-1.256-0.164-2.891-1.67-1.764-2.865c1.523-1.627,1.24-1.576,4.701-2.023C24.967,32.018,27.239,32,27.834,32 c0.584,0,2.865,0.025,5.859,0.404c3.461,0.447,3.178,0.396,4.699,2.022C39.521,35.623,37.887,37.129,36.629,37.293L36.629,37.293z  M48.129,29.582c-0.232,0.93-0.629,0.878-1.318,1.093c-0.688,0.216-1.145,0.371-1.377,0.319c-0.231-0.053-0.627-0.371-1.074-0.361 c-0.448,0.018-2.539,0.37-3.313,0.37c-0.772,0-1.146-0.328-1.764-0.481c-0.621-0.154-0.966-0.154-0.966-0.154 s1.49-1.464,4.191-2.213c2.693-0.758,4.131-0.895,5.621-0.826C48.129,27.309,48.361,28.643,48.129,29.582L48.129,29.582z'
};
const labelSetting = {
  show: true,
  position: 'right',
  offset: [10, 0],
  fontSize: 16
};
option = {
  title: {
    text: 'Vehicles in X City'
  },
  legend: {
    data: ['2015', '2016']
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  grid: {
    containLabel: true,
    left: 20
  },
  yAxis: {
    data: [ 'ship', 'plane', 'train', 'car'],
    inverse: true,
    axisLine: { show: false },
    axisTick: { show: false },
    axisLabel: {
      margin: 30,
      fontSize: 14
    },
    axisPointer: {
      label: {
        show: true,
        margin: 30
      }
    }
  },
  xAxis: {
    splitLine: { show: false },
    axisLabel: { show: false },
    axisTick: { show: false },
    axisLine: { show: false }
  },
  series: [
    {
      name: '2015',
      type: 'pictorialBar',
      label: labelSetting,
      symbolRepeat: true,
      symbolSize: ['80%', '60%'],
      barCategoryGap: '40%',
      data: [

        {
          value: 21,
          symbol: pathSymbols.ship
        },
        {
          value: 66,
          symbol: pathSymbols.plane
        },
        {
          value: 78,
          symbol: pathSymbols.train
        },
        {
          value: 123,
          symbol: pathSymbols.car
        }
      ]
    },
    {
      name: '2016',
      type: 'pictorialBar',
      barGap: '10%',
      label: labelSetting,
      symbolRepeat: true,
      symbolSize: ['80%', '60%'],
      data: [

        {
          value: 29,
          symbol: pathSymbols.ship
        },
        {
          value: 73,
          symbol: pathSymbols.plane
        },
        {
          value: 91,
          symbol: pathSymbols.train
        },
        {
          value: 95,
          symbol: pathSymbols.car
        }
      ]
    }
  ]
};

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
        '台湾省': Math.random() * 100,
        '海南省': Math.random() * 100,
        '安徽省': Math.random() * 100,
        '江西省': Math.random() * 100,
        '湖南省': Math.random() * 100,
        '云南省': Math.random() * 100,
        '贵州省': Math.random() * 100,
        '广东省': Math.random() * 100,
        '福建省': Math.random() * 100,
        '浙江省': Math.random() * 100,
        '江苏省': Math.random() * 100,
        '四川省': Math.random() * 100,
        '重庆市': Math.random() * 100,
        '湖北省': Math.random() * 100,
        '河南省': Math.random() * 100,
        '山东省': Math.random() * 100,
        '吉林省': Math.random() * 100,
        '辽宁省': Math.random() * 100,
        '天津市': Math.random() * 100,
        '北京市': Math.random() * 100,
        '河北省': Math.random() * 100,
        '山西省': Math.random() * 100,
        '陕西省': Math.random() * 100,
        '宁夏回族自治区': Math.random() * 100,
        '青海省': Math.random() * 100,
        '西藏自治区': Math.random() * 100,
        '黑龙江省': Math.random() * 100,
        '内蒙古自治区': Math.random() * 100,
        '甘肃省': Math.random() * 100,
        '新疆维吾尔自治区': Math.random() * 100,
        '广西壮族自治区': Math.random() * 100,
    };
    //设置每个市的数据
    var citydata = {
        '巴中市': { value: 30, text: '海南省的文本内容' },
        '达州市': { value: 30, text: '海南省的文本内容' },
        '广元市':   { value: 30, text: '海南省的文本内容' },
        '楚雄彝族自治州': { value: 30, text: '海南省的文本内容' },
        '南华县': { value: 30, text: '海南省的文本内容' },
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
                        formatter: '{b}<br/>{c} (种菌菇)'
                    },
                    visualMap: {
                        min: 10,
                        max: 100,
                        text: ['High', 'Low'],
                        realtime: false,
                        calculable: true,
                        inRange: {
                            color: ['orange', 'green']
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
                            return params.name + '<br/>' + params.value + ' (种菌菇)' + '<br/>' + params.data.text; // 显示文本内容
                        }
                    },
                    visualMap: {
                        min: 10,
                        max: 100,
                        text: ['High', 'Low'],
                        realtime: false,
                        calculable: true,
                        inRange: {
                            color: ['orange', 'purple', 'red']
                        }
                    },
                };

            };
            myChart.setOption(option);
        });
    };

})();