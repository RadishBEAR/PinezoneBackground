/* eslint-disable*/
import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router);

import SystemInformation from '../components/MainContainer/SystemInformation/SystemInformation'
import UserList from '../components/MainContainer/UserList/UserList'
import ArticleList from '../components/MainContainer/ArticleList/ArticleList'
import Announcement from '../components/MainContainer/Announcement/Announcement'
import Article from '../components/MainContainer/Article/Article'
import ArticalData from '../components/MainContainer/ArticalData/ArticalData'
import UserData from '../components/MainContainer/UserData/UserData'
export default [
    {
        path:'/SystemInformation',
        component: SystemInformation
    },
    {
        path:'/Announcement',
        component: Announcement
    },
    {
        path:'/ArticleData',
        component: ArticalData
    },
    {
        path:'/UserData',
        component: UserData
    },
    {
        path:'/UserList',
        component: UserList
    },
    {
        path:'/ArticleList',
        component: ArticleList
    },
    {
        path:'/Article',
        component: Article
    }
];

