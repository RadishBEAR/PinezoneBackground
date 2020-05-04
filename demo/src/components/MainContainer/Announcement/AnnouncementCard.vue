<template>
    <div id="announcementCard">
        <div style="width: 100%;height: 60px;">
            <div style="width: 60px;height: 60px;float: left">
                <img :src="this.headPortrait" style="width: 60px;height: 60px">
            </div>
            <div style="height: 60px;width: 80%;float: left">
                <div style="height: 27px;width: 70%;float: top;text-align: left">
                    <span style="color: #5d4037;margin-top: 5px;margin-left: 5px;">
                        {{"管理员"+this.author}}
                    </span>
                    <span style="margin-top: 0;margin-bottom:0;">{{" - "+this.title}}</span>
                </div>
                <div style="height: 05px;width: 80%;float: top;text-align: left">
                    <p style="color: #717171;margin-top: 0px;margin-left: 5px">
                        {{"于"+this.releaseTime+"发布"}}
                    </p>
                </div>
            </div>
        </div>
        <div style="width: 80%;
        height: 70px;
        margin-left: 70px;
        font-size: 18px;
        text-align: left">
            <p style="margin-top: 5px">{{this.message}}</p>
        </div>

    </div>
</template>

<script>
    export default {
        name: "announcementCard",
        props:{
            message:String,
            releaseTime:String,
            author:String,
            headPortrait:String,
            title:String
        }
    }
</script>

<style scoped>
    #announcementCard{
        width: 80%;
        margin-left: 50px;
        margin-top: 30px;
    }
</style>
