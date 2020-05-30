<template>
    <div id="articleDataCard">
        <happy-scroll hide-vertical hide-horizontal color="rgba(0,0,0,0.5)" style="height: 90%;width: 100%">
                <el-table
                            show-header=false
                            :data="articalName"
                            style="width: 100%;">
                        <el-table-column
                                style="margin-left: 50px!important;"
                                prop="name"
                                label="文章名"
                                width="230">
                        </el-table-column>
                    <el-table-column label="操作">
                        <el-button
                            size="mini"
                            @click="readArticle(scope.$index, scope.row)">查看</el-button>
                        </el-table-column>
                    </el-table>
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
