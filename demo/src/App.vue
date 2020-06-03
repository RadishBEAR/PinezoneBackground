<template>
  <div id="app">

    <div v-if="!this.isLogin">
      <loginPage></loginPage>
    </div>

    <div id="mainPage" v-if="this.isLogin">
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

  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import TopNavigation from './components/TopNavigation/TopNavigation'
import SideNavigation from './components/SideNavigation/SideNavigation'
import daily from './components/MainContainer/Daily/daily'
import { EventBus } from './tools/EventBus'
import loginPage from './components/MainContainer/LoginPage/loginPage'

export default {
  name: 'App',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    HelloWorld,
    TopNavigation,
    SideNavigation,
    daily,
    // eslint-disable-next-line vue/no-unused-components
    loginPage
  },
  methods:{
    getResolution:function () {
      var width=document.body.clientWidth;
      // eslint-disable-next-line no-empty
      if((width>1600)){
      }
      else if((width<1600)&&(width>1500)){
        document.getElementsByTagName('body')[0].style.zoom=0.9;
      }
      else if((width<1500)&&(width>1350)){
        document.getElementsByTagName('body')[0].style.zoom=0.75;
      }
      else if((width<1350)&&(width>1270)){
        document.getElementsByTagName('body')[0].style.zoom=0.67;
      }
      else{
        document.getElementsByTagName('body')[0].style.zoom=0.67;
      }
    }
  },
  data(){
    return{
      drawer:false,
      isLogin:false
    }
  },
  mounted() {

    this.getResolution();



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
    });
    EventBus.$on('login',()=>{
      this.isLogin=true;
      this.$router.push('/ArticleData');
    });
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
#mainPage{
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
