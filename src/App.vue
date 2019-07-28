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
            <ColumnOfDraggables v-bind:array="'toDoArray'"></ColumnOfDraggables>
          </div>
          <div class="col">
            <h2 class="col-header">In Progress</h2>
            <Divider/>
            <ColumnOfDraggables v-bind:array="'inProgressArray'"></ColumnOfDraggables>
          </div>
          <div class="col">
            <h2 class="col-header">Done</h2>
            <Divider/>
            <ColumnOfDraggables v-bind:array="'finishedArray'"></ColumnOfDraggables>
          </div>
        </div>
      </Content>
    </Layout>
</template>

<script>
import ColumnOfDraggables from './components/ColumnOfDraggables';


export default {
  name: 'app',
  components: {
    ColumnOfDraggables,
  },
  computed: {
    toDoArray: function() {
      return this.$store.state.toDoArray
    },
    inProgressArray: function() {
      return this.$store.state.inProgressArray
    },
    finishedArray: function() {
      return this.$store.state.finishedArray
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
