/*
 * @Author: SiMeiyu 
 * @Date: 2017-08-17 09:40:17 
 */ 
var color = {
    primary: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
        offset: 0,
        color: '#15bf95'
    }, {
        offset: 1,
        color: '#084b99'
    }]),
    warning: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
        offset: 0,
        color: '#ffbd49'
    }, {
        offset: 1,
        color: '#a63e07'
    }]),
    danger: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
        offset: 0.2,
        color: '#d2685c'
    }, {
        offset: 1,
        color: '#9c3925'
    }])
};
var pieColor = {
    primary: '#15bf95',
    warning: '#ffbd49',
    danger: '#d2685c'
}
var used_cpu = 0.07;
var used_storager = 0.75;
var used_ram = 0.5;
var used_ip = 0.9;

function getColor(used, type) {
    if (used >= 0.9) {
        return type == "liqu" ? color.danger : pieColor.danger;
    } else if (used >= 0.7) {
        return type == "liqu" ? color.warning : pieColor.warning;
    } else {
        return type == "liqu" ? color.primary : pieColor.primary;
    }
}

function getOption(value) {
    return {
        title: [{
            text: '使用率',
            left: '28%',
            top: '50%',
            textStyle: {
                color: '#fff',
                fontWeight: 'normal',
                fontSize: 14
            }
        }],
        series: [
          {
            type: 'liquidFill',
            name: '使用率',
            center: ['50%', '50%'],
            radius: '76%',
            waveLength: '100%',
            data:[
              {
                  value: value,
                  itemStyle: {
                      normal: {
                        color: '#425d75',
                        shadowBlur: 0,
                        shadowColor: 'rgba(0, 0, 0, 0)'
                      }
                  }
              },
              {
                  value: value,
                  name: 'CPU',
                  itemStyle: {
                      normal: {
                        color: getColor(value, 'liqu'),
                        shadowBlur: 0,
                        shadowColor: 'rgba(0, 0, 0, 0)'
                      }
                  }
              }
            ],
            label: {
                    normal: {
                        formatter: function(param) {
                            return (param.value * 100).toFixed(1) + '%' + '\n';
                        },
                        textStyle: {
                            fontSize: 16,
                            fontWeight: 'normal',
                            color: '#fff',
                        }
                    }
                },
            backgroundStyle: {
                borderColor: '#fff',
                borderWidth: 0,
                color: 'rgba(66,93,117,0.2)'
            },
            outline: {
                show: false
            },
          },
          {
            type: 'pie',
            name: '使用率',
            center: ['50%', '50%'],
            radius: ['83%', '85%'],
            clockWise: true,
            silent: true,
            labelLine: {
                normal: {
                    show: false,
                }
            },
            label: {
                normal: {
                    show: false,
                }
            },
            data: [
                {
                    name: '总量',
                    value: 1 - value,
                    itemStyle: {
                        normal: {
                            color: '#425d75',
                        },
                    },
                },
                {
                    name: '使用率',
                    value: value,
                    itemStyle: {
                        normal: {
                            color: getColor(value, 'pie'),
                            borderColor: getColor(value, 'pie'),
                            borderWidth: 1
                        }
                    }
                }
            ]
          },
          {
            name: "仪盘表-使用",
            type: "gauge",
            radius: '100%',
            splitNumber:60 * value,
            startAngle: 90,
            endAngle: 90 + 359.9 * value,
            clockwise: false,
            axisLine: {
                "lineStyle": {
                    "color": [
                        [1, 'rgba(0,0,0,0)']
                    ],
                    "width": 5
                },
                
            },
            axisTick: {
                lineStyle: {
                    color: getColor(value, 'pie'),
                    width: 1
                },
                length: 5,
                splitNumber:1
            },
            pointer: {
                show:false
            },
            axisLabel: {
                show:false
            },
            splitLine: {
                show: false
            },
            title: {
                show: false
            },
            detail: {
                show: false
            },
          },
          {
            name: "仪盘表-剩余",
            type: "gauge",
            radius: '100%',
            splitNumber: 60 * (1-value),
            startAngle: 90,
            endAngle: 90 - 359.9 * (1 - value),
            axisLine: {
                "lineStyle": {
                    "color": [
                        [1, 'rgba(0,0,0,0)']
                    ],
                    "width": 5
                },
                
            },
            axisTick: {
                lineStyle: {
                    color: '#425d75',
                    width: 1
                },
                length: 5,
                splitNumber:1
            },
            pointer: {
                show:false
            },
            axisLabel: {
                show:false
            },
            splitLine: {
                show: false
            },
            title: {
                show: false
            },
            detail: {
                show: false
            },
          }
        ]    
    };
}


var option_cpu = getOption(used_cpu);
var option_storager = getOption(used_storager);
var option_ram = getOption(used_ram);
var option_ip = getOption(used_ip);

var liquidfill_cpu = echarts.init(document.getElementById('liquidfill-cpu'));
liquidfill_cpu.setOption(option_cpu);

var liquidfill_storager = echarts.init(document.getElementById('liquidfill-storager'));
liquidfill_storager.setOption(option_storager);

var liquidfill_ram = echarts.init(document.getElementById('liquidfill-ram'));
liquidfill_ram.setOption(option_ram);

var liquidfill_ip = echarts.init(document.getElementById('liquidfill-ip'));
liquidfill_ip.setOption(option_ip);

// setInterval(function() {
//     var used_cpu = parseFloat(Math.random().toFixed(2));
//     var option_cpu = getOption(used_cpu);
//     liquidfill_cpu.clear();
//     liquidfill_cpu.setOption(option_cpu);
// }, 3000);
