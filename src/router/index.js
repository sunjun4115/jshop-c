//引入并声明使用路由插件
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);


import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Serach from '@/pages/Search'



// VueRouter 是路由器对象的构造函数
// this.$router.push 调用的是路由器对象的方法，这个方法并不是路由器实例化对象的方法，而是这个对象原型的方法
// 这个实例化对象原型的方法 就是VueRouter的显式原型的方法

// this.$router是实例化对象  是VueRouter的实例化对象

//将原有的push方法地址，保存起来，后期还能拿到原来的
const originPush = VueRouter.prototype.push
const originReplace = VueRouter.prototype.replace
    //可以大胆的去修改原型的push，让原型的push指向另外一个函数
VueRouter.prototype.push = function(location, onResolved, onRejected) {
    //location就是我们调用 this.$router.push，传递过来的对象
    // {
    //   name: "search",
    //   params: { keyword: this.keyword || undefined},
    //   query: { keyword1: this.keyword.toUpperCase() },
    // }
    if (onResolved === undefined && onRejected === undefined) {
        //证明调用的时候只传递了个匹配路由对象，没有传递成功或者失败的回调
        return originPush.call(this, location).catch(() => {})
    } else {
        //证明调用的时候传递了成功或者失败的回调，或者都有
        return originPush.call(this, location, onResolved, onRejected)
    }
}


VueRouter.prototype.replace = function(location, onResolved, onRejected) {
    //location就是我们调用 this.$router.push，传递过来的对象
    // {
    //   name: "search",
    //   params: { keyword: this.keyword || undefined},
    //   query: { keyword1: this.keyword.toUpperCase() },
    // }
    if (onResolved === undefined && onRejected === undefined) {
        //证明调用的时候只传递了个匹配路由对象，没有传递成功或者失败的回调
        return originReplace.call(this, location).catch(() => {})
    } else {
        //证明调用的时候传递了成功或者失败的回调，或者都有
        return originReplace.call(this, location, onResolved, onRejected)
    }
}



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
        path: '/search/:keyword?',
        name: "search",
        component: Serach,
        // props: //这个props是我们在路由组建当中操作params参数和query参数的简化方法
        // props:true, //会默认的把传递过来的params参数，额外的映射为组件当中的属性去操作
        //props: { 'username': 'sunjun' }   //传递一个对象，传递的是额外你需要的静态数据,不需要就不用
        //使用函数 route参数为一个mini route对象，含有route对象中部分数据
        props: (route) => {
            return { keyword: route.params.keyword, keyword1: route.query.keyword1, 'username': 'sunjun' }
        }
    }, {
        path: '/',
        redirect: '/home'
    }],
});