import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import App from './App.vue';
import Toasted from 'vue-toasted';
import VeeValidate from 'vee-validate';
import VueLodash from 'vue-lodash'
import router from './router';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee, faPencilAlt, faSave } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add([faCoffee, faPencilAlt, faSave])
const options = { name: 'lodash' } // customize the way you want to call it

Vue.use(VueLodash, options) // options is optional
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.use(Toasted, {
  position: 'bottom-right',
  duration: 2000,
  theme: 'bubble',
  iconPack: 'fontawesome'
});
Vue.use(VeeValidate);
Vue.config.productionTip = false
Vue.use(BootstrapVue);

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
