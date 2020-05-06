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
                                        <img :src="item" style="height: 100%">
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
                <happy-scroll hide-horizontal color="rgba(0,0,0,0.5)" style="height: 90%;width: 100%">
                    <el-table
                            @row-click="clickArticle"
                            :data="tableData"
                            style="width: 100%">
                        <el-table-column
                                show-header="false"
                                prop="title"
                                >
                        </el-table-column>
                        <el-table-column
                                prop="time"
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
    import Vue from 'vue'
    import BusinessCard from '../Article/BusinessCard'
    import CommentCard from '../Article/CommentCard'
    import axios from 'axios'
    import { EventBus } from '../../../tools/EventBus'
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
                numberOfReports:'2',
                headPortrait:'http://111.230.173.4:8080/img/%E9%BE%99%E7%8C%AB.png',
                tableData:[
                    {
                    title:'程序员快乐屋',
                    time:'2020-4-23',
                        id:'1713',
                    },
                    {
                        title:'是什么让芝士乌龙成为最好喝的奶茶',
                        time:'2020-4-13',
                        id:'23113',
                    },
                    {
                        title:'益和堂的三月',
                        time:'2020-3-23',
                        id:'15713',
                    },
                ],
                articleData:{
                    releaseTime:'',
                    author:'',
                    AuthorID:'',

                    likenum:'51',
                    collectNumber:'17',
                    commentNumber:'23',
                    reportNumber:'1',

                    title:"",

                    img:[],
                    content:"",
                    comments:[
                        {
                            name:"大白鹅",
                            releaseTime:'2020-4-13 20:37',
                            headPortrait:'http://111.230.173.4:8080/img/%E5%92%95%E5%92%95.png',
                            comment:"芝士乌龙+芋圆三分甜超级棒"
                        },
                        {
                            name:"阿龙",
                            releaseTime:'2020-4-13 20:39',
                            headPortrait:'http://111.230.173.4:8080/img/%E9%98%BF%E9%BE%99.png',
                            comment:"每周必点"
                        },
                        {
                            name:"阿哞",
                            releaseTime:'2020-4-13 21:39',
                            headPortrait:'http://111.230.173.4:8080/img/%E9%98%BF%E5%93%9E.png',
                            comment:"我真的超爱古茗啊啊啊啊啊啊啊"
                        },
                        {
                            name:"是狮子啊",
                                releaseTime:'2020-4-13 21:57',
                            headPortrait:'http://111.230.173.4:8080/img/%E7%8B%AE%E5%AD%90%E5%95%8A.png',
                            comment:"最喜欢芝士乌龙和直火乌龙"
                        },
                    ]
                }
            }
        },
        mounted() {
            this.ArticleID=Vue.prototype.$ArticleID;
            this.AuthorID=Vue.prototype.$AuthorID;
            this.getArticle(this.ArticleID)
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
                EventBus.$emit('ReadArticle',row.id)
            },
            getArticle:function (id) {
                // 获取公告列表方法
                // 加载的时候调用一次，修改/发布公告的时候调用一次
                var that=this;
                var URL=Vue.prototype.$APIurl+'/article'+'?aid='+id;

                axios.get(URL).then(function(res) {
                    that.res=res.data;  // 这就是api返回的结果了
                    console.log(res.data)
                    that.articleData.content=res.data['content'];
                    that.articleData.title=res.data['title'];
                    var imgList=res.data['aimg'].split(" ");    // 此处是图片列表解析策略
                    that.articleData.img=imgList;
                    that.author=res.data['username']
                    that.articleData.author=res.data['username']
                    that.articleData.releaseTime=res.data['datetime']
                }).catch(function (error) {
                    console.log(error)
                    that.res=error;
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
