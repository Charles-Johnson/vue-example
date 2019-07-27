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
      toDoArray: [
        {
          header: "Add text input to cards",
          body: "https://www.iviewui.com/components/input-en",
          id: 1
        },
        {
          header: "Include Add button",
          body: "https://www.iviewui.com/components/button-en",
          id: 2
        },
        {
          header: "Use ionicons",
          body: "https://www.iviewui.com/components/icon-en",
          id: 3
        },
        {
          header: "Unit testing",
          body: "https://vue-test-utils.vuejs.org/api",
          id: 4,
        }
      ],
      inProgressArray: [],
      finishedArray: [
        {
          header: "Set up 3 column layout",
          body: "https://www.iviewui.com/components/grid-en",
          id: 5
        },
        {
          header: "Add cards",
          body: "https://www.iviewui.com/components/card-en",
          id: 6
        },
        {
          header: "Add a header",
          body: "https://www.iviewui.com/components/layout-en",
          id: 7
        },
        {
          header: "Add draggable components",
          body: "https://github.com/SortableJS/Vue.Draggable",
          id: 8,
        },
        {
          header: "Set up development for Vue.js",
          body: "https://cli.vuejs.org",
          id: 9
        }
      ],
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
