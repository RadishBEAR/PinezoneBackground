<template>
    <div id="businessCard">
        <div style="width: 100%;height: 80px;">
            <div style="width: 60px;height: 60px;float: left">
                <img :src="this.headPortrait" style="width: 60px;height: 60px">
            </div>
            <div style="height: 60px;width: 70%;margin-left: 5px;float: left">
                <div style="height: 27px;width: 70%;float: top;margin-top: 7px;text-align: left">
                    <span style="color: #5d4037;margin-top: 5px;margin-left: 5px;">
                        {{this.author}}
                    </span>
                    <span style="color: #717171;margin-top: 0px;margin-left: 5px;">
                        {{this.sign}}
                    </span>
                </div>
                <div style="height: 05px;width: 80%;float: top;text-align: left">
                    <p style="margin-top: 5px;margin-left: 5px">
                        {{this.comment}}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "businessCard",
        props:{
            sign:String,
            author:String,
            headPortrait:String,
            comment:String
        }
    }
</script>

<style scoped>
    #announcementCard{
        width: 70%;
        margin-left: 50px;
        margin-top: 30px;
    }
</style>
