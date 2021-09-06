import Vue from 'vue'

// import App from './App.vue'
import App from '@/App' //@ 是一个别名 代表src路径

import router from '@/router'
import store from '@/store' //只是简写
// import { default as store } from '@/store' //全写

import TypeNav from '@/components/TypeNav'

import * as API from '@/api' //直接获取接口请求函数文件暴露出来的对象

// import '@/api'

//第二种测试接口请求函数方式
// import { reqCategoryList } from '@/api'
// reqCategoryList()


Vue.component('TypeNav', TypeNav);

Vue.config.productionTip = false //关闭生产版本提示

new Vue({
    beforeCreate() {
        Vue.prototype.$bus = this //安装总线  代表任意组件内部都可以通过this.$bus访问到vm实例（总线）
        Vue.prototype.$API = API
    },
    router,
    store,
    render: h => h(App),
}).$mount('#app')