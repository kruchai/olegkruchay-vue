<template>
  <div class="animated-grid-container">
    <div v-for="line in 10" :key="line" class="line"></div>
  </div>
</template>

<script>
export default {
  name: 'AnimatedGrid',
}
</script>
