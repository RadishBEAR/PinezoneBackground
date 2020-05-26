<template>
    <div id="articalData">
        <div id="diaryReadingNum">
                <linegraph :id="'linegraph1'" :data="option" style="height:350px;"></linegraph>
        </div>
        <div id="articalScale">
            <p
                style="text-align: left;
                margin-top: 0;
                margin-bottom: 15px;
                padding-top: 30px;
                padding-left: 50px;
                color: #000000;
                font-size: 20px;
                font-weight: 600;">
                各类文章占比
            </p>
            <div id="pieGraph">
                <linegraph id="piegraph" :data="option3" style="height:350px"></linegraph>
            </div>
        </div>
        <div id="diaryArticalNum">
                <linegraph :id="'linegraph2'" :data="option2" style="height:350px"></linegraph>
        </div>
        <div id="highReportArtical">
            <p
                style="text-align: left;
                margin-top: 0;
                margin-bottom: 15px;
                padding-top: 30px;
                padding-left: 50px;
                color: #000000;
                font-size: 18px;
                font-weight: 600;">
                高举报率文章
            </p>
            <ArticalDataCard
                    :articalName="this.articlesNames"
            ></ArticalDataCard>
        </div>
    </div>
</template>

<script>
    import linegraph from '../ArticalData/linegraph.vue'
    import ArticalDataCard from '../ArticalData/ArticalDataCard'
    import global from '../../../tools/global'
    import axios from 'axios'
    export default {
        name: "ArticalData",
        data(){
            return{
            option:{
                tooltip: {
                    show: true ,
                    trigger: "axis",
                    axisPointer: {
                        type: "shadow",   //提示框类型
                        label: {       //坐标轴指示器的文本标签
                            show: true
                        }
                    }
                },
                title: {
                    text: '每日阅读量',
                    left: 'left',
                    textStyle: {
                        fontSize: 22,
                        align: 'center',
                        lineHeight: 60
                    }
                },
                xAxis: {
                    boundaryGap: false,
                    axisTick:{
                        show:false
                    },
                    type: 'category',
                    name: '日期',
                    nameTextStyle: {
                        color: '#FF7F50',
                        fontSize: 17
                    },
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#FFD700',
                            // fontSize: '38',//字体大小
                        },
                        fontSize: 12,//字体大小
                    },
                    axisLine: {       //坐标轴轴线
                        lineStyle: {           //坐标轴轴线颜色
                        color: '#FFD700'
                        }
                    },
                    data: ['5.1', '5.2', '5.3', '5.4', '5.5', '5.6', '5.7'],
                    splitLine:{
                        show:true,
                        lineStyle:{
                            color:'#FFF68F',
                            opacity:0.1
                        }
                    }
                },
                yAxis: {
                    type: 'value',
                    name: '数量',
                    nameTextStyle: {
                        color: '#FF7F50',
                        fontSize: 17
                    },
                    splitLine:{
                        show:false
                    },
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#FFD700',
                            // fontSize: '38',//字体大小
                        },
                        fontSize: 12,//字体大小
                    },
                    axisLine: {       //坐标轴轴线
                        lineStyle: {           //坐标轴轴线颜色
                        color: '#FFD700'
                        }
                    }
                },
                grid: {
                    top: '25%',
                    left: '5%',
                    right: '10%',
                    bottom: '5%',
                    containLabel: true
                },
                series: {
                    data: [600, 700, 300, 400, 1300, 1000, 1600],
                    type: 'line',
                    barWidth:30,
                    lineStyle: {
                        normal: {
                            width: 2,
                            color: {
                                type: 'linear',
                                colorStops: [{
                                    offset: 0,
                                    color: '#FFF68F'
                                },{
                                    offset: 1,
                                    color: '#FF3030'
                                }],
                                globalCoord:false
                            }
                        }
                    }
                }
            },
            option2:{
                tooltip: {
                    show: true ,
                    trigger: "axis",
                    axisPointer: {
                        type: "shadow",   //提示框类型
                        label: {       //坐标轴指示器的文本标签
                            show: true
                        }
                    }
                },
                title: {
                    text: '每日新增文章',
                    left: 'left',
                    textStyle: {
                        fontSize: 22,
                        align: 'center',
                        lineHeight: 60
                    }
                },
                xAxis: {
                    type: 'category',
                    name: '日期',
                    data: ['5.1', '5.2', '5.3', '5.4', '5.5', '5.6', '5.7'],
                    nameTextStyle: {
                        color: '#00BFFF',
                        fontSize: 17
                    },
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#A1A1A1',
                            // fontSize: '38',//字体大小
                        },
                        fontSize: 12,//字体大小
                    }
                },
                yAxis: {
                    name: '数量',
                    type: 'value',
                    nameTextStyle: {
                        color: '#00BFFF',
                        fontSize: 17
                    },
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#A1A1A1',
                            // fontSize: '38',//字体大小
                        },
                        fontSize: 12,//字体大小
                    }
                },
                grid: {
                    top: '25%',
                    left: '5%',
                    right: '10%',
                    bottom: '5%',
                    containLabel: true
                },
                series: {
                    data: [18, 35, 40, 20, 80, 100, 70],
                    type: 'line',
                    lineStyle: {
                        normal: {
                            width: 2,
                            color: {
                                type: 'linear',
                                colorStops: [{
                                    offset: 0,
                                    color: '#00FFFF'
                                },{
                                    offset: 1,
                                    color: '#0000EE'
                                }],
                                globalCoord:false
                            }
                        }
                    }
                }
            },
            option3:{
                tooltip: {
                    trigger: 'item',
                    formatter: '{a} <br/>{b}: {c} ({d}%)'
                },
                legend: {
                    orient: 'vertical',
                    top:'50%',
                    x: 'left',
                    left : '10',
                    data: ['食堂', '运动', '玩吧', '自习室', '探店']
                },
                series: [
                    {
                        name: '占比',
                        type: 'pie',
                        radius: ['50%', '70%'],
                        avoidLabelOverlap: false,
                        label: {
                            show: false,
                            position: 'center'
                        },
                        emphasis: {
                            label: {
                                show: true,
                                fontSize: '30',
                                fontWeight: 'bold'
                            }
                        },
                        labelLine: {
                            show: false
                        },
                        data: [
                            {value: 335, name: '食堂'},
                            {value: 310, name: '运动'},
                            {value: 234, name: '玩吧'},
                            {value: 135, name: '自习室'},
                            {value: 300, name: '探店'}
                        ],
                        color: ['#37a2da','#71f6f9','#ffdb5c','#ff9f7f','#e062ae'],
                    }
                ]
            },
                articlesNames:[
                    "震惊！福大食堂后厨竟有如此惊天大秘密！",
                    "生泪控诉学生街XXX店之卑劣营销",
                    "童叟无欺！不花钱还赚钱的夹娃娃店！",
                    "人神共愤！如此美味之片皮鸭竟然只卖2块钱？",
                    "喝了这杯奶茶，我哭了3天",
                    "我一开始也不信XX的奶茶能减肥"
                ]
        }
    },
    components:{
        linegraph,
        ArticalDataCard
    },
        methods:{
            getNumberOfAllKindsOfArticles(){
                var URL=global.getAPIurl()+'/v1/statistics/articles/proportion';
                // global.getAPIurl()返回的是服务器的地址，加上接口后缀就是完整的接口地址了
                // eslint-disable-next-line no-unused-vars
                var that=this;
                axios.get(URL).then(function (res) {
                        var nameOfTypes=['食堂','探店','玩吧','自习室','健身房'];
                        var list=[];
                        for(var index in res.data){
                            var item={
                                name:nameOfTypes[res.data[index]['cid']-1],
                                value:res.data[index]['num']
                            };
                            list.push(item);
                        }
                        that.option3.series[0].data=list;
                        that.chart = that.$echarts.init(document.getElementById('piegraph'));
                        that.chart.setOption(that.option3);
                    }
                ).catch(function (error) {
                    console.log(error)
                })
            }
        },
        mounted() {
            this.getNumberOfAllKindsOfArticles();
        }
    }
</script>

<style scoped>
#articalData{
    width: 100%;
    height: 100%;
}
#articalData>>>happy-scroll-content{
    display:block!important;
}
        #diaryReadingNum{
            width: 75%;
            height: 45%;
            margin-left: 1%;
            margin-top: 1%;
            float: left;
            box-shadow: 1px 1px 3px #888888;
        }

        #diaryArticalNum{
            width: 75%;
            height: 45%;
            margin-left: 1%;
            margin-top: 1%;
            float: left;
            box-shadow: 1px 1px 3px #888888;
        }

        #articalScale{

            width: 22%;
            height: 45%;
            margin-left: 1%;
            margin-top: 1%;
            box-shadow: 1px 1px 3px #888888;
            float: left;
        }
        #highReportArtical{
            width: 22%;
            height: 45%;
            margin-left: 1%;
            margin-top: 1%;
            box-shadow: 1px 1px 3px #888888;
            float: left;
        }


</style>
