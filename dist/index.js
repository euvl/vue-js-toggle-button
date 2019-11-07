(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["vue-js-toggle-button"] = factory();
	else
		root["vue-js-toggle-button"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(6)

var Component = __webpack_require__(4)(
  /* script */
  __webpack_require__(1),
  /* template */
  __webpack_require__(5),
  /* scopeId */
  "data-v-25adc6c0",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(10);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



const DEFAULT_COLOR_CHECKED = '#75c791';
const DEFAULT_COLOR_UNCHECKED = '#bfcbd9';
const DEFAULT_LABEL_CHECKED = 'on';
const DEFAULT_LABEL_UNCHECKED = 'off';
const DEFAULT_SWITCH_COLOR = '#fff';

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'ToggleButton',
  props: {
    value: {
      type: Boolean,
      default: false
    },
    name: {
      type: String
    },
    disabled: {
      type: Boolean,
      default: false
    },
    tag: {
      type: String
    },
    sync: {
      type: Boolean,
      default: false
    },
    speed: {
      type: Number,
      default: 300
    },
    color: {
      type: [String, Object],
      validator(value) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* isString */])(value) || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["b" /* has */])(value, 'checked') || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["b" /* has */])(value, 'unchecked') || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["b" /* has */])(value, 'disabled');
      }
    },
    switchColor: {
      type: [String, Object],
      validator(value) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* isString */])(value) || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["b" /* has */])(value, 'checked') || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["b" /* has */])(value, 'unchecked');
      }
    },
    cssColors: {
      type: Boolean,
      default: false
    },
    labels: {
      type: [Boolean, Object],
      default: false,
      validator(value) {
        return typeof value === 'object' ? value.checked || value.unchecked : typeof value === 'boolean';
      }
    },
    height: {
      type: Number,
      default: 22
    },
    width: {
      type: Number,
      default: 50
    },
    margin: {
      type: Number,
      default: 3
    },
    fontSize: {
      type: Number
    }
  },
  computed: {
    className() {
      let { toggled, disabled } = this;

      return ['vue-js-switch', {
        toggled,
        disabled
      }];
    },

    coreStyle() {
      return {
        width: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["c" /* px */])(this.width),
        height: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["c" /* px */])(this.height),
        backgroundColor: this.cssColors ? null : this.disabled ? this.colorDisabled : this.colorCurrent,
        borderRadius: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["c" /* px */])(Math.round(this.height / 2))
      };
    },

    buttonRadius() {
      return this.height - this.margin * 2;
    },

    distance() {
      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["c" /* px */])(this.width - this.height + this.margin);
    },

    buttonStyle() {
      const transition = `transform ${this.speed}ms`;
      const margin = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["c" /* px */])(this.margin);

      const transform = this.toggled ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["d" /* translate */])(this.distance, margin) : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["d" /* translate */])(margin, margin);

      const background = this.switchColor ? this.switchColorCurrent : null;

      return {
        width: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["c" /* px */])(this.buttonRadius),
        height: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["c" /* px */])(this.buttonRadius),
        transition,
        transform,
        background
      };
    },

    labelStyle() {
      return {
        lineHeight: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["c" /* px */])(this.height),
        fontSize: this.fontSize ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["c" /* px */])(this.fontSize) : null
      };
    },

    colorChecked() {
      let { color } = this;

      if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["e" /* isObject */])(color)) {
        return color || DEFAULT_COLOR_CHECKED;
      }

      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["f" /* get */])(color, 'checked', DEFAULT_COLOR_CHECKED);
    },

    colorUnchecked() {
      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["f" /* get */])(this.color, 'unchecked', DEFAULT_COLOR_UNCHECKED);
    },

    colorDisabled() {
      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["f" /* get */])(this.color, 'disabled', this.colorCurrent);
    },

    colorCurrent() {
      return this.toggled ? this.colorChecked : this.colorUnchecked;
    },

    labelChecked() {
      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["f" /* get */])(this.labels, 'checked', DEFAULT_LABEL_CHECKED);
    },

    labelUnchecked() {
      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["f" /* get */])(this.labels, 'unchecked', DEFAULT_LABEL_UNCHECKED);
    },

    switchColorChecked() {
      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["f" /* get */])(this.switchColor, 'checked', DEFAULT_SWITCH_COLOR);
    },

    switchColorUnchecked() {
      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["f" /* get */])(this.switchColor, 'unchecked', DEFAULT_SWITCH_COLOR);
    },

    switchColorCurrent() {
      let { switchColor } = this;

      if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["e" /* isObject */])(this.switchColor)) {
        return this.switchColor || DEFAULT_SWITCH_COLOR;
      }

      return this.toggled ? this.switchColorChecked : this.switchColorUnchecked;
    }

  },
  watch: {
    value(value) {
      if (this.sync) {
        this.toggled = !!value;
      }
    }
  },
  data() {
    return {
      toggled: !!this.value
    };
  },
  methods: {
    toggle(event) {
      const toggled = !this.toggled;

      if (!this.sync) {
        this.toggled = toggled;
      }

      this.$emit('input', toggled);
      this.$emit('change', {
        value: toggled,
        tag: this.tag,
        srcEvent: event
      });
    }
  }
});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, ".vue-js-switch[data-v-25adc6c0]{display:inline-block;position:relative;vertical-align:middle;user-select:none;font-size:10px;cursor:pointer}.vue-js-switch .v-switch-input[data-v-25adc6c0]{opacity:0;position:absolute;width:1px;height:1px}.vue-js-switch .v-switch-label[data-v-25adc6c0]{position:absolute;top:0;font-weight:600;color:#fff;z-index:1}.vue-js-switch .v-switch-label.v-left[data-v-25adc6c0]{left:10px}.vue-js-switch .v-switch-label.v-right[data-v-25adc6c0]{right:10px}.vue-js-switch .v-switch-core[data-v-25adc6c0]{display:block;position:relative;box-sizing:border-box;outline:0;margin:0;transition:border-color .3s,background-color .3s;user-select:none}.vue-js-switch .v-switch-core .v-switch-button[data-v-25adc6c0]{display:block;position:absolute;overflow:hidden;top:0;left:0;border-radius:100%;background-color:#fff;z-index:2}.vue-js-switch.disabled[data-v-25adc6c0]{pointer-events:none;opacity:.6}", ""]);

// exports


/***/ }),
/* 3 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ }),
/* 4 */
/***/ (function(module, exports) {

// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  scopeId,
  cssModules
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  // inject cssModules
  if (cssModules) {
    var computed = Object.create(options.computed || null)
    Object.keys(cssModules).forEach(function (key) {
      var module = cssModules[key]
      computed[key] = function () { return module }
    })
    options.computed = computed
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('label', {
    class: _vm.className
  }, [_c('input', {
    staticClass: "v-switch-input",
    attrs: {
      "type": "checkbox",
      "name": _vm.name,
      "disabled": _vm.disabled
    },
    domProps: {
      "checked": _vm.value
    },
    on: {
      "change": function($event) {
        $event.stopPropagation();
        return _vm.toggle($event)
      }
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "v-switch-core",
    style: (_vm.coreStyle)
  }, [_c('div', {
    staticClass: "v-switch-button",
    style: (_vm.buttonStyle)
  })]), _vm._v(" "), (_vm.labels) ? [(_vm.toggled) ? _c('span', {
    staticClass: "v-switch-label v-left",
    style: (_vm.labelStyle)
  }, [_vm._t("checked", [
    [_vm._v(_vm._s(_vm.labelChecked))]
  ])], 2) : _c('span', {
    staticClass: "v-switch-label v-right",
    style: (_vm.labelStyle)
  }, [_vm._t("unchecked", [
    [_vm._v(_vm._s(_vm.labelUnchecked))]
  ])], 2)] : _vm._e()], 2)
},staticRenderFns: []}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(2);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(7)("2283861f", content, true);

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

var listToStyles = __webpack_require__(8)

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction) {
  isProduction = _isProduction

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[data-vue-ssr-id~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),
/* 8 */
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Button_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Button_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Button_vue__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "ToggleButton", function() { return __WEBPACK_IMPORTED_MODULE_0__Button_vue___default.a; });


let installed = false

/* harmony default export */ __webpack_exports__["default"] = ({
  install(Vue) {
    if (installed) {
      return
    }
    
    Vue.component('ToggleButton', __WEBPACK_IMPORTED_MODULE_0__Button_vue___default.a)
    installed = true
  }
});




/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const isString = (value) => {
  return typeof value === 'string'
}
/* harmony export (immutable) */ __webpack_exports__["a"] = isString;


const isBoolean = (value) => {
  return typeof value === 'boolean'
}
/* unused harmony export isBoolean */


const isObject = (value) => {
  return typeof value === 'object'
}
/* harmony export (immutable) */ __webpack_exports__["e"] = isObject;


const has = (object, key) => {
  return isObject(object) && object.hasOwnProperty(key)
}
/* harmony export (immutable) */ __webpack_exports__["b"] = has;


const get = (object, key, defaultValue) => {
  return has(object, key) ? object[key] : defaultValue
}
/* harmony export (immutable) */ __webpack_exports__["f"] = get;


const px = value => {
  return `${value}px`
}
/* harmony export (immutable) */ __webpack_exports__["c"] = px;


const translate = (x, y) => {
  return `translate(${x}, ${y})`
}
/* harmony export (immutable) */ __webpack_exports__["d"] = translate;


/***/ })
/******/ ]);
});
//# sourceMappingURL=index.js.map