<template>
    <div id="userLivenessRankCard">
            <div style="width: 100%;height: 30px;">
                <p style="color: #5d4037;margin-top: 0px;margin-left: 5px;font-size: 25px">
                    {{"Top1: "+this.activeUserTop1}}
                </p>
            </div>
            <div style="width: 100%;height: 30px;">
                <p style="color: #5d4037;margin-top: 10px;margin-left: 5px;font-size: 20px">
                    {{"Top2: "+this.activeUserTop2}}
                </p>
            </div>
            <div style="width: 100%;height: 30px;">
                <p style="color: #5d4037;margin-top: 5px;margin-left: 5px;font-size: 20px">
                    {{"Top3: "+this.activeUserTop3}}
                </p>
            </div>
            <div style="width: 100%;height: 30px;">
                <p style="color: #5d4037;margin-top: 5px;margin-left: 5px;font-size: 20px">
                    {{"Top4: "+this.activeUserTop4}}
                </p>
            </div>
            <div style="width: 100%;height: 30px;">
                <p style="color: #5d4037;margin-top: 5px;margin-left: 5px;font-size: 20px">
                    {{"Top5: "+this.activeUserTop5}}
                </p>
            </div>
            <div style="width: 100%;height: 30px;">
                <p style="color: #5d4037;margin-top: 5px;margin-left: 5px;font-size: 20px">
                    {{"Top6: "+this.activeUserTop6}}
                </p>
            </div>
            <div style="width: 100%;height: 30px;">
                <p style="color: #5d4037;margin-top: 5px;margin-left: 5px;font-size: 20px">
                    {{"Top7: "+this.activeUserTop7}}
                </p>
            </div>
            <div style="width: 100%;height: 30px;">
                <p style="color: #5d4037;margin-top: 5px;margin-left: 5px;font-size: 20px">
                    {{"Top8: "+this.activeUserTop8}}
                </p>
            </div>
    </div>
</template>

<script>
    export default {
        name: "UserLivenessRankCard",
        props:{
            activeUserTop1: String,
            activeUserTop2: String,
            activeUserTop3: String,
            activeUserTop4: String,
            activeUserTop5: String,
            activeUserTop6: String,
            activeUserTop7: String,
            activeUserTop8: String,
        }
    }
</script>>

<style scoped>
    #userLivenessRankCard{
        width: 100%;
        margin-left: -50px;
        margin-top: 30px;
    }
</style>
