<template>
  <div id="app">
    <AnimatedGrid />
    <Home />
  </div>
</template>

<script>
import Home from "./components/Home.vue";
import AnimatedGrid from "./components/Layout/AnimatedGrid.vue";

export default {
  name: "App",
  components: {
    AnimatedGrid,
    Home
  }
};
</script>

<style lang="scss">
@import "./styles/styles";
</style>
