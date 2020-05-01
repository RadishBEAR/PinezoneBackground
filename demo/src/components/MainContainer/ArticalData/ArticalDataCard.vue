<template>
    <div id="articaDataCard">
        <div style="width: 100%;height: 30px;">
            <p style="color: #5d4037;margin-top: 5px;margin-left: 5px;">
                {{"文章名："+this.articalName}}
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ArticalDataCard",
        props:{
            articalName: String
        }
    }
</script>>

<style scoped>
    #articalDataCard{
        width: 70%;
        margin-left: 50px;
        margin-top: 30px;
    }
</style>
