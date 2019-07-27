<template>
    <Layout id="app" class="layout">
      <Header>
        <h1 id="header">To-do List for Vue.js To-do List</h1>
      </Header>
      <Content>
        <div class="row">
          <div class="col">
            <h2 class="col-header">To Do</h2>
            <Divider/>
            <draggable v-model="toDoArray" group="tasks" @start="drag=true" @end="drag=false" class="draggable">
              <div v-for="element in toDoArray" :key="element.id">
                <Card class="card">
                  <h3 class="el-header">{{element.header}}</h3>
                  <p class="el-body">{{element.body}}</p>
                </Card>
              </div>
            </draggable>
          </div>
          <div class="col">
            <h2 class="col-header">In Progress</h2>
            <Divider/>
            <draggable v-model="inProgressArray" group="tasks" @start="drag=true" @end="drag=false" class="draggable">
              <div v-for="element in inProgressArray" :key="element.id">
                <Card class="card">
                  <h3 class="el-header">{{element.header}}</h3>
                  <p class="el-body">{{element.body}}</p>
                </Card>
              </div>
            </draggable>
          </div>
          <div class="col">
            <h2 class="col-header">Done</h2>
            <Divider/>
            <draggable v-model="finishedArray" group="tasks" @start="drag=true" @end="drag=false" class="draggable">
              <div v-for="element in finishedArray" :key="element.id">
                <Card class="card">
                  <h3 class="el-header">{{element.header}}</h3>
                  <p class="el-body">{{element.body}}</p>
                </Card>
              </div>
            </draggable>
          </div>
        </div>
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
  color: white;
}
.card {
  margin: 5%;
}
.draggable {
  background-color:cadetblue;
  margin: 5%;
  padding-top: 1%;
  padding-bottom: 1%;
  height: 100%;
}
.col {
  flex: 1;
}
.row {
  height: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: row;
}
@media screen and (min-width: 601px) {
  #header {
    font-size: 24px;
  }
  .col-header {
    font-size: 18px;
  }
  .el-header {
    font-size: 16px;
  }
  .el-body {
    font-size: 13px;
  }
}
@media screen and (max-width: 600px) {
  #header {
    font-size: 4vw;
  }
  .col-header {
    font-size: 3vw;
  }
  .el-header {
    font-size: 2.5vw;
  }
  .el-body {
    font-size: 2vw;
  }
}
</style>
