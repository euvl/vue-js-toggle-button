<template>
<label :class="className"
       :style="style">
  <input type="checkbox"
         class="v-switch-input"
         @change.stop="toggle">
  <span class="v-switch-core" :style="coreStyle"></span>
  <div v-if="labels">
    <span class="v-switch-label v-left" v-if="toggled">{{labelChecked}}</span>
    <span class="v-switch-label v-right" v-else>{{labelUnchecked}}</span>
  </div>
</label>
</template>

<script>
const DEF_CHECKED_COLOR = '#75C791'
const DEF_UNCHEKED_COLOR = '#bfcbd9'

const DEF_CHECKED_LABEL = 'on'
const DEF_UNCHECKED_LABEL = 'off'

const margin = 3
// 11/25 = -.44
// const DEFAULT_HEIGHT = 22
// const DEFAULT_WIDTH = 50

const contains = (object, title) => {
  return typeof object === 'object' && object.hasOwnProperty(title)
}

export default {
  name: 'ToggleButton',
  props: {
    value: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    sync: {
      type: Boolean,
      default: false
    },
    color: {
      type: [String, Object],
      validator (value) {
        return typeof value === 'object'
          ? (value.checked || value.unchecked)
          : typeof value === 'string'
      }
    },
    labels: {
      type: [Boolean, Object],
      default: false,
      validator (value) {
        return typeof value === 'object'
          ? (value.checked || value.unchecked)
          : typeof value === 'boolean'
      }
    },
    height: {
      type: Number,
      default: 22
    },
    width: {
      type: Number,
      default: 50
    }
  },
  computed: {
    className () {
      let { toggled, disabled } = this

      return [
        'vue-js-switch',
        { toggled, disabled }
      ]
    },

    style () {
      let { width, height } = this
      let distance = width - height + margin

      return {
        '--h': height + 'px',
        '--w': width + 'px',
        '--d': distance + 'px'
      }
    },

    colorChecked () {
      if (typeof this.color !== 'object') {
        return this.color || DEF_CHECKED_COLOR
      }

      return contains(this.color, 'checked')
        ? this.color.checked
        : DEF_CHECKED_COLOR
    },

    colorUnchecked () {
      return contains(this.color, 'unchecked')
        ? this.color.unchecked
        : DEF_UNCHEKED_COLOR
    },

    colorCurrent () {
      return this.toggled ? this.colorChecked : this.colorUnchecked
    },

    labelChecked () {
      return contains(this.labels, 'checked')
        ? this.labels.checked
        : DEF_CHECKED_LABEL
    },

    labelUnchecked () {
      return contains(this.labels, 'unchecked')
        ? this.labels.unchecked
        : DEF_UNCHECKED_LABEL
    },

    coreStyle () {
      return {
        'background-color': this.colorCurrent
      }
    }
  },
  watch: {
    value (value) {
      if (this.sync) {
        this.toggled = value
      }
    }
  },
  data () {
    return {
      toggled: this.value
    }
  },
  methods: {
    toggle (event) {
      this.toggled = !this.toggled
      this.$emit('change', { value: this.toggled, srcEvent: event })
    }
  }
}
</script>

<style lang="scss" scoped>
$height: 22px;
$margin: 3px;
// $core-size: $height - 2 * $margin;

.vue-js-switch {
  display: inline-block;
  position: relative;
  overflow: hidden;
  vertical-align: middle;
  user-select: none;

  font-size: 10px;

  cursor: pointer;

//  line-height: $height;
//  height: $height;

  .v-switch-input {
    display: none;
  }

  .v-switch-label {
    position: absolute;
    top: 0;
    font-weight: 600;
//    line-height: $height;
//    height: $height;
    color: white;

    &.v-left {
      left: 10px;
    }

    &.v-right {
      right: 10px;
    }
  }

  .v-switch-core {
    margin: 0;
    display: inline-block;
    position: relative;

    outline: 0;
//    border-radius: ceil($height / 2);
    box-sizing: border-box;
    background: #bfcbd9;
    transition: border-color .3s, background-color .3s;
    user-select: none;

//    width: 50px;
//    width: var(--toggle-width);
//    height: $height;

    &:before {
      display: block;
      position: absolute;
      overflow: hidden;

      top: 0;
      left: 0;

//      width: $core-size;
//      height: $core-size;

      z-index: 20;

      transform: translate($margin, $margin);
      transition: transform .3s;

      border-radius: 100%;
      background-color: #fff;
      content: '';
    }
  }

  &.toggled {
    .v-switch-core:before {
      transform: translate(30px, $margin);
      transform: translate(var(--d), $margin);
    }
  }

  &.disabled {
    pointer-events: none;
    cursor: not-allowed;
    opacity: 0.6;
  }
}

.vue-js-switch {
  line-height: var(--h);
  height: var(--h);

  .v-switch-label {
    line-height: var(--h);
    height: var(--h);
  }

  .v-switch-core {
    border-radius: 999px;
    width: 50px;
    width: var(--w);
    height: var(--h);

    &:before {
      width: calc(var(--h) - 6px);
      height: calc(var(--h) - 6px);
    }
  }
}
</style>
