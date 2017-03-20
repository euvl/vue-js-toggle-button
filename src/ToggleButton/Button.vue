<template>
<label class="vue-js-switch" :class="{toggled}">
  <input type="checkbox" class="v-switch-input" @change.stop="toggle">
  <span class="v-switch-core" :style="toggled && coreStyle"></span>
    <template v-if="labels">
      <span class="v-switch-label v-left" v-if="toggled">on</span>
      <span class="v-switch-label v-right" v-else>off</span>
    </template>
  </span>
</label>
</template>

<script>
export default {
  name: 'ToggleButton',
  props: {
    value: {
      type: Boolean,
      default: false
    },
    sync: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: '#85BD86'
    },
    labels: {
      type: Boolean,
      default: false
    },
    width: {
      type: Number,
      default: 50
    }
  },
  computed: {
    coreStyle () {
      return {
        'background-color': this.color,
        'border-color': this.color
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
      this.$emit('change', {value: this.toggled, srcEvent: event})
    }
  }
}
</script>
<style lang="scss" scoped>
.vue-js-switch {
  display: inline-block;
  position: relative;
  overflow: hidden;
  vertical-align: middle;
  user-select: none;

  cursor: pointer;

  line-height: 22px;
  height: 22px;

  .v-switch-input {
    display: none;
  }

  .v-switch-label {
    position: absolute;
    top: 0;
    font-size: 10px;
    font-weight: 600;
    line-height: 22px;
    height: 22px;
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
    border: 1px solid #bfcbd9;
    outline: 0;
    border-radius: 12px;
    box-sizing: border-box;
    background: #bfcbd9;
    transition: border-color .3s,background-color .3s;

    width: 46px;
    height: 22px;

    &:before {
      display: block;
      content: '';
      overflow: hidden;

      transform: translate(2px, 2px);

      top: 0;
      left: 0;
      position: absolute;
      border-radius: 100%;
      transition: transform .3s;
      width: 16px;
      height: 16px;
      z-index: 20;
      background-color: #fff;
    }
  }

  &.toggled {
    .v-switch-core {
      &:before {
        transform: translate(26px, 2px);
      }
    }
  }
}
</style>
