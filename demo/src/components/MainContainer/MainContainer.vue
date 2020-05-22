<template>
    <div id="mainContainer">
        <component :is="content"/>
    </div>
</template>

<script>

    import SystemInformation from '../../components/MainContainer/SystemInformation/SystemInformation'
    import UserList from '../../components/MainContainer/UserList/UserList'
    import ArticleList from '../../components/MainContainer/ArticleList/ArticleList'
    import Announcement from '../../components/MainContainer/Announcement/Announcement'
    import Article from '../../components/MainContainer/Article/Article'
    import ArticalData from '../../components/MainContainer/ArticalData/ArticalData'
    import UserData from '../../components/MainContainer/UserData/UserData'
    export default {
        name: "MainContainer",
        components:{
            SystemInformation,
            UserList,
            ArticleList,
            Announcement,
            Article,
            ArticalData,
            UserData
        },
        data(){
            return{
                content:'SystemInformation'
            }
        },
        mounted() {

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
