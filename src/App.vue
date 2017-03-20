<template>
  <div id="app">
    <h1></h1>
    <h2>What a nice toggle button!</h2>
    <div style="padding: 10px;">
      <toggle-button @change="toggled = $event.value"/> Toggle me!
      <pre>State: {{toggled}}</pre>
    </div>
    <h2>Can have labels</h2>
    <div>
      <toggle-button :value="true" color="#82C7EB" :labels="true"/> Toggle me!
    </div>
    <h2>And be programatically set/reset</h2>
    <div>
      <span v-for="(item, i) in items" style="padding: 5px">
        <toggle-button
          :value="item.value"
          :color="item.color"
          :sync="true"
          :labels="true"
          :key="i"/>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      toggled: false,
      items: [
        {color: '#E8D2AE', value: false},
        {color: '#CB8589', value: false},
        {color: '#796465', value: false},
        {color: '#79BD8F', value: false},
        {color: '#00A388', value: false}
      ]
    }
  },
  mounted () {
    var i = 0;

    setInterval(() => {
      this.items[i].value = !this.items[i].value
      i = (i + 1) % this.items.length;
    }, 600)
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
