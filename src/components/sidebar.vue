<template>
  <div class="component-sidebar">
    <ul class="sidebar-ul">
      <li class="sidebar-li" v-for="(item, index) in menus" :key="index">
        <router-link exact :to="item.path">{{ item.name }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import routes from "../router/routes";

export default {
  created() {
    this.menus = routes;
  }
};
</script>

<style>
.component-sidebar {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  border-right: 1px solid #eee;
}

.sidebar-ul {
  padding: 10px 0 0;
  margin: 0;
  padding-left: 20px;
  font-size: 14px;
}

.sidebar-li {
  list-style: none;
  height: 30px;
  line-height: 30px;
}

.sidebar-li a {
  text-decoration: none;
  display: inline-block;
  width: 100%;
  height: 100%;
  color: inherit;
  font-weight: bold;
}

.sidebar-li a:hover,
.sidebar-li a.router-link-active {
  color: #3eaf7c;
}
</style>
