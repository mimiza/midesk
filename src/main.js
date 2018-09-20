import Gun from 'gun'
import 'gun/sea'
import 'gun/lib/webrtc'
import Vue from 'vue'
import 'semantic-ui-css/semantic.min.css'
import SuiVue from 'semantic-ui-vue'
import VueGun from 'vue-gun'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import Routes from './routes'

let gun = new Gun()
gun = gun.get('mimiza')

Vue.use(VueGun, {
    gun: gun
})
Vue.prototype.$user = gun.user() //add this.$user

Vue.use(SuiVue)
Vue.use(VueResource)
Vue.use(VueRouter)

const router = new VueRouter({
    routes: Routes,
    mode: 'history'
})

new Vue({
    el: '#app',
    render: h => h(App),
    router: router
})
