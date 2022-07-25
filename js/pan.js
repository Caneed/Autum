var option;
option = {
  tooltip: {
    trigger: 'item'
  },
  legend: {
    top: '5%',
    left: 'center'
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: ['40%', '70%'],
      avoidLabelOverlap: false,
      label: {
        show: false,
        position: 'center'
      },
      emphasis: {
        label: {
          show: true,
          fontSize: '24',
          fontWeight: 'bold'
        }
      },
      labelLine: {
        show: false
      },
      data: [
        { value: 366, itemStyle: {
          color: '#56e39f'
        }, name: 'Movies' },
        { value: 173, itemStyle: {
          color: '#2b2e7b'
        }, name: 'TV Series' }
      ]
    }
  ]
};
var chartDom = document.getElementById('pan');
var myChart = echarts.init(chartDom);
option && myChart.setOption(option);