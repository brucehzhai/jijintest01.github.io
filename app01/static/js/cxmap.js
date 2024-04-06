
(function () {
  var chartDom = document.getElementById('cxmap');
var myChart = echarts.init(chartDom);
var option;

var cxdata= {
    "南华县": "全国最大的野生食用菌交易集散地",
    "武定县": "产量8501吨、产值46947万元",
    "楚雄市": "年产量超4千吨，年产值超6亿元",
    "禄丰市": "产量逐年增长，保育促繁示范基地创建进入收尾阶段",
    "双柏县": "年产量达2511吨，年产值约9524万元",
    "姚安县": "以野生食用菌为主的林下产业基地建设稳步拓展",
    "牟定县": "年产量约570吨，年交易量在1200吨左右",
    "永仁县": "年产松露50多吨，占全国的25%、世界的13%",
    "大姚县": "多措并举助力野生食用菌产业发展",
    "元谋县": "野生食用菌的品种和数量逐年增多"
};

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
        formatter: function (params) {
                            return params.name + '<br/>' + params.data.text; // 显示文本内容
                        }
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
      series: [
        {
          name: '楚雄市菌菇介绍',
          type: 'map',
          map: 'HK',
          label: {
            show: true
          },
          data: Object.keys(cxdata).map(function (key) {
                            return {
                                name: key,
                                text: cxdata[key],
                            };
                        }),
          itemStyle: {
              normal: {areaColor: '#f0f0f0'}
              },
          emphasis: {
              itemStyle: {
              color: '#4caf50',
              borderColor: '#4caf50', // 鼠标悬浮时的边框颜色，也设置为绿色
              borderWidth: 1}
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
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      },
      label: {
        show: true
      },
      labelLine: {
        show: false
      }
    }
  ],
  color: [
    '#83a48e', '#5d7e6f', '#3e5d5d', '#1e3d3d',
    '#004040', '#005a32', '#007a4e', '#009b5a',
    '#40bf7a', '#70db8c', '#a0e0a8'
  ]
};

option && myChart.setOption(option);})();

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
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {offset: 0, color: '#4FAB92'},
                        {offset: 1, color: '#188df0'}
                    ])
                }
            },
            data: productionData
        },
          {
            name: '增幅',
            type: 'line',
            yAxisIndex: 1,
            itemStyle: {
                normal: {
                    color: 'LINGHTGREEN' // 折线颜色
                }
            },
            lineStyle: {
                width: 2,
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {offset: 0, color: '#50FFCB'},
                    {offset: 0.5, color: '#50FF96'},
                    {offset: 1, color: '#50FF5B'}
                ])
            },
            areaStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {offset: 0, color: '#50FFCB'},
                    {offset: 1, color: '#ffa07a55'}
                ])
            },
            data: growthData
        }
    ]
};

// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);


})();