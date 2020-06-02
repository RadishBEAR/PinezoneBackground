<template>
    <div id="articleDataCard">
        <happy-scroll hide-vertical hide-horizontal color="rgba(0,0,0,0.5)" style="height: 90%;width: 100%">
                <el-table
                            :data="articalName"
                            style="width: 100%;">
                        <el-table-column
                                style="margin-left: 50px!important;"
                                prop="name"
                                label="文章名"
                                width="200%">
                        </el-table-column>
                    <el-table-column label="操作">
                        <template slot-scope="scope">
                            <el-button
                                size="mini"
                                @click="readArticle(scope.$index)">查看</el-button>
                        </template>
                    </el-table-column>
                    </el-table>
        </happy-scroll>
    </div>
</template>

<script>
    import { EventBus } from '../../../tools/EventBus'
    import global from '../../../tools/global'
    export default {
        name: "ArticalDataCard",
        props:{
            articalName: Array,
        },
        methods:{
            readArticle:function (index) {
                global.setArticleID(this.articalName[index]['aid']);
                global.setAuthorID(this.articalName[index]['uid']);
                EventBus.$emit('ReadArticle',this.articalName[index]['aid'])
            },
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
