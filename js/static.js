/**
 * Created by 30947 on 2018/7/18.
 */

$(function(){
    char1();
    char2();
    char3();
    char4();
    char5();
    char6();
    // char7();
    // char8();
    // char9();
    // char10();
    // char11();
    // char12();
    // char13();
    // char14();
})

//统计分析图
function char1() {

    var myChart = echarts.init($("#char1")[0]);
    $.ajax({
        url: "http://localhost:8080/participation/getFreTimes",
        type: "GET",
        success: function(fre_times){
            console.log("请求fre_times成功", fre_times)
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
                // data:[
                //     {value:335, name:'高频'},
                //     {value:510, name:'中频'},
                //     {value:234, name:'低频'},
                // ]
                data: [
                    {value:fre_times.data.freTimes[2], name:'高频'},
                    {value:fre_times.data.freTimes[1], name:'中频'},
                    {value:fre_times.data.freTimes[0], name:'低频'}
                ]
            }
        ]
    };

    myChart.setOption(option);
    window.addEventListener('resize', function () {myChart.resize();})
    },
    error: function(jqXHR, textStatus, errorThrown) {
        console.error("请求失败:", textStatus, errorThrown);
    }
    });
}

function char2() {
    var myChart = echarts.init($("#char2")[0]);
    $.ajax({
        url: "http://localhost:8080/quality/getCharData",
        type: "GET",
        success: function(tag_data){
            console.log("请求成功", tag_data)
    option = {
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {show:'true',borderWidth:'0'},
        legend: {
            data:['好', '较好','一般','有点差','较差','差'],
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
                data : ['质量','价格','便利','服务'],
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
                name:'好',
                type:'bar',
                stack: '总量',
                itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
                data:tag_data.data.tagList[5]
            },
            {
                name:'较好',
                type:'bar',
                stack: '总量',
                itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
                data:tag_data.data.tagList[4]
            },
            {
                name:'一般',
                type:'bar',
                stack: '总量',
                itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
                data:tag_data.data.tagList[3]
            },
            {
                name:'有点差',
                type:'bar',
                stack: '总量',
                itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
                data:tag_data.data.tagList[2]
            },
            {
                name:'较差',
                type:'bar',
                stack: '总量',
                itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
                data:tag_data.data.tagList[1]
            },
            {
                name:'差',
                type:'bar',
                stack: '总量',
                itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
                data:tag_data.data.tagList[0]
            }

        ]
    };

    myChart.setOption(option);
    window.addEventListener('resize', function () {myChart.resize();})

    },
    error: function(jqXHR, textStatus, errorThrown) {
        console.error("请求失败:", textStatus, errorThrown);
    }
    });
}

/*function char2(){
    var myChart = echarts.init($("#char2")[0]);
    $.ajax({
        url: "http://localhost:8080/quality/getmanyiList",
        type: "GET",
        success: function(manyi_data){
            console.log("请求manyi_data成功", manyi_data)
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
                data : ['很不满意','不满意','不太满意','一般','较满意', '满意', '很满意'],
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
                name:'比例',
                type:'bar',
                stack: '总量',
                itemStyle : { normal: {label : {show: true, position: 'inside'}}},
                data:manyi_data.data.manyiList
            }
        ]
    };

    myChart.setOption(option);
    window.addEventListener('resize', function () {myChart.resize();})
    },
    error: function(jqXHR, textStatus, errorThrown) {
        console.error("请求失败:", textStatus, errorThrown);
    }
    });
}*/

function char3() {
    var myChart = echarts.init($("#char3")[0]);
    $.ajax({
        url: "http://localhost:8080/loyalty/getAbilityList",
        type: "GET",
        success: function(abilityList){
            console.log("请求abilityList成功", abilityList)
            option = {
                legend: {
                    data:['能力人次'],
                    textStyle : {
                        color : '#ffffff',
        
                    }
                },
                grid: {show:'true',borderWidth:'0'},
        
                calculable : false,
                tooltip : {
                    trigger: 'axis',
                    formatter: "评级 : <br/>{b} : {c}"
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
                        },
                        boundaryGap : false,
                        data : ['差','较差','有点差','一般','较好','好']
                    }
                ],
                series : [
                    {
                        name:'能力人次',
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
                        data: abilityList.data.abilityList
                    }
                ]
            };
        
            myChart.setOption(option);
            window.addEventListener('resize', function () {myChart.resize();})
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.error("请求buytimes失败:", textStatus, errorThrown);
        }
    });
}

/*function char3(){
    var myChart = echarts.init($("#char3")[0]);
    $.ajax({
        url: "http://localhost:8080/loyalty/getAbilityList",
        type: "GET",
        success: function(abilityList_data){
            console.log("请求abilityList_data成功", abilityList_data)
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
                data : ['强','较强','较弱','弱','未知'],
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
                name:'比例',
                type:'bar',
                stack: '总量',
                itemStyle : { normal: {label : {show: true, position: 'inside'}}},
                data: abilityList_data.data.abilityList
            }
        ]
    };

    myChart.setOption(option);
    window.addEventListener('resize', function () {myChart.resize();})
    },
    error: function(jqXHR, textStatus, errorThrown) {
        console.error("请求失败:", textStatus, errorThrown);
    }
    });
    
}*/

function char4() {

    var myChart = echarts.init($("#char4")[0]);
    $.ajax({
        url: "http://localhost:8080/feedback/getCommentNum",
        type: "GET",
        success: function(feedback_data){
            console.log("请求feedback_data成功", feedback_data)
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
                data : ['消极评论','中性评论','积极评论'],
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
                data:feedback_data.data.commentNum
            }
        ]
    };

    myChart.setOption(option);
    window.addEventListener('resize', function () {myChart.resize();})
    },
    error: function(jqXHR, textStatus, errorThrown) {
        console.error("请求失败:", textStatus, errorThrown);
    }
    })
}

function char5() {

    var myChart = echarts.init($("#char5")[0]);
    $.ajax({
        url: "http://localhost:8080/price/getEva",
        type: "GET",
        success: function(eva_data){
            console.log("请求成功", eva_data)
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
                data : ['差','较差','一般','较好','好'],
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
                name:'比例',
                type:'bar',
                stack: '总量',
                itemStyle : { normal: {label : {show: true, position: 'inside'}}},
                data: eva_data.data.eva
            }
        ]
    };

    myChart.setOption(option);
    window.addEventListener('resize', function () {myChart.resize();})
    },
    error: function(jqXHR, textStatus, errorThrown) {
        console.error("请求失败:", textStatus, errorThrown);
    }
    });
}

/*function char6() {
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
*/
function char6() {

    var myChart = echarts.init($("#char6")[0]);
    $.ajax({
        url: "http://localhost:8080/exp/getNum",
        type: "GET",
        success: function(num_data){
            console.log("请求num_data成功", num_data)
    option = {
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {show:'true',borderWidth:'0'},
        legend: {
            data:['满意','一般','差'],
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
                data : ['环保','慈善'],
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
                name:'满意',
                type:'bar',
                stack: '总量',
                itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
                data:num_data.data.num[2]
            },
            {
                name:'一般',
                type:'bar',
                stack: '总量',
                itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
                data:num_data.data.num[1]
            },
            {
                name:'差',
                type:'bar',
                stack: '总量',
                itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
                data:num_data.data.num[0]
            }
        ]
    };
    myChart.setOption(option);
    window.addEventListener('resize', function () {myChart.resize();})
    },
    error: function(jqXHR, textStatus, errorThrown) {
        console.error("请求失败:", textStatus, errorThrown);
    }
    });
}