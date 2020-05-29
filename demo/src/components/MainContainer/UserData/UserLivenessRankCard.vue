<template>
    <div id="userLivenessRankCard">
            <div style="width: 100%;height: 30px;"
                 v-for="(item,index) in activeUserTop"
                 :key="index">
                <p style="color: #5d4037;margin-top: 0;margin-left: 5px;font-size: 18px;text-align: left;font-weight: 500">
                    {{"Top"+(index+1)+": "+item.name}}
                </p>
            </div>
    </div>
</template>

<script>
    export default {
        name: "UserLivenessRankCard",
        props:{
            activeUserTop: Array
        }
    }
</script>>

<style scoped>
    #userLivenessRankCard{
        width: 80%;
        margin-left: 50px;
        margin-top: 30px;
    }
</style>
