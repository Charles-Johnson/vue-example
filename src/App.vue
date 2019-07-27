<template>
    <Layout id="app" class="layout">
      <Header>
        <h1 id="header">To-do List for Vue.js To-do List</h1>
      </Header>
      <Content>
        <Row>
          <i-Col span="8">
            <h2>To Do</h2>
            <Divider/>
            <draggable v-model="toDoArray" group="tasks" @start="drag=true" @end="drag=false">
              <div v-for="element in toDoArray" :key="element.id">
                <Card>
                  <h3>{{element.header}}</h3>
                  <p>{{element.body}}</p>
                </Card>
              </div>
            </draggable>
          </i-Col>
          <i-Col span="8">
            <h2>In Progress</h2>
            <Divider/>
            <draggable v-model="inProgressArray" group="tasks" @start="drag=true" @end="drag=false">
              <div v-for="element in inProgressArray" :key="element.id">
                <Card>
                  <h3>{{element.header}}</h3>
                  <p>{{element.body}}</p>
                </Card>
              </div>
            </draggable>
          </i-Col>
          <i-Col span="8">
            <h2>Done</h2>
            <Divider/>
            <draggable v-model="finishedArray" group="tasks" @start="drag=true" @end="drag=false">
              <div v-for="element in finishedArray" :key="element.id">
                <Card>
                  <h3>{{element.header}}</h3>
                  <p>{{element.body}}</p>
                </Card>
              </div>
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
      toDoArray: [{header: "", body: "1", id: 1},{header: "", body: "2", id: 2}],
      inProgressArray: [{header: "", body: "3", id: 3},{header: "", body: "4", id: 4}],
      finishedArray: [{header: "", body: "5", id: 5},{header: "", body: "6", id: 6}],
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
