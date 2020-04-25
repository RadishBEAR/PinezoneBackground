<template>
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
                                @click="handleEdit(scope.$index, scope.row)">查看</el-button>
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
        </div>
    </div>

</template>

<script>
    export default {
        name: "ArticleList",
        data(){
            return{
                activeName:'diningRoom',
                tableData:[],
                diningRoom: [{
                    title:'是什么让芝士乌龙成为最好喝的奶茶',
                    author:'爱吃萝卜的熊',
                    ID:'17328',
                    releaseTime:'2020-4-25',
                    likenum:'57',
                    privateIntFcount:'17',
                    comments:'21',
                    reportNumber:'3'
                },{
                    title:'当我们谈论烧仙草时，我们谈论什么',
                    author:'提拉米猪',
                    ID:'17328',
                    releaseTime:'2020-4-25',
                    likenum:'157',
                    privateIntFcount:'17',
                    comments:'57',
                    reportNumber:'3'
                },{
                    title:'多年以后，奥雷里亚诺上校会想起舍友带他去吃片皮鸭的那个下午',
                    author:'爱吃萝卜的熊',
                    ID:'17328',
                    releaseTime:'2020-4-25',
                    likenum:'57',
                    privateIntFcount:'17',
                    comments:'21',
                    reportNumber:'3'
                },{
                    title:'我曾悲伤地爱过杨国福麻辣烫',
                    author:'爱吃萝卜的熊',
                    ID:'17328',
                    releaseTime:'2020-4-25',
                    likenum:'57',
                    privateIntFcount:'17',
                    comments:'21',
                    reportNumber:'3'
                }],
                shopping: [{
                    title:'永嘉书摊',
                    author:'爱吃萝卜的熊',
                    ID:'6547328',
                    releaseTime:'2020-4-25',
                    likenum:'27',
                    privateIntFcount:'27',
                    comments:'38',
                    reportNumber:'3'
                },{
                    title:'西西弗书店',
                    author:'提拉米猪',
                    ID:'654658',
                    releaseTime:'2020-3-25',
                    likenum:'97',
                    privateIntFcount:'17',
                    comments:'17',
                    reportNumber:'0'
                },{
                    title:'钓娃娃屋',
                    author:'大白鹅',
                    ID:'327328',
                    releaseTime:'2020-4-25',
                    likenum:'97',
                    privateIntFcount:'17',
                    comments:'13',
                    reportNumber:'9'
                },{
                    title:'程序员快乐屋',
                    author:'爱吃萝卜的熊',
                    ID:'65417328',
                    releaseTime:'2020-4-25',
                    likenum:'31',
                    privateIntFcount:'10',
                    comments:'57',
                    reportNumber:'0'
                }]
            }
        },
        mounted() {
            this.tableData=this.diningRoom;
        },
        methods:{
            handleClick() {
                console.log(this.activeName);
                switch (this.activeName) {
                    case 'diningRoom':
                        this.tableData=this.diningRoom;
                        break;
                    case 'shopping':
                        this.tableData=this.shopping;
                        break;
                }
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
