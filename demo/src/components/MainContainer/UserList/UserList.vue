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
                            label="年级">
                    </el-table-column>
                    <el-table-column
                            prop="registrationTime"
                            label="注册时间">
                    </el-table-column>
                    <el-table-column
                            prop="profile"
                            label="个性签名">
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
    // import Vue from 'vue'
    import axios from 'axios'
    import global from '../../../tools/global'
    import { EventBus } from '../../../tools/EventBus'
    export default {
        name: "UserList",
        data(){
            return{
                activeName:'first',
                userData: [],
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
                pageNumber:1,   // 页码
                pageSize:7, // 每页条数
                totalPage:0
            }
        },
        methods:{
            handleCurrentChange(val) {
                this.pageNumber=val;
                this.getUserList();
            },
            readArticle:function (index, row) {
                console.log(row.userID);
                global.setArticleID(-1);
                // Vue.prototype.$AuthorID=row.userID;
                global.setAuthorID(row.userID);
                EventBus.$emit('ReadArticle',row.ID)
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
            getUserList:function () {
                var URL=global.getAPIurl()+'/v1/list/usersByPage?roleId=1'+'&pageNum='+this.pageSize+'&page='+this.pageNumber;
                // eslint-disable-next-line no-unused-vars
                var that=this;
                axios.get(URL).then(function (res) {
                        that.userData=[];
                        that.totalPage=(res.data.UserNum/that.pageSize)*10;
                        for(var index in res.data.userEntities){
                            var msg=res.data.userEntities[index];
                            var item={
                                        userName:msg.name,
                                        userSex:msg.sex==0?'女':'男',
                                        userID:msg.id,
                                        userLevel:msg.level,
                                        registrationTime:msg.date,
                                        profile:msg.profile==null?'这个人还没有写签名嗷！':msg.profile
                            }
                            that.userData.push(item);
                        }
                    }
                ).catch(function (error) {
                    console.log(error)
                })
            }
        },
        mounted() {
            this.getUserList();
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
