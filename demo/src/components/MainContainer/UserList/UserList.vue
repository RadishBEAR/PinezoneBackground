<template>
    <div id="userList">

        <div>
            <p id="userListTitle">用户列表</p>
        </div>

        <div id="userListTable">
            <el-tabs v-model="activeName">
                <el-tab-pane label="普通用户" name="first">
                    <el-table
                        stripe
                        :data="userData"
                        style="width: 100%;">
                    <el-table-column
                            label=""
                            width="50">
                    </el-table-column>
                    <el-table-column
                            style="margin-left: 50px!important;"
                            prop="userName"
                            label="用户名"
                            width="180">
                    </el-table-column>
                    <el-table-column
                            prop="userSex"
                            label="性别"
                            width="100">
                    </el-table-column>
                    <el-table-column
                            prop="userID"
                            label="ID">
                    </el-table-column>
                    <el-table-column
                            prop="userLevel"
                            label="等级">
                    </el-table-column>
                    <el-table-column
                            prop="registrationTime"
                            label="注册时间">
                    </el-table-column>
                    <el-table-column
                            prop="articleNumber"
                            label="文章数">
                    </el-table-column>
                    <el-table-column
                            prop="likenum"
                            label="点赞数">
                    </el-table-column>
                    <el-table-column
                            prop="fansNumber"
                            label="粉丝数">
                    </el-table-column>
                    <el-table-column
                            prop="reportNumber"
                            label="举报数">
                    </el-table-column>
                    <el-table-column label="操作">
                        <template slot-scope="scope">
                            <el-button
                                    size="mini"
                                    @click="readArticle(scope.$index, scope.row)">查看</el-button>
                            <el-button
                                    size="mini"
                                    @click="sendMessage(scope.$index, scope.row)">通知</el-button>
                        </template>
                    </el-table-column>
                    <el-table-column
                            label=""
                            width="50">
                    </el-table-column>
                </el-table>
                </el-tab-pane>
                <el-tab-pane label="管理员用户" name="second">
                    <el-table
                            stripe
                            :data="adminUserData"
                            style="width: 100%;">
                        <el-table-column
                                label=""
                                width="50">
                        </el-table-column>
                        <el-table-column
                                style="margin-left: 50px!important;"
                                prop="adminUserNickname"
                                label="管理员昵称"
                                width="180">
                        </el-table-column>
                        <el-table-column
                                prop="adminUserName"
                                label="管理员名"
                                width="200">
                        </el-table-column>
                        <el-table-column
                                prop="adminUserSex"
                                label="性别"
                                width="100">
                        </el-table-column>
                        <el-table-column
                                prop="adminUserID"
                                label="ID"
                                width="150">
                        </el-table-column>
                        <el-table-column
                                prop="adminUserPhone"
                                label="电话">
                        </el-table-column>
                        <el-table-column
                                prop="adminUserQQ"
                                label="QQ">
                        </el-table-column>
                        <el-table-column
                                prop="duties"
                                label="负责模块">
                        </el-table-column>
                        <el-table-column
                                prop="note"
                                label="备注">
                        </el-table-column>
                        <el-table-column
                                label=""
                                width="50">
                        </el-table-column>
                    </el-table>
                </el-tab-pane>
            </el-tabs>
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
        name: "UserList",
        data(){
            return{
                activeName:'first',
                userData: [
                    {
                    userName:'爱吃萝卜的熊',
                    userSex:'男',
                    userID:'17328',
                    userLevel:'LV5',
                    registrationTime:'2020-4-25',
                    articleNumber:'13',
                    likenum:'57',
                    fansNumber:'21',
                    reportNumber:'3'
                }, {
                    userName:'提拉米猪',
                    userSex:'女',
                    userID:'354651',
                    userLevel:'LV9',
                    registrationTime:'2020-4-17',
                    articleNumber:'31',
                    likenum:'123',
                    fansNumber:'57',
                    reportNumber:'1'
                }, {
                    userName:'伏特加熊',
                    userSex:'男',
                    userID:'564657',
                    userLevel:'LV4',
                    registrationTime:'2020-4-17',
                    articleNumber:'21',
                    likenum:'23',
                    fansNumber:'7',
                    reportNumber:'0'
                }, {
                    userName:'沐风',
                    userSex:'男',
                    userID:'564657',
                    userLevel:'LV4',
                    registrationTime:'2020-4-17',
                    articleNumber:'21',
                    likenum:'23',
                    fansNumber:'7',
                    reportNumber:'0'
                }, {
                    userName:'方鸿渐',
                    userSex:'男',
                    userID:'564657',
                    userLevel:'LV9',
                    registrationTime:'2020-4-17',
                    articleNumber:'21',
                    likenum:'23',
                    fansNumber:'7',
                    reportNumber:'3'
                }, {
                    userName:'笑歌',
                    userSex:'女',
                    userID:'321657',
                    userLevel:'LV11',
                    registrationTime:'2020-4-10',
                    articleNumber:'35',
                    likenum:'223',
                    fansNumber:'67',
                    reportNumber:'2'
                }],
                adminUserData: [
                    {
                    adminUserNickname:'爱吃萝卜的熊',
                    adminUserName:'萝卜熊',
                    adminUserSex:'男',
                    adminUserID:'17328',
                    adminUserPhone:'17326588888',
                    adminUserQQ:'1798160000',
                    duties:'管理服务器',
                    note:'服务器实名认证者'
                }, {
                    adminUserNickname:'提拉米猪',
                    adminUserName:'提拉米猪',
                    adminUserSex:'女',
                    adminUserID:'645328',
                    adminUserPhone:'-',
                    adminUserQQ:'35135431320',
                    duties:'经费管理',
                    note:'主要经费投入都是在服务器和云数据库上'
                }, {
                    adminUserNickname:'大白鹅',
                    adminUserName:'小明君',
                    adminUserSex:'男',
                    adminUserID:'6546513',
                    adminUserPhone:'6543215464',
                    adminUserQQ:'-',
                    duties:'审核文章',
                    note:'游击队员，负责定期检查文章'
                }, {
                    adminUserNickname:'马铃鼠',
                    adminUserName:'王小某某',
                    adminUserSex:'男',
                    adminUserID:'5461513',
                    adminUserPhone:'17326588888',
                    adminUserQQ:'1798160000',
                    duties:'运维工程师',
                    note:'现在在研究Docker，为服务器迁移做准备'
                }, {
                    adminUserNickname:'绵羊',
                    adminUserName:'绵羊',
                    adminUserSex:'女',
                    adminUserID:'17353428',
                    adminUserPhone:'-',
                    adminUserQQ:'-',
                    duties:'审核文章',
                    note:'负责定期检查文章'
                }],
                totalPage:70
            }
        },methods:{
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
            },
            readArticle:function (index, row) {
                console.log(row.userID);
                Vue.prototype.$ArticleID=this.getLatestArticles(row.userID);
                Vue.prototype.$AuthorID=row.userID;
                EventBus.$emit('ReadArticle',row.ID)
            },
            getLatestArticles:function (id) {
                // 获取用户最新的文章id，给文章详细页渲染用
                console.log(id);
                return 1732;
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
