[![npm version](https://badge.fury.io/js/vue-js-toggle-button.svg)](https://badge.fury.io/js/vue-js-toggle-button)

### Vue.js 2 toggle / switch button - simple, pretty, customizable.

![Imgur](http://i.imgur.com/a2Hf7pm.png)

Feel free to ask questions or propose features in the "Issues" section

[Live demo here](http://vue-js-toggle-button.yev.io/)

Install:
```bash
npm install vue-js-toggle-button --save
```
Import:
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

### Properties

| Name      | Type              | Default     | Description                        |
| ---       | ---               | ---         | ---                                |
| value     | Boolean           | false       | Initial state of the toggle button |
| sync      | Boolean           | false       | If set to `true`, will be watching changes in `value` property and overwrite the current state of the button whenever `value` prop. changes |
| disabled  | Boolean           | false      | Button does not react on mouse events |
| color     | [String, Object]  | `#75C791`  | if `String` - color of the button when checked <br>If `Object` - colors for the button when checked/uncheked <br>Example: `{checked: '#00FF00', unchecked: '#FF0000'}`  |
| labels    | [Boolean, Object] | false      | If `Boolean` - shows/hides default labels ("on" and "off") <br>If `Object` - sets custom labels for both states. <br>Example: `{checked: 'Foo', unchecked: 'Bar'}`   |
| width     | Number            | 50         | Width of the button, default is 50 |
| height    | Number            | 22         | Height of the button, default is 22 |

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

* Chrome: 48+
* Firefox: 28+
* Safari: 10.1+
* Edge: :pray: for Microsoft (works but width/height will be set to default in older versions)

### Font size
To change font size please use basic css:
```css
.vue-js-switch#changed-font {
  font-size: 16px;
}
```
```vue
<toggle-button id="changed-font/>
```
