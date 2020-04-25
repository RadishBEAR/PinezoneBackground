<template>
    <div id="mainContainer">
        <component :is="content"/>
    </div>
</template>

<script>
    import { EventBus } from '../../tools/EventBus'
    import SystemInformation from '../../components/MainContainer/SystemInformation/SystemInformation'
    import UserList from '../../components/MainContainer/UserList/UserList'
    import ArticleList from '../../components/MainContainer/ArticleList/ArticleList'
    export default {
        name: "MainContainer",
        components:{
            SystemInformation,
            UserList,
            ArticleList
        },
        data(){
            return{
                content:'SystemInformation'
            }
        },
        mounted() {
            EventBus.$on('selectFunctionModule',(msg)=>{
                console.log("点击"+msg+"模块");
                switch (msg) {
                    case '用户列表':
                        this.content='UserList';
                        break;
                    case '系统信息':
                        this.content='SystemInformation';
                        break;
                    case '文章列表':
                        this.content='ArticleList';
                        break;
                }
            })
        }
    }
</script>

<style scoped>
#mainContainer{
    width: 100%;
    height: 100%;
    background-color: #fbfbfb;
}
</style>
