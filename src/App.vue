<template>
    <Layout id="app" class="layout">
      <Header>
        <h1 id="header">To-do List for Vue.js To-do List</h1>
      </Header>
      <Content>
        <Row>
          <i-Col span="8">
            <p>To Do</p>
            <Divider/>
            <draggable v-model="toDoArray" group="tasks" @start="drag=true" @end="drag=false">
              <div v-for="element in toDoArray" :key="element.id">{{element.name}}</div>
            </draggable>
          </i-Col>
          <i-Col span="8">
            <p>In Progress</p>
            <Divider/>
            <draggable v-model="inProgressArray" group="tasks" @start="drag=true" @end="drag=false">
              <div v-for="element in inProgressArray" :key="element.id">{{element.name}}</div>
            </draggable>
          </i-Col>
          <i-Col span="8">
            <p>Done</p>
            <Divider/>
            <draggable v-model="finishedArray" group="tasks" @start="drag=true" @end="drag=false">
              <div v-for="element in finishedArray" :key="element.id">{{element.name}}</div>
            </draggable>
          </i-Col>
        </Row>
      </Content>
    </Layout>
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
}
#header {
  font-size: large;
  color: white;
}
</style>
