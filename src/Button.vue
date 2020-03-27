<template>
<label :class="className">
  <input
    type="checkbox"
    class="v-switch-input"
    :name="name"
    :checked="value"
    :disabled="disabled"
    @change.stop="toggle"
  >
  <div
    class="v-switch-core"
    :style="coreStyle"
  >
    <div
      class="v-switch-button"
      :style="buttonStyle"
    />
  </div>
  <template v-if="labels">
    <toggle-button-label
      v-if="toggled"
      :labels="labels"
      :disabled="disabled"
      :height="height"
      :font-size="fontSize"
      :color="colorLabel"
      toggled
      checked
    />
    <toggle-button-label
      v-else
      :labels="labels"
      :disabled="disabled"
      :height="height"
      :font-size="fontSize"
      :color="colorLabel"
      :checked="false"
      :toggled="false"
    />
  </template>
</label>
</template>

<script>
import { isString, isObject, has, get, translate, px } from './utils'
import generalMixin from './general-mixin'
import ToggleButtonLabel from './ButtonLabel.vue'

const DEFAULT_SWITCH_COLOR = '#fff'

export default {
  name: 'ToggleButton',
  mixins: [generalMixin],
  components: {
    ToggleButtonLabel
  },
  props: {
    value: {
      type: Boolean,
      default: false
    },
    name: {
      type: String
    },
    tag: {
      type: String,
    },
    sync: {
      type: Boolean,
      default: false
    },
    speed: {
      type: Number,
      default: 300
    },
    switchColor: {
      type: [String, Object],
      validator (value) {
        return isString(value)
          || has(value, 'checked')
          || has(value, 'unchecked')
      }
    },
    colorLabel: {
      type: [String, Object],
      validator (value) {
        return isString(value)
          || has(value, 'checked')
          || has(value, 'unchecked')
          || has(value, 'disabled')
      }
    },
    cssColors: {
      type: Boolean,
      default: false
    },
    width: {
      type: Number,
      default: 50
    },
    margin: {
      type: Number,
      default: 3
    }
  },
  computed: {
    className () {
      let { toggled, disabled } = this

      return ['vue-js-switch', {
        toggled,
        disabled
      }]
    },

    coreStyle () {
      return {
        width: px(this.width),
        height: px(this.height),
        backgroundColor: this.cssColors
          ? null
          : (this.disabled ? this.colorDisabled : this.colorCurrent),
        borderRadius: px(Math.round(this.height / 2))
      }
    },

    buttonRadius () {
      return this.height - this.margin * 2
    },

    distance () {
      return px(this.width - this.height + this.margin)
    },

    buttonStyle () {
      const transition = `transform ${this.speed}ms`
      const margin = px(this.margin)

      const transform = this.toggled
        ? translate(this.distance, margin)
        : translate(margin, margin)

      const background = this.switchColor
        ? this.switchColorCurrent
        : null

      return {
        width: px(this.buttonRadius),
        height: px(this.buttonRadius),
        transition,
        transform,
        background
      }
    },

    switchColorChecked () {
      return get(this.switchColor, 'checked', DEFAULT_SWITCH_COLOR)
    },

    switchColorUnchecked () {
      return get(this.switchColor, 'unchecked', DEFAULT_SWITCH_COLOR)
    },

    switchColorCurrent () {
      let { switchColor } = this

      if (!isObject(this.switchColor)) {
        return this.switchColor || DEFAULT_SWITCH_COLOR
      }

      return this.toggled
        ? this.switchColorChecked
        : this.switchColorUnchecked
    }

  },
  watch: {
    value (value) {
      if (this.sync) {
        this.toggled = !!value
      }
    }
  },
  data () {
    return {
      toggled: !!this.value,
      defaultColorChecked: '#75c791',
      defaultColorUnchecked: '#bfcbd9'
    }
  },
  methods: {
    toggle(event) {
      const toggled = !this.toggled

      if (!this.sync) {
        this.toggled = toggled
      }

      this.$emit('input', toggled)
      this.$emit('change', {
        value: toggled,
        tag: this.tag,
        srcEvent: event
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.vue-js-switch {
  display: inline-block;
  position: relative;
  vertical-align: middle;
  user-select: none;
  font-size: 10px;
  cursor: pointer;

  .v-switch-input {
    opacity: 0;
    position: absolute;
    width: 1px;
    height: 1px;
  }

  .v-switch-core {
    display: block;
    position: relative;
    box-sizing: border-box;

    outline: 0;
    margin: 0;

    transition: border-color .3s, background-color .3s;
    user-select: none;

    .v-switch-button {
      display: block;
      position: absolute;
      overflow: hidden;

      top: 0;
      left: 0;

      border-radius: 100%;
      background-color: #fff;
      z-index: 2;
    }
  }

  &.disabled {
    pointer-events: none;
    opacity: 0.6;
  }
}
</style>
