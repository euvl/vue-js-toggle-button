### Vue.js 2 toggle / switch button - simple, pretty, customizable.

[![npm version](https://badge.fury.io/js/vue-js-toggle-button.svg)](https://badge.fury.io/js/vue-js-toggle-button)

![Imgur](http://i.imgur.com/a2Hf7pm.png)

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
```vue
<toggle-button @change="..."/>
<toggle-button :value="false" :color="#82C7EB" :sync="true" :labels="true""/>
```
