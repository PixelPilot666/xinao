// /**
//  * Created by 30947 on 2018/7/20.
//  */
// $(function(){
//     getHt();
//     table();

// })
// //获取div的高度
// function getHt(){
//    var all_height=$(window).height();
//    var div_height=all_height-80;
//     $("#car_control").css("height",div_height+"px");


// }
// //表格部分
// function table(){
//     $('#table').bootstrapTable({
//         method: "get",
//         url: "json/case.json",
//         striped: true,
//         singleSelect: false,
//         dataType: "json",
//         pagination: true, //分页
//         pageSize: 10,
//         pageNumber: 1,
//         search: false, //显示搜索框
//         contentType: "application/x-www-form-urlencoded",
//         queryParams: null,
//         //sidePagination: "server", //服务端请求
//         columns: [
//             {
//                 title: "",
//                 field: 'ch',
//                 align: 'center',
//                 width:'30px',
//                 valign: 'middle',
//                 formatter:function(val,row){

//                     return '<div class="cliclRed"></div>';
//                 }

//             }
//             ,
//             {
//                 title: "事项名称",
//                 field: 'name',
//                 align: 'center',
//                 valign: 'middle'
//             },
//             {
//                 title: '负责部门',
//                 field: 'part',
//                 align: 'center',
//                 valign: 'middle'
//             },

//             {
//                 title: '操作',
//                 field: 'opear',
//                 width:'250px',
//                 align: 'center',
//                 formatter: function (value, row) {
//                     var e = '<a  href="javascript:void(0)" class="table_edit" title="咨询" onclick="edit(\'' + row.id + '\')">编辑</a> ';
//                     var c = '<a   href="javascript:void(0)" class="table_del" title="删除" onclick="del(\'' + row.id + '\')">删除</a> ';


//                     return e+c ;
//                 }
//             }
//         ]
//     });


// }
//  function add(){

//      layer.open({
//          type: 2,
//          skin: 'demo-class',

//          title: '详情页面',
//          fix: true,
//          shadeClose: true,

//          area: ['1000px', '500px'],
//          content: 'tail_sm.html',

//      });
//      //加载层-默认风格
//      //layer.load(1);
// //此处演示关闭
// //     setTimeout(function(){
// //         layer.closeAll('loading');
// //     }, 2000);
//  }
// function edit(){

//     layer.open({
//         type: 2,
//         skin: 'layui-layer-lan',

//         title: '详情页面',
//         fix: true,
//         shadeClose: true,

//         area: ['1100px', '600px'],
//         content: 'tail_more.html',

//     });
//     //加载层-默认风格
//     //layer.load(1);
// //此处演示关闭
// //     setTimeout(function(){
// //         layer.closeAll('loading');
// //     }, 2000);
// }
// function openList(){
//     $(".find_expend").show();
//     $("#open").hide();
// }
// function closeList(){
//     $(".find_expend").hide();
//     $("#open").show();
// }

/**
 * Created by 30947 on 2018/7/18.
 */
// $(function(){

//     // char1();
//     // char2();
//     // char3();
//     // char4();
//     char5();
//     // char6();
//     // char7();
//     // char8();
//     // char9();
//     // char10();
//     // char11();
//     // char12();
//     // char13();
//     // char14();
// })

//统计分析图
function char1() {

    var myChart = echarts.init($("#char1")[0]);

    option = {
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient : 'vertical',
            x : 'right',
            textStyle : {
                color : '#ffffff',

            },
            data:['高频','中频','低频']
        },

        calculable : false,
        series : [
            {
                name:'类型',
                type:'pie',
                radius : ['40%', '70%'],
                itemStyle : {
                    normal : {
                        label : {
                            show : false
                        },
                        labelLine : {
                            show : false
                        }
                    },
                    emphasis : {
                        label : {
                            show : true,
                            position : 'center',
                            textStyle : {
                                fontSize : '20',
                                fontWeight : 'bold'
                            }
                        }
                    }
                },
                data:[
                    {value:335, name:'高频'},
                    {value:510, name:'中频'},
                    {value:234, name:'低频'},
                    // {value:135, name:'学生校车'}

                ]
            }
        ]
    };

    myChart.setOption(option);
    window.addEventListener('resize', function () {myChart.resize();})

}
function char2() {

    var myChart = echarts.init($("#char2")[0]);

    option = {
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {show:'true',borderWidth:'0'},
        legend: {
            data:['非常满意', '满意','一般','不满意'],
            textStyle : {
                color : '#ffffff',

            }
        },

        calculable :false,
        xAxis : [
            {
                type : 'value',
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#fff'
                    }
                },
                splitLine:{
                    lineStyle:{
                        color:['#f2f2f2'],
                        width:0,
                        type:'solid'
                    }
                }

            }
        ],
        yAxis : [
            {
                type : 'category',
                data : ['可靠性','耐用性','功能性','美观性'],
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#fff'
                    }
                },
                splitLine:{
                    lineStyle:{
                        width:0,
                        type:'solid'
                    }
                }
            }
        ],
        series : [
            {
                name:'非常满意',
                type:'bar',
                stack: '总量',
                itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
                data:[320, 302, 301, 334]
            },
            {
                name:'满意',
                type:'bar',
                stack: '总量',
                itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
                data:[120, 132, 101, 134]
            },
            {
                name:'一般',
                type:'bar',
                stack: '总量',
                itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
                data:[220, 182, 191, 234]
            },
            {
                name:'不满意',
                type:'bar',
                stack: '总量',
                itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
                data:[150, 212, 201, 154]
            }

        ]
    };

    myChart.setOption(option);
    window.addEventListener('resize', function () {myChart.resize();})

}
function char3() {

    var myChart = echarts.init($("#char3")[0]);

    option = {
        legend: {
            data:['重复购买次数'],
            textStyle : {
                color : '#ffffff',

            }
        },
        grid: {show:'true',borderWidth:'0'},

        calculable : false,
        tooltip : {
            trigger: 'axis',
            formatter: "购买人数 : <br/>{b} : {c}"
        },
        xAxis : [
            {
                type : 'value',
                axisLabel : {
                    formatter: '{value}',
                    textStyle: {
                        color: '#fff'
                    }
                },

                splitLine:{
                    lineStyle:{
                        width:0,
                        type:'solid'
                    }
                }
            }
        ],
        yAxis : [
            {
                type : 'category',
                axisLine : {onZero: false},
                axisLabel : {
                    formatter: '{value}次',
                    textStyle: {
                        color: '#fff'
                    }
                },
                splitLine:{
                    lineStyle:{
                        width:0,
                        type:'solid'
                    }
                },
                boundaryGap : false,
                data : ['0', '100', '200', '300', '400', '500', '600', '700', '800']
            }
        ],
        series : [
            {
                name:'重复购买次数',
                type:'line',
                smooth:true,
                itemStyle: {
                    normal: {
                        lineStyle: {
                            shadowColor : 'rgba(0,0,0,0.4)'
                        }
                    }
                },
                // data:[150, 0, 200, 450, 221, 250, 700, 550, 760]
                data:[760, 550, 700, 250, 221, 450, 200, 0, 150]
            }
        ]
    };

    myChart.setOption(option);
    window.addEventListener('resize', function () {myChart.resize();})

}
function char4() {

    var myChart = echarts.init($("#char4")[0]);

    option = {
        grid: {show:'true',borderWidth:'0'},
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            },

            formatter: function (params) {
                var tar = params[0];
                return tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value;
            }
        },

        xAxis : [
            {
                type : 'category',
                splitLine: {show:false},
                data : ['积极评论','消极评论','中性评论',],
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#fff'
                    }
                }

            }
        ],
        yAxis : [
            {
                type : 'value',
                splitLine: {show:false},
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#fff'
                    }
                }
            }
        ],
        series : [

            {
                name:'评论数量',
                type:'bar',
                stack: '总量',
                itemStyle : { normal: {label : {show: true, position: 'inside'}}},
                data:[2032, 492, 743, 200, 900, 300]
            }
        ]
    };

    myChart.setOption(option);
    window.addEventListener('resize', function () {myChart.resize();})

}

function char5(tagList) {

    var myChart = echarts.init($("#char5")[0]);

    option = {
        grid: {show:'true',borderWidth:'0'},
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            },

            formatter: function (params) {
                var tar = params[0];
                return tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value;
            }
        },

        xAxis : [
            {
                type : 'category',
                splitLine: {show:false},
                data : ['很满意','满意','较满意','一般', '不太满意','不满意','很不满意'],
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#fff'
                    }
                }

            }
        ],
        yAxis : [
            {
                type : 'value',
                splitLine: {show:false},
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#fff'
                    }
                }
            }
        ],
        series : [

            {
                name:'类型数量',
                type:'bar',
                stack: '总量',
                itemStyle : { normal: {label : {show: true, position: 'inside'}}},
                data:tagList
            }
        ]
    };

    myChart.setOption(option);
    window.addEventListener('resize', function () {myChart.resize();})

}

function char6() {

    var myChart = echarts.init($("#char6")[0]);

    option = {
        grid: {show:'true',borderWidth:'0'},
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            },

            formatter: function (params) {
                var tar = params[0];
                return tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value;
            }
        },

        xAxis : [
            {
                type : 'category',
                splitLine: {show:false},
                data : ['积极评论','消极评论','中性评论'],
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#fff'
                    }
                }

            }
        ],
        yAxis : [
            {
                type : 'value',
                splitLine: {show:false},
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#fff'
                    }
                }
            }
        ],
        series : [

            {
                name:'报警数量',
                type:'bar',
                stack: '总量',
                itemStyle : { normal: {label : {show: true, position: 'inside'}}},
                data:[2032, 492, 743, 333]
            }
        ]
    };

    myChart.setOption(option);
    window.addEventListener('resize', function () {myChart.resize();})

}

