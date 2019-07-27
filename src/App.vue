<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Row>
      <i-Col span="8">
        <draggable v-model="toDoArray" @start="drag=true" @end="drag=false">
          <div v-for="element in toDoArray" :key="element.id">{{element.name}}</div>
        </draggable>
      </i-Col>
      <i-Col span="8">
        <draggable v-model="inProgressArray" @start="drag=true" @end="drag=false">
          <div v-for="element in inProgressArray" :key="element.id">{{element.name}}</div>
        </draggable>
      </i-Col>
      <i-Col span="8">
        <draggable v-model="finishedArray" @start="drag=true" @end="drag=false">
          <div v-for="element in finishedArray" :key="element.id">{{element.name}}</div>
        </draggable>
      </i-Col>
    </Row>
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
    return {
      toDoArray: [{name: "1"},{name: "2"}],
      inProgressArray: [{name: "3"},{name: "4"}],
      finishedArray: [{name: "5"},{name: "6"}],
    };
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
