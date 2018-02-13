var xAxisData = ['1','2','3','4','5','6','7','8','9','10','11',"12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30"];
var data = [53,58,5,39,35,35,4,49,53,52,48,46,52,57,51,41,32,3,31,39,44,47,49,48,47,46,45,43,41,4];
var option_tooltip = {
    trigger: 'axis',
    backgroundColor: 'rgba(0,0,0,0.5)',
    axisPointer: {
        lineStyle: {
            color: '#fff',
            opacity: '0.2',
        },
        label: {
            formatter: "第{value}日"
        }
    }
};
var option_xAxis = [{
    type: 'category',
    boundaryGap: false,
    axisLine: {
        lineStyle: {
            color: '#eee',
            opacity: '0.1',
        }
    },
    axisLabel: {
        textStyle: {
            fontSize: 12,
            color: '#9abed4'
        },
        formatter: function (value, index) {
            if(index === 28) {
                return value + " 日";
            }
            return value;
        }
    },
    axisTick: {
        inside: true,
        lineStyle: {
            color: ['#eee'],
            opacity: '0.1',
        }
    },
    data: xAxisData
}];
var option_grid = {
    top: 30,
    left: 0,
    right: 6,
    bottom: 20,
    containLabel: true
};
var option = {
    tooltip: option_tooltip,
    grid: option_grid,
    xAxis: option_xAxis,
    yAxis: [{
        type: 'value',
        name: '（次）',
        nameGap: 10,
        nameTextStyle: {
            color: '#9abed4',
            fontSize: 12
        },
        triggerEvent: true,
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#eee',
                opacity: '0.1',
            }
        },
        axisTick: {
            show: false,
        },
        axisLabel: {
            textStyle: {
                fontSize: 12,
                color: '#9abed4'
            },
        },
        splitLine: {
            lineStyle: {
                color: ['#eee'],
                opacity: '0.1',
            }
        }
    }],
    series: [{
        name: '攻击概况',
        type: 'line',
        symbolSize: 6,
        lineStyle: {
            normal: {
                color: '#00f2f4'
            }
        },
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0.5, 0, 1, [{
                      offset: 0,
                      color: 'rgba(0,214,233,0.2)'
                  }, {
                      offset: 1,
                      color: 'rgba(0,214,233,0)'
                  }]
                )
            }
        },
        itemStyle: {
            normal: {
                color: '#00a0e9',
                opacity: '0'
            },
            emphasis: {
                color: '#00a0e9',
                opacity: '1',
                borderColor: 'rgba(0,0,0,0)',
            }
        },
        data: data,
    }]
};
var line_mixultra = echarts.init(document.getElementById('line-mixultra'));
line_mixultra.setOption(option);

// line_cpu_ram.on('mouseover', function(params) {
//     if (params.componentType == "yAxis") {
//         console.log(params.value);
//     }
// })