<template>
    <keep-alive>
        <div id="userList">

        <div>
            <p id="userListTitle">文章列表</p>
        </div>

        <div id="userListTable">
            <el-tabs v-model="activeName" @tab-click="handleClick">
                <el-tab-pane label="食堂" name="diningRoom">
                </el-tab-pane>
                <el-tab-pane label="探店" name="shopping">
                </el-tab-pane>
                <el-tab-pane label="自习室" name="studyArea">
                </el-tab-pane>
                <el-tab-pane label="玩吧" name="play">
                </el-tab-pane>
                <el-tab-pane label="健身房" name="gym">
                </el-tab-pane>
            </el-tabs>
            <el-table
                    stripe
                    :data="tableData"
                    style="width: 100%;">
                <el-table-column
                        label=""
                        width="50">
                </el-table-column>
                <el-table-column
                        style="margin-left: 50px!important;"
                        prop="title"
                        label="标题"
                        width="300">
                </el-table-column>
                <el-table-column
                        prop="author"
                        label="作者"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="ID"
                        label="文章ID">
                </el-table-column>
                <el-table-column
                        prop="releaseTime"
                        label="发布时间">
                </el-table-column>
                <el-table-column
                        prop="likenum"
                        label="点赞数">
                </el-table-column>
                <el-table-column
                        prop="privateIntFcount"
                        label="收藏数">
                </el-table-column>
                <el-table-column
                        prop="comments"
                        label="评论数">
                </el-table-column>
                <el-table-column
                        prop="reportNumber"
                        label="举报数">
                </el-table-column>
                <el-table-column label="操作">
                    <template slot-scope="scope">
                        <el-button
                                size="mini"
                                @click="handleRead(scope.$index, scope.row)">查看</el-button>
                        <el-button
                                size="mini"
                                @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                    </template>
                </el-table-column>
                <el-table-column
                        label=""
                        width="50">
                </el-table-column>
            </el-table>
            <div style="width: 100%;height: 50px"></div>
            <el-pagination
                    background
                    layout="prev, pager, next"
                    @current-change="handleCurrentChange"
                    :total="this.totalPage">
            </el-pagination>
        </div>
    </div>
    </keep-alive>

</template>

<script>
    // eslint-disable-next-line no-unused-vars
    import Vue from 'vue'
    import { EventBus } from '../../../tools/EventBus'
    import global from '../../../tools/global'
    import axios from 'axios'
    export default {
        name: "ArticleList",
        data(){
            return{
                totalPage:40,
                activeName:'diningRoom',
                tableData:[],
                cid:1,
                diningRoom: [],
                shopping: [],
                studyArea:[],
                play:[],
                gym:[],
            }
        },
        mounted() {
            this.tableData=this.diningRoom;
            this.getArticlesList(1,1);
        },
        methods:{
            handleClick() {
                console.log(this.activeName);
                this.totalPage=10;
                switch (this.activeName) {
                    case 'diningRoom':
                        this.tableData=this.diningRoom;
                        this.cid=1;
                        this.totalPage=40;
                        break;
                    case 'shopping':
                        this.tableData=this.shopping;
                        this.cid=2;
                        break;
                    case 'studyArea':
                        this.tableData=this.studyArea;
                        this.cid=4;
                        break;
                    case 'play':
                        this.tableData=this.play;
                        this.cid=3;
                        break;
                    case 'gym':
                        this.tableData=this.gym;
                        this.cid=5;
                        break;
                }
                this.getArticlesList(this.cid,1);
            },
            handleDelete(index, row) {
                console.log(index, row);
                this.$confirm('此操作将删除该文章, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.$confirm('不当操作将严重影响用户体验，请您再次确认是否删除', '提示', {
                        confirmButtonText: '确定',
                        cancelButtonText: '取消',
                        type: 'warning'
                    }).then(() => {
                        this.$prompt('请输入删除原因', '提示', {
                            confirmButtonText: '确定',
                            cancelButtonText: '取消'
                        }).then(({ value }) => {
                            this.$message({
                                type: 'success',
                                message: '已删除文章'
                            });
                            // 这里加要做什么操作
                            console.log(value);
                        }).catch(() => {
                            this.$message({
                                type: 'info',
                                message: '取消删除'
                            });
                        });
                    }).catch(() => {
                        this.$message({
                            type: 'info',
                            message: '取消删除'
                        });
                    });
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '取消删除'
                    });
                });
            },
            handleRead(index, row){
                console.log(row.IDOfAuthor);
                global.setArticleID(row.ID);
                global.setAuthorID(row.IDOfAuthor);
                EventBus.$emit('ReadArticle',row.ID)
            },
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
                this.getArticlesList(1,val);
            },
            getArticlesList(type,index){
                // 获取文章列表方法，其中type是文章类型，index是当前索引
                var URL = global.getAPIurl() + '/v1/article-list' + '?cid='+type+'&page=' + index+'&pageSize=7';
                var articleList=[];
                var that=this;
                axios.get(URL).then(function (res) {
                    console.log(res.data)
                    for(index in res.data){
                        var item=res.data[index];
                        console.log(item)
                        var article={
                                title:item.title,
                                author:item.username,
                                IDOfAuthor:item.uid,
                                ID:item.aid,
                                releaseTime:item.date,
                                likenum:item.likenum,
                                privateIntFcount:parseInt(Math.random() * 10),
                                comments:parseInt(Math.random() * 10),
                                reportNumber:parseInt(Math.random() *4)
                        };
                        articleList.push(article);
                    }
                    console.log(articleList)
                    that.tableData=articleList;
                }).catch(function (error) {
                    console.log(error)
                })
            }
        }
    }
</script>

<style scoped>
    #userList{
        width: 100%;
        height: 100%;
    }
    #userListTitle{
        margin-left: 50px;
        font-size: 21px;
        text-align: left;
        width: 300px;
    }
    #userListTable>>>.el-tabs__nav{
        margin-left: 50px;
    }
</style>
