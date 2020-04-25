<template>
    <div style="height: 70px;width: 150px;float: left">
        <div style="height: 35px;width: 150px;">
            <div style="height: 35px;width: 50px;float: left">
                <img src="../../../assets/tomcat.png"
                     style="width: 80%;height: 80%;margin-top: 20%"
                     v-if="this.tomcat"
                >
                <img src="../../../assets/php.png"
                     style="width: 70%;height: 80%;margin-top: 20%"
                     v-if="this.php"
                >
                <img src="../../../assets/java.png"
                     style="width: 70%;height: 80%;margin-top: 20%"
                     v-if="this.java"
                >
                <img src="../../../assets/MySQL.png"
                     style="width: 60%;height: 80%;margin-top: 20%"
                     v-if="this.mysql"
                >
                <img src="../../../assets/Pinezone.png"
                     style="width: 50%;height: 80%;margin-top: 20%"
                     v-if="this.pinezone"
                >
            </div>
            <div style="height: 35px;width: 100px;float: left;margin-left: -10px;">
                <p>{{this.appName}}</p>
            </div>
        </div>
        <div style="height: 35px;width: 150px;">
            <div style="height: 35px;width: 50px;float: left">
                <img src="../../../assets/文件夹.png" style="width: 40%;height: 80%;margin-top: 15%">
            </div>
            <div style="height: 35px;width: 100px;float: left;margin-left: -10px;">
                <p style="color: #8f99a5">{{this.appAddress}}</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "AppCard",
        props:{
            appType:String,
            appName:String,
            appAddress:String
        },
        data(){
            return{
                tomcat:false,
                php:false,
                mysql:false,
                pinezone:false,
                java:false
            }
        },
        mounted() {
            console.log(this.appType)
            switch (this.appType) {
                case 'Tomcat':
                    this.tomcat=true;
                    break;
                case 'php':
                    this.php=true;
                    break;
                case 'mysql':
                    this.mysql=true;
                    break;
                case 'pinezone':
                    this.pinezone=true;
                    break;
                case 'java':
                    this.java=true;
                    break;
            }
        }
    }
</script>

<style scoped>

</style>
