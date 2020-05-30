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
                <linegraph id="piegraph" :data="option" style="height:300px"></linegraph>
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
                <linegraph id="piegraph2" :data="option2" style="height:300px"></linegraph>
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
                padding-left: 40px;
                color: #000000;
                font-size: 18px;
                font-weight: 600;">
                活跃用户Top8
            </p>
            <UserLivenessRankCard
                :activeUserTop="this.activeUserTop"
            ></UserLivenessRankCard>

        </div>
    </div>
</template>

<script>
    import linegraph from '../UserData/linegraph.vue'
    import UserDataCard from '../UserData/UserDataCard.vue'
    import UserLivenessRankCard from '../UserData/UserLivenessRankCard.vue'
    import global from '../../../tools/global'
    import axios from 'axios'
    export default {
        name: "UserData",
        data(){
            return{
                option:{
                    tooltip: {
                        trigger: 'item',
                        formatter: '{a} <br/>{b}: {c} ({d}%)'
                    },
                    legend: {
                        orient: 'vertical',
                        top:'80%',
                        x: 'left',
                        left : '40px',
                        data: ['活跃用户','非活跃用户']
                    },
                    series: [
                        {
                            name: '活跃用户占比',
                            type: 'pie',
                            radius: ['50%', '70%'],
                            label: {
                                show: false,
                                position: 'center'
                            },
                            emphasis: {
                                label: {
                                    show: true,
                                    fontSize: '25',
                                    fontWeight: 'bold'
                                }
                            },
                            labelLine: {
                                show: false
                            },
                            data: [
                                {value: 335, name: '活跃用户'},
                                {value: 310, name: '非活跃用户'}
                            ],
                            color: ['#ff847c','#A1A1A1'],
                        }
                    ]
                },
                option2:{
                    tooltip: {
                        trigger: 'item',
                        formatter: '{a} <br/>{b}: {c} ({d}%)'
                    },
                    legend: {
                        orient: 'vertical',
                        top:'80%',
                        x: 'left',
                        left : '40px',
                        data: ['男','女']
                    },
                    series: [
                        {
                            name: '用户性别比例',
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
                            data: [],
                            color: ['#4d80e4','#e84a5f'],
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
                        left: '40px',
                        textStyle: {
                            fontSize: 18,
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
                        left: '40px',
                        textStyle: {
                            fontSize: 18,
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
                            color: '#A1A1A1',
                            fontSize: 17
                        },
                        axisLabel: {
                            show: true,
                            textStyle: {
                                color: '#A1A1A1',
                                // fontSize: '38',//字体大小
                            },
                            fontSize: 12,//字体大小
                        },
                        axisLine: {       //坐标轴轴线
                            lineStyle: {           //坐标轴轴线颜色
                            color: '#A1A1A1'
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
                            color: '#A1A1A1',
                            fontSize: 17
                        },
                        splitLine:{
                            show:true
                        },
                        axisLabel: {
                            show: true,
                            textStyle: {
                                color: '#A1A1A1',
                                // fontSize: '38',//字体大小
                            },
                            fontSize: 12,//字体大小
                        },
                        axisLine: {       //坐标轴轴线
                            lineStyle: {           //坐标轴轴线颜色
                            color: '#A1A1A1'
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
                                    color: '#6886c5'
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
                activeUserTop:[
                ],
                numberOfAllUsers:0
        }
    },
        components:{
            linegraph,
            UserDataCard,
            UserLivenessRankCard
        },
        methods:{
            getSexRatio:function () {
                var URL=global.getAPIurl()+'/v1/statistics/articles/sex-radio';
                // eslint-disable-next-line no-unused-vars
                var that=this;
                axios.get(URL).then(function (res) {
                    that.numberOfAllUsers=res.data[0]['num']+res.data[1]['num'];
                    var item=[
                        {value:res.data[1]['num'],name:res.data[1]['sex']},
                        {value:res.data[0]['num'],name:res.data[0]['sex']}
                    ];
                    that.option2.series[0].data=item;
                    that.chart = that.$echarts.init(document.getElementById('piegraph2'));
                    that.chart.setOption(that.option2);
                    }
                ).catch(function (error) {
                    console.log(error)
                })
            },
            getUserActivity:function () {
                var URL=global.getAPIurl()+'/v1/statistics/articles/active-users';
                // global.getAPIurl()返回的是服务器的地址，加上接口后缀就是完整的接口地址了
                var that=this;
                axios.get(URL).then(function (res) {
                        var list=[
                            {name: '活跃用户',value:Math.round(that.numberOfAllUsers*res.data)},
                            {name: '非活跃用户',value: Math.round(that.numberOfAllUsers*(1-res.data))}
                        ];
                        that.option.series[0].data=list;
                        that.chart = that.$echarts.init(document.getElementById('piegraph'));
                        that.chart.setOption(that.option);
                    }
                ).catch(function (error) {
                    console.log(error)
                })
            },
            getActiveUsers:function () {
                var URL=global.getAPIurl()+'/v1/statistics/articles/activity';
                // eslint-disable-next-line no-unused-vars
                var that=this;
                // eslint-disable-next-line no-unused-vars
                var numberToShow=9;
                axios.get(URL).then(function (res) {
                        for (var index in res.data){
                            var item={
                                uid:res.data[index]['uid'],
                                name:res.data[index]['uid'],
                                active: res.data[index]['active']
                            };
                            that.activeUserTop.push(item);
                        }
                        that.sort();
                        for (var index2 in that.activeUserTop){
                            that.getUserName(index2,that.activeUserTop[index2]['uid']);
                        }
                    }
                ).catch(function (error) {
                    console.log(error)
                })

            },
            getUserName:function(index,id){
                var URL=global.getAPIurl()+'/v1/user?id='+id;
                // eslint-disable-next-line no-unused-vars
                var that=this;
                axios.get(URL).then(function (res) {
                        that.activeUserTop[index]['name']=res.data['name'];
                    }
                ).catch(function (error) {
                    console.log(error)
                })
            },
            sort:function () {
                // 是简单排序算法
                for (var i0=0;i0<this.activeUserTop.length;i0++){
                    for (var i1=i0;i1<this.activeUserTop.length;i1++){
                        if(parseInt(this.activeUserTop[i0]['active']) < parseInt(this.activeUserTop[i1]['active'])){
                            let item=this.activeUserTop[i0];
                            this.activeUserTop[i0]=this.activeUserTop[i1];
                            this.activeUserTop[i1]=item;
                        }
                    }
                }
                var list=[];
                for (var i3=0;i3<9;i3++){
                    list.push(this.activeUserTop[i3]);
                }
                this.activeUserTop=list;
            },
        },
        mounted() {
            this.getSexRatio();
            this.getUserActivity();
            this.getActiveUsers();
        }
    }
</script>

<style scoped>
#userData{
    width: 100%;
    height: 100%;
    overflow: hidden;
}
#userActiveScale{
    width: 21%;
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
    width: 22%;
    height: 45%;
    margin-left: 1%;
    margin-top: 1%;
    box-shadow: 1px 1px 3px #888888;
    float: left;
}
</style>
