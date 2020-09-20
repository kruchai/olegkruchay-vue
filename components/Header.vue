<template>
  <header class="v-header">
    <!--  Cell 1  -->
    <div class="v-cell first">{{ header.status }}</div>

    <!--  Cell 2  -->
    <div class="v-cell second">
      <NuxtLink to="/" class="logo">
        <span>o</span>
        <span>k</span>
      </NuxtLink>
    </div>

    <!--  Cell 3  -->
    <div class="v-cell third">
      <NuxtLink class="about-me" to="/about">
        <span class="v-hide mobile">{{ header.aboutLink.aboutLinkTitle }}</span>
        <span class="v-show mobile">i</span>
      </NuxtLink>
    </div>
  </header>
</template>

<script>
import { header } from '~/static/data/data.json'

export default {
  name: 'Header',
  data() {
    return {
      header,
    }
  },
}
</script>
