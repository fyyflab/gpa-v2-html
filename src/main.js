/* 项目启动 */
import Vue from 'vue'
import App from './App'
import router from './router'
import 'muse-components/styles/base.less'
new Vue({
  router: router,
  render: h => h(App)
}).$mount('#app')
