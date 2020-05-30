<template>
    <div id="userLivenessRankCard">
        <happy-scroll hide-vertical hide-horizontal color="rgba(0,0,0,0.5)" style="height: 90%;width: 100%">
            <el-table
                show-header=false
                :data="activeUserTop"
                style="width: 100%;">
            <el-table-column
                    style="margin-left: 50px!important;"
                    prop="name"
                    label="用户名"
                    width="230">
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
    import global from '../../../tools/global'
    import { EventBus } from '../../../tools/EventBus'
    export default {
        name: "UserLivenessRankCard",
        props:{
            activeUserTop: Array
        },
        methods:{
            readArticle:function (index) {
                global.setArticleID(-1);
                // Vue.prototype.$AuthorID=row.userID;
                global.setAuthorID(this.activeUserTop[index]['uid']);
                EventBus.$emit('ReadArticle',this.activeUserTop[index]['uid']);
            },
        }
    }
</script>>

<style scoped>
    #userLivenessRankCard{
        width: 80%;
        height: 80%;
        margin-left: 10%;
    }
    #userLivenessRankCard>>>.happy-scroll-content{
        display:block!important;
    }
    #userLivenessRankCard>>>.happy-scroll-container .happy-scroll-content{
        display:block!important;
    }
</style>
