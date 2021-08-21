import Vue from 'vue'
// import App from './App.vue'
import App from '@/App' //@ 是一个别名 代表src路径

Vue.config.productionTip = false //关闭生产版本提示

new Vue({
    render: h => h(App),
}).$mount('#app')