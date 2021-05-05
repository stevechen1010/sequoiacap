import Vue from 'vue'
import vuescroll from 'vue-scroll'
import VueAwesomeSwiper from 'vue-awesome-swiper'

// UI庫
import BootstrapVue from 'bootstrap-vue'

import App from './App.vue'
// 初始化css
import 'normalize.css'
// 路由器
import router from './router'
// vuex store
import store from './store'
import './registerServiceWorker'

// 無線滾動
import infiniteScroll from 'vue-infinite-scroll'

// import FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEllipsisH, faAlignJustify, faAngleDoubleDown, faChevronCircleDown, faChevronDown, faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// BootstrapVue UI庫 的樣式
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// require VueAwesomeSwiper styles
import 'swiper/dist/css/swiper.css'

Vue.use(VueAwesomeSwiper)
Vue.use(vuescroll, { debounce: 600 })
Vue.use(BootstrapVue)
Vue.use(infiniteScroll)
library.add(faEllipsisH, faAlignJustify, faAngleDoubleDown, faChevronCircleDown, faChevronDown, faTimesCircle)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
