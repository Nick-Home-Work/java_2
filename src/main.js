import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './vuex/store'
import './assets/styles/style.css'
import 'material-design-icons-iconfont'

//createApp(App).mount('#app')

Vue.config.productionTip = false

new Vue({
	render: h => h(App),
	store,
    router
}).$mount('#app')
