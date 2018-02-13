var virtual_resource_data = [
    {value:5, name:'2核1G'},
    {value:8, name:'2核16G'},
    {value:12, name:'2核4G'},
    {value:9, name:'2核8G'},
    {value:1, name:'4核1G'},
    {value:32, name:'4核16G'},
    {value:14, name:'4核4G'},
    {value:6, name:'4核8G'},
];
function getSum(data) {
    var sum = 0;
    data.forEach(function(item, idx) {
        sum += item.value;
    });
    return sum;
}
var virtual_resource_sum = getSum(virtual_resource_data);
var unit = "台";
var virtual_resource_option = {
    title: [{
        text: '新增云主机',
        left: '53%',
        top: '57%',
        textAlign: 'right',
        textBaseline: 'middle',
        textStyle: {
            color: '#7b9cb3',
            fontWeight: 'normal',
            fontSize: 12
        }
    }
    ],
    series: [
        {
            name: virtual_resource_sum + unit,
            type:'pie',
            silent: true,
            center: ['46%', '54%'],
            radius: ['36%', '66%'],
            itemStyle: {
                normal: {
                    color: '#132a40',
                    borderColor: 'rgba(53,80,102,0.6)',
                }
            },
            label: {
                normal: {
                    show: true,
                    position: 'center',
                    formatter: '{a}\n',
                    color: '#00f2f4',
                    fontSize: 16
                }
            },
            data: [1],
        },
        {
            name:'虚拟资源动态',
            type:'pie',
            center: ['46%', '54%'],
            radius: ['40%', '60%'],
            silent: true,
            itemStyle: {
                normal: {
                    color: "#00f2f4",
                    borderColor: '#132a40',
                    borderWidth: 1
                }
            },
            label: {
                normal: {
                    formatter: function(params){
                        var text = params.name + "：" + params.value + unit;
                        return text;
                    },
                    color: '#9abed4',
                    fontSize: 12,
                },          
            },
            labelLine: {
                normal: {
                    smooth: true,
                    length: 10,
                    length2: 25,
                    lineStyle: {
                        color: '#355066'
                    }
                }
            },
            data: virtual_resource_data
        }
    ]
};
var virtual_resource = echarts.init(document.getElementById('virtual-resource'));
virtual_resource.setOption(virtual_resource_option);