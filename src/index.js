import Vue from 'vue'
import Button from './Button.vue'

const plugin = {
  install(Vue, options) {
  	Vue.component('ToggleButton', Button)
  }
}

export default plugin
