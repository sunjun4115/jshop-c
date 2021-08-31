import Vue from 'vue'
// import App from './App.vue'
import App from '@/App' //@ 是一个别名 代表src路径

import router from '@/router'

import TypeNav from '@/components/TypeNav'

Vue.component('TypeNav', TypeNav);

Vue.config.productionTip = false //关闭生产版本提示

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')