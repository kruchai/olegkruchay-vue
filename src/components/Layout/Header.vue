<template>
  <header class="header">
    <!--  Cell 1  -->
    <div class="cell first">{{ status }}</div>

    <!--  Cell 2  -->
    <div class="cell second">
      <a href="/" class="logo">
        <span>o</span>
        <span>k</span>
      </a>
    </div>

    <!--  Cell 3  -->
    <div class="cell third">
      <a :href="uri">{{ title }}</a>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  props: {
    status: String,
    title: String,
    uri: String
  }
};
</script>
