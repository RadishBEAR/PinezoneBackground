<template>
    <div id="announcement">
        <div id="announcementLeft">
            <div id="momentumAnnouncement">
                <p
                        style="text-align: left;
                        margin-top: 0;
                        margin-bottom: 15px;
                        padding-top: 30px;
                        padding-left: 50px;
                        color: #656565;
                        font-size: 25px;
                        font-weight: 600;">
                    待发公告
                </p>
                <div style="width: 100%;height: 80%">
                    <happy-scroll hide-horizontal color="rgba(0,0,0,0.5)" style="height: 100%;width: 100%;">
                           <AnnouncementCard
                                   v-for="(item,index) in this.momentumAnnouncement"
                                   :key="index"
                                   :headPortrait="item.headPortrait"
                                   :title="item.title"
                                   :message="item.message"
                                   :releaseTime="item.releaseTime"
                                   :author="item.author"
                           ></AnnouncementCard>

                    </happy-scroll>
                </div>

            </div>
            <el-divider></el-divider>
            <div id="announcementTextarea">
                <el-input
                        type="textarea"
                        rows="12"
                        placeholder="请输入内容"
                        autosize
                        style="margin-top: 0px;z-index: 0"
                        v-model="textarea">
                </el-input>
                <el-button type="primary"
                           style="float: right;
                   z-index: 10;
                   position:relative;
                   margin-top: -50px;
                   margin-right: 15px;"
                           @click="send"
                >
                    定期发送
                </el-button>
                <div class="block">
                    <el-date-picker
                            v-model="time"
                            type="datetime"
                            placeholder="选择发布时间"
                            style="float: right;
                                z-index: 10;
                                position:relative;
                                margin-top: -50px;
                                margin-right: 130px;"
                            default-time="12:00:00">
                    </el-date-picker>
                </div>
            </div>
        </div>
        <div id="announcementRight">
            <p
                    style="text-align: left;
                        margin-top: 0;
                        margin-bottom: 15px;
                        padding-top: 30px;
                        padding-left: 50px;
                        color: #656565;
                        font-size: 25px;
                        font-weight: 600;">
                公告历史
            </p>
            <div style="width: 100%;height: 80%">
                <happy-scroll hide-horizontal color="rgba(0,0,0,0.5)" style="height: 100%;width: 100%;">
                    <AnnouncementCard
                            v-for="(item,index) in this.announcementHistory"
                            :key="index"
                            :headPortrait="item.headPortrait"
                            :message="item.message"
                            :title="item.title"
                            :releaseTime="item.releaseTime"
                            :author="item.author"
                    ></AnnouncementCard>

                </happy-scroll>
            </div>
        </div>
    </div>
</template>

<script>
    import AnnouncementCard from '../Announcement/AnnouncementCard'
    import axios from 'axios'
    import Vue from 'vue'
    export default {
        name: "Announcement",
        data(){
            return{
                textarea:'',
                time:'',
                momentumAnnouncement:[],
                momentumAnnouncementSimulation:[
                    {
                        title:"停机维护通知",
                        message:"2020年5月17日3点0分将进行停机系统维护",
                        releaseTime:"2020/5/13 22:00",
                        author:"大白鹅",
                        headPortrait:"http://111.230.173.4:8080/img/%E5%A4%A7%E7%99%BD%E9%B9%85.png"
                    },
                    {
                        title:"不停机维护通知",
                        message:"2020年5月23日3点0分将进行不停机系统维护，会带来5分钟的网络不稳定",
                        releaseTime:"2020/5/21 20:00",
                        author:"橘猫",
                        headPortrait:"http://111.230.173.4:8080/img/%E6%A9%98%E7%8C%AB.png"
                    }, {
                        title:"停机维护通知",
                        message:"2020年5月24日3点将进行数据库迁移，会带来2个小时系统维护",
                        releaseTime:"2020/5/20 19:00",
                        author:"黄鸭",
                        headPortrait:"http://111.230.173.4:8080/img/%E9%BB%84%E9%B8%AD.png"
                    }, {
                        title:"松果生活官网上线",
                        message:"2020年5月日25点松果生活官网上线，欢迎关注",
                        releaseTime:"2020/5/23 22:00",
                        author:"咕咕",
                        headPortrait:"http://111.230.173.4:8080/img/%E5%92%95%E5%92%95.png"
                    }, {
                        title:"松果生活月报出炉",
                        message:"2020年5月27日将发布松果生活实行月报，欢迎关注",
                        releaseTime:"2020/5/25 22:00",
                        author:"大白鹅",
                        headPortrait:"http://111.230.173.4:8080/img/%E5%A4%A7%E7%99%BD%E9%B9%85.png"
                    },
                ],
                announcementHistory:[],
                announcementHistorySimulation:[
                    {
                        title:"停机维护通知",
                        message:"2020年4月17日3点0分将进行停机系统维护",
                        releaseTime:"2020/4/13 22:00",
                        author:"黄鸭",
                        headPortrait:"http://111.230.173.4:8080/img/%E9%BB%84%E9%B8%AD.png"
                    },
                    {
                        title:"部署通知",
                        message:"2020年4月23日3点0分将部署松果生活后台系统",
                        releaseTime:"2020/4/21 20:00",
                        author:"橘猫",
                        headPortrait:"http://111.230.173.4:8080/img/%E6%A9%98%E7%8C%AB.png"
                    }, {
                        title:"部署通知",
                        message:"2020年4月24日3点将部署后端系统",
                        releaseTime:"2020/4/20 19:00",
                        author:"大白鹅",
                        headPortrait:"http://111.230.173.4:8080/img/%E5%A4%A7%E7%99%BD%E9%B9%85.png"
                    }, {
                        title:"停机维护通知",
                        message:"2020年4月日27点将更新系统数据库",
                        releaseTime:"2020/4/23 22:00",
                        author:"咕咕",
                        headPortrait:"http://111.230.173.4:8080/img/%E5%92%95%E5%92%95.png"
                    }, {
                        title:"不停机维护通知",
                        message:"2020年4月27日将进行数据库维护",
                        releaseTime:"2020/4/25 22:00",
                        author:"大白鹅",
                        headPortrait:"http://111.230.173.4:8080/img/%E5%A4%A7%E7%99%BD%E9%B9%85.png"
                    },
                ],
            }
        },
        components:{
            AnnouncementCard
        },
        mounted() {
            // this.momentumAnnouncement=this.momentumAnnouncementSimulation;
            // this.announcementHistory=this.announcementHistorySimulation;    // 接口来了就把这两段关了
            this.getAnnouncement();
        },
        methods:{
            send:function () {
                if(this.textarea===''){
                    this.$alert('请输入公告内容', '发送失败', {
                        confirmButtonText: '确定',
                        // eslint-disable-next-line no-unused-vars
                        callback: action => {
                            this.$message.error({
                                message: `公告发送失败`
                            });
                        }
                    });
                    return;
                }
                if(this.time===''){
                    this.$alert('请选择公告发布日期', '发送失败', {
                        confirmButtonText: '确定',
                        // eslint-disable-next-line no-unused-vars
                        callback: action => {
                            this.$message.error({
                                message: `公告发送失败`
                            });
                        }
                    });
                }else {
                    this.$prompt('请输入公告标题', '提示', {
                        confirmButtonText: '确定',
                        cancelButtonText: '取消'
                    }).then(({ value }) => {
                        this.$message({
                            type: 'success',
                            message: '将于指定日期发送公告'
                        });
                        // 这里加要做什么操作
                        console.log(value);
                    }).catch(() => {
                        this.$message({
                            type: 'info',
                            message: '取消删除'
                        });
                    });
                }
            },
            // eslint-disable-next-line no-unused-vars
            resolvingDate:function(date){
                // 格式化日期函数
                let d = new Date(date);
                let month = (d.getMonth() + 1) < 10 ? '0'+(d.getMonth() + 1) : (d.getMonth() + 1);
                let day = d.getDate()<10 ? '0'+d.getDate() : d.getDate();
                let hours = d.getHours()<10 ? '0'+d.getHours() : d.getHours();
                let min = d.getMinutes()<10 ? '0'+d.getMinutes() : d.getMinutes();
                let times=d.getFullYear() + '-' + month + '-' + day + ' ' + hours + ':' + min;
                return times
            },
            getAnnouncement:function () {
                // 获取公告列表方法
                // 加载的时候调用一次，修改/发布公告的时候调用一次
                var that=this;
                var URL=Vue.prototype.$APIurl+'/v1/notices';
                // console.log(URL)
                // eslint-disable-next-line no-unused-vars
                var flagOfHistory=2;    // 历史公告标记位
                // eslint-disable-next-line no-unused-vars
                var flagOfWait=1;   // 待发公告标记位

                axios.get(URL).then(function(res) {
                    that.res=res.data;  // 这就是api返回的结果了
                    console.log(res.data)
                    var iOfH=0;
                    var iOfM=0;
                    for (var i in res.data){
                        var itemOld=res.data[i];
                        var itemNew={
                            title:itemOld.title,
                            message:itemOld.content,
                            releaseTime:that.resolvingDate(itemOld.date),
                            author:"",   // 要改
                            headPortrait:""    // 要改
                        };
                        if(itemOld.state===flagOfHistory){
                            that.announcementHistory.push(itemNew);
                            that.getNameAndHead(itemOld['uid'],iOfH).then((result)=>{
                                // console.log(result);
                                that.announcementHistory[result['index']]['headPortrait']=result['head'];
                                that.announcementHistory[result['index']]['author']=result['name']
                            })
                            iOfH=iOfH+1;
                        }
                        if(itemOld.state===flagOfWait){
                            that.momentumAnnouncement.push(itemNew);
                            that.getNameAndHead(itemOld['uid'],iOfM).then((result)=>{
                                console.log(result);
                                that.momentumAnnouncement[result['index']]['headPortrait']=result['head'];
                                that.momentumAnnouncement[result['index']]['author']=result['name']
                            })
                            iOfM++;
                        }
                    }
                }).catch(function (error) {
                    console.log(error)
                    that.res=error;
                })
            },
            getNameAndHead:async function (id,index) {
                // 根据用户id获取头像和用户名的方法
                var URL = Vue.prototype.$APIurl + '/v1/user/picture' + '?uid=' + id;
                // console.log(URL)
                var path;
                await axios.get(URL).then(function (res) {
                    // console.log(res.data['path'])
                    path=res.data['path'];
                }).catch(function (error) {
                    console.log(error)
                });
                URL = Vue.prototype.$APIurl + '/v1/user' + '?id=' + id;
                // console.log(URL)
                var name;
                await axios.get(URL).then(function (res) {
                    // console.log(res.data['path'])
                    name=res.data['name'];
                }).catch(function (error) {
                    console.log(error)
                });
                return {
                    head:path,
                    name:name,
                    index:index
                };
            }
        }
    }
</script>

<style scoped>
#announcement{
    width: 100%;
    height: 100%;
}

#announcement>>>.el-divider{
    margin-bottom: 0;
    margin-top: 0;
}
#announcement>>>.el-divider--horizontal{
    margin-bottom: 0;
    margin-top: 0;
}
#announcement>>>.happy-scroll-content{
    display:block!important;
}
#announcement>>>.happy-scroll-container .happy-scroll-content{
    display:block!important;
}
    #announcementLeft{
        width: 70%;
        height: 95%;
        margin-left: 1%;
        margin-top: 1%;
        float: left;
        box-shadow: 1px 1px 3px #888888;
    }

    #momentumAnnouncement{
        width: 100%;
        height: 70%;
        float: top;
    }

    #announcementTextarea{
        width: 100%;
        height: 30%;
        float: top;
    }

#announcementTextarea>>> .el-textarea{
    height: 100%!important;
    margin-top: 0px!important;
}
#announcementTextarea>>>.el-textarea__inner{
    height: 100%!important;
}
#announcementRight{
    width: 27%;
    height: 95%;
    margin-left: 1%;
    margin-top: 1%;
    box-shadow: 1px 1px 3px #888888;
    float: left;
}
</style>
