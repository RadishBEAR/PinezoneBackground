<template>
  <div id="app">
    <div id="LoginForm">
        <p
                style="
                padding-top: 70px;
                font-size: 35px;
                font-weight: 700;
                padding-bottom: 0;
                margin-bottom: 0px;
                color: #644940
        ">PINEZON</p>
        <p
                style="
                margin-top: 10px;
                padding-top: 0px;
                font-weight: 600;
                color: #644940"
        >background</p>
      <div>
        <input type="text"
               placeholder="用户名"
               style="width: 320px;
               font-size: 16px;
               color: #999898;
               margin-top: 50px;
               outline:medium;
               border: none"
               v-model="adminName">
        <div style="width: 320px;height: 1px;background-color: #b8aba6;margin: 10px auto;"></div>
      </div>
      <div>
        <input type="password"
               placeholder="密码"
               style="width: 320px;
               font-size: 16px;
               color: #999898;
               margin-top: 30px;
               outline:medium;
               border: none"
               v-model="password">
        <div style="width: 320px;height: 1px;background-color: #b8aba6;margin: 10px auto;"></div>
      </div>
      <div style="width: 320px;height: 50px;margin: 50px auto">
        <el-button
                round
                @click="login"
                style="border: 1px solid #88736c!important;color: #88736c!important;float: left">
          圆角按钮
        </el-button>
        <p style="float: right;margin-top: 6px;color: #88736c">申请管理员账号</p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {

  },
  data(){
    return{
      adminName:'',
      password:''
    }
  },
  methods:{
    login:function () {
      if((this.adminName==='admin')&&(this.password==='123456')){
        window.location.href="http://radishbear.top/PinezonBackground/";
      }
    }
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
  margin-top: 60px;
}
  #LoginForm{
    width: 430px;
    height: 530px;
    margin: 150px auto;
    box-shadow: 1px 1px 3px #888888;
  }
  #LoginForm>>>.el-button{

  }
</style>
