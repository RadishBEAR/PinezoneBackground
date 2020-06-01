<template>
    <div id="dailyFather" >
        <div id="daily">
            <div id="titlePart"
                 style="
             width: 420px;
             height: 100px;
             margin-left: 30px;
             margin-right: 30px;
             padding-top: 80px;">
                <div style="background-color: #6d4c41;width: 37px;height: 5px"></div>
                <p style="font-size: 36px;color:#7b7b7b;text-align: left;padding-top: 0px;padding-bottom: 0px;margin-top: 5px;margin-bottom: 0px">
                    {{this.fullDay}}
                </p>
                <p style="font-family:fzFont;font-size: 36px;text-align: left;margin-top: 0px;color:#5d4037;">松果日报</p>
                <div style="margin-top: -117px;width: 200px;margin-left: -59px">
                    <p style="font-size: 14px;font-family:fzFont;color:#5d4037;text-align: right;margin-bottom: 0px">PINEZONE</p>
                    <p style="font-size: 14px;font-family:fzFont;margin-top: 0px;color:#5d4037;text-align: right;">DAILY</p>
                </div>

                <div style="width: 100%;height: 3px;background-color: #d9d9d9;margin-top: 58px">
                    <div style="width: 75px;height: 3px;background-color: #6d4c41;"></div>
                </div>

                <div style="margin-top: -135px;width: 200px;margin-left: 217px">
                    <p style="font-size: 20px;color:#838383;font-weight: 600;text-align: right;margin-bottom: 0px">
                        {{this.year+'/'+this.fullMonth+'/'+this.fullDay}}
                    </p>
                    <p style="font-size: 12px;font-family:fzFont;margin-top: 10px;color:#a5a7a6;text-align: right;margin-bottom: 0px">PRODUCED</p>
                    <p style="font-size: 12px;font-family:fzFont;margin-top: 0px;color:#a5a7a6;text-align: right;margin-bottom: 0px">BY</p>
                    <p style="font-size: 12px;font-family:fzFont;margin-top: 0px;color:#a5a7a6;text-align: right;margin-bottom: 0px">PINEZONE</p>
                    <p style="font-size: 12px;font-family:fzFont;margin-top: 0px;color:#a5a7a6;text-align: right;margin-bottom: 0px">COMMITTEE</p>
                </div>
                <div style="width: 60px;height: 2px;background-color: #d9d9d9;margin-top: -87px;margin-left: 250px"></div>

            </div>
            <div id="contentPart"
                 style="
             width: 420px;
             height: 650px;
             margin-left: 30px;
             margin-right: 30px;
             background-color: #ffffff;
             box-shadow: 0 0 25px #dddddd;
             float: left;
             margin-bottom: 20px;
             margin-top: 40px;">
                <div class="itemBlock leftBlock" style="margin-top: 50px">
                    <img src="../../../assets/银河系.png" style="width: 80px;height: 80px;margin-left: auto">
                    <p style="padding-top: 0px;margin-top: 0px;margin-bottom: 0px">累计注册人数</p>
                    <p style="padding-top: 0px;margin-top: 0px">· {{this.numberOfAllUsers}} ·</p>
                </div>
                <div class="itemBlock rightBlock" style="margin-top: 50px">
                    <img src="../../../assets/木星.png" style="width: 80px;height: 80px;margin-left: auto">
                    <p style="padding-top: 0px;margin-top: 0px;margin-bottom: 0px">活跃用户数</p>
                    <p style="padding-top: 0px;margin-top: 0px">· {{this.numberOfActivityUsers}} ·</p>
                </div>
                <div class="itemBlock leftBlock">
                    <img src="../../../assets/行星.png" style="width: 80px;height: 80px;margin-left: auto">
                    <p style="padding-top: 0px;margin-top: 0px;margin-bottom: 0px">文章总数</p>
                    <p style="padding-top: 0px;margin-top: 0px">· {{this.numberOfArticles}} ·</p>
                </div>
                <div class="itemBlock rightBlock">
                    <img src="../../../assets/太阳.png" style="width: 80px;height: 80px;margin-left: auto">
                    <p style="padding-top: 0px;margin-top: 0px;margin-bottom: 0px">新增文章</p>
                    <p style="padding-top: 0px;margin-top: 0px">· {{this.numberOfNewArticles}} ·</p>
                </div>
                <div class="itemBlock leftBlock">
                        <img src="../../../assets/星星.png" style="width: 80px;height: 80px;margin-left: auto">
                        <p style="padding-top: 0px;margin-top: 0px;margin-bottom: 0px">用户活跃度</p>
                        <p style="padding-top: 0px;margin-top: 0px">· 5 ·</p>
                </div>
                <div class="itemBlock rightBlock">
                        <img src="../../../assets/月球.png" style="width: 80px;height: 80px;margin-left: auto">
                        <p style="padding-top: 0px;margin-top: 0px;margin-bottom: 0px">今日阅读量</p>
                        <p style="padding-top: 0px;margin-top: 0px">· {{this.readingQuantity}} ·</p>
                </div>
            </div>

            <div>
                <p style="color: #5d4037;font-weight: 500;font-family:fzFont;padding-top: 20px">
                    {{'· '+this.year+'年'+this.month+'月'+this.day+'日 ·'}}
                </p>
            </div>

        </div>
    </div>

</template>

<script>
    import global from '../../../tools/global'
    import axios from 'axios'
    export default {
        name: "daily",
        data(){
            return{
                date:'',    // 用于作请求参数
                fullDate:'',
                year:'',
                month:'',
                day:'',
                fullMonth:'',
                fullDay:'',
                numberOfAllUsers:'',
                numberOfActivityUsers:'',
                numberOfArticles:0,
                numberOfNewArticles:0,
                readingQuantity:0
            }
        },
        methods:{
            getUserActivity:function () {
                var URL=global.getAPIurl()+'/v1/statistics/articles/active-users';
                // global.getAPIurl()返回的是服务器的地址，加上接口后缀就是完整的接口地址了
                var that=this;
                axios.get(URL).then(function (res) {
                    that.numberOfActivityUsers=Math.round(that.numberOfAllUsers*res.data);
                    }
                ).catch(function (error) {
                    console.log(error)
                })
            },
            getNumberOfUsers:function () {
                var URL=global.getAPIurl()+'/v1/statistics/articles/sex-radio';
                // eslint-disable-next-line no-unused-vars
                var that=this;
                axios.get(URL).then(function (res) {
                        that.numberOfAllUsers=res.data[0]['num']+res.data[1]['num'];
                        that.getUserActivity();
                    }
                ).catch(function (error) {
                    console.log(error)
                })
            },
            getTheDate:function () {
                let yy = new Date().getFullYear();
                this.year=yy;
                let mm = new Date().getMonth() + 1;
                this.month=mm;
                if(mm<10){
                    this.fullMonth='0'+mm;
                }
                else{
                    this.fullMonth=mm;
                }
                let dd = new Date().getDate();
                this.day=dd;
                if(dd<10){
                    this.fullDay='0'+dd;
                }
                else{
                    this.fullDay=dd;
                }
                this.date=this.year+'-'+this.month+'-'+this.day;
                this.fullDate=this.year+'-'+this.fullMonth+'-'+this.fullDay;
            },
            getNumberOfAllKindsOfArticles(){
                var URL=global.getAPIurl()+'/v1/statistics/articles/proportion';
                // global.getAPIurl()返回的是服务器的地址，加上接口后缀就是完整的接口地址了
                // eslint-disable-next-line no-unused-vars
                var that=this;
                axios.get(URL).then(function (res) {
                        for(var index in res.data){
                            that.numberOfArticles+=res.data[index]['num'];
                        }
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
            getNumberOfNewArticles:function () {
                let yy = new Date().getFullYear();
                let mm = new Date().getMonth() + 1;
                if(mm<10){
                    mm='0'+mm;
                }
                let dd = new Date().getDate();
                var date=yy + "-" + mm + "-" + dd;
                var URL=global.getAPIurl()+'/v1/statistics/articles/new';
                // eslint-disable-next-line no-unused-vars
                var that=this;
                // eslint-disable-next-line no-unused-vars
                axios.get(URL).then(function (res) {
                            for(var i in res.data)
                            {

                                var index=res.data.length-i-1;
                                if(date==res.data[index]['date']){
                                    that.numberOfNewArticles=res.data[index]['num'];
                                    break;
                                }
                                else if(that.dateJudge(date,res.data[index]['date'])===0){
                                    break;
                                }
                            }
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
                    that.readingQuantity=res.data[res.data.length-1]['num'];
                    }
                ).catch(function (error) {
                    console.log(error)
                })
            },
        },
        mounted() {
            this.getTheDate();
            this.getNumberOfUsers();
            this.getNumberOfAllKindsOfArticles();
            this.getNumberOfNewArticles();
            this.getReadingQuantity();
        }
    }
</script>

<style scoped>
    #dailyFather{
        width: 480px;
        height: 998px;
        margin-left: 0px;
        margin-top: -30px;
    }
#daily{
    width: 480px;
    height: 958px;
    margin-left: 0px;
    margin-top: 0px;
}
@font-face {
    font-family: fzFont;
    src: url(../../../assets/fz.ttf)
}
#dailyFather>>>.vue-contextmenu-listWrapper{
    padding-left: 0px!important;
}
#dailyFather>>>.vue-contextmenuName-demo{
    padding-left: 0px!important;
}
    .itemBlock{
        width: 130px;
        height: 130px;
        margin-top: 30px;
        margin-bottom: 30px;
        float: left;
        font-family: fzFont;
        color: #5d4037;
    }
    .leftBlock{
        margin-left: 60px;
        margin-right: 20px;
    }
    .rightBlock{
        margin-left: 20px;
        margin-right: 60px;
    }
</style>
