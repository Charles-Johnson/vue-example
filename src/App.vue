<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <draggable v-model="toDoArray" @start="drag=true" @end="drag=false">
      <div v-for="element in toDoArray" :key="element.id">{{element.name}}</div>
    </draggable>
  </div>
</template>

<script>
import draggable from 'vuedraggable'

export default {
  name: 'app',
  components: {
    draggable,
  },
  data() {
    return {toDoArray: [{name: "1"},{name: "2"}]};
  },
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
