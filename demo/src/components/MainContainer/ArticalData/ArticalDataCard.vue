<template>
    <div id="articaDataCard">
        <div style="width: 100%;height: 30px;">
            <p style="color: #5d4037;margin-top: 20px;margin-left: 5px;font-size: 18px">
                {{"文章名："+this.articalName1}}
            </p>
        </div>
        <div style="width: 100%;height: 30px;">
            <p style="color: #5d4037;margin-top: 25px;margin-left: 5px;font-size: 18px">
                {{"文章名："+this.articalName2}}
            </p>
        </div>
        <div style="width: 100%;height: 30px;">
            <p style="color: #5d4037;margin-top: 25px;margin-left: 5px;font-size: 18px">
                {{"文章名："+this.articalName3}}
            </p>
        </div>
        <div style="width: 100%;height: 30px;">
            <p style="color: #5d4037;margin-top: 25px;margin-left: 5px;font-size: 18px">
                {{"文章名："+this.articalName4}}
            </p>
        </div>
        <div style="width: 100%;height: 30px;">
            <p style="color: #5d4037;margin-top: 25px;margin-left: 5px;font-size: 18px">
                {{"文章名："+this.articalName5}}
            </p>
        </div>
        <div style="width: 100%;height: 30px;">
            <p style="color: #5d4037;margin-top: 25px;margin-left: 5px;font-size: 18px">
                {{"文章名："+this.articalName6}}
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ArticalDataCard",
        props:{
            articalName1: String,
            articalName2: String,
            articalName3: String,
            articalName4: String,
            articalName5: String,
            articalName6: String,
        }
    }
</script>>

<style scoped>
    #articalDataCard{
        width: 70%;
        margin-left: 50px;
        margin-top: 50px;
    }
</style>
