<template>
    <div style="float: right">
        <el-avatar icon="el-icon-user-solid"
                   style="margin-top: 10px;float: left;width: 30px;height: 30px;"
        />

        <div style="float: left;height: 50px;">
            <p id="userName">{{userName}}</p>
        </div>

        <div id="message">
            <el-badge :value="12" class="item" style="width: 25px;">
                <img src="../../../src/assets/message.png" style="height: 25px;width: 25px;margin-top: -5px;"/>
            </el-badge>
        </div>

        <div style="float: left;height: 50px;margin-top: 18px;margin-left: 30px">
            <img src="../../../src/assets/setting.png" style="height: 25px;width: 25px;margin-top: -5px;"/>
        </div>
    </div>
</template>

<script>
    export default {
        name: "BusinessCard",
        data(){
            return{
                userName:'监测员王某某'
            }
        }
    }
</script>

<style scoped>
    #businessCard{
        margin: 0 50px;
    }
#userName{
    color: #ffffff;
    font-weight: 500;
    font-size: 16px;
    margin-top: 13px;
    margin-left: 5px;
}
    #message{
        float: left;
        height: 50px;
        margin-top: 20px;
        margin-left: 25px
    }
    #message>>>.el-badge__content{
        background-color: #ffffff;
        font-weight: 600;
        color: #607ae3;
    }
</style>
