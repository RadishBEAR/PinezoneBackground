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
                        label="发布时间"
                        width="240"
                >
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
                    <template slot-scope="scope">
                        <font v-if="scope.row.reportNumber === 0">{{scope.row.reportNumber}}</font>
                        <font v-else-if="scope.row.reportNumber != 0"
                              style="font-weight: 600"
                              color="red">{{scope.row.reportNumber}}</font>
                    </template>
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
                totalPage:0,
                activeName:'diningRoom',
                tableData:[],
                cid:1,
                diningRoom: [],
                shopping: [],
                studyArea:[],
                play:[],
                gym:[],
                numbersOfAllKindsOfArticles:[]
            }
        },
        mounted() {
            this.tableData=this.diningRoom;
            this.getArticlesList(1,1);
            this.getNumberOfAllKindsOfArticles();
        },
        methods:{
            handleClick() {
                console.log(this.numbersOfAllKindsOfArticles);
                switch (this.activeName) {
                    case 'diningRoom':
                        this.tableData=this.diningRoom;
                        this.cid=1;
                        this.totalPage=this.numbersOfAllKindsOfArticles[0]['num']/7*10;
                        break;
                    case 'shopping':
                        this.tableData=this.shopping;
                        this.totalPage=this.numbersOfAllKindsOfArticles[1]['num']/7*10;
                        this.cid=2;
                        break;
                    case 'studyArea':
                        this.tableData=this.studyArea;
                        this.totalPage=this.numbersOfAllKindsOfArticles[3]['num']/7*10;
                        this.cid=4;
                        break;
                    case 'play':
                        this.tableData=this.play;
                        this.totalPage=this.numbersOfAllKindsOfArticles[2]['num']/7*10;
                        this.cid=3;
                        break;
                    case 'gym':
                        this.tableData=this.gym;
                        this.totalPage=this.numbersOfAllKindsOfArticles[4]['num']/7*10;
                        this.cid=5;
                        break;
                }
                this.getArticlesList(this.cid,1);
            },
            // eslint-disable-next-line no-unused-vars
            handleDelete(index, row) {
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
                            // 这里加要做什么操作
                            var URL=global.getAPIurl()+'/v1/article?aid='+row.ID;
                            // global.getAPIurl()返回的是服务器的地址，加上接口后缀就是完整的接口地址了
                            var that=this;
                            // eslint-disable-next-line no-unused-vars
                            axios.delete(URL).then(function (res) {
                                    that.$message({
                                        type: 'success',
                                        message: '已删除文章'
                                    });
                                }
                            ).catch(function (error) {
                                console.log(error)
                            })


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
                global.setArticleID(row.ID);
                global.setAuthorID(row.IDOfAuthor);
                EventBus.$emit('ReadArticle',row.ID)
            },
            handleCurrentChange(val) {
                this.getArticlesList(1,val);
            },
            getArticlesList(type,index){
                // 获取文章列表方法，其中type是文章类型，index是当前索引
                var URL = global.getAPIurl() + '/v1/article-list' + '?cid='+type+'&page=' + index+'&pageSize=7';
                var articleList=[];
                var that=this;
                axios.get(URL).then(function (res) {
                    for(index in res.data){
                        console.log(res.data[index]);
                        var item=res.data[index];
                        var article={
                                title:item.title,
                                author:item.username,
                                IDOfAuthor:item.uid,
                                ID:item.aid,
                                releaseTime:item.date,
                                likenum:item.likenum,
                                privateIntFcount:'',
                                comments:'',
                                reportNumber:0
                        };
                        articleList.push(article);
                        that.getReported(item.aid,index);
                        that.getArticle(item.aid,index);
                    }
                    that.tableData=articleList;
                }).catch(function (error) {
                    console.log(error)
                })
            },
            getNumberOfAllKindsOfArticles(){
                var URL=global.getAPIurl()+'/v1/statistics/articles/proportion';
                // global.getAPIurl()返回的是服务器的地址，加上接口后缀就是完整的接口地址了
                // eslint-disable-next-line no-unused-vars
                var that=this;
                axios.get(URL).then(function (res) {
                        var nameOfTypes=['食堂','探店','玩吧','自习室','健身房'];
                        for(var index in res.data){
                            var item={
                                name:nameOfTypes[res.data[index]['cid']-1],
                                num:res.data[index]['num']
                            };
                            that.numbersOfAllKindsOfArticles.push(item);
                        }
                    that.totalPage= that.numbersOfAllKindsOfArticles[0]['num']/7*10;
                    }
                ).catch(function (error) {
                    console.log(error)
                })
            },
            getArticle:function (id,index) {
                var that=this;
                var URL=global.getAPIurl()+'/v1/article'+'?aid='+id+'&uid=221701231';

                axios.get(URL).then(function(res) {
                    that.res=res.data;  // 这就是api返回的结果了
                    that.tableData[index]['privateIntFcount']=res.data['starnum'];
                    that.tableData[index]['comments']=res.data['commentnum'];
                }).catch(function (error) {
                    console.log(error)
                    that.res=error;
                })
            },
            getReported:function (id,index) {
                var URL=global.getAPIurl()+'/v1/statistics/articles/reported-articles-list';
                // global.getAPIurl()返回的是服务器的地址，加上接口后缀就是完整的接口地址了
                var that=this;
                axios.get(URL).then(function (res) {
                        console.log(res.data);  // 接口返回的数据在res.data里
                        for (var i in res.data){
                            if (res.data[i]['aid']==id){
                                that.tableData[index]['reportNumber']=res.data[i]['num'];
                                break;
                            }
                        }
                    }
                ).catch(function (error) {
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
