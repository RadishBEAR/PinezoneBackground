<template>
    <div id="userDataCard">
        
            <div style="width: 100%;height: 30px;">
                <p style="color: #5d4037;margin-top: 10px;margin-left: 5px;font-size: 25px">
                    {{"周访问量："+this.weeklyPageView}}
                </p>
            </div>
            <div style="width: 100%;height: 30px;">
                <p style="color: #5d4037;margin-top: 10px;margin-left: 5px;font-size: 25px">
                    {{"月访问量: "+this.monthlyPageView}}
                </p>
            </div>
            <div style="width: 100%;height: 30px;">
                <p style="color: #5d4037;margin-top: 10px;margin-left: 5px;font-size: 25px">
                    {{"周注册用户数: "+this.weeklyRegistNum}}
                </p>
            </div>
            <div style="width: 100%;height: 30px;">
                <p style="color: #5d4037;margin-top: 10px;margin-left: 5px;font-size: 25px">
                    {{"累计注册用户数: "+this.totalRegistNum}}
                </p>
            </div>
            <div style="width: 100%;height: 30px;">
                <p style="color: #5d4037;margin-top: 10px;margin-left: 5px;font-size: 25px">        
                    {{"周活跃用户数: "+this.weeklyActiveNum}}
                </p>
            </div>
            <div style="width: 100%;height: 30px;">
                <p style="color: #5d4037;margin-top: 10px;margin-left: 5px;font-size: 25px">
                    {{"月活跃用户数: "+this.monthlyActiveNum}}
                </p>
            </div>
       
    </div>
</template>

<script>
    export default {
        name: "UserDataCard",
        props:{
            weeklyPageView: String,
            monthlyPageView: String,
            weeklyRegistNum: String,
            totalRegistNum: String,
            weeklyActiveNum: String,
            monthlyActiveNum: String,
        }
    }
</script>>

<style scoped>
    #userDataCard{
        width: 100%;
        margin-left: 0px;
        margin-top: 80px;
    }
</style>
