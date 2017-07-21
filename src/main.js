import Vue from 'vue'
import router from './router'
import Iview from 'iview'

import App from './App'
import 'iview/dist/styles/iview.css'

Vue.config.devtools = true
Vue.config.productionTip = true
Vue.config.silent = false

Vue.use(Iview)

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: {App}
})
