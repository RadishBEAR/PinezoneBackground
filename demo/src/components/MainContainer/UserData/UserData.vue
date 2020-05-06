<template>
    <div id="userData">
        <div id="userActiveScale">
            <p
                style="text-align: left;
                margin-top: 0;
                margin-bottom: 15px;
                padding-top: 30px;
                padding-left: 50px;
                color: #000000;
                font-size: 20px;
                font-weight: 600;">
                活跃用户占比
            </p>
            <div id="pieGraph">    
                <linegraph :id="'piegraph'" :data="option" style="height:350px"></linegraph>
            </div>
        </div>
        <div id="userSexRatio">
            <p
                style="text-align: left;
                margin-top: 0;
                margin-bottom: 15px;
                padding-top: 30px;
                padding-left: 50px;
                color: #000000;
                font-size: 20px;
                font-weight: 600;">
                用户性别比例
            </p>
            <div id="pieGraph2">    
                <linegraph :id="'piegraph2'" :data="option2" style="height:350px"></linegraph>
            </div>
        </div>
        <div id="userActiveTime">
            <div id="activeTimeGraph">
                <linegraph :id="'linegraph'" :data="option3" style="height:350px"></linegraph>
            </div>
            <div id="activeTimeData">
                <UserDataCard
                    weeklyPageView="573" 
                    monthlyPageView="2653"
                    weeklyRegistNum="53"
                    totalRegistNum="1583"
                    weeklyActiveNum="87"
                    monthlyActiveNum="98"
                ></UserDataCard> 
            </div>
        </div>
        <div id="userLiveness">
            <linegraph :id="'linegraph1'" :data="option4" style="height:350px;"></linegraph>
        </div>
        
        <div id="userLivenessRank">
            <p
                style="text-align: left;
                margin-top: 0;
                margin-bottom: 15px;
                padding-top: 30px;
                padding-left: 50px;
                color: #000000;
                font-size: 18px;
                font-weight: 600;">
                活跃用户Top8
            </p>
            <UserLivenessRankCard
                activeUserTop1="苯甲醚"
                activeUserTop2="爱吃萝卜的熊"
                activeUserTop3="提拉米猪"
                activeUserTop4="伏特加熊"
                activeUserTop5="沐风"
                activeUserTop6="笑歌"
                activeUserTop7="方鸿渐"
                activeUserTop8="大白鹅"
            ></UserLivenessRankCard>
            
        </div>  
    </div>
</template>
 
<script>
    import linegraph from '../UserData/linegraph.vue'
    import UserDataCard from '../UserData/UserDataCard.vue'
    import UserLivenessRankCard from '../UserData/UserLivenessRankCard.vue'
    export default {
        name: "UserData",
        data(){
            return{
                option:{
                    tooltip: {
                        trigger: 'item',
                        formatter: '{a} <br/>{b}: {c} ({d}%)'
                    },
                    series: [
                        {
                            name: '活跃用户占比',
                            type: 'pie',
                            radius: ['40%', '60%'],
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
                                {value: 335, name: '活跃'},
                                {value: 310, name: '不活跃'}
                            ],
                            color: ['#9ACD32','#A1A1A1'],
                        }
                    ]
                },
                option2:{
                    tooltip: {
                        trigger: 'item',
                        formatter: '{a} <br/>{b}: {c} ({d}%)'
                    },
                    series: [
                        {
                            name: '用户性别比例',
                            type: 'pie',
                            radius: ['40%', '60%'],
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
                                {value: 500, name: '男性'},
                                {value: 310, name: '女性'}
                            ],
                            color: ['#00B2EE','#FF83FA'],
                        }
                    ]
                },
                option3:{
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
                    title:{
                        text: '用户活跃时间段',
                        left: 'left',
                        textStyle: {
                            fontSize: 22,
                            align: 'center',
                            lineHeight: 60
                        }
                    },
                    grid: {
                        top: '30%',
                        left: '10%',
                        right: '10%',
                        bottom: '10%',
                        containLabel: true
                    },
                    xAxis: {
                        type: 'category',
                        name: '时间段',
                        data: ['0~4', '5~8', '9~12', '13~16', '17~20', '21~24']
                    },
                    yAxis: {
                        type: 'value',
                        name: '数量'
                    },
                    series: [{
                        data: [120, 200, 150, 80, 70, 110],
                        type: 'bar',
                        barWidth: '50%',
                        itemStyle:{
                            normal: {
                                color: '#5CACEE'
                            }
                        }
                       
                    }]
                },
                option4:{
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
                        text: '用户活跃度',
                        left: 'left',
                        textStyle: {
                            fontSize: 22,
                            align: 'center',
                            lineHeight: 60
                        }
                    },
                    grid: {
                        top: '25%',
                        left: '5%',
                        right: '10%',
                        bottom: '5%',
                        containLabel: true
                    },
                    xAxis: {
                        boundaryGap: false,
                        axisTick:{
                            show:false
                        },
                        type: 'category',
                        name: '日期',
                        nameTextStyle: {
                            color: '#D9D9D9',
                            fontSize: 17
                        },
                        axisLabel: {
                            show: true,
                            textStyle: {
                                color: '#D9D9D9',
                                // fontSize: '38',//字体大小
                            },
                            fontSize: 12,//字体大小
                        },
                        axisLine: {       //坐标轴轴线
                            lineStyle: {           //坐标轴轴线颜色
                            color: '#D9D9D9'
                            }
                        },
                        data: ['5.1', '5.2', '5.3', '5.4', '5.5', '5.6', '5.7','5.8','5.9','5.10','5.11','5.12','5.13','5.14','5.15'],
                        splitLine:{
                            show:true
                        
                        }
                    },
                    yAxis: {
                        type: 'value',
                        name: '数量',
                        nameTextStyle: {
                            color: '#D9D9D9',
                            fontSize: 17 
                        },
                        splitLine:{
                            show:true
                        },
                        axisLabel: {
                            show: true,
                            textStyle: {
                                color: '#D9D9D9',
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
                    
                    series: {
                        data: [18, 20, 25,23,30,35,45,20,18,26,40,45,38,35,30],
                        type: 'line',
                        barWidth:30,
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
          
            
        }
    }, 
    components:{
        linegraph,
        UserDataCard,
        UserLivenessRankCard
    }
}
</script>
 
<style scoped>
#userData{
    width: 100%;
    height: 100%;
}
#userActiveScale{
    width: 20%;
    height: 45%;
    margin-left: 1%;
    margin-top: 1%;
    box-shadow: 1px 1px 3px #888888;
    float: left;
}
#userSexRatio{
    width: 20%;
    height: 45%;
    margin-left: 1%;
    margin-top: 1%;
    box-shadow: 1px 1px 3px #888888;
    float: left;
}
#userActiveTime{
    width: 55%;
    height: 45%;
    margin-left: 1%;
    margin-top: 1%;
    float: left;
    box-shadow: 1px 1px 3px #888888;
} 
    #activeTimeGraph{
        width:60%;
        height:100%;
        float:left;
    }
    #activeTimeData{
        width:35%;
        height:100%;
        float:left;
    }
       
#userLiveness{
    width: 75%;
    height: 45%;
    margin-left: 1%;
    margin-top: 1%;
    box-shadow: 1px 1px 3px #888888;
    float: left;
}
 #userLivenessRank{
    width: 21%;
    height: 45%;
    margin-left: 1%;
    margin-top: 1%;
    box-shadow: 1px 1px 3px #888888;
    float: left;
}
</style>