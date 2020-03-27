<template>
<span
  class="v-switch-label"
  :class="className"
  :style="labelStyle"
>
  <template>{{ labelText }}</template>
</span>
</template>

<script>
import { get, px } from './utils'
import generalMixin from './general-mixin'

const DEFAULT_LABEL_CHECKED = 'on'
const DEFAULT_LABEL_UNCHECKED = 'off'

export default {
  name: 'ToggleButtonLabel',
  mixins: [generalMixin],
  props: {
    checked: {
      type: Boolean,
      default: false
    },
    toggled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    labelStyle () {
      return {
        lineHeight: px(this.height),
        fontSize: this.fontSize ? px(this.fontSize) : null,
        color: (this.disabled ? this.colorDisabled : this.colorCurrent),
      }
    },

    className () {
      return this.checked ? 'v-left' : 'v-right'
    },

    labelText () {
      return this.checked ? this.labelChecked : this.labelUnchecked
    },

    labelChecked () {
      return get(this.labels, 'checked', DEFAULT_LABEL_CHECKED)
    },

    labelUnchecked () {
      return get(this.labels, 'unchecked', DEFAULT_LABEL_UNCHECKED)
    }
  },
  data () {
    return {
      defaultColorChecked: '#ffffff',
      defaultColorUnchecked: '#ffffff'
    }
  }
}
</script>

<style lang="scss" scoped>
.vue-js-switch {
  .v-switch-label {
    position: absolute;
    top: 0;
    font-weight: 600;
    color: white;
    z-index: 1;

    &.v-left {
      left: 10px;
    }

    &.v-right {
      right: 10px;
    }
  }
}
</style>
