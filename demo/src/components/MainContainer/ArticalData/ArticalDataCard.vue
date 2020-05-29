<template>
    <div id="articleDataCard">
        <happy-scroll hide-vertical hide-horizontal color="rgba(0,0,0,0.5)" style="height: 90%;width: 100%">
            <div style="width: 90%;"
                 v-for="(item,index) in this.articalName"
                 :key="index">
                <p style="color: #000000;
                margin-top: 25px;
                margin-left: 5px;
                font-size: 16px;
                text-align: left">
                    {{item}}
                </p>

            </div>
        </happy-scroll>
    </div>
</template>

<script>
    export default {
        name: "ArticalDataCard",
        props:{
            articalName: Array,
        }
    }
</script>>

<style scoped>
    #articleDataCard{
        width: 80%;
        height: 80%;
        margin-left: 10%;
    }
    #articleDataCard>>>.happy-scroll-content{
        display:block!important;
    }
    #articleDataCard>>>.happy-scroll-container .happy-scroll-content{
        display:block!important;
    }
</style>
