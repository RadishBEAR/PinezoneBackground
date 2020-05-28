<template>
    <div id="article">
        <div id="articleLeft">
            <div style="height: 95%;margin-left: 50px;margin-right: 50px;margin-top: 1%">
                <happy-scroll hide-vertical hide-horizontal color="rgba(0,0,0,0.5)" style="height: 100%;width: 100%">
                        <BusinessCard
                                :headPortrait="this.headPortrait"
                                :sign="this.articleData.releaseTime"
                                :author="this.author"
                                style="margin-top: 30px;margin-left: 10px"
                        ></BusinessCard>

                        <!--图片轮播-->
                        <div style="width: 100%;">
                            <div style="width: 80%;height:auto;margin-left: 10%">
                                <el-carousel indicator-position="outside" type="card">
                                    <el-carousel-item
                                            v-for="(item,index) in this.articleData.img"
                                            :key="index">
                                        <img :src="item['path']" style="height: 100%">
                                    </el-carousel-item>
                                </el-carousel>
                            </div>

                            <!--标题-->
                            <p style="text-align: left;font-weight: 600;font-size: 18px">{{this.articleData.title}}</p>

                            <!--内容-->
                            <div style="width: 80%">
                                <el-row>
                                    <el-col style="white-space: pre-wrap;text-align: left">
                                        {{this.articleData.content}}
                                    </el-col>
                                </el-row>
                            </div>

                        </div>

                        <div style="width: 100%;height: 30px;">
                            <img src="../../../assets/点赞.png"
                                 style="width: 25px;height: 25px;margin-top: 20px;float: left">
                            <span style="width: 25px;height: 25px;margin-top: 25px;float: left;color:#bcaaa4">
                                {{this.articleData.likenum}}
                            </span>

                            <img src="../../../assets/爱心.png"
                                 style="width: 25px;height: 25px;margin-top: 20px;float: left;margin-left: 5px">
                            <span style="width: 25px;height: 25px;margin-top: 25px;float: left;color:#bcaaa4">
                                {{this.articleData.collectNumber}}
                            </span>

                            <img src="../../../assets/评论.png"
                                 style="width: 23px;height: 23px;margin-top: 21px;float: left;margin-left: 7px">
                            <span style="width: 25px;height: 25px;margin-top: 25px;float: left;color:#bcaaa4">
                                {{this.articleData.commentNumber}}
                            </span>

                            <img src="../../../assets/警告.png"
                                 style="width: 23px;height: 23px;margin-top: 21px;float: left;margin-left: 7px">
                            <span style="width: 25px;height: 25px;margin-top: 26px;float: left;color:#bcaaa4">
                                {{this.articleData.reportNumber}}
                            </span>

                            <span
                                    style="margin-top: 20px;
                                    margin-right:30px;
                                    float: right;
                                    color:#ff6969"
                                    @click="this.delete"
                            >
                                删除文章
                            </span>

                        </div>

                        <el-divider></el-divider>

                        <div style="width: 100%;">
                            <div style="width: 100%;height: 20px;"></div>
                            <CommentCard
                                    v-for="(item,index) in this.articleData.comments"
                                    :key="index"
                                    :headPortrait="item.headPortrait"
                                    :sign="item.releaseTime"
                                    :author="item.name"
                                    :comment="item.comment"
                                    style="margin-top: 10px"
                            >
                            </CommentCard>
                            <div style="width: 100%;height: 20px;"></div>
                        </div>
                </happy-scroll>
            </div>
            <div></div>
        </div>
        <div id="articleRight">
            <div style="width: 100%;height: 20%;background-color: #faf9f8;">
                <BusinessCard
                        :headPortrait="this.headPortrait"
                        :sign="this.sign"
                        :author="this.author"
                        style="margin-top: 50px;margin-left: 50px"
                ></BusinessCard>
                <div style="margin-top: 20px;font-size: 18px;color: #8f99a5">
                    <span>文章：57</span>
                    <el-divider direction="vertical"></el-divider>
                    <span>粉丝：17</span>
                    <el-divider direction="vertical"></el-divider>
                    <span>举报：2</span>
                </div>
            </div>
            <div style="height: 67%;margin-left: 50px;margin-right: 50px">
                <happy-scroll hide-horizontal color="rgba(0,0,0,0.5)" style="height: 90%;width: 100%;">
                    <el-table
                            @row-click="clickArticle"
                            :data="tableData"
                            style="width: 100%">
                        <el-table-column
                                show-header="false"
                                prop="title"
                                >
                        </el-table-column>
                    </el-table>
                </happy-scroll>
            </div>

            <div style="width: 100%;height: 10%;color:#d0c4bf">
                <p
                        style="margin-right: 30px;
                        text-align: right;
                        font-weight: 500"
                        @click="this.sendMessage"
                >发送通知</p>
            </div>

        </div>
    </div>
</template>

<script>
    // eslint-disable-next-line no-unused-vars
    import Vue from 'vue'
    import BusinessCard from '../Article/BusinessCard'
    import CommentCard from '../Article/CommentCard'
    import axios from 'axios'
    // eslint-disable-next-line no-unused-vars
    import { EventBus } from '../../../tools/EventBus'
    import global from '../../../tools/global'
    export default {
        name: "Article",
        components:{
            BusinessCard,
            CommentCard
        },
        data(){
            return{
                AuthorID:'',
                sign:'小如一首歌,小如一个吻',
                author:'',
                numberOfArticles:'57',
                numberOfFans:'17',
                numberOfReports:'0',
                headPortrait:'2',
                tableData:[],
                articleData:{
                    releaseTime:'',
                    author:'',
                    AuthorID:'',

                    likenum:'',
                    collectNumber:'',
                    commentNumber:0,
                    reportNumber:'1',

                    title:"",

                    img:[],
                    content:"",
                    comments:[]
                }
            }
        },
        mounted() {
            if(global.getArticleID()===-1){
                this.getLatestArticles(global.getAuthorID());
            }
            else{
                this.getData();
            }
        },
        methods:{
            delete:function () {
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
                            var URL=global.getAPIurl()+'/v1/article?aid='+global.getArticleID();
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
            sendMessage:function () {
                this.$prompt('请输入通知内容', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消'
                }).then(({ value }) => {
                    this.$message({
                        type: 'success',
                        message: '已发送通知'
                    });
                    // 这里加要做什么操作
                    console.log(value);
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '取消通知'
                    });
                });
            },
            clickArticle:function (row) {
                console.log(row.id);
                global.setArticleID(row.id);
                this.ArticleID=row.id;
                this.ArticleID=global.getArticleID();
                this.AuthorID=global.getAuthorID();
                this.articleData.comments=[];
                this.articleData.commentNumber=0;
                this.getArticle(this.ArticleID);
                this.getComments(this.ArticleID);
            },
            getArticle:function (id) {
                var that=this;
                var URL=global.getAPIurl()+'/v1/article'+'?aid='+id+'&uid=2217';

                axios.get(URL).then(function(res) {
                    that.res=res.data;  // 这就是api返回的结果了
                    // console.log(res.data)
                    that.articleData.content=res.data['content'];
                    that.articleData.likenum=res.data['likenum'];
                    that.articleData.collectNumber=res.data['starnum'];
                    that.articleData.title=res.data['title'];
                    var imgList=res.data['aimg'];    // 此处是图片列表解析策略
                    that.articleData.img=imgList;
                    that.author=res.data['username']
                    that.articleData.author=res.data['username']
                    that.articleData.releaseTime=res.data['datetime']
                }).catch(function (error) {
                    console.log(error)
                    that.res=error;
                })
            },
            getHeadPortrait: async function (id) {
                // 根据用户id获取头像的方法
                var URL = global.getAPIurl() + '/v1/user/picture' + '?uid=' + id;
                // console.log(URL)
                var path;
                await axios.get(URL).then(function (res) {
                    // console.log(res.data['path'])
                    path=res.data['path'];
                }).catch(function (error) {
                    console.log(error)
                })
                return path;
            },
            getHeadPortraitInComment: async function (id,index) {
                // 根据用户id获取头像的方法
                var URL = global.getAPIurl() + '/v1/user/picture' + '?uid=' + id;
                // console.log(URL)
                var path;
                await axios.get(URL).then(function (res) {
                    // console.log(res.data['path'])
                    path=res.data['path'];
                }).catch(function (error) {
                    console.log(error)
                })
                return {
                        path:path,
                        index:index
                };
            },
            getUserNameInComment: async function (id,index){
                // 根据用户id获取用户名之方法
                var URL = global.getAPIurl() + '/v1/user' + '?id=' + id;
                // console.log(URL)
                var name;
                await axios.get(URL).then(function (res) {
                    // console.log(res.data['path'])
                    name=res.data['name'];
                }).catch(function (error) {
                    console.log(error)
                });
                return {
                    name:name,
                    index:index
                };
            },
            getComments:async function (id) {
                // 根据文章id获取评论列表之方法
                var that=this;
                var URL=global.getAPIurl()+'/v1/comments'+'?aid='+id;
                // console.log(URL)
                axios.get(URL).then(function(res) {
                    that.res=res.data;  // 这就是api返回的结果了
                    // console.log(res.data)
                    for(var index in res.data){
                        var item=res.data[index];
                        that.articleData.commentNumber++;
                        var comment={
                            name:"",
                            releaseTime:item['date'],
                            headPortrait:"",
                            comment:item['content']
                        };
                        that.articleData.comments.push(comment);
                        that.getHeadPortraitInComment(item['uid'],index).then((result)=>{
                            that.articleData.comments[result['index']]['headPortrait']=result['path'];
                        })
                        that.getUserNameInComment(item['uid'],index).then((result)=>{
                            that.articleData.comments[result['index']]['name']=result['name'];
                        })
                    }
                }).catch(function (error) {
                    console.log(error)
                    that.res=error;
                })
            },
            getArticlseList(){
                // 获取该用户的文章列表
                var uid=global.getAuthorID();
                var URL=global.getAPIurl()+'/v1/userArticle-list?uid='+uid+'&page=1&pageSize=2000';
                // global.getAPIurl()返回的是服务器的地址，加上接口后缀就是完整的接口地址了
                // eslint-disable-next-line no-unused-vars
                var that=this;
                that.tableData=[];
                axios.get(URL).then(function (res) {
                        console.log(res.data);
                        for (var index in res.data){
                            var item={
                                title:res.data[index]['title'],
                                time:res.data[index]['date'],
                                id:res.data[index]['aid'],
                            };
                            that.tableData.push(item);
                        }
                    }
                ).catch(function (error) {
                    console.log(error)
                })
            },
            getData:function() {
                this.ArticleID=global.getArticleID();
                this.AuthorID=global.getAuthorID();
                this.getArticle(this.ArticleID);
                var that=this;
                this.getHeadPortrait(this.AuthorID).then(function (result) {
                    that.headPortrait=result;
                });
                this.getComments(this.ArticleID);
                this.getReported();
                this.getArticlseList();
            },
            getLatestArticles:async function  (id) {
                // 获取用户最新的文章id，给文章详细页渲染用
                var URL=global.getAPIurl()+'/v1/userArticle-list?uid='+id+'&page=1&pageSize=2000';
                // global.getAPIurl()返回的是服务器的地址，加上接口后缀就是完整的接口地址了
                // eslint-disable-next-line no-unused-vars
                var aid;
                var that=this;
                await axios.get(URL).then(function (res) {
                        aid=res.data[0]['aid'];
                        global.setArticleID(aid);
                        that.getData();
                    }
                ).catch(function (error) {
                    console.log(error)
                });
            },
            getReported:function () {
                var URL=global.getAPIurl()+'/v1/statistics/articles/reported-articles-list';
                // global.getAPIurl()返回的是服务器的地址，加上接口后缀就是完整的接口地址了
                var that=this;
                var aid=global.getArticleID();
                axios.get(URL).then(function (res) {
                        console.log(res.data);  // 接口返回的数据在res.data里
                        for (var i in res.data){
                            if (res.data[i]['aid']==aid){
                                that.articleData.reportNumber=res.data[i]['num'];
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
#article{
    width: 100%;
    height: 98.3%;
}
#articleLeft{
    width: 75%;
    height: 95%;
    margin-left: 1%;
    margin-top: 1%;
    float: left;
    box-shadow: 1px 1px 3px #888888;
}
#articleRight{
    width: 22%;
    height: 95%;
    margin-left: 1%;
    margin-top: 1%;
    box-shadow: 1px 1px 3px #888888;
    float: left;
}
#article>>>.happy-scroll-content{
    display:block!important;
}
#article>>>.happy-scroll-container .happy-scroll-content{
    display:block!important;
}
    #article>>>.el-table{
        background-color: #fbfbfb;
    }
    #article>>>.is-leaf{
        background-color: #fbfbfb;
    }
    #article>>>.el-table__row{
        background-color: #fbfbfb!important;
    }
</style>
