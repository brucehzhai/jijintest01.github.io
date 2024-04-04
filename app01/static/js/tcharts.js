 (function () {

var chartDom = document.getElementById('tcharts');
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
