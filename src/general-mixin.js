import { isString, isObject, has, get } from './utils'

export default {
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    color: {
      type: [String, Object],
      validator (value) {
        return isString(value)
          || has(value, 'checked')
          || has(value, 'unchecked')
          || has(value, 'disabled')
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
    fontSize: {
      type: Number
    }
  },
  computed: {
    colorChecked () {
      let { color } = this

      if (!isObject(color)) {
        return color || this.defaultColorChecked
      }

      return get(color, 'checked', this.defaultColorChecked)
    },

    colorUnchecked () {
      return get(this.color, 'unchecked', this.defaultColorUnchecked)
    },

    colorDisabled () {
      return get(this.color, 'disabled', this.colorCurrent)
    },

    colorCurrent () {
      return this.toggled
        ? this.colorChecked
        : this.colorUnchecked
    },
  }
}
