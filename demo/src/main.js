import Vue from 'vue'
import App from './App.vue'
import ToggleButton from 'plugin'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add([faCheck, faTimes])
Vue.component('fa', FontAwesomeIcon)

Vue.use(ToggleButton)

new Vue({
  el: '#app',
  render: h => h(App)
})
