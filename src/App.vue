<template>
  <div id="app">
    <sidebar class="sidebar"></sidebar>
    <main>
      <router-view/>
    </main>
  </div>
</template>

<script>
import Sidebar from "./components/sidebar";

export default {
  name: "App",
  components: {Sidebar}
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

html,
body {
  height: 100%;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  position: relative;
  padding-left: 150px;
  min-height: 100%;
}

#app .sidebar {
  width: 150px;
}

#app main {
  padding: 10px;
}

button {
  display: inline-block;
  box-sizing: border-box;
  padding: 6px 10px;
  margin: 5px;
  color: #fff;
  font-size: 12px;
  font-weight: 500;
  line-height: 1;
  text-align: center;
  white-space: nowrap;
  background-color: #409eff;
  border: 1px solid #dcdfe6;
  border-radius: 3px;
  outline: none;
  cursor: pointer;
}
</style>
