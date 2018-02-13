var xAxisData = ['1','2','3','4','5','6','7','8','9','10','11',"12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30"];
var data_cup = [5.3,5.8,5,3.9,3.5,3.5,4,4.9,5.3,5.2,4.8,4.6,5.2,5.7,5.1,4.1,3.2,3,3.1,3.9,4.4,4.7,4.9,4.8,4.7,4.6,4.5,4.3,4.1,4];
var data_ram = [2.8,3,2.3,1.1,0.8,0.9,1.2,2.1,2.8,2.9,2.4,2.2,3.1,4.5,1.7,0.5,0.9,1.9,2.5,2,1.4,1.2,1,1.1,1.2,1.3,1.5,1.8,2,2.6];
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
var cpu_ram = {
    tooltip: option_tooltip,
    grid: option_grid,
    xAxis: option_xAxis,
    yAxis: [{
        type: 'value',
        name: '（核）',
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
    },
    {
        type : 'value',
        position: 'right',
        name: '（T）',
        nameGap: 10,
        nameTextStyle: {
            color: '#9abed4',
            fontSize: 12
        },
        min: 0,
        max: 6,
        axisLine: {
            lineStyle: {
                color: '#eee',
                opacity: '0.1',
            }
        },
        splitLine: {
            lineStyle: {
                color: ['#eee'],
                opacity: '0.1',
            }
        },
        axisTick: {
            show: false,
        },
        axisLabel: {
            textStyle: {
                color: "#9abed4"
            }
        },
    }],
    series: [{
        name: 'cpu',
        type: 'line',
        symbolSize: 6,
        lineStyle: {
            normal: {
                opacity: '0'
            }
        },
        areaStyle: {
            normal: {
                color: '#00a0e9',
                opacity: '0.2'
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
        data: data_cup,
    }, {
        name: '内存',
        type: 'line',
        yAxisIndex: 1,
        symbolSize: 6,
        lineStyle: {
            normal: {
                color: '#00f2f4',
                width: 2
            }
        },
        areaStyle: {
            normal: {
                color: '#00f2f4',
                opacity: '0'
            }
        },
        itemStyle: {
            normal: {
                color: '#00f2f4',
                opacity: '0'
            },
            emphasis: {
                color: '#00f2f4',
                opacity: '1',
                borderColor: 'rgba(0,0,0,0)',
            }
        },
        data: data_ram,
    }]
};
var storager_snap = {
    tooltip: option_tooltip,
    grid: option_grid,
    xAxis: option_xAxis,
    yAxis: [{
        type: 'value',
        name: '（GB）',
        nameGap: 10,
        nameTextStyle: {
            color: '#9abed4',
            fontSize: 12
        },
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
    },
    {
        type : 'value',
        position: 'right',
        name: '（Bps）',
        nameGap: 10,
        nameTextStyle: {
            color: '#9abed4',
            fontSize: 12
        },
        min: 0,
        max: 12,
        axisLine: {
            lineStyle: {
                color: '#eee',
                opacity: '0.1',
            }
        },
        splitLine: {
            lineStyle: {
                color: ['#eee'],
                opacity: '0.1',
            }
        },
        axisTick: {
            show: false,
        },
        axisLabel: {
            // formatter: '{value} G',
            textStyle: {
                color: "#9abed4"
            }
        },
    }],
    series: [{
        name: '存储',
        type: 'line',
        smooth: true,
        symbolSize: 6,
        lineStyle: {
            normal: {
                opacity: '0'
            }
        },
        areaStyle: {
            normal: {
                color: '#478cff',
                opacity: '0.2'
            }
        },
        itemStyle: {
            normal: {
                color: '#478cff',
                opacity: '0'
            },
            emphasis: {
                color: '#478cff',
                opacity: '1',
                borderColor: 'rgba(0,0,0,0)',
            }
        },
        data: data_cup,
    }, {
        name: '快照',
        type: 'line',
        yAxisIndex: 1,
        smooth: true,
        symbolSize: 6,
        lineStyle: {
            normal: {
                color: '#ffbd49',
                width: 2
            }
        },
        areaStyle: {
            normal: {
                color: '#ffbd49',
                opacity: '0'
            }
        },
        itemStyle: {
            normal: {
                color: '#ffbd49',
                opacity: '0'
            },
            emphasis: {
                color: '#ffbd49',
                opacity: '1',
                borderColor: 'rgba(0,0,0,0)',
            }
        },
        data: data_ram,
    }]
};
var line_cpu_ram = echarts.init(document.getElementById('line-cpu-ram'));
var line_storager_snap = echarts.init(document.getElementById('line-storager-snap'));
line_cpu_ram.setOption(cpu_ram);
line_storager_snap.setOption(storager_snap);

// line_cpu_ram.on('mouseover', function(params) {
//     if (params.componentType == "yAxis") {
//         console.log(params.value);
//     }
// })