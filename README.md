[![npm version](https://badge.fury.io/js/vue-js-toggle-button.svg)](https://badge.fury.io/js/vue-js-toggle-button)
[![npm](https://img.shields.io/npm/dm/vue-js-toggle-button.svg)](https://www.npmjs.com/package/vue-js-toggle-button)
<br/>
<a align="right" href="https://www.buymeacoffee.com/yev" target="_blank">
  <img width="200" alt="screen shot 2018-03-01 at 10 33 39" src="https://user-images.githubusercontent.com/1577802/36840220-21beb89c-1d3c-11e8-98a4-45fc334842cf.png">
</a>

### Vue.js 2 toggle / switch button - simple, pretty, customizable.

![Imgur](http://i.imgur.com/a2Hf7pm.png)

Feel free to ask questions or propose features in the "Issues" section

[Live demo here](http://vue-js-toggle-button.yev.io/)

Install:
```bash
npm install vue-js-toggle-button --save
```
If using `vue-cli`, add the SASS loader:
```bash
npm install sass-loader node-sass --save-dev
```

Import Plugin:
```javascript
import ToggleButton from 'vue-js-toggle-button'
Vue.use(ToggleButton)
```
Use:
```xml
<toggle-button @change="onChangeEventHandler"/>

<toggle-button v-model="myDataVariable"/>

<toggle-button :value="false"
               color="#82C7EB"
               :sync="true"
               :labels="true"/>

<toggle-button :value="true"
               :labels="{checked: 'Foo', unchecked: 'Bar'}"/>
```

If you prefer not to use the plugin you can also import the component directly:
```javascript
import ToggleButton from 'vue-js-toggle-button/src/Button'
```

### Properties

| Name      | Type              | Default     | Description                        |
| ---       | ---               | ---         | ---                                |
| value     | Boolean           | false       | Initial state of the toggle button |
| sync      | Boolean           | false       | If set to `true`, will be watching changes in `value` property and overwrite the current state of the button whenever `value` prop changes |
| speed     | Number            | 300        | Transition time for the animation   |
| disabled  | Boolean           | false      | Button does not react on mouse events |
| color     | [String, Object]  | `#75C791`  | If `String` - color of the button when checked <br>If `Object` - colors for the button when checked/unchecked or disabled<br>Example: `{checked: '#00FF00', unchecked: '#FF0000, disabled: '#CCCCCC'}`  |
| cssColors | Boolean           | false      | If `true` - deactivates the setting of colors through inline styles in favor of using CSS styling |
| labels    | [Boolean, Object] | false      | If `Boolean` - shows/hides default labels ("on" and "off") <br>If `Object` - sets custom labels for both states. <br>Example: `{checked: 'Foo', unchecked: 'Bar'}`   |
| switchColor     | [String, Object]            | `#BFCBD9`         | If `String` - color or background property of the switch when checked <br>If `Object` - colors or background property for the switch when checked/uncheked <br>Example: `{checked: '#25EF02', unchecked: 'linear-gradient(red, yellow)'}`   |
| width     | Number            | 50         | Width of the button, default is 50 |
| height    | Number            | 22         | Height of the button, default is 22 |
| name      | String            | undefined  | Name to attach to the generated input field |

`labels` object accepts HTML text (for example, you can use FontAwesome for checked/unchecked states).

### Events

| Name   | Description              |
| ---    | ---                      |
| change | Triggered whenever state of the component changes. <br>Contains: <br>`value` - state of the object <br>`srcEvent` - source click event |

### SSR

Include plugin in your `nuxt.config.js` file:
```javascript
module.exports = {
  plugins: ['~plugins/vue-js-toggle-button']
}
```
And your `plugins/vue-js-toggle-button.js` will look like:

```javascript
import Vue from 'vue'
import Button from 'vue-js-toggle-button/dist/ssr.index'

Vue.use(Button)
```

### Browser compatibility

* Chrome: 40+
* Firefox: 25+
* Safari: 10+
* IE: 11+

### Font size
To change font size please use basic css:
```css
.vue-js-switch#changed-font {
  font-size: 16px;
}
```
```vue
<toggle-button id="changed-font"/>
```
