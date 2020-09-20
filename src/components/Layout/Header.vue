<template>
  <header class="v-header">
    <!--  Cell 1  -->
    <div class="v-cell first">{{ status }}</div>

    <!--  Cell 2  -->
    <div class="v-cell second">
      <a href="/" class="logo">
        <span>o</span>
        <span>k</span>
      </a>
    </div>

    <!--  Cell 3  -->
    <div class="v-cell third">
      <a class="about-me" :href="aboutUri">
        <span class="v-hide mobile">{{ aboutTitle }}</span>
        <span class="v-show mobile">i</span>
      </a>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  props: {
    status: String,
    aboutTitle: String,
    aboutUri: String
  }
};
</script>
