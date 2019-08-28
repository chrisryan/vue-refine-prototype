<template>
  <div id="app">
    <BreadBox :options="allOptions" @delete_key="deleteOptionKey"/>
  </div>
</template>

<script>
import BreadBox from './components/BreadBox.vue'
import { mapGetters } from 'vuex'
import { mapActions } from 'vuex'

export default {
  name: 'app',
  components: {
    BreadBox
  },
  methods: mapActions(['deleteOptionKey']),
  computed: mapGetters(['allOptions']),
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
