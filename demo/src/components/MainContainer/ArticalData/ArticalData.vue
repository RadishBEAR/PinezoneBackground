<template>
    <div id="articalData">
        <div id="diaryReadingNum">
            <linegraph id="linegraph1" :data="option" style="height:350px;"></linegraph>
        </div>
        <div id="articalScale">
            <p
                    style="text-align: left;
                margin-top: 0;
                margin-bottom: 15px;
                padding-top: 30px;
                padding-left: 20px;
                color: #000000;
                font-size: 18px;
                font-weight: 600;">
                各类文章占比
            </p>
            <div id="pieGraph">
                <linegraph id="piegraph" :data="option3" style="height:300px"></linegraph>
            </div>
        </div>
        <div id="diaryArticalNum">
            <linegraph id="linegraph2" :data="option2" style="height:350px"></linegraph>
        </div>
        <div id="highReportArtical">
            <p
                    style="text-align: left;
                margin-top: 0;
                margin-bottom: 15px;
                padding-top: 30px;
                padding-left: 40px;
                color: #000000;
                font-size: 18px;
                font-weight: 600;">
                高举报数文章
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
                        left: '40px',
                        textStyle: {
                            fontSize: 18,
                            align: 'center',
                            lineHeight: 70
                        }
                    },
                    xAxis: {
                        type: 'category',
                        name: '日期',
                        data: [],
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
                        }
                    },
                    yAxis: {
                        name: '数量',
                        type: 'value',
                        nameTextStyle: {
                            color: '#A1A1A1',
                            fontSize: 17
                        },
                        axisLabel: {
                            show: true,
                            textStyle: {
                                color: '#A1A1A1',
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
                        data: [],
                        type: 'line',
                        smooth: true,  //true 为平滑曲线，false为直线
                        lineStyle: {
                            normal: {
                                width: 2,
                                color: {
                                    type: 'linear',
                                    colorStops: [{
                                        offset: 0,
                                        color: '#ff847c'
                                    },{
                                        offset: 1,
                                        color: '#e84a5f'
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
                        left: '40px',
                        textStyle: {
                            fontSize: 18,
                            align: 'center',
                            lineHeight: 70
                        }
                    },
                    xAxis: {
                        type: 'category',
                        name: '日期',
                        data: [],
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
                        }
                    },
                    yAxis: {
                        name: '数量',
                        type: 'value',
                        nameTextStyle: {
                            color: '#A1A1A1',
                            fontSize: 17
                        },
                        axisLabel: {
                            show: true,
                            textStyle: {
                                color: '#A1A1A1',
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
                        data: [],
                        type: 'line',
                        smooth: true,  //true 为平滑曲线，false为直线
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
                option3:{
                    tooltip: {
                        trigger: 'item',
                        formatter: '{a} <br/>{b}: {c} ({d}%)'
                    },
                    legend: {
                        orient: 'vertical',
                        top:'50%',
                        x: 'left',
                        left : '20px',
                        data: ['食堂',  '玩吧', '探店', '自习室','健身房']
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
                                    fontSize: '25',
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
                articlesNames:[]
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
            },
            getNumberOfNewArticles:function () {
                let yy = new Date().getFullYear();
                let mm = new Date().getMonth() + 1;
                let dd = new Date().getDate();
                var date=yy + "-" + mm + "-" + dd;
                var daysToShow=30; // 显示多久
                var URL=global.getAPIurl()+'/v1/statistics/articles/new';
                // eslint-disable-next-line no-unused-vars
                var that=this;
                // eslint-disable-next-line no-unused-vars
                axios.get(URL).then(function (res) {
                        var begin=0;
                        var index=res.data.length-1;
                        var ListOfDate=[];
                        var ListOfData=[];
                        while(begin<=daysToShow){
                            var myDate=that.dateCalculation(date,-1*begin);
                            // eslint-disable-next-line no-constant-condition
                            while(index>=0){
                                if(myDate==res.data[index]['date']){
                                    ListOfDate.push(res.data[index]['num']);
                                    break;
                                }
                                if(that.dateJudge(myDate,res.data[index]['date'])===1){
                                    index--;
                                }
                                else if(that.dateJudge(myDate,res.data[index]['date'])===0){
                                    ListOfDate.push(0);
                                    break;
                                }
                            }
                            ListOfData.push(myDate);
                            begin++;
                        }
                        index=ListOfDate.length-1;
                        while (index>=0)
                        {
                            that.option2.series.data.push(ListOfDate[index]);
                            that.option2.xAxis.data.push(ListOfData[index]);
                            index--;
                        }
                        that.chart = that.$echarts.init(document.getElementById('linegraph2'));
                        that.chart.setOption(that.option2);
                    }
                ).catch(function (error) {
                    console.log(error)
                })
            },
            getReadingQuantity:function () {
                let yy = new Date().getFullYear();
                let mm = new Date().getMonth() + 1;
                let dd = new Date().getDate();
                var end=yy + "-" + mm + "-" + dd;
                var daysToShow=15; // 显示多久
                var start=this.dateCalculation(end,-1*daysToShow);
                var URL=global.getAPIurl()+'/v1/statistics/articleReadNum?start='+start+'&end='+end;
                // eslint-disable-next-line no-unused-vars
                var that=this;
                // eslint-disable-next-line no-unused-vars
                axios.get(URL).then(function (res) {
                        for (var index in res.data){
                            that.option.series.data.push(res.data[index]['num']);
                            that.option.xAxis.data.push(res.data[index]['date']);
                        }
                        that.chart = that.$echarts.init(document.getElementById('linegraph1'));
                        that.chart.setOption(that.option);
                    }
                ).catch(function (error) {
                    console.log(error)
                })
            },
            dateCalculation:function (date,days) {
                // 时间计算函数
                var d=new Date(date);
                d.setDate(d.getDate()+days);
                var m=d.getMonth()+1;
                if(m<10){
                    m='0'+m;
                }
                return d.getFullYear()+'-'+m+'-'+d.getDate();
            },
            dateJudge:function (date0,date1) {
                // date0=2020.5.1，date1=2020.5.19，返回1
                var d0=new Date(date0);
                var d1=new Date(date1);
                if(d0.getFullYear()<d1.getFullYear()){
                    return 1;
                }
                if(d0.getMonth()<d1.getMonth()){
                    return 1;
                }
                if(d0.getDate()<d1.getDate()){
                    return 1;
                }
                return 0;
            },
            getHighAlarmArticles:function () {

                var URL=global.getAPIurl()+'/v1/statistics/articles/reported-articles-list';
                // eslint-disable-next-line no-unused-vars
                var that=this;
                axios.get(URL).then(function (res) {
                        console.log(res.data);
                        for (var index in res.data){
                            var item={
                                num: res.data[index]['num'],
                                aid: res.data[index]['aid'],
                                name:res.data[index]['aid'],
                                uid:res.data[index]['aid']
                            };
                            that.articlesNames.push(item);
                            that.getArticleInfo(index,res.data[index]['aid']);
                        }
                    }
                ).catch(function (error) {
                    console.log(error)
                })

            },
            getArticleInfo:function (index,id) {

                var URL=global.getAPIurl()+'/v1/article'+'?aid='+id+'&uid=5001';
                // eslint-disable-next-line no-unused-vars
                var that=this;
                axios.get(URL).then(function (res) {
                        that.articlesNames[index]['name']=res.data['title'];
                        that.articlesNames[index]['aid']=res.data['uid'];

                    }
                ).catch(function (error) {
                    console.log(error)
                })

            }
        },
        mounted() {
            this.getNumberOfAllKindsOfArticles();
            this.getNumberOfNewArticles();
            this.getReadingQuantity();
            this.getHighAlarmArticles();
        }
    }
</script>

<style scoped>
    #articalData{
        width: 100%;
        height: 100%;
        overflow: hidden;
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
