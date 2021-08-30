//引入并声明使用路由插件
import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Serach from '@/pages/Search'

Vue.use(VueRouter);

//创建并向外暴露路由器对象
export default new VueRouter({
    mode: 'history',
    routes: [{ //配置路由
        path: '/home',
        component: Home
    }, {
        path: '/login',
        component: Login,
        //meta 路由对象当中的元配置项，可以配置我们所需要的任何数据
        meta: {
            isHideFooter: true
        },
    }, {
        path: '/register',
        component: Register,
        meta: {
            isHideFooter: true
        },
    }, {
        path: '/search/:keyword',
        name: "search",
        component: Serach,
        // props: //这个props是我们在路由组建当中操作params参数和query参数的简化方法
        // props:true, //会默认的把传递过来的params参数，额外的映射为组件当中的属性去操作
        //props: { 'username': 'sunjun' }   //传递一个对象，传递的是额外你需要的静态数据,不需要就不用
        props: (route) => {
            return { keyword: route.params.keyword, keyword1: route.query.keyword1, 'username': 'sunjun' }
        }
    }, {
        path: '/',
        redirect: '/home'
    }],
});