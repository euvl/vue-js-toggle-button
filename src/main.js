import Vue from 'vue'
import App from './App.vue'
import ToggleButton from './ToggleButton'

Vue.use(ToggleButton)

new Vue({
  el: '#app',
  render: h => h(App)
})
