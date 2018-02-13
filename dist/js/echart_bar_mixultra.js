/* 云消费TOP10 */

var data = [
  {
    id: '1',
    name: '泉州市教育局',
    value: 50
  }, {
    id: '2',
    name: '安溪县劳动局',
    value: 30
  }, {
    id: '3',
    name: '安溪县文化宫',
    value: 25
  }, {
    id: '4',
    name: '安溪县公安局',
    value: 23
  }, {
    id: '5',
    name: '福州市环保局',
    value: 20
  }, {
    id: '6',
    name: '厦门市产业园',
    value: 16
  }, {
    id: '7',
    name: '温州市教育局',
    value: 16
  }, {
    id: '8',
    name: '夏商集团',
    value: 15
  }, {
    id: '9',
    name: '安踏鞋业',
    value: 11
  }, {
    id: '10',
    name: '李宁',
    value: 6
  }
];
var unit = "W";

function getOption(data) {
  var data = data.reverse();
  var option = {
    grid: {
      show: false,
      containLabel: true,
      // width: '90%',
      height:'92%',
      top: 16,
      left: 0,
      right: 10
    }, 
    xAxis: [{
      type: 'value',
      axisLine: {
          show: false
      },
      axisTick: {
          show: false
      },
      axisLabel: {
          show: false
      },
      splitLine: {
          show: false
      }
    }],
    yAxis: [{
      type: 'category',
      // triggerEvent: true,
      data: data.map(function(item, i) {
        return item.name;
      }),
      axisLine: {
          show: false
      },
      axisTick: {
          show: false,
          alignWithLabel: true
      },
      axisLabel: {
          textStyle: {
            fontSize: 12,
            color: "#9abed4"
          }
      }
    }, {
      type: 'category',
      position: 'right',
      data: data.map(function(item, i) {
        return item.value + unit;
      }),
      axisLine: {
          show: false
      },
      axisTick: {
          show: false,
          alignWithLabel: true
      },
      axisLabel: {
          textStyle: {
            fontSize: 14,
            color: "#00f2f4"
          }
      }
    }],
    series: [
      {
        type: 'bar',
        itemStyle: {
          normal: {
            color: 'rgba(154,190,212,.05)',
            borderColor: '#425d75'
          }
        },
        barGap: '-100%',
        barCategoryGap: '60%',
        // barWidth: 16,
        silent: true,
        data: data.map(function(item, i){
          return 100;
        }),
        animation: false
      }, {
        name: '当月项目成本TOP5',
        type: 'bar',
        // barWidth: 10,
        label: {
          normal: {
            show: false
          }
        },
        data: data.map(function(item, i){
          return {
            name: item.name,
            value: item.value,
            itemStyle: {
              normal: {
                color: '#00f2f4',
                opacity: 0.1 + 0.1 * i
              }
            }
          };
        })
      }
    ]
  }
  return option;
}

var dom = document.getElementById('consume-bar');
var option = getOption(data);
var chart = echarts.init(dom);
chart.setOption(option);
