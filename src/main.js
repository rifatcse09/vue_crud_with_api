import Vue from 'vue'
import App from './App'
import router from './router'
import NProgress from 'nprogress';
import '../node_modules/nprogress/nprogress.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

Vue.config.productionTip = false

router.beforeResolve((to, from, next) => {
  if (to.name) {
      NProgress.start()
  }
  next()
});

router.afterEach(() => {
  NProgress.done()
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
