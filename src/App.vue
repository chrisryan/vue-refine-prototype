<template>
  <div id="app">
    <BreadBox :options="options" />
  </div>
</template>

<script>
import BreadBox from './components/BreadBox.vue'

export default {
  name: 'app',
  components: {
    BreadBox
  },
  data: function() {
    return {
      options: {
        animal: 'Dolphin',
        plant: 'Tullip',
        mineral: 'Salt'
      }
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
