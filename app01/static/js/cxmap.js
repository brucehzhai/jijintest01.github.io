

(function () {
  var chartDom = document.getElementById('cxmap');
var myChart = echarts.init(chartDom);
var option;

myChart.showLoading();
$.get('../static/json/楚雄彝族自治州.json', function (geoJson) {
  myChart.hideLoading();
  echarts.registerMap('HK', geoJson);
  myChart.setOption(
    (option = {
      title: {
        text: '楚雄市地图',
        subtext: 'Data from baidu',
        sublink:
          'http://zh.wikipedia.org/wiki/%E9%A6%99%E6%B8%AF%E8%A1%8C%E6%94%BF%E5%8D%80%E5%8A%83#cite_note-12'
      },
      tooltip: {
        trigger: 'item',
        formatter: '{b}<br/>{c} '
      },
      toolbox: {
        show: true,
        orient: 'vertical',
        left: 'right',
        top: 'center',
        feature: {
          dataView: { readOnly: false },
          restore: {},
          saveAsImage: {}
        }
      },
      visualMap: {
        min: 800,
        max: 50000,
        text: ['High', 'Low'],
        realtime: false,
        calculable: true,
        inRange: {
          color: ['lightskyblue', 'yellow', 'orangered']
        }
      },
      series: [
        {
          name: '香港18区人口密度',
          type: 'map',
          map: 'HK',
          label: {
            show: true
          },
          data: [
            { name: '南华县', value: 20057.34 },
            { name: '元谋县', value: 22611.34 },
            { name: '牟定县', value: 25105.34 },
            { name: '武定县', value: 25891.34 },
            { name: '大姚县', value: 23171.34 },
            { name: '双柏县', value: 22013.34 },
            { name: '禄丰县', value: 22242.34 },
            { name: '楚雄市', value: 22180.34 },
            { name: '永仁县', value: 31822.34 },
            { name: '姚安县', value: 13123.34 }






          ],
          // 自定义名称映射
          nameMap: {
            'Central and Western': '中西区',
            Eastern: '东区',
            Islands: '离岛',
            'Kowloon City': '九龙城',
            'Kwai Tsing': '葵青',
            'Kwun Tong': '观塘',
            North: '北区',
            'Sai Kung': '西贡',
            'Sha Tin': '沙田',
            'Sham Shui Po': '深水埗',
            Southern: '南区',
            'Tai Po': '大埔',
            'Tsuen Wan': '荃湾',
            'Tuen Mun': '屯门',
            'Wan Chai': '湾仔',
            'Wong Tai Sin': '黄大仙',
            'Yau Tsim Mong': '油尖旺',
            'Yuen Long': '元朗'
          }
        }
      ]
    })
  );
});

option && myChart.setOption(option);
})();

(function () {
var chartDom = document.getElementById('cxpie');
var myChart = echarts.init(chartDom);
var option;

option = {
  legend: {
    top: 'right'
  },
  toolbox: {
    show: true,
    feature: {
      mark: { show: true },
      dataView: { show: true, readOnly: false },
      restore: { show: true },
      saveAsImage: { show: true }
    }
  },
  series: [
    {
      name: 'Nightingale Chart',
      type: 'pie',
      radius: [50, 250],
      center: ['50%', '50%'],
      roseType: 'area',
      itemStyle: {
        borderRadius: 8
      },
      data: [
        { value: 60, name: '楚雄市：610.11 亿元' },
        { value: 55, name: '禄丰县：268.23 亿元' },
        { value: 52, name: '大姚县：143.59 亿元' },
        { value: 50, name: '武定县：136.37 亿元' },
        { value: 47, name: '元谋县：126.68 亿元' },
        { value: 45, name: '南华县：124.61 亿元' },
        { value: 42, name: '牟定县：102.60 亿元' },
        { value: 40, name: '姚安县：100.67 亿元' },
        { value: 36, name: '双柏县：80.76 亿元' },
        { value: 32, name: '永仁县：69.81 亿元' },
      ]
    }
  ]
};

option && myChart.setOption(option);

})();
(function () {


var chartDom = document.getElementById('cxhist');
var myChart = echarts.init(chartDom);
var option;

option = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  legend: {},
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: [
    {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    }
  ],
  yAxis: [
    {
      type: 'value'
    }
  ],
  series: [
    {
      name: 'Direct',
      type: 'bar',
      emphasis: {
        focus: 'series'
      },
      data: [320, 332, 301, 334, 390, 330, 320]
    },
    {
      name: 'Email',
      type: 'bar',
      stack: 'Ad',
      emphasis: {
        focus: 'series'
      },
      data: [120, 132, 101, 134, 90, 230, 210]
    },
    {
      name: 'Union Ads',
      type: 'bar',
      stack: 'Ad',
      emphasis: {
        focus: 'series'
      },
      data: [220, 182, 191, 234, 290, 330, 310]
    },
    {
      name: 'Video Ads',
      type: 'bar',
      stack: 'Ad',
      emphasis: {
        focus: 'series'
      },
      data: [150, 232, 201, 154, 190, 330, 410]
    },
    {
      name: 'Search Engine',
      type: 'bar',
      data: [862, 1018, 964, 1026, 1679, 1600, 1570],
      emphasis: {
        focus: 'series'
      },
      markLine: {
        lineStyle: {
          type: 'dashed'
        },
        data: [[{ type: 'min' }, { type: 'max' }]]
      }
    },
    {
      name: 'Baidu',
      type: 'bar',
      barWidth: 5,
      stack: 'Search Engine',
      emphasis: {
        focus: 'series'
      },
      data: [620, 732, 701, 734, 1090, 1130, 1120]
    },
    {
      name: 'Google',
      type: 'bar',
      stack: 'Search Engine',
      emphasis: {
        focus: 'series'
      },
      data: [120, 132, 101, 134, 290, 230, 220]
    },
    {
      name: 'Bing',
      type: 'bar',
      stack: 'Search Engine',
      emphasis: {
        focus: 'series'
      },
      data: [60, 72, 71, 74, 190, 130, 110]
    },
    {
      name: 'Others',
      type: 'bar',
      stack: 'Search Engine',
      emphasis: {
        focus: 'series'
      },
      data: [62, 82, 91, 84, 109, 110, 120]
    }
  ]
};

option && myChart.setOption(option);

})();

(function () {
  // 引入 ECharts 主模块

// 初始化图表
var myChart = echarts.init(document.getElementById('cxp&s'));

// 准备数据
var years = ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022'];
var productionData = [9151, 9653, 10182, 12712, 13852, 14809, 16252, 17955, 19228, 19688, 20612, 25081, 29591];
var growthData = [0.0348, 0.0549, 0.0548, 0.2485, 0.0897, 0.0691, 0.0974, 0.1048, 0.0709, 0.0239, 0.0469, 0.2168, 0.1798];

// 指定图表的配置项和数据
var option = {
    title: {
        text: '楚雄市野生菌产量及增幅'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            crossStyle: {
                color: '#999'
            }
        }
    },
    legend: {
        data: ['产量', '增幅']
    },
    xAxis: [
        {
            type: 'category',
            data: years,
            axisPointer: {
                type: 'shadow'
            }
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: '产量（吨）',
            min: 0,
            max: 30000, // 可以根据实际情况调整最大值
            interval: 5000, // 可以根据实际情况调整刻度间隔
            axisLabel: {
                formatter: '{value} 吨'
            }
        },
        {
            type: 'value',
            name: '增幅',
            min: 0,
            max: 0.25, // 可以根据实际情况调整最大值
            axisLabel: {
                formatter: '{value}' // 增幅不需要额外的单位
            }
        }
    ],
    series: [
        {
            name: '产量',
            type: 'bar',
            data: productionData
        },
        {
            name: '增幅',
            type: 'line',
            yAxisIndex: 1, // 使用第二个 yAxis，即增幅的 yAxis
            data: growthData,
            itemStyle: {
                normal: {
                    color: '#ff4500', // 设置折线的颜色
                    lineStyle: {
                        width: 2 // 设置线条的宽度
                    }
                }
            }
        }
    ]
};

// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);


})();
