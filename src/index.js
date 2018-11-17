import ToggleButton from './Button.vue'

const plugin = {
  install(Vue) {
  	Vue.component('ToggleButton', ToggleButton)
  }
}

export default plugin
export {
  ToggleButton
}
