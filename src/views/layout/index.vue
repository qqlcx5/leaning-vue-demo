<template>
  <div class="layout">
    <div class="sidebar">
      <NavMenu />
    </div>
    <div class="main">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import NavMenu from "./components/NavMenu";
export default {
  components: {
    NavMenu
  }
};
</script>
<style lang="scss" scoped>
.layout {
  display: flex;
  min-height: 100vh;
  max-height: 100%;
  .sidebar {
    width: 210px;
    overflow: hidden;
    background: $menuBg;
  }
  .main {
    flex: 1;
  }
}
</style>
