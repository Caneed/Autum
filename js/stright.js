var option;

option = {
  xAxis: {
    type: 'category',
    data: [
      '1930',
      '1940',
      '1950',
      '1960',
      '1970',
      '1980',
      '1990',
      '2000',
      '2010',
      '2020'
    ]
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [
        {
          value: 10,
          itemStyle: {
            color: '#56e39f'
          }
        },
        {
          value: 20,
          itemStyle: {
            color: '#56e39f'
          }
        },
        {
          value: 20,
          itemStyle: {
            color: '#56e39f'
          }
        },
        {
          value: 10,
          itemStyle: {
            color: '#56e39f'
          }
        },
        {
          value: 13,
          itemStyle: {
            color: '#56e39f'
          }
        },
        {
          value: 25,
          itemStyle: {
            color: '#56e39f'
          }
        },
        {
          value: 60,
          itemStyle: {
            color: '#56e39f'
          }
        },
        {
          value: 70,
          itemStyle: {
            color: '#56e39f'
          }
        },
        {
          value: 140,
          itemStyle: {
            color: '#56e39f'
          }
        },
        {
          value: 16,
          itemStyle: {
            color: '#56e39f'
          }
        }
      ],
      type: 'bar',
      stack: 'x'
    },
    {
      data: [
        {
          value: 0,
          itemStyle: {
            color: '#2b2e7b'
          }
        },
        {
          value: 0,
          itemStyle: {
            color: '#2b2e7b'
          }
        },
        {
          value: 0,
          itemStyle: {
            color: '#2b2e7b'
          }
        },
        {
          value: 0,
          itemStyle: {
            color: '#2b2e7b'
          }
        },
        {
          value: 7,
          itemStyle: {
            color: '#2b2e7b'
          }
        },
        {
          value: 5,
          itemStyle: {
            color: '#2b2e7b'
          }
        },
        {
          value: 10,
          itemStyle: {
            color: '#2b2e7b'
          }
        },
        {
          value: 50,
          itemStyle: {
            color: '#2b2e7b'
          }
        },
        {
          value: 120,
          itemStyle: {
            color: '#2b2e7b'
          }
        },
        {
          value: 4,
          itemStyle: {
            color: '#2b2e7b'
          }
        }
      ],
      type: 'bar',
      stack: 'x'
    }
  ]
};

var chartDom = document.getElementById('straight');
var myChart = echarts.init(chartDom);
option && myChart.setOption(option);
