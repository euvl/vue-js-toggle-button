import ToggleButton from './Button.vue'

let installed = false

export default {
  install(Vue) {
    if (installed) {
      return
    }
    
    Vue.component('ToggleButton', ToggleButton)
    installed = true
  }
}

export {
  ToggleButton
}
