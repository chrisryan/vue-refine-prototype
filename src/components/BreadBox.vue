<template lang="html">
  <div class="breadbox">
    <div class="option" v-for="(param, key) in options" :key="key" @click="$emit('delete_key', key)">
      <span class="type">{{key}}</span>
      <span class="value">{{param}}</span>
      <span class="delete">X</span>

    </div>
  </div>
</template>

<script>
export default {
  name: 'BreadBox',
  props: {
    options: Object
  },
}
</script>

<style lang="css" scoped>
.breadbox {
  width: 100%;
  border: solid black 0.1em;
  overflow: hidden;
}
.option {
  float: left;
  margin: 0.5em;
  border: solid black 1px;
  padding: 0.3em;
  padding-bottom: 0.1em;
  min-width: 5em;
}
.type {
  font-size: 50%;
  text-align: left;
  color: gray;
  float: left;
}
.value {
  text-align: left;
  float: left;
  clear: both;
}
.delete {
  color: red;
  margin: auto;
  float: right;
  transform: translate(-7%, -25%);
}
</style>
