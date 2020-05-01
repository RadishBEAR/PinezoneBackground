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

</template>

<script>
    import Vue from 'vue'
    import { EventBus } from '../../../tools/EventBus'
    export default {
        name: "ArticleList",
        data(){
            return{
                totalPage:70,
                activeName:'diningRoom',
                tableData:[],
                diningRoom: [
                    {
                    title:'是什么让芝士乌龙成为最好喝的奶茶',
                    author:'爱吃萝卜的熊',
                    IDOfAuthor:'1773',
                    ID:'17328',
                    releaseTime:'2020-4-25',
                    likenum:'57',
                    privateIntFcount:'17',
                    comments:'21',
                    reportNumber:'3'
                },{
                    title:'当我们谈论烧仙草时，我们谈论什么',
                    author:'提拉米猪',
                    IDOfAuthor:'1773',
                    ID:'17328',
                    releaseTime:'2020-4-25',
                    likenum:'157',
                    privateIntFcount:'17',
                    comments:'57',
                    reportNumber:'3'
                },{
                    title:'多年以后，奥雷里亚诺上校会想起舍友带他去吃片皮鸭的那个下午',
                    author:'爱吃萝卜的熊',
                    IDOfAuthor:'1773',
                    ID:'17328',
                    releaseTime:'2020-4-25',
                    likenum:'57',
                    privateIntFcount:'17',
                    comments:'21',
                    reportNumber:'3'
                },{
                    title:'我曾悲伤地爱过杨国福麻辣烫',
                    author:'爱吃萝卜的熊',
                    IDOfAuthor:'1773',
                    ID:'17328',
                    releaseTime:'2020-4-25',
                    likenum:'57',
                    privateIntFcount:'17',
                    comments:'21',
                    reportNumber:'3'
                }],
                shopping: [
                    {
                    title:'永嘉书摊',
                    author:'爱吃萝卜的熊',
                    IDOfAuthor:'1773',
                    ID:'6547328',
                    releaseTime:'2020-4-25',
                    likenum:'27',
                    privateIntFcount:'27',
                    comments:'38',
                    reportNumber:'3'
                },{
                    title:'西西弗书店',
                    author:'提拉米猪',
                    IDOfAuthor:'1773',
                    ID:'654658',
                    releaseTime:'2020-3-25',
                    likenum:'97',
                    privateIntFcount:'17',
                    comments:'17',
                    reportNumber:'0'
                },{
                    title:'钓娃娃屋',
                    author:'大白鹅',
                    IDOfAuthor:'1773',
                    ID:'327328',
                    releaseTime:'2020-4-25',
                    likenum:'97',
                    privateIntFcount:'17',
                    comments:'13',
                    reportNumber:'9'
                },{
                    title:'程序员快乐屋',
                    author:'爱吃萝卜的熊',
                    IDOfAuthor:'1773',
                    ID:'65417328',
                    releaseTime:'2020-4-25',
                    likenum:'31',
                    privateIntFcount:'10',
                    comments:'57',
                    reportNumber:'0'
                }],
                studyArea:[
                    {
                        title:'ds505',
                        author:'爱吃萝卜的熊',
                        IDOfAuthor:'6543',
                        ID:'3146328',
                        releaseTime:'2020-5-1',
                        likenum:'97',
                        privateIntFcount:'57',
                        comments:'37',
                        reportNumber:'0'
                    },{
                        title:'程序员快乐屋',
                        author:'伏特加熊',
                        IDOfAuthor:'62773',
                        ID:'95658',
                        releaseTime:'2020-4-25',
                        likenum:'67',
                        privateIntFcount:'7',
                        comments:'19',
                        reportNumber:'1'
                    },{
                        title:'东三空教室攻略',
                        author:'RadishBear',
                        IDOfAuthor:'87321',
                        ID:'91613',
                        releaseTime:'2020-4-25',
                        likenum:'531',
                        privateIntFcount:'461',
                        comments:'102',
                        reportNumber:'7'
                    },{
                        title:'晨读指南',
                        author:'笑歌',
                        IDOfAuthor:'92321',
                        ID:'351613',
                        releaseTime:'2020-2-25',
                        likenum:'31',
                        privateIntFcount:'16',
                        comments:'12',
                        reportNumber:'0'
                    },{
                        title:'食堂自习攻略',
                        author:'空空',
                        IDOfAuthor:'23791',
                        ID:'43113',
                        releaseTime:'2020-2-25',
                        likenum:'36',
                        privateIntFcount:'26',
                        comments:'17',
                        reportNumber:'3'
                    },{
                        title:'中楼自习室攻略',
                        author:'是狮子啊',
                        IDOfAuthor:'66134',
                        ID:'946328',
                        releaseTime:'2020-2-25',
                        likenum:'83',
                        privateIntFcount:'53',
                        comments:'13',
                        reportNumber:'5'
                    }],
                play:[
                    {
                        title:'3号琴室',
                        author:'提拉米猪',
                        IDOfAuthor:'616543',
                        ID:'986328',
                        releaseTime:'2020-5-7',
                        likenum:'87',
                        privateIntFcount:'67',
                        comments:'57',
                        reportNumber:'0'
                    },{
                        title:'福大校内泥塑指南',
                        author:'伏特加熊',
                        IDOfAuthor:'132773',
                        ID:'9558',
                        releaseTime:'2020-4-25',
                        likenum:'21',
                        privateIntFcount:'7',
                        comments:'2',
                        reportNumber:'0'
                    },{
                        title:'地质公园小夜曲',
                        author:'板栗',
                        IDOfAuthor:'654321',
                        ID:'99513',
                        releaseTime:'2020-4-25',
                        likenum:'31',
                        privateIntFcount:'61',
                        comments:'12',
                        reportNumber:'7'
                    },{
                        title:'福大摄影攻略',
                        author:'笑歌',
                        IDOfAuthor:'73321',
                        ID:'52613',
                        releaseTime:'2020-2-25',
                        likenum:'49',
                        privateIntFcount:'36',
                        comments:'22',
                        reportNumber:'3'
                    },{
                        title:'福大猫窝分布',
                        author:'是狮子啊',
                        IDOfAuthor:'95634',
                        ID:'721328',
                        releaseTime:'2020-3-2',
                        likenum:'72',
                        privateIntFcount:'63',
                        comments:'23',
                        reportNumber:'5'
                    }],
                gym:[
                    {
                        title:'福大周边健身房评测',
                        author:'阿福',
                        IDOfAuthor:'6373',
                        ID:'9861',
                        releaseTime:'2020-4-13',
                        likenum:'47',
                        privateIntFcount:'27',
                        comments:'31',
                        reportNumber:'0'
                    },{
                        title:'福大环校跑攻略',
                        author:'爱吃萝卜的熊',
                        IDOfAuthor:'6513',
                        ID:'373',
                        releaseTime:'2020-4-25',
                        likenum:'67',
                        privateIntFcount:'23',
                        comments:'10',
                        reportNumber:'2'
                    },{
                        title:'夜跑十圈',
                        author:'伏特加熊',
                        IDOfAuthor:'32173',
                        ID:'65123',
                        releaseTime:'2020-4-25',
                        likenum:'21',
                        privateIntFcount:'7',
                        comments:'3',
                        reportNumber:'0'
                    },{
                        title:'福大网球场小略',
                        author:'笑歌',
                        IDOfAuthor:'3573',
                        ID:'9537328',
                        releaseTime:'2020-2-25',
                        likenum:'34',
                        privateIntFcount:'12',
                        comments:'7',
                        reportNumber:'0'
                    }],
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
                    case 'studyArea':
                        this.tableData=this.studyArea;
                        break;
                    case 'play':
                        this.tableData=this.play;
                        break;
                    case 'gym':
                        this.tableData=this.gym;
                        break;
                }
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
                Vue.prototype.$ArticleID=row.ID;
                Vue.prototype.$AuthorID=row.IDOfAuthor;
                EventBus.$emit('ReadArticle',row.ID)
            },
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
            },
            getArticlesList(type,index){
                // 获取文章列表方法，其中type是文章类型，index是当前索引
                console.log(type,index);
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
