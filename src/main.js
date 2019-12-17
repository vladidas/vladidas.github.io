import Vue from 'vue'
import App from './components/layouts/App'
import store from "./store/store";

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  components: {App},
  template: '<App/>',
  store
});
