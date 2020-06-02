<template>
    <div id="userDataCard">

        <el-table
                :show-header="false"
                :data="statistics"
                style="width: 100%">
            <el-table-column
                    prop="title"
                    label="表项"
                    width="130%">
            </el-table-column>
            <el-table-column
                    prop="value"
                    label="数值">
            </el-table-column>
        </el-table>

    </div>
</template>

<script>
    export default {
        name: "UserDataCard",
        props:{
            statistics:Array
        },
    }
</script>>

<style scoped>
    #userDataCard{
        width: 80%;
        height: 90%;
        margin-left: 10%;
        margin-top: 10%;
        text-align: left;
        font-weight: 500;
    }
</style>
