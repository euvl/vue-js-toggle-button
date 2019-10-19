<template>
  <div id="app">
    <h1></h1>
    <h2>What a nice toggle button!</h2>
    <div class="padding">
      <toggle-button @change="toggled = $event.value"/> Toggle me!
      <pre>State: {{toggled}}</pre>
    </div>
    <div class="padding">
      <h2>Can have custom labels, colors and width</h2>
      <div>
        <toggle-button :labels="true" color="#82C7EB"/>

        <toggle-button :value="true"
          name="phone"
          :labels="{checked: 'Android', unchecked: 'iPhone'}"
          :color="{checked: '#7DCE94', unchecked: '#82C7EB'}"
          :width="80"/>

        <toggle-button
          :width="120"
          :value="true"
          color="#BB99CD"
          :labels="{checked: 'Only left label!', unchecked: ''}"/>

        <toggle-button
          :value="false"
          :width="120"
          color="#BB99CD"
          :labels="{checked: '', unchecked: 'Only right label!'}"/>

        <toggle-button
          :value="false"
          :width="80"
          :labels="{unchecked: 'Disabled'}"
          :disabled="true"/>

        <toggle-button
          :value="false"
          :width="140"
          :color="{disabled: '#FF6699'}"
          :labels="{unchecked: 'Custom disabled color'}"
          :disabled="true"/>

        <toggle-button :value="true"
          :labels="{checked: 'Button', unchecked: 'Color'}"
          :color="{checked: '#7DCE94', unchecked: '#82C7EB'}"
          :width="80"
          :switchColor="{checked: 'linear-gradient(red, yellow)', unchecked: '#F2C00B'}"/>

        <toggle-button :labels="true">
          <template slot="checked">
            <fa icon='check'></fa>
          </template>
          <template slot="unchecked">
            <fa icon='times'></fa>
          </template>
        </toggle-button>

        <toggle-button :width="120" :labels="{checked: '', unchecked: 'FA Icon Support'}">
          <template slot="checked">
            <fa icon='check'></fa>
          </template>
        </toggle-button>

        <toggle-button
          :value="true"
          :width="80"
          :labels="{checked: 'Custom', unchecked: 'Margin'}"
          :margin="7"/>
      </div>
      <div style="padding-top: 20px;">
        <toggle-button
          id="changed-font"
          v-model="hodor"
          :width="220"
          :height="40"
          :speed="480"
          :color="{checked: '#BE3D62', unchecked: '#FF877B'}"
          :labels="{checked: 'HODOOOR!!!', unchecked: 'Hold the door?'}"/>
          {{hodor}}
      </div>
    </div>
    <div class="padding">
      <h2>And be programatically set/reset</h2>
      <div>
        <span v-for="(item, i) in items" :key="i" style="padding: 5px">
          <toggle-button
            :value="item.value"
            :color="item.color"
            :sync="true"
            :labels="true"
            :key="i"
            @change="updateItemValue(i)"/>
        </span>
      </div>
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
        { color: '#E8D2AE', value: false },
        { color: '#CB8589', value: false },
        { color: '#796465', value: false },
        { color: '#79BD8F', value: false },
        { color: '#00A388', value: false }
      ],
      hodor: false
    }
  },
  mounted () {
    var itemIndex = 0;

    setInterval(() => {
      this.updateItemValue(itemIndex)

      itemIndex = (itemIndex + 1) % this.items.length
    }, 600)
  },
  methods: {
    updateItemValue(index) {
      this.items[index].value = !this.items[index].value
    }
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

.padding {
  padding: 10px;
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

.vue-js-switch {
  margin: 2px;
}

.vue-js-switch#changed-font {
  font-size: 16px !important;
}
</style>
