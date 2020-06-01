<template>
  <div id="app">
    <el-container style="height: 100%">

      <!--顶部导航-->
      <el-header style="padding: 0;height: 50px;z-index: 100">
        <TopNavigation></TopNavigation>
      </el-header>

      <el-container style="height: 100%">

        <!--侧边导航-->
        <el-aside width="200px" style="height: 100%;" >
          <SideNavigation></SideNavigation>
        </el-aside>

        <!--主容器-->
        <el-main style="padding: 0">
            <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
    <el-drawer
            direction="ltr"
            :show-close="false"
            :visible.sync="drawer"
            size="480px">
      <div style="width: 100%;height: 100%">
        <daily></daily>
      </div>
    </el-drawer>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import TopNavigation from './components/TopNavigation/TopNavigation'
import SideNavigation from './components/SideNavigation/SideNavigation'
import daily from './components/MainContainer/Daily/daily'
import { EventBus } from './tools/EventBus'

export default {
  name: 'App',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    HelloWorld,
    TopNavigation,
    SideNavigation,
    daily
  },
  data(){
    return{
      drawer:false
    }
  },
  mounted() {
    EventBus.$on('selectFunctionModule',(msg)=>{
      console.log("点击"+msg+"模块");
      switch (msg) {
        case '用户列表':
          this.$router.push('/UserList');
          break;
        case '系统信息':
          this.$router.push('/SystemInformation');
          break;
        case '文章列表':
          this.$router.push('/ArticleList');
          break;
        case '公告系统':
          this.$router.push('/Announcement');
          break;
        case '文章数据':
          this.$router.push('/ArticleData');
          break;
        case '用户数据':
          this.$router.push('/UserData');
          break;
        case '松果日报':
          this.drawer = true;
          break;
      }
    });
    EventBus.$on('ReadArticle',(msg)=>{
      this.$router.push('/Article');
      console.log(msg);
    })
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}
.el-drawer{
    background-color: #fcfafa!important;
  }
.el-drawer__header{
  margin-bottom: 0px!important;
  padding-top: 0px!important;
}
</style>
