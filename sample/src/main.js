// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
const RxVuex = require('rx-vuex')
Vue.config.productionTip = false
Vue.use(RxVuex)
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})