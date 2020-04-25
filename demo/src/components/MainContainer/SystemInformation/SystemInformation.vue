<template>
    <div id="sysInf">

        <div id="sysInfLeftPart">

            <div id="relatedWebsites">
                    <p
                            style="text-align: left;
                        margin-top: 0;
                        margin-bottom: 15px;
                        padding-top: 30px;
                        padding-left: 50px;
                        font-size: 25px;
                        font-weight: 600;">
                        相关网站
                    </p>
                        <div id="WebsitesTable">
                            <happy-scroll hide-horizontal color="rgba(0,0,0,0.5)" style="height: 100%;width: 100%">
                                <el-table
                                    :data="tableData"
                                    style="width: 100%">
                                <el-table-column
                                        prop="url"
                                        label="网站"
                                        width="350">
                                </el-table-column>
                                <el-table-column
                                        prop="title"
                                        label="标题"
                                        width="230">
                                </el-table-column>
                                <el-table-column
                                        prop="note"
                                        label="备注">
                                </el-table-column>
                            </el-table>
                            </happy-scroll>
                        </div>
                </div>

            <div id="aboutSystem">
                <p
                        style="text-align: left;
                        margin-top: 0;
                        margin-bottom: 15px;
                        padding-top: 30px;
                        padding-left: 50px;
                        font-size: 25px;
                        font-weight: 600;">
                    系统服务
                </p>
                <div style="height: 75%;margin-left: 50px;margin-right: 50px">
                    <div style="height: 70%;width: 100%" class="sysInfItemCard">
                        <div style="float:left;width: 40%;height: 100%;text-align: left">
                            <div class="sysInfItemLittleCard">
                                <p class="sysInfItemTitle">服务商 / 服务器类型：</p>
                                <p class="sysInfItem" style="color: #ff702f">阿里云轻量服务器</p>
                            </div>
                            <div class="sysInfItemLittleCard">
                                <p class="sysInfItemTitle">公网IP：</p>
                                <p class="sysInfItem">123 . 57 . 00 . 000</p>
                            </div>
                            <div class="sysInfItemLittleCard">
                                <p class="sysInfItemTitle">服务器后台管理：</p>
                                <p class="sysInfItem">swas.console.aliyun.com</p>
                            </div>
                            <div class="sysInfItemLittleCard">
                                <p class="sysInfItemTitle">服务器到期时间：</p>
                                <p class="sysInfItem">2021年3月1日</p>
                            </div>
                        </div>
                        <div style="width: 50%;height: 100%;float:left;text-align: left">
                            <div class="sysInfItemLittleCard">
                                <p class="sysInfItemTitle">域名服务商：</p>
                                <p class="sysInfItem" style="color: #ff702f">阿里云</p>
                            </div>
                            <div class="sysInfItemLittleCard">
                                <p class="sysInfItemTitle">绑定域名：</p>
                                <p class="sysInfItem">pinezone.space</p>
                            </div>
                            <div class="sysInfItemLittleCard">
                                <p class="sysInfItemTitle">域名后台管理：</p>
                                <p class="sysInfItem">dc.console.aliyun.com</p>
                            </div>
                            <div class="sysInfItemLittleCard">
                                <p class="sysInfItemTitle">域名到期时间：</p>
                                <p class="sysInfItem">2021年5月5日</p>
                            </div>
                        </div>
                    </div>
                    <div style="height: 30%;">
                        <AppCard
                                appType="Tomcat"
                                appName="Tomcat 9"
                                appAddress="/ect/httpd"
                        ></AppCard>
                        <AppCard
                                style="margin-left: 130px"
                                appType="java"
                                appName="Java 13"
                                appAddress="/usr/local/java"
                        ></AppCard>
                        <AppCard
                                style="margin-left: 130px"
                                appType="mysql"
                                appName="MySQL 5.6"
                                appAddress="/var/lib/mysql"
                        ></AppCard>
                        <AppCard
                                style="margin-left: 130px"
                                appType="pinezone"
                                appName="Pinezone 1.0"
                                appAddress="/yjdata/www/wordpress"
                        ></AppCard>
                    </div>
                </div>
            </div>
        </div>

        <div id="sysInfRightPart">
            <p
                    style="text-align: left;
                        margin-top: 0;
                        margin-bottom: 15px;
                        padding-top: 30px;
                        padding-left: 50px;
                        font-size: 25px;
                        font-weight: 600;">
                应用信息
            </p>
            <div style="height: 60px;width: 300px;margin-left: 50px;margin-top: 20px;">
                <div style="height: 60px;width: 60px;float: left;">
                    <img src="../../../assets/Pinezone.png" style="width: 80%;height: 100%;">
                </div>
                <div style="height: 60px;width: 200px;float: left">
                    <div style="height: 30px;
                    width: 200px;
                    text-align: left;
                    font-size: 20px;
                    margin-top: 5px;
                    font-weight: 600;
                    color: #5d4037;
                    float: top">
                        松果生活
                    </div>
                    <div style="height: 30px;
                    width: 200px;
                    text-align: left;
                    font-size: 16px;
                    color: #5d4037;
                    float: top">
                        你值得不一样的福大生活
                    </div>
                </div>
            </div>
            <div style="width: 80%;height: 70%;margin-top: 40px;margin-left: 50px;">
                <div style="width: 100%;height: 30px;text-align: left">
                    <span style="color: #8f99a5">Android版本：</span>
                    <span style="font-weight: 600">Alpha 0.7</span>
                </div>
                <div style="width: 100%;height: 30px;text-align: left">
                    <span style="color: #8f99a5">IOS版本：</span>
                    <span style="font-weight: 600">Alpha 0.7</span>
                </div>
                <div style="width: 100%;height: 30px;text-align: left">
                    <span style="color: #8f99a5">MySQL版本号：</span>
                    <span style="font-weight: 600">5.6</span>
                </div>
                <div style="width: 100%;height: 30px;text-align: left">
                    <span style="color: #8f99a5">Tomcat版本号：</span>
                    <span style="font-weight: 600">9</span>
                </div>
                <div style="width: 100%;height: 30px;text-align: left">
                    <span style="color: #8f99a5">最大并发量：</span>
                    <span style="font-weight: 600">150</span>
                </div>
                <div style="width: 100%;height: 30px;text-align: left">
                    <span style="color: #8f99a5">后台系统：</span>
                    <span style="font-weight: 600">Linux-CentOS7</span>
                </div>
<!--                <div style="width: 100%;text-align: left;margin-top: 30px">-->
<!--                    <span style="color: #8f99a5">相关：</span>-->
<!--                    <span>云数据库与服务器分离。云服务器是学生套餐，有流量限制，要时刻关注流量状态。域名后缀取space，域名商为阿里，按年续费。-->
<!--                        后端技术栈为Spring+Hibernate，前后端通过ajax连接，json传输</span>-->
<!--                </div>-->

            </div>
        </div>

    </div>

</template>

<script>
    import AppCard from '../SystemInformation/AppCard'
    export default {
        name: "SystemInformation",
        components:{
            AppCard
        },
        data() {
            return {
                tableData: [{
                    url: 'www.pinezone.space',
                    title: '松果生活官网 ',
                    note: '大本营'
                }, {
                    url: 'www.pinezone.space/background',
                    title: '松果生活后台',
                    note: '就是这里'
                }, {
                    url: 'github.com/Pinezone/pinezone',
                    title: 'GitHub仓库',
                    note: '包含工程文件以及各种文档'
                }, {
                    url: 'www.cnblogs.com/sgrj',
                    title: '博客园地址',
                    note: '松果星球委员会'
                },
                    {
                        url: 'swas.console.aliyun.com',
                        title: '服务器后台',
                        note: '记得关注服务器流量使用情况 '
                    },
                    {
                        url: 'dc.console.aliyun.com',
                        title: '域名后台管理网站',
                        note: '记得提取给域名续费'
                    },
                    {
                        url: 'github.com/tangdaohai/vue-happy-scroll',
                        title: '滚动条组件',
                        note: '里面有组件详细用法，维护时参考'
                    }
                ]
            }
        }
    }
</script>

<style scoped>
#sysInf{
    width: 100%;
    height: 100%;
}
    #sysInfLeftPart{
        width: 70%;
        height: 95%;
        margin-left: 20px;
        margin-top: 20px;
        float: left;
    }
#sysInfRightPart{
    width: 27%;
    height: 95%;
    box-shadow: 1px 1px 3px #888888;
    margin-left: 20px;
    margin-top: 20px;
    float: left;
}
    #relatedWebsites{
        margin-top: 0;
        width: 100%;
        height: 49%;
        box-shadow: 1px 1px 3px #888888;
    }
    #aboutSystem{
        width: 100%;
        height: 49%;
        margin-top: 20px;
        box-shadow: 1px 1px 3px #888888;
    }
    #WebsitesTable{
        margin-left: 50px;
        margin-bottom: 20px;
        margin-right: 50px;
        height: 65%;
    }
#WebsitesTable>>>.happy-scroll-content{
    width: 100%
}
.sysInfItemCard{
    font-size: 16px;
}
    .sysInfItemTitle{
        float: left;
        color: #999999;
    }
    .sysInfItem{
        color: #333333;
        float: left;
    }
    .sysInfItemCard{
        width: 100%;
    }
.sysInfItemLittleCard{
    width: 100%;
    height: 30px;
    float: left;
    margin-top: 10px;
}
</style>
